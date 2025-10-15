from dominate.tags import div, img, link, p, strong
from psynet.page import InfoPage
from psynet.timeline import Module, conditional, join

page1 = div()

with page1:
    link(rel="stylesheet", href="/static/text-style.css")
    link(rel="stylesheet", href="/static/big-font.css")
    p(
        """
        Welcome! In this experiment, you will play a game where you use tools and
        combine ingredients to make new items.
        """
    )
    p(
        """
        The game interface is shown below. It has an inventory of items, a
        crafting area, and a progress bar.
        """
    )
    img(
        src="static/instruction-screenshots/interface-screenshot.png",
        alt="Screenshot of the interface",
    )
    p(
        """
        You can combine any two items by clicking and dragging them into the
        crafting area...
        """
    )
    img(
        src="static/instruction-screenshots/inventory-screenshot.png",
        alt="Screenshot of combining items",
    )
    p("...then dropping one on top of the other.")
    div(
        img(
            src="static/instruction-screenshots/combination-screenshot.png",
            alt="Screenshot of combining items",
            style="max-width: 50%;",
        ),
        style="text-align: center;",
    )
    p(
        """
        Each item is either a
        """,
        strong("tool"),
        """
        or an
        """,
        strong("ingredient"),
        """. Tools have grey backgrounds and ingredients
        have white backgrounds. Tools can be used as many times as you want, but
        ingredients can only be used once.
        """,
    )

page2_chain = div()

with page2_chain:
    link(rel="stylesheet", href="/static/text-style.css")
    link(rel="stylesheet", href="/static/big-font.css")
    p(
        """
        You will play the game in 4 different settings for 10 rounds each. In each setting, you will have the
        """,
        strong("same tools"),
        """,
        but
        """,
        strong("different starting ingredients"),
        """. As you play the game,
        you will learn the rules that determine how items combine and how valuable
        each item is. These rules might be intuitive, but they might also be
        unintuitive, so you should try different combinations and see what
        happens.
        """,
    )
    p("Every ingredient has a value shown next to its name.")
    div(
        img(
            src="static/instruction-screenshots/value-screenshot.png",
            alt="Screenshot of the value",
            style="max-width: 50%;",
        ),
        style="text-align: center;",
    )
    p(
        """
        Your score in each round will be the value of the most valuable item you
        created. For example, if you had the two items below in your inventory,
        your score would be 16.
        """
    )
    div(
        img(
            src="static/instruction-screenshots/multiple-values-screenshot.png",
            alt="Screenshot of multiple items and their values",
            style="max-width: 66%;",
        ),
        style="text-align: center;",
    )
    p(
        """
        Your score can't go below 0, even if all of your items have negative
        values.
        """,
        strong("The maximum possible score is 100 in every round"),
        ".",
    )
    p(
        """
        Ingredients all have
        """,
        strong("features"),
        """ that determine how they
        combine with other ingredients and how valuable they are. These features
        change when you apply tools or combine them with other ingredients. You
        can see an ingredient's features by hovering over it with your mouse.
        """,
    )
    div(
        img(
            src="static/instruction-screenshots/features-screenshot.png",
            alt="Screenshot of an ingredient's features",
            style="max-width: 50%;",
        ),
        style="text-align: center;",
    )

page2_individual = div()
with page2_individual:
    link(rel="stylesheet", href="/static/text-style.css")
    link(rel="stylesheet", href="/static/big-font.css")
    p(
        """
        You will play the game for 40 rounds with the
        """,
        strong("same tools"),
        """,
        but
        """,
        strong("different starting ingredients"),
        """. As you play the game,
        you will learn the rules that determine how items combine and how valuable
        each item is. These rules might be intuitive, but they might also be
        unintuitive, so you should try different combinations and see what
        happens.
        """,
    )
    p("Every ingredient has a value shown next to its name.")
    div(
        img(
            src="static/instruction-screenshots/value-screenshot.png",
            alt="Screenshot of the value",
            style="max-width: 50%;",
        ),
        style="text-align: center;",
    )
    p(
        """
        Your score in each round will be the value of the most valuable item you
        created. For example, if you had the two items below in your inventory,
        your score would be 16.
        """
    )
    div(
        img(
            src="static/instruction-screenshots/multiple-values-screenshot.png",
            alt="Screenshot of multiple items and their values",
            style="max-width: 66%;",
        ),
        style="text-align: center;",
    )
    p(
        """
        Your score can't go below 0, even if all of your items have negative
        values.
        """,
        strong("The maximum possible score is 100 in every round"),
        ".",
    )
    p(
        """
        Ingredients all have
        """,
        strong("features"),
        """ that determine how they
        combine with other ingredients and how valuable they are. These features
        change when you apply tools or combine them with other ingredients. You
        can see an ingredient's features by hovering over it with your mouse.
        """,
    )
    div(
        img(
            src="static/instruction-screenshots/features-screenshot.png",
            alt="Screenshot of an ingredient's features",
            style="max-width: 50%;",
        ),
        style="text-align: center;",
    )

page3_chain = div()

with page3_chain:
    link(rel="stylesheet", href="/static/text-style.css")
    link(rel="stylesheet", href="/static/big-font.css")
    p(
        """
        Before starting each setting, you will read a message from a previous participant who played in that setting. After playing in that setting, you will be asked to
        """,
        strong("write a message"),
        """ to help the next participant do well. The message can contain whatever you want, and it should help the person reading it do well at the game.
        """,
    )
    p(
        """
        Your bonus will depend on both your scores and the scores of the person
        who reads your message.
        """
    )
    p('When you are ready, click the "Start" button to play a practice game.')
    p("Good luck!")


page3_individual = div()

with page3_individual:
    link(rel="stylesheet", href="/static/text-style.css")
    link(rel="stylesheet", href="/static/big-font.css")
    p(
        """
        When you are done playing the game, you will be asked to
        """,
        strong("write a message"),
        """ that would be helpful to a future participant playing the same game. The message can contain whatever you want, and it should help the person reading it do well at the game.
        """,
    )
    p('When you are ready, click the "Start" button to play a practice game.')
    p("Good luck!")


def Instructions():
    return Module(
        "instructions",
        join(
            InfoPage(page1, time_estimate=15),
            conditional(
                "show_message_passing_page",
                condition=lambda participant, experiment: participant.var.condition
                == "chain",
                logic_if_true=join(
                    InfoPage(page2_chain, time_estimate=15),
                    InfoPage(page3_chain, time_estimate=15),
                ),
                logic_if_false=join(
                    InfoPage(page2_individual, time_estimate=15),
                    InfoPage(page3_individual, time_estimate=15),
                ),
            ),
        ),
    )
