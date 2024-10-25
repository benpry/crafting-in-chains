import re
import random

from flask import request
import psynet.experiment
from psynet.bot import Bot
from psynet.modular_page import ModularPage, Prompt, TextControl, Control
from psynet.utils import NoArgumentProvided
from psynet.page import InfoPage, SuccessfulEndPage
from psynet.participant import Participant
from psynet.timeline import FailedValidation, Timeline, CodeBlock, conditional
from psynet.trial.imitation_chain import (
    ImitationChainNetwork,
    ImitationChainNode,
    ImitationChainTrial,
    ImitationChainTrialMaker,
)
from psynet.trial.main import Trial
from psynet.trial.static import StaticTrial, StaticTrialMaker, StaticNode
from psynet.utils import get_logger
from markupsafe import Markup
from dallinger import db
from dallinger.experiment import experiment_route
from typing import Optional
from .constants import starting_elements, crafting_table
from .consent import consent
from .instructions import Instructions
from .survey import post_experiment_survey

logger = get_logger()


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
                "Please write a message to help the next participant. Your scratchpad text is below.",
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

    def __init__(self, message: Optional[str]):
        super().__init__()
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
        return {**self.node.definition, "starting_n_actions": 30}

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
            Prompt("Please play the game below. Press 'Next' when you are done."),
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
        return {"inventories": [], "starting_n_actions": 150}

    def show_trial(self, experiment, participant):

        game_page = ModularPage(
            "game",
            Prompt("Please play the game below. Press 'Next' when you are done."),
            control=CraftingGameControl(message=None),
            time_estimate=600,
        )
        return [game_page]


class MessagePassingNode(ImitationChainNode):

    def create_initial_seed(self, experiment, participant):
        return {"messages": [], "inventories": []}

    def summarize_trials(self, trials: list, experiment, participant):
        return {
            "messages": [trial.answer for trial in trials],
            "inventories": [trial.var.inventory for trial in trials],
        }


class CraftingGameChainTrialMaker(ImitationChainTrialMaker):
    response_timeout_sec = 600
    check_timeout_interval_sec = 450


class CraftingGameIndividualNode(StaticNode):

    def create_initial_seed(self, experiment, participant):
        return {"inventories": []}


class CraftingGameIndividualTrialMaker(StaticTrialMaker):
    response_timeout_sec = 600
    check_timeout_interval_sec = 450
    choose_participant_group = None


def assign_to_condition(participant, experiment):
    """
    Assign the participant to either chain or immortal individual condition
    """
    # participant.var.condition = random.choice(["chain", "individual"])
    participant.var.condition = "individual"


class Exp(psynet.experiment.Experiment):
    label = "Crafting in chains"

    timeline = Timeline(
        consent,
        CodeBlock(assign_to_condition),
        Instructions(),
        conditional(
            "chain_or_individual",
            condition=lambda participant, experiment: participant.var.condition
            == "chain",
            logic_if_true=CraftingGameChainTrialMaker(
                id_="chain_task",
                network_class=ImitationChainNetwork,
                trial_class=CraftingGameChainTrial,
                node_class=MessagePassingNode,
                chain_type="across",
                max_nodes_per_chain=5,
                max_trials_per_participant=1,
                expected_trials_per_participant=1,
                chains_per_participant=1,
                chains_per_experiment=5,
                trials_per_node=1,
                balance_across_chains=True,
                check_performance_at_end=False,
                check_performance_every_trial=False,
                recruit_mode="n_participants",
                target_n_participants=15,
            ),
            logic_if_false=CraftingGameIndividualTrialMaker(
                id_="individual_task",
                trial_class=CraftingGameIndividualTrial,
                nodes=[CraftingGameIndividualNode()],
                expected_trials_per_participant=1,
                check_performance_at_end=False,
                check_performance_every_trial=False,
                fail_trials_on_premature_exit=False,
                fail_trials_on_participant_performance_check=False,
                recruit_mode="n_participants",
                target_n_participants=5,
                assets=None,
                n_repeat_trials=0,
            ),
            fix_time_credit=False,
        ),
        post_experiment_survey,
        SuccessfulEndPage(),
    )

    def test_check_bot(self, bot: Bot, **kwargs):
        assert len(bot.alive_trials) == 1

    @experiment_route("/api/start", methods=["GET"])
    @classmethod
    def get_start_items(cls):

        # get the trial
        unique_id = re.search(
            r"(?<=\?unique_id=)([A-Z]|\d|:)+", request.values["urlParams"]
        ).group(0)
        participant = Participant.query.filter_by(unique_id=unique_id).one()
        trial = participant.current_trial
        print(f"trial: {trial}")
        print(f"definition: {trial.definition}")
        if not trial.var.has("inventory"):
            # if we initialize with the last participant's inventory, then
            print("populating inventory...")
            if trial.definition["inventories"] == []:
                print("inventories empty")
                trial.var.inventory = starting_elements
            else:
                # get the final inventory of the last participant
                print("inventories not empty")
                trial.var.inventory = trial.definition["inventories"][-1]

        db.session.commit()

        return {"elements": trial.var.inventory}

    @experiment_route("/api/combine", methods=["POST"])
    @classmethod
    def combine(cls):
        """
        Return the result of crafting two items together
        """
        unique_id = re.search(
            r"(?<=\?unique_id=)([A-Z]|\d|:)+", request.values["urlParams"]
        )

        # get the items to combine and the result
        item1, item2 = request.values["item1"], request.values["item2"]
        pair = frozenset((item1, item2))
        if pair not in crafting_table:
            result = None
        else:
            result = crafting_table[pair]
            result["discovered"] = True

        # log the craft in the trial
        participant = Participant.query.filter_by(unique_id=unique_id.group(0)).one()
        trial = participant.current_trial
        if not trial.var.has("crafts"):
            trial.var.crafts = ()
        trial.var.crafts = trial.var.crafts + (
            {
                "item1": item1,
                "item2": item2,
                "result": None if result is None else result["text"],
                "value": None if result is None else result["value"],
            },
        )
        if result is not None and result["text"] not in [
            element["text"] for element in trial.var.inventory
        ]:
            trial.var.inventory = trial.var.inventory + (result,)
        trial.var.n_steps = trial.var.n_steps - 1
        db.session.commit()

        # return the created element
        return {
            "message": "element created",
            "element": result,
        }

    @experiment_route("/api/n-steps", methods=["GET"])
    @classmethod
    def get_n_steps(cls):

        # get the trial
        unique_id = re.search(
            r"(?<=\?unique_id=)([A-Z]|\d|:)+", request.values["urlParams"]
        ).group(0)
        participant = Participant.query.filter_by(unique_id=unique_id).one()
        trial = participant.current_trial
        if not trial.var.has("n_steps"):
            trial.var.n_steps = trial.definition["starting_n_actions"]
        db.session.commit()

        return {"n_steps": trial.var.n_steps}

    @experiment_route("/api/set-scratchpad", methods=["POST"])
    @classmethod
    def set_scratchpad(cls):

        # get the trial
        unique_id = re.search(
            r"(?<=\?unique_id=)([A-Z]|\d|:)+", request.values["urlParams"]
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
            r"(?<=\?unique_id=)([A-Z]|\d|:)+", request.values["urlParams"]
        ).group(0)
        participant = Participant.query.filter_by(unique_id=unique_id).one()
        trial = participant.current_trial
        if not trial.var.has("scratchpad"):
            trial.var.scratchpad = ""
            db.session.commit()

        return {"scratchpad": trial.var.scratchpad}
