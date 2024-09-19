from psynet.modular_page import ModularPage, Prompt, SurveyJSControl

survey_spec = {
    "elements": [
        {
            "type": "comment",
            "name": "question1",
            "title": "Please describe the strategy you used to play the game",
        },
        {
            "type": "comment",
            "name": "question2",
            "title": "How did you decide what to write in the message box?\n",
        },
        {
            "type": "comment",
            "name": "question3",
            "title": "Were any of the instructions unclear?\n",
        },
        {
            "type": "comment",
            "name": "question4",
            "title": "Please give any feedback you have about the experiment, including problems encountered",
        },
    ]
}


post_experiment_survey = ModularPage(
    "post_experiment_survey",
    Prompt(
        "You have completed the experiment! Please answer the following questions before you are redirected back to Prolific."
    ),
    control=SurveyJSControl(survey_spec),
    time_estimate=90,
)
