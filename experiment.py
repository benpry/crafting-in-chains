import json
import random
import re
import time
from dataclasses import asdict, replace

import psynet.experiment
from dallinger import db
from dallinger.experiment import experiment_route
from flask import request
from psynet.bot import Bot
from psynet.page import SuccessfulEndPage
from psynet.participant import Participant
from psynet.timeline import CodeBlock, Timeline, conditional, join
from psynet.trial.imitation_chain import ImitationChainNetwork
from psynet.utils import get_logger
from src.constants import Tool
from src.environment import CraftingGame
from src.functions import DESCRIPTOR_FUNCTIONS
from src.practice_environment import PracticeCraftingGame
from src.practice_environment import combo_fn as practice_combo_fn
from src.practice_environment import get_item_descriptor as practice_descriptor_fn
from src.utils import dict_to_dataclass
from src.world_model import MemoizedWorldModel

from .consent import consent
from .crafting_classes import (
    CraftingGameChainTrial,
    CraftingGameChainTrialMaker,
    CraftingGameIndividualNode,
    CraftingGameIndividualTrial,
    CraftingGameIndividualTrialMaker,
    MessagePassingNode,
    PracticeRounds,
)
from .custom_vars import CUSTOM_VARS
from .instructions import BasicInstructions, ChainInstructions, IndividualInstructions
from .survey import survey

logger = get_logger()


def get_item_description(item: dict, domain: str):
    if isinstance(item, Tool):
        return None

    if domain == "practice":
        descriptor_fn = practice_descriptor_fn
    else:
        descriptor_fn = DESCRIPTOR_FUNCTIONS[domain]

    return descriptor_fn(item)


def initialize_participant(participant):
    participant.var.practice_completed = False


def assign_to_condition(participant, experiment):
    """
    Assign the participant to either chain or immortal individual condition
    """
    participant.var.practice_completed = False

    # get the number of free chains
    chains = ImitationChainNetwork.query.filter_by(full=False)
    n_free_chains = len([chain for chain in chains if chain.head.is_free])

    # if there are no free chains, assign to the individual condition
    if n_free_chains == 0:
        participant.var.condition = "individual"
        return

    # get the number of immortal individuals we still need
    immortal_individuals_completed_or_active = (
        CraftingGameIndividualTrial.query.filter_by(failed=False).count()
    )
    immortal_individuals_needed = max(
        experiment.n_immortal_individuals - immortal_individuals_completed_or_active, 0
    )

    chain_participants_completed_or_active = (
        CraftingGameChainTrial.query.filter_by(failed=False).count() // 4
    )

    chain_participants_needed = max(
        experiment.chain_length * experiment.n_chains // 4
        - chain_participants_completed_or_active,
        0,
    )

    # assign to conditions proportional to probability
    total_needed = max(chain_participants_needed + immortal_individuals_needed, 1)
    p_chain = chain_participants_needed / total_needed
    print(f"number of immortal individuals needed: {immortal_individuals_needed}")
    print(f"number of chain participants needed: {chain_participants_needed}")
    print(f"p_chain: {p_chain}")
    p_individual = 1 - p_chain
    assignment = random.choices(
        ["chain", "individual"], weights=[p_chain, p_individual]
    )
    participant.var.condition = assignment[0]


DOMAINS = ["cooking", "decorations", "animals", "potions"]
CHAINS_PER_DOMAIN = 2

chain_starting_nodes = []
individual_starting_nodes = []
for domain in DOMAINS:
    chain_starting_nodes += [
        MessagePassingNode(block=domain) for _ in range(CHAINS_PER_DOMAIN)
    ]

    individual_starting_nodes.append(CraftingGameIndividualNode(block=domain))


class Exp(psynet.experiment.Experiment):
    label = "Crafting Game"
    n_chains = CHAINS_PER_DOMAIN * len(DOMAINS)
    chain_length = 4
    n_immortal_individuals = 4

    variables = {
        "world_models": {},
        "cached_combinations": {},
    }

    timeline = Timeline(
        consent,
        CodeBlock(initialize_participant),
        BasicInstructions(),
        PracticeRounds(),
        CodeBlock(assign_to_condition),
        conditional(
            "chain_or_individual",
            condition=lambda participant, experiment: participant.var.condition
            == "chain",
            logic_if_true=join(
                ChainInstructions(),
                CraftingGameChainTrialMaker(
                    id_="chain_trial",
                    network_class=ImitationChainNetwork,
                    trial_class=CraftingGameChainTrial,
                    node_class=MessagePassingNode,
                    chain_type="across",
                    max_nodes_per_chain=chain_length,
                    max_trials_per_participant=4,
                    max_trials_per_block=1,
                    expected_trials_per_participant=4,
                    chains_per_participant=4,
                    chains_per_experiment=n_chains,
                    start_nodes=chain_starting_nodes,
                    trials_per_node=1,
                    balance_across_chains=True,
                    check_performance_at_end=False,
                    check_performance_every_trial=False,
                    recruit_mode="n_participants",
                    target_n_participants=n_chains * chain_length,
                ),
            ),
            logic_if_false=join(
                IndividualInstructions(),
                CraftingGameIndividualTrialMaker(
                    id_="individual_task",
                    trial_class=CraftingGameIndividualTrial,
                    nodes=individual_starting_nodes,
                    expected_trials_per_participant=1,
                    max_trials_per_participant=1,
                    check_performance_at_end=False,
                    check_performance_every_trial=False,
                    fail_trials_on_premature_exit=False,
                    fail_trials_on_participant_performance_check=False,
                    balance_across_nodes=True,
                    recruit_mode="n_trials",
                    target_trials_per_node=n_immortal_individuals // 4,
                    assets=None,
                    n_repeat_trials=0,
                ),
            ),
            fix_time_credit=False,
        ),
        survey,
        SuccessfulEndPage(),
    )

    def test_check_bot(self, bot: Bot, **kwargs):
        assert len(bot.alive_trials) == 1

    @experiment_route("/api/init", methods=["GET"])
    @classmethod
    def initialize(cls):
        # check if we already have an inventory for this trial
        unique_id = re.search(
            r"(?<=\?unique_id=)([A-Z]|[a-z]|\d|:)+", request.values["urlParams"]
        ).group(0)
        participant = Participant.query.filter_by(unique_id=unique_id).one()
        trial = participant.current_trial
        if trial is None:
            domain = "practice"
            round_number = participant.var.practice_round_num
        else:
            round_number = request.values["roundNumber"]

        # initialize things that need initializing
        if trial is None:
            if not participant.var.has("practice_inventories"):
                participant.var.practice_inventories = {}
            if not participant.var.has("practice_actions"):
                participant.var.practice_actions = {}
            if not participant.var.has("practice_scores"):
                participant.var.practice_scores = {}

            # initialize the list of actions for the round
            if round_number not in participant.var.practice_actions:
                actions = participant.var.practice_actions
                actions[round_number] = []
                participant.var.practice_actions = actions

            if round_number in participant.var.practice_inventories:
                return {"inventory": participant.var.practice_inventories[round_number]}

        else:
            if not trial.var.has("inventories"):
                trial.var.inventories = {}
            if not trial.var.has("actions"):
                trial.var.actions = {}
            if not trial.var.has("scores"):
                trial.var.scores = {}

            # initialize the list of actions for the round
            if round_number not in trial.var.actions:
                actions = trial.var.actions
                actions[round_number] = []
                trial.var.actions = actions

            if round_number in trial.var.inventories:
                return {"inventory": trial.var.inventories[round_number]}

        domain = "practice" if trial is None else trial.definition["domain"]
        if domain == "practice":
            game = PracticeCraftingGame()
        else:
            game = CraftingGame("", domain)
        game.reset()

        for i in range(len(game.inventory)):
            if isinstance(game.inventory[i], Tool):
                continue
            game.inventory[i] = replace(
                game.inventory[i],
                description=get_item_description(game.inventory[i], domain),
            )

        # define the inventory and save it
        inventory = [asdict(item) for item in game.inventory]
        inventories = (
            participant.var.practice_inventories
            if trial is None
            else trial.var.inventories
        )
        inventories[round_number] = inventory
        if trial is None:
            participant.var.practice_inventories = inventories
        else:
            trial.var.inventories = inventories
        db.session.commit()

        return {
            "inventory": inventory,
        }

    @experiment_route("/api/step", methods=["POST"])
    @classmethod
    def step(cls):
        """
        Take a step in the game (i.e. combine two items together)
        """
        unique_id = re.search(
            r"(?<=\?unique_id=)([A-Z]|[a-z]|\d|:)+", request.values["urlParams"]
        ).group(0)

        participant = Participant.query.filter_by(unique_id=unique_id).one()
        trial = participant.current_trial
        if trial is None:
            round_number = str(participant.var.practice_round_num)
        else:
            round_number = request.values["roundNumber"]

        experiment = cls.new(db.session)

        action = request.values.getlist("action[]")

        item1, item2 = action

        item1 = dict_to_dataclass(json.loads(item1))
        item2 = dict_to_dataclass(json.loads(item2))

        domain = "practice" if trial is None else trial.definition["domain"]
        if domain == "practice":
            new_item = practice_combo_fn(item1, item2)
            sleep_time = max(random.gauss(0.3, 0.1), 0.01)
            time.sleep(sleep_time)
        else:
            # if the item is in the cache, then use the cached combination
            cached_combinations = experiment.var.cached_combinations
            domain_cached_combinations = cached_combinations.get(domain, {})
            if frozenset((str(item1), str(item2))) in cached_combinations:
                new_item = cached_combinations[frozenset((str(item1), str(item2)))]
            else:
                world_models = experiment.var.world_models
                world_model_str = world_models.get(
                    domain,
                    MemoizedWorldModel(
                        CUSTOM_VARS["model_string"],
                        domain,
                        assign_names=True,
                    ).dumps(),
                )

                world_model = MemoizedWorldModel(
                    "",
                    domain,
                    assign_names=True,
                    reasoning_effort=CUSTOM_VARS["reasoning_effort"],
                    groq_api_key=CUSTOM_VARS["groq_api_key"],
                )
                world_model.loads(world_model_str)

                new_item = world_model.combine_elements(item1, item2)
                domain_cached_combinations[frozenset((str(item1), str(item2)))] = (
                    new_item
                )
                # update the cached combinations and the world model
                cached_combinations[domain] = domain_cached_combinations
                experiment.var.cached_combinations = cached_combinations

                world_models[domain] = world_model.dumps()
                experiment.var.world_models = world_models

                # update the current inventory
                inventories = trial.var.inventories
                if not isinstance(item1, Tool):
                    inventories[round_number] = [
                        item
                        for item in inventories[round_number]
                        if item["name"] != item1.name
                    ]
                if not isinstance(item2, Tool):
                    inventories[round_number] = [
                        item
                        for item in inventories[round_number]
                        if item["name"] != item2.name
                    ]
                if new_item is not None:
                    inventories[round_number].append(asdict(new_item))
                trial.var.inventories = inventories

        # update the actions
        actions = (
            participant.var.practice_actions if trial is None else trial.var.actions
        )
        if round_number not in actions:
            actions[round_number] = []
        actions[round_number] += [(asdict(item1), asdict(item2), asdict(new_item))]
        if trial is None:
            participant.var.practice_actions = actions
        else:
            trial.var.actions = actions
        db.session.commit()

        # if the item is none (we combined two tools) then return that
        if new_item is None:
            return {"new_item": None}

        new_item = replace(new_item, description=get_item_description(new_item, domain))

        # return the created element
        return {
            "new_item": new_item,
        }

    @experiment_route("/api/submit", methods=["POST"])
    @classmethod
    def finish(cls):
        unique_id = re.search(
            r"(?<=\?unique_id=)([A-Z]|[a-z]|\d|:)+", request.values["urlParams"]
        ).group(0)
        participant = Participant.query.filter_by(unique_id=unique_id).one()
        trial = participant.current_trial

        if trial is None:
            round_number = participant.var.practice_round_num
        else:
            round_number = request.values["roundNumber"]

        # update the scores
        score = request.values["score"]
        scores = participant.var.practice_scores if trial is None else trial.var.scores
        scores[round_number] = score
        if trial is None:
            participant.var.practice_scores = scores
        else:
            trial.var.scores = scores

        if trial is None and int(score) >= 80:
            participant.var.practice_completed = True

        db.session.commit()

        return {"completed": True}

    @experiment_route("/api/set-scratchpad", methods=["POST"])
    @classmethod
    def set_scratchpad(cls):
        # get the trial
        unique_id = re.search(
            r"(?<=\?unique_id=)([A-Z]|[a-z]|\d|:)+", request.values["urlParams"]
        ).group(0)
        participant = Participant.query.filter_by(unique_id=unique_id).one()
        trial = participant.current_trial
        scratchpad = request.values["scratchpad"]
        if trial is None:
            participant.var.practice_scratchpad = scratchpad
        else:
            trial.var.scratchpad = scratchpad
        db.session.commit()

        return {"scratchpad": scratchpad}

    @experiment_route("/api/get-scratchpad", methods=["GET"])
    @classmethod
    def get_scratchpad(cls):
        # get the trial
        unique_id = re.search(
            r"(?<=\?unique_id=)([A-Z]|[a-z]|\d|:)+", request.values["urlParams"]
        ).group(0)
        participant = Participant.query.filter_by(unique_id=unique_id).one()
        trial = participant.current_trial
        if trial is None:
            if not participant.var.has("practice_scratchpad"):
                participant.var.practice_scratchpad = ""
                db.session.commit()
            scratchpad = participant.var.practice_scratchpad
        else:
            if not trial.var.has("scratchpad"):
                trial.var.scratchpad = ""
                db.session.commit()
            scratchpad = trial.var.scratchpad

        return {"scratchpad": scratchpad}
