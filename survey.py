from psynet.modular_page import ModularPage, Prompt, SurveyJSControl

chain_survey_spec = {
    "elements": [
        {
            "type": "comment",
            "name": "strategy",
            "title": "Please describe the strategy you used to play the game",
        },
        {
            "type": "comment",
            "name": "message",
            "title": "How did you decide what to write in the message box?\n",
        },
        {
            "type": "comment",
            "name": "unclear",
            "title": "Were any of the instructions unclear?\n",
        },
        {
            "type": "comment",
            "name": "feedback",
            "title": "Please give any feedback you have about the experiment, including problems encountered",
        },
    ]
}

immortal_individual_survey_spec = {
    "elements": [
        {
            "type": "comment",
            "name": "strategy",
            "title": "Please describe the strategy you used to play the game",
        },
        {
            "type": "comment",
            "name": "unclear",
            "title": "Were any of the instructions unclear?\n",
        },
        {
            "type": "comment",
            "name": "feedback",
            "title": "Please give any feedback you have about the experiment, including problems encountered",
        },
    ]
}


chain_survey = ModularPage(
    "post_experiment_survey",
    Prompt(
        "You have completed the experiment! Please answer the following questions before you are redirected back to Prolific."
    ),
    control=SurveyJSControl(chain_survey_spec),
    time_estimate=90,
)

immortal_individual_survey = ModularPage(
    "post_experiment_survey",
    Prompt(
        "You have completed the experiment! Please answer the following questions before you are redirected back to Prolific."
    ),
    control=SurveyJSControl(immortal_individual_survey_spec),
    time_estimate=90,
)
