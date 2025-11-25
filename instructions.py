from dominate.tags import div, img, link, p, strong
from psynet.page import InfoPage
from psynet.timeline import Module, join

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

page2 = div()

with page2:
    link(rel="stylesheet", href="/static/text-style.css")
    link(rel="stylesheet", href="/static/big-font.css")
    p(
        """
        You will play the game for several rounds. In each round, you will have the
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
        """
        You will earn a
        """,
        strong("bonus of up to $1"),
        """
        based on your performance.
        """,
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
    p(
        """
        You can take notes throughout the experiment using the scratchpad on the right side of the screen. The text in the scratchpad will stay from round to round.
        """
    )
    div(
        img(
            src="static/instruction-screenshots/scratchpad-screenshot.png",
            alt="Screenshot of the scratchpad",
            style="max-width: 70%;",
        ),
        style="text-align: center;",
    )
    p(
        """
        It is possible that one of your items might get stuck somewhere where you can't click it. If this happens, you can refresh the page and your inventory will be preserved.
        """
    )

    p('When you are ready, click the "Start" button to play a practice game.')

page3_chain = div()

with page3_chain:
    link(rel="stylesheet", href="/static/text-style.css")
    link(rel="stylesheet", href="/static/big-font.css")
    p(
        """
        Congratulations on completing the practice game!
        """
    )
    p(
        """
        You will now play the main game. You will play in 4 different settings for 10 rounds each. In each setting, you will have the
        """,
        strong("same tools"),
        """,
        but
        """,
        strong("different starting ingredients"),
        """ in each round.""",
    )
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
        who reads your message. If nobody reads your message, we will double your individual bonus.
        """
    )
    p("Good luck!")

page3_individual = div()

with page3_individual:
    link(rel="stylesheet", href="/static/text-style.css")
    link(rel="stylesheet", href="/static/big-font.css")
    p(
        """
        Congratulations on completing the practice game!
        """
    )
    p(
        """
        You will now play the main game for 40 rounds. In each round, you will have the
        """,
        strong("same tools"),
        """,
        but
        """,
        strong("different starting ingredients"),
    )
    p(
        """
        When you are done playing the game, you will be asked to
        """,
        strong("write a message"),
        """ that would be helpful to a future participant playing the same game. The message can contain whatever you want, and it should help the person reading it do well at the game.
        """,
    )
    p(
        """
        Your bonus will depend on both your scores and the scores of the person
        who reads your message. If nobody reads your message, we will double your individual bonus.
        """
    )
    p("Good luck!")


def BasicInstructions():
    return Module(
        "instructions",
        join(
            InfoPage(page1, time_estimate=15),
            InfoPage(page2, time_estimate=15),
        ),
    )


def ChainInstructions():
    return Module(
        "chain_instructions",
        InfoPage(page3_chain, time_estimate=15),
    )


def IndividualInstructions():
    return Module(
        "individual_instructions",
        InfoPage(page3_individual, time_estimate=15),
    )
