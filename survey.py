from psynet.modular_page import ModularPage, Prompt, SurveyJSControl

survey_spec = {
    "elements": [
        {
            "type": "comment",
            "name": "strategy",
            "title": "Please describe the strategy you used to play the game",
        },
        {
            "type": "comment",
            "name": "message",
            "title": "How did you decide what to write in the message box?",
        },
        {
            "type": "comment",
            "name": "enjoyable",
            "title": "How enjoyable did you find this experiment?",
        },
        {
            "type": "comment",
            "name": "unclear",
            "title": "Were any of the instructions unclear?",
        },
        {
            "type": "comment",
            "name": "feedback",
            "title": "Please give any feedback you have about the experiment, including problems encountered",
        },
    ]
}

survey = ModularPage(
    "post_experiment_survey",
    Prompt(
        "You have completed the experiment! Please answer the following questions before you are redirected back to Prolific."
    ),
    control=SurveyJSControl(survey_spec),
    time_estimate=90,
    bot_response=lambda: "Test survey response",
)
