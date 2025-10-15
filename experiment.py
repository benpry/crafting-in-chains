import json
import os
import random
import re
import time
from dataclasses import asdict, replace
from typing import Optional

import psynet.experiment
from dallinger import db
from dallinger.experiment import experiment_route
from flask import request
from markupsafe import Markup
from psynet.bot import Bot
from psynet.modular_page import Control, ModularPage, Prompt, TextControl
from psynet.page import InfoPage, SuccessfulEndPage
from psynet.participant import Participant
from psynet.timeline import (
    CodeBlock,
    FailedValidation,
    Timeline,
    conditional,
    join,
    while_loop,
)
from psynet.trial.imitation_chain import (
    ImitationChainNetwork,
    ImitationChainNode,
    ImitationChainTrial,
    ImitationChainTrialMaker,
)
from psynet.trial.main import Trial
from psynet.trial.static import StaticNode, StaticTrial, StaticTrialMaker
from psynet.utils import NoArgumentProvided, get_logger
from src.constants import Tool
from src.environment import CraftingGame
from src.functions import DESCRIPTOR_FUNCTIONS
from src.practice_environment import PracticeCraftingGame
from src.practice_environment import combo_fn as practice_combo_fn
from src.practice_environment import get_item_descriptor as practice_descriptor_fn
from src.utils import dict_to_dataclass
from src.world_model import MemoizedWorldModel

from .consent import consent
from .constants import BLOCK_HEADERS
from .instructions import Instructions
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


class ScratchpadPrompt(Prompt):
    macro = "scratchpad_prompt"
    external_template = "custom_macros.html"

    def __init__(
        self,
        prompt_text,
        trial_id,
        text_align: str = "left",
        buttons: Optional[list] = None,
    ):
        super().__init__(
            text=prompt_text,
            text_align=text_align,
            buttons=buttons,
        )
        self.trial_id = trial_id

    def get_scratchpad_text(self):
        trial = Trial.query.filter_by(id=self.trial_id).one()
        text = ""
        for m in trial.var.scratchpad.split("\n"):
            text += f"<p>{m}</p>"

        return text


class PrepopulatedTextControl(TextControl):
    macro = "prepopulated_text"
    external_template = "custom_macros.html"

    def __init__(
        self,
        initial_value: str,
        one_line: bool = True,
        width: Optional[str] = None,  # e.g. "100px"
        height: Optional[str] = None,
        text_align: str = "left",
        block_copy_paste: bool = False,
        bot_response=NoArgumentProvided,
    ):
        super().__init__(
            one_line=one_line,
            width=width,
            height=height,
            text_align=text_align,
            block_copy_paste=block_copy_paste,
            bot_response=bot_response,
        )
        self.initial_value = initial_value


class WriteMessagePage(ModularPage):
    def __init__(
        self,
        label: str,
        trial_id,
        time_estimate: float,
        bot_response,
        initial_value: str = "",
    ):
        super().__init__(
            label,
            ScratchpadPrompt(
                "The next participant will build upon the items you have discovered. They will start with the following items in their inventory:",
                trial_id,
            ),
            control=PrepopulatedTextControl(
                initial_value=initial_value,
                block_copy_paste=False,
                bot_response=bot_response,
                one_line=False,
                width="60ch",
                height="20ch",
            ),
            time_estimate=time_estimate,
        )

    def format_answer(self, raw_answer, **kwargs):
        if raw_answer is None:
            return ""
        else:
            return raw_answer.strip()

    def validate(self, response, **kwargs):
        if response.answer == "":
            return FailedValidation(
                "It looks like you left the message blank. Please write a message to help the next participant."
            )
        return None


class CraftingGameControl(Control):
    macro = "crafting_game"
    external_template = "custom_macros.html"

    def __init__(
        self, message: Optional[str], round_number: int, show_next_button: bool = False
    ):
        super().__init__(
            show_next_button=show_next_button,
        )
        self.round_number = round_number
        # format the message as HTML
        if message is None:
            return
        if message == "":
            self.message = "<p>There is no message for you to read.</p>"
        else:
            self.message = ""
            for m in message.split("\n"):
                self.message += f"<p>{m}</p>"

    def format_answer(self, raw_answer, **kwargs):
        return raw_answer


CHAIN_N_TRIALS_PER_DOMAIN = 10
INDIVIDUAL_N_TRIALS_PER_DOMAIN = 40


class CraftingGameChainTrial(ImitationChainTrial):
    time_estimate = 20 + 30 * 10 + 60

    def make_definition(self, experiment, participant):
        return {**self.node.definition, "domain": self.node.block}

    def show_trial(self, experiment, participant):
        empty_message = False
        if len(self.definition["messages"]) == 0:
            empty_message = True
            message = "<p>You are the first participant, so there is no message for you to read.</p>"
        else:
            message = "<p>The previous participant sent you this message:</p>"
            for m in self.definition["messages"][-1].split("\n"):
                message += f"<p>{m}</p>"

        pages = []
        pages.append(
            InfoPage(
                Markup(BLOCK_HEADERS[self.definition["domain"]]),
                time_estimate=10,
                css_links=["/static/text-style.css"],
            )
        )
        pages.append(
            InfoPage(
                Markup(message),
                time_estimate=20,
                css_links=["/static/text-style.css"],
            )
        )
        for i in range(1, CHAIN_N_TRIALS_PER_DOMAIN + 1):
            pages.append(
                ModularPage(
                    "game",
                    Prompt("Round " + str(i)),
                    control=CraftingGameControl(
                        message="" if empty_message else message,
                        round_number=i,
                    ),
                    time_estimate=30,
                )
            )
        pages.append(
            WriteMessagePage(
                "message",
                self.id,
                time_estimate=60,
                bot_response=lambda: self.definition["messages"][-1]
                + "\nBeep boop, I am a bot.",
                initial_value=(
                    self.node.definition["messages"][-1]
                    if len(self.node.definition["messages"]) > 0
                    else ""
                ),
            )
        )

        return pages


class CraftingGameIndividualTrial(StaticTrial):
    time_estimate = 30 * 10 + 60

    def make_definition(self, experiment, participant):
        return {"inventories": [], "domain": "cooking"}

    def show_trial(self, experiment, participant):
        pages = []
        pages.append(
            InfoPage(
                Markup(BLOCK_HEADERS[self.definition["domain"]]),
                time_estimate=10,
                css_links=["/static/text-style.css"],
            )
        )
        for i in range(INDIVIDUAL_N_TRIALS_PER_DOMAIN):
            pages.append(
                ModularPage(
                    "game",
                    Prompt(f"Round {i}"),
                    control=CraftingGameControl(message=None),
                    time_estimate=600,
                )
            )

        pages.append(
            WriteMessagePage(
                "message",
                self.id,
                time_estimate=60,
                bot_response=lambda: self.definition["messages"][-1]
                + "\nBeep boop, I am a bot.",
            )
        )

        return pages


def practice_loop_condition(participant):
    if not participant.var.has("practice_round_num"):
        participant.var.practice_round_num = 1
    else:
        participant.var.practice_round_num += 1
    return not participant.var.practice_completed


class PracticeTrial(Trial):
    time_estimate = 120

    def show_trial(self, experiment, participant):
        return join(
            InfoPage(
                Markup(BLOCK_HEADERS["practice"]),
                time_estimate=10,
                css_links=["/static/text-style.css"],
            ),
            while_loop(
                "practice_loop",
                practice_loop_condition,
                ModularPage(
                    "practice_game",
                    Prompt(""),
                    control=CraftingGameControl(message=None, round_number=0),
                    time_estimate=30,
                ),
                expected_repetitions=4,
            ),
            InfoPage(
                Markup(
                    "Congratulations! You have completed the practice game. You can now move on to the main game."
                ),
                time_estimate=10,
                css_links=["/static/text-style.css"],
            ),
        )


class MessagePassingNode(ImitationChainNode):
    def create_initial_seed(self, experiment, participant):
        return {"messages": [], "inventories": []}

    def summarize_trials(self, trials: list, experiment, participant):
        inventories = []
        messages = []
        for trial in trials:
            if trial.var.has("inventory"):
                inventories.append(trial.var.inventory)
            messages.append(trial.answer)
        return {
            "messages": messages,
            "inventories": inventories,
        }

    @property
    def ongoing_trials(self):
        return [t for t in self.viable_trials if not t.complete and not t.finalized]

    @property
    def is_free(self):
        return len(self.ongoing_trials) == 0


class CraftingGameChainTrialMaker(ImitationChainTrialMaker):
    # There's a long tail of trial durations, so we'll set the timeout to 30 minutes
    response_timeout_sec = 60 * 40

    def choose_block_order(self, experiment, participant, blocks):
        block_order = random.sample(list(blocks), len(blocks))
        return block_order


class CraftingGameIndividualNode(StaticNode):
    def create_initial_seed(self, experiment, participant):
        return {"inventories": []}


class CraftingGameIndividualTrialMaker(StaticTrialMaker):
    # There's a long tail of trial durations, so we'll set the timeout to 1 hour
    response_timeout_sec = 60 * 60
    choose_participant_group = None


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

    # assign to conditions proportional to probability
    total_needed = n_free_chains + immortal_individuals_needed
    p_chain = n_free_chains / total_needed
    p_individual = 1 - p_chain
    assignment = random.choices(
        ["chain", "individual"], weights=[p_chain, p_individual]
    )
    participant.var.condition = assignment[0]


# def choose_participant_group(participant):
#     domains = ["cooking", "decorations", "animals", "potions"]
#     print(f"choosing participant group for participant {participant.id}")
#     completed_domains = participant.var.completed_domains
#     non_completed_domains = [
#         domain for domain in domains if domain not in completed_domains
#     ]
#     print(f"non_completed_domains: {non_completed_domains}")
#     chosen_domain = random.choice(non_completed_domains)
#     print(f"chosen domain: {chosen_domain}")
#     return chosen_domain


DOMAINS = ["cooking", "decorations", "animals", "potions"]

chain_starting_nodes = []
individual_starting_nodes = []
for domain in DOMAINS:
    chain_starting_nodes += [MessagePassingNode(block=domain) for _ in range(3)]

    individual_starting_nodes.append(CraftingGameIndividualNode(block=domain))


class Exp(psynet.experiment.Experiment):
    label = "Crafting in chains"
    n_chains = 12
    chain_length = 4
    n_immortal_individuals = 12

    variables = {
        "world_models": {},
        "cached_combinations": {},
    }

    timeline = Timeline(
        consent,
        CodeBlock(assign_to_condition),
        Instructions(),
        PracticeTrial.cue({"domain": "practice"}),
        conditional(
            "chain_or_individual",
            condition=lambda participant, experiment: participant.var.condition
            == "chain",
            logic_if_true=CraftingGameChainTrialMaker(
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
            logic_if_false=CraftingGameIndividualTrialMaker(
                id_="individual_task",
                trial_class=CraftingGameIndividualTrial,
                nodes=individual_starting_nodes,
                expected_trials_per_participant=1,
                check_performance_at_end=False,
                check_performance_every_trial=False,
                fail_trials_on_premature_exit=False,
                fail_trials_on_participant_performance_check=False,
                recruit_mode="n_participants",
                target_n_participants=n_immortal_individuals,
                assets=None,
                n_repeat_trials=0,
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
        if trial.definition["domain"] == "practice":
            round_number = participant.var.practice_round_num
        else:
            round_number = request.values["roundNumber"]

        # initialize things that need initializing
        if not trial.var.has("inventories"):
            trial.var.inventories = {}
        if not trial.var.has("actions"):
            trial.var.actions = {}
        if not trial.var.has("scores"):
            trial.var.scores = {}

        # initialize the list of actions for the round
        if round_number not in trial.var.actions:
            print(f"trial.var.actions: {trial.var.actions}")
            actions = trial.var.actions
            actions[round_number] = []
            trial.var.actions = actions

        if round_number in trial.var.inventories:
            return {"inventory": trial.var.inventories[round_number]}

        domain = trial.definition["domain"]
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

        inventory = [asdict(item) for item in game.inventory]
        inventories = trial.var.inventories
        inventories[round_number] = inventory
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
        if trial.definition["domain"] == "practice":
            round_number = str(participant.var.practice_round_num)
        else:
            round_number = request.values["roundNumber"]
        experiment = cls.new(db.session)

        action = request.values.getlist("action[]")

        item1, item2 = action

        item1 = dict_to_dataclass(json.loads(item1))
        item2 = dict_to_dataclass(json.loads(item2))

        domain = trial.definition["domain"]
        if domain == "practice":
            new_item = practice_combo_fn(item1, item2)
            sleep_time = max(random.gauss(0.3, 0.1), 0.01)
            time.sleep(sleep_time)
        else:
            # if the item is in the cache, then use the cached combination
            cached_combinations = experiment.var.cached_combinations.get(domain, {})
            if frozenset((str(item1), str(item2))) in cached_combinations:
                new_item = cached_combinations[frozenset((str(item1), str(item2)))]
            else:
                world_model_str = experiment.var.world_models.get(
                    domain,
                    MemoizedWorldModel(
                        os.environ.get("MODEL_STRING", "openai/gpt-oss-20b"),
                        domain,
                        assign_names=True,
                    ).dumps(),
                )

                world_model = MemoizedWorldModel("", domain, assign_names=True)
                world_model.loads(world_model_str)

                new_item = world_model.combine_elements(item1, item2)
                cached_combinations[frozenset((str(item1), str(item2)))] = new_item
                # update the cached combinations and the world model
                experiment.var.cached_combinations[domain] = cached_combinations
                experiment.var.world_models[domain] = world_model.dumps()

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

        print(f"trial.var.actions: {trial.var.actions}")
        actions = trial.var.actions
        actions[round_number] += [(asdict(item1), asdict(item2), asdict(new_item))]
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

        if trial.definition["domain"] == "practice":
            round_number = participant.var.practice_round_num
        else:
            round_number = request.values["roundNumber"]

        # update the scores
        score = request.values["score"]
        scores = trial.var.scores
        scores[round_number] = score
        trial.var.scores = scores

        if trial.definition["domain"] == "practice" and int(score) >= 80:
            participant.var.practice_completed = True

        db.session.commit()

    @experiment_route("/api/set-scratchpad", methods=["POST"])
    @classmethod
    def set_scratchpad(cls):
        # get the trial
        unique_id = re.search(
            r"(?<=\?unique_id=)([A-Z]|[a-z]|\d|:)+", request.values["urlParams"]
        ).group(0)
        participant = Participant.query.filter_by(unique_id=unique_id).one()
        trial = participant.current_trial
        trial.var.scratchpad = request.values["scratchpad"]
        db.session.commit()

        return {"scratchpad": trial.var.scratchpad}

    @experiment_route("/api/get-scratchpad", methods=["GET"])
    @classmethod
    def get_scratchpad(cls):
        # get the trial
        unique_id = re.search(
            r"(?<=\?unique_id=)([A-Z]|[a-z]|\d|:)+", request.values["urlParams"]
        ).group(0)
        participant = Participant.query.filter_by(unique_id=unique_id).one()
        trial = participant.current_trial
        if not trial.var.has("scratchpad"):
            trial.var.scratchpad = ""
            db.session.commit()

        return {"scratchpad": trial.var.scratchpad}
