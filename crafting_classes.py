import random
from typing import Optional

from dallinger import db
from markupsafe import Markup
from psynet.modular_page import Control, ModularPage, Prompt, TextControl
from psynet.page import InfoPage
from psynet.timeline import FailedValidation, Module, join, while_loop
from psynet.trial.imitation_chain import (
    ImitationChainNode,
    ImitationChainTrial,
    ImitationChainTrialMaker,
)
from psynet.trial.main import Trial
from psynet.trial.static import StaticNode, StaticTrial, StaticTrialMaker
from psynet.utils import NoArgumentProvided, get_logger

from .constants import BLOCK_HEADERS

logger = get_logger()


class FailParticipantOnTrialFailMixin:
    """
    Mixin that, whenever a trial fails, also fails the participant and all
    of their remaining (non-failed) trials.
    """

    def fail(self, reason=None):
        # Avoid double-failing
        if getattr(self, "failed", False):
            return

        fail_reason = reason or "abandoned"

        logger.info(f"Failing trial {self.id} because {fail_reason}")
        logger.info(f"Failing participant {self.participant.id} due to trial {self.id}")

        # First, let PsyNet do its normal bookkeeping on this trial
        super().fail(fail_reason)

        # Now fail the participant
        self.participant.status = "abandoned"
        self.participant.fail(reason=fail_reason)

        # And fail *all* other non-failed trials they own
        # (alive_trials = all non-failed trials owned by the object :contentReference[oaicite:3]{index=3})
        for trial in list(self.participant.alive_trials):
            # super().fail already failed self, so it won't be in alive_trials,
            # but guarding doesn't hurt.
            if trial is not self:
                logger.info(
                    f"Also failing trial {trial.id} for participant {self.participant.id} "
                    f"because {fail_reason}"
                )
                trial.fail(reason=fail_reason)


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
        if trial.var.has("scratchpad"):
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
                "The next participant will play the same game as you. Please write a message that will help them perform well.",
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
        self.initial_value = initial_value
        self.trial_id = trial_id

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
        if response.answer == self.initial_value:
            trial = Trial.query.filter_by(id=self.trial_id).one()
            if not trial.var.get("warned_about_identical", False):
                trial.var.warned_about_identical = True
                db.session.commit()
                return FailedValidation(
                    "Are you sure you don't want to change the message you received? If so, you can click 'Next' again to submit."
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

    def get_bot_response(self, experiment, bot, page, prompt):
        if not bot.var.practice_completed:
            bot.var.practice_completed = True
        return "Beep boop, I am a bot playing a game."


CHAIN_N_TRIALS_PER_DOMAIN = 10
INDIVIDUAL_N_TRIALS_PER_DOMAIN = 40


class CraftingGameChainTrial(FailParticipantOnTrialFailMixin, ImitationChainTrial):
    time_estimate = 20 + 30 * CHAIN_N_TRIALS_PER_DOMAIN + 60

    def make_definition(self, experiment, participant):
        return {**self.node.definition, "domain": self.node.block}

    def show_trial(self, experiment, participant):
        empty_message = False
        if len(self.definition["messages"]) == 0:
            empty_message = True
            message = "<p>You are the first participant, so there is no message for you to read.</p>"
        else:
            message = ""
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
                Markup("<h1>Message</h1>" + message),
                time_estimate=20,
                css_links=["/static/text-style.css"],
            )
        )
        for i in range(1, CHAIN_N_TRIALS_PER_DOMAIN + 1):
            pages.append(
                ModularPage(
                    "game",
                    Prompt(Markup(f"<h1>Round {i}</h1>")),
                    control=CraftingGameControl(
                        message="" if empty_message else message,
                        round_number=i,
                    ),
                    bot_response=lambda: "",
                    time_estimate=30,
                )
            )
        pages.append(
            WriteMessagePage(
                "message",
                self.id,
                time_estimate=60,
                bot_response=lambda: "Beep boop, I am a bot."
                if len(self.node.definition["messages"]) == 0
                else self.node.definition["messages"][-1] + "\nBeep boop, I am a bot.",
                initial_value=(
                    self.node.definition["messages"][-1]
                    if len(self.node.definition["messages"]) > 0
                    else ""
                ),
            )
        )

        return pages


class CraftingGameIndividualTrial(FailParticipantOnTrialFailMixin, StaticTrial):
    time_estimate = 10 + 30 * INDIVIDUAL_N_TRIALS_PER_DOMAIN + 60

    def make_definition(self, experiment, participant):
        return {"inventories": [], "domain": self.node.block}

    def show_trial(self, experiment, participant):
        pages = []
        pages.append(
            InfoPage(
                Markup(BLOCK_HEADERS[self.definition["domain"]]),
                time_estimate=10,
                css_links=["/static/text-style.css"],
            )
        )
        for i in range(1, INDIVIDUAL_N_TRIALS_PER_DOMAIN + 1):
            pages.append(
                ModularPage(
                    "game",
                    Prompt(Markup(f"<h1>Round {i}</h1>")),
                    control=CraftingGameControl(message=None, round_number=i),
                    bot_response=lambda: "",
                    time_estimate=30,
                )
            )

        pages.append(
            WriteMessagePage(
                "message",
                self.id,
                time_estimate=60,
                bot_response=lambda: "Beep boop, I am a bot",
            )
        )

        return pages


def practice_loop_condition(participant):
    if not participant.var.has("practice_round_num"):
        participant.var.practice_round_num = 1
    else:
        participant.var.practice_round_num += 1
    return not participant.var.practice_completed


def practice_bot_response(experiment, bot):
    if not bot.var.practice_completed:
        bot.var.practice_completed = True
    return ""


def PracticeRounds():
    return Module(
        "practice_rounds",
        join(
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
                    bot_response=practice_bot_response,
                    time_estimate=30,
                ),
                expected_repetitions=4,
            ),
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
    # 20 minute timeout for chain trials
    response_timeout_sec = 20 * 60

    def choose_block_order(self, experiment, participant, blocks):
        block_order = random.sample(list(blocks), len(blocks))
        return block_order


class CraftingGameIndividualNode(StaticNode):
    def create_initial_seed(self, experiment, participant):
        return {"inventories": []}


class CraftingGameIndividualTrialMaker(StaticTrialMaker):
    # 60 minute timeout for individual trials
    response_timeout_sec = 60 * 60
    choose_participant_group = None
