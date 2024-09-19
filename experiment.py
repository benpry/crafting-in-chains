import re

from flask import request
import psynet.experiment
from psynet.bot import Bot
from psynet.consent import NoConsent
from psynet.modular_page import ModularPage, Prompt, TextControl, Control
from psynet.utils import NoArgumentProvided
from psynet.page import InfoPage, SuccessfulEndPage
from psynet.participant import Participant
from psynet.timeline import FailedValidation, Timeline
from psynet.trial.imitation_chain import (
    ImitationChainNetwork,
    ImitationChainNode,
    ImitationChainTrial,
    ImitationChainTrialMaker,
)
from psynet.utils import get_logger
from markupsafe import Markup
from dallinger import db
from dallinger.experiment import experiment_route
from typing import Optional
from .constants import starting_elements, crafting_table, junk
from .consent import consent
from .instructions import Instructions
from .survey import post_experiment_survey

logger = get_logger()


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
        prompt: str,
        time_estimate: float,
        bot_response,
        initial_value: str = "",
    ):

        super().__init__(
            label,
            Prompt(prompt),
            control=PrepopulatedTextControl(
                initial_value=initial_value,
                block_copy_paste=False,
                bot_response=bot_response,
                one_line=False,
                width="60ch",
                height="10ch",
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


class CraftingGameTrial(ImitationChainTrial):
    time_estimate = 20 + 300 + 60

    def make_definition(self, experiment, participant):
        return self.node.definition

    def show_trial(self, experiment, participant):

        if len(self.definition["messages"]) == 0:
            message = "<p>You are the first participant, so there is no message for you to read.</p>"
        else:
            message = "<p>The previous participant sent you this message:</p>"
            for m in self.definition["messages"][-1].split("\n"):
                message += f"<p>{m}</p>"

        read_message_page = InfoPage(
            Markup(message),
            time_estimate=20,
        )
        game_page = ModularPage(
            "game",
            Prompt("Please play the game below. Press 'Next' when you are done."),
            control=CraftingGameControl(),
            time_estimate=300,
        )
        write_message_page = WriteMessagePage(
            "message",
            "Please send a message to help the next participant.",
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


class MessagePassingNode(ImitationChainNode):

    def create_initial_seed(self, experiment, participant):
        return {"messages": []}

    def summarize_trials(self, trials: list, experiment, participant):
        return {"messages": [trial.answer for trial in trials]}


class CraftingGameTrialMaker(ImitationChainTrialMaker):
    response_timeout_sec = 600
    check_timeout_interval_sec = 450


class Exp(psynet.experiment.Experiment):
    label = "Chain demo"

    timeline = Timeline(
        consent,
        Instructions(),
        CraftingGameTrialMaker(
            id_="chain_task",
            network_class=ImitationChainNetwork,
            trial_class=CraftingGameTrial,
            node_class=MessagePassingNode,
            chain_type="across",
            max_nodes_per_chain=10,
            max_trials_per_participant=1,
            expected_trials_per_participant=1,
            chains_per_participant=1,
            chains_per_experiment=1,
            trials_per_node=1,
            balance_across_chains=True,
            check_performance_at_end=False,
            check_performance_every_trial=False,
            recruit_mode="n_participants",
            target_n_participants=10,
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
        if not trial.var.has("inventory"):
            trial.var.inventory = starting_elements
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
            result = junk
        else:
            result = crafting_table[pair]

        # log the craft in the trial
        participant = Participant.query.filter_by(unique_id=unique_id.group(0)).one()
        trial = participant.current_trial
        if not trial.var.has("crafts"):
            trial.var.crafts = ()
        trial.var.crafts = trial.var.crafts + (
            {
                "item1": item1,
                "item2": item2,
                "result": result["text"],
                "value": result["value"],
            },
        )
        if result["text"] not in [element["text"] for element in trial.var.inventory]:
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
            trial.var.n_steps = 30
        db.session.commit()

        return {"n_steps": trial.var.n_steps}
