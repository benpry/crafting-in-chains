import json
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
from psynet.timeline import CodeBlock, FailedValidation, Timeline, conditional, join
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
from .instructions import Instructions
from .survey import chain_survey, immortal_individual_survey

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

    def __init__(self, message: Optional[str], show_next_button: bool = False):
        super().__init__(
            show_next_button=show_next_button,
        )
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
        print(f"formatting answer: {raw_answer}")
        return raw_answer


class CraftingGameChainTrial(ImitationChainTrial):
    time_estimate = 20 + 300 + 60

    def make_definition(self, experiment, participant):
        return {**self.node.definition, "domain": "cooking"}

    def show_trial(self, experiment, participant):
        empty_message = False
        if len(self.definition["messages"]) == 0:
            empty_message = True
            message = "<p>You are the first participant, so there is no message for you to read.</p>"
        else:
            message = "<p>The previous participant sent you this message:</p>"
            for m in self.definition["messages"][-1].split("\n"):
                message += f"<p>{m}</p>"

        read_message_page = InfoPage(
            Markup(message),
            time_estimate=20,
            css_links=["/static/text-style.css"],
        )
        game_page = ModularPage(
            "game",
            Prompt("Please play the game below. Press 'Submit' when you are done."),
            control=CraftingGameControl(message="" if empty_message else message),
            time_estimate=300,
        )
        write_message_page = WriteMessagePage(
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

        return [read_message_page, game_page, write_message_page]


class CraftingGameIndividualTrial(StaticTrial):
    time_estimate = 20 + 600 + 60

    def make_definition(self, experiment, participant):
        return {"inventories": [], "domain": "cooking"}

    def show_trial(self, experiment, participant):
        game_page = ModularPage(
            "game",
            Prompt("Please play the game below. Press 'Submit' when you are done."),
            control=CraftingGameControl(message=None),
            time_estimate=600,
        )
        return [game_page]


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
    # get the number of free chains
    print(f"assigning participant {participant.id} to condition...")
    chains = ImitationChainNetwork.query.filter_by(full=False)
    n_free_chains = len([chain for chain in chains if chain.head.is_free])
    print(f"n_free_chains: {n_free_chains}")
    if n_free_chains == 0:
        participant.var.condition = "individual"
        print(
            f"No free chains. Assigning participant {participant.id} to individual condition"
        )
        return

    # get the number of immortal individuals we still need
    immortal_individuals_completed_or_active = (
        CraftingGameIndividualTrial.query.filter_by(failed=False).count()
    )
    immortal_individuals_needed = max(
        experiment.n_immortal_individuals - immortal_individuals_completed_or_active, 0
    )
    print(f"immortal_individuals_needed: {immortal_individuals_needed}")
    total_needed = n_free_chains + immortal_individuals_needed
    p_chain = n_free_chains / total_needed
    p_individual = 1 - p_chain
    print(f"p_chain: {p_chain}, p_individual: {p_individual}")
    assignment = random.choices(
        ["chain", "individual"], weights=[p_chain, p_individual]
    )
    print(f"assigning to {assignment}")
    participant.var.condition = assignment[0]


class Exp(psynet.experiment.Experiment):
    label = "Crafting in chains"
    n_chains = 10
    chain_length = 4
    n_immortal_individuals = 10

    variables = {
        "world_models": {},
        "cached_combinations": {},
    }

    timeline = Timeline(
        consent,
        CodeBlock(assign_to_condition),
        Instructions(),
        conditional(
            "chain_or_individual",
            condition=lambda participant, experiment: participant.var.condition
            == "chain",
            logic_if_true=join(
                CraftingGameChainTrialMaker(
                    id_="chain_task",
                    network_class=ImitationChainNetwork,
                    trial_class=CraftingGameChainTrial,
                    node_class=MessagePassingNode,
                    chain_type="across",
                    max_nodes_per_chain=chain_length,
                    max_trials_per_participant=1,
                    expected_trials_per_participant=1,
                    chains_per_participant=1,
                    chains_per_experiment=n_chains,
                    trials_per_node=1,
                    balance_across_chains=True,
                    check_performance_at_end=False,
                    check_performance_every_trial=False,
                    recruit_mode="n_participants",
                    target_n_participants=n_chains * chain_length,
                ),
                chain_survey,
            ),
            logic_if_false=join(
                CraftingGameIndividualTrialMaker(
                    id_="individual_task",
                    trial_class=CraftingGameIndividualTrial,
                    nodes=[CraftingGameIndividualNode()],
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
                immortal_individual_survey,
            ),
            fix_time_credit=False,
        ),
        SuccessfulEndPage(),
    )

    def test_check_bot(self, bot: Bot, **kwargs):
        assert len(bot.alive_trials) == 1

    @experiment_route("/api/init", methods=["GET"])
    @classmethod
    def get_start_items(cls):
        # check if we already have an inventory for this trial
        unique_id = re.search(
            r"(?<=\?unique_id=)([A-Z]|[a-z]|\d|:)+", request.values["urlParams"]
        ).group(0)
        participant = Participant.query.filter_by(unique_id=unique_id).one()
        trial = participant.current_trial

        print(f"trial: {trial}")
        print(f"trial.var: {trial.var}")
        print(f"trial.definition: {trial.definition}")

        if trial.var.has("inventory"):
            # if we initialize with the last participant's inventory, then
            return {"inventory": trial.var.inventory}

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
        trial.var.inventory = inventory
        db.session.commit()

        print(f"returning inventory: {inventory}")

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
        print("unique ID", unique_id)
        participant = Participant.query.filter_by(unique_id=unique_id).one()
        trial = participant.current_trial
        experiment = cls.new(db.session)

        action = request.values.getlist("action[]")

        print(f"action: {action}")

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
                    domain, MemoizedWorldModel("none", "cooking").dumps()
                )

                world_model = MemoizedWorldModel("none", "cooking")
                world_model.loads(world_model_str)

                new_item = world_model.combine_elements(item1, item2)
                cached_combinations[frozenset((str(item1), str(item2)))] = new_item
                # update the cached combinations and the world model
                experiment.var.cached_combinations[domain] = cached_combinations
                experiment.var.world_models[domain] = world_model.dumps()

                # cache the combination and update the world model
                db.session.commit()

        # if the item is none (we combined two tools) then return that
        if new_item is None:
            return {"new_item": None}

        new_item = replace(new_item, description=get_item_description(new_item, domain))

        # return the created element
        return {
            "new_item": new_item,
        }

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
