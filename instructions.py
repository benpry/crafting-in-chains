from dominate.tags import div, p, strong, img, link, span
from psynet.page import InfoPage
from psynet.timeline import Module, join, conditional

page1 = div()

with page1:
    link(rel="stylesheet", href="/static/text-style.css")
    link(rel="stylesheet", href="/static/big-font.css")
    p(
        """
        In this experiment, you will play a game where you craft items together
        and discover new items. The game interface looks like this:
        """
    )

    div(
        img(src="static/instruction-screenshots/overview-game.png", alt=""),
        style="text-align: center;",
    )

    p(
        """
        You have an inventory of items that you can combine together to discover new items.
        You will start with a few basic items and will discover more items as you play.
        You have infinite copies of the items in your inventory. You can think of combining
        items as putting them together, using one item on the other, or using one in the context
        of the other. You can combine
        """,
        strong("two different items"),
        """
        or
        """,
        strong("combine an item with itself."),
    )

    p(
        """
        To craft items together, first drag one item from your inventory to
        the crafting area in the center of the board...
        """,
    )

    div(
        img(
            src="static/instruction-screenshots/crafting-step1.png",
            alt="",
            style="max-width: 40ch;",
        ),
        style="text-align: center;",
    )

    p(
        """
        ...then drag the second item on top of it.
        """
    )

    div(
        img(
            src="static/instruction-screenshots/crafting-step2.png",
            alt="",
            style="max-width: 30ch;",
        ),
        style="text-align: center;",
    )

    p(
        """
        If the two items combine to make a new item, that item will be added to
        your inventory. If the items do not combine, they will shake left and right.
        """
    )

page2 = div()

with page2:
    link(rel="stylesheet", href="/static/text-style.css")
    link(rel="stylesheet", href="/static/big-font.css")
    p(
        """
        Every item you discover has a value. Items are colored by their value:
        basic
        """,
        span("(gray)", style="color: rgb(226 232 240);"),
        """
        common (white),
        uncommon
        """,
        span("(green)", style="color: rgb(134 239 172);"),
        """
        , rare
        """,
        span("(blue)", style="color: rgb(56 189 248);"),
        """
        , and legendary
        """,
        span("(purple)", style="color: rgb(167 139 250);"),
    )

    p(
        """
        You may discover more items than can fit on your screen at the same time.
        If that happens, you can
        """,
        strong("scroll down"),
        """
        to see more items.
        """,
    )

    p(
        """
        If the crafting area ever gets too crowded, you can press the
        """,
        strong("garbage"),
        """
        button to clear all the items from it.
        """,
    )

    div(
        img(
            src="static/instruction-screenshots/garbage-button.png",
            alt="",
            style="max-width: 30ch;",
        ),
        style="text-align: center;",
    )

    p(
        """
        You will earn a
        """,
        strong("bonus"),
        """
        that depends on the total value of all the items you discover. The higher the
        total value, the higher your bonus will be.
        """,
    )


chain_page = div()

with chain_page:
    link(rel="stylesheet", href="/static/text-style.css")
    link(rel="stylesheet", href="/static/big-font.css")
    p(
        """
        Luckily, you don't have to discover everything by yourself! Before you play
        the game, you will read a message from a previous participant who played
        the same game as you.
        """
    )

    p(
        """
        This message will continue to be visible on the left side of the game interface
        while you play.
        """
    )

    p(
        """
        After you have finished the game, you will write a message to help the
        next participant. That participant will read your message and see all the items
        you discovered.
        """
    )

    p(
        """
        While you play the game, you will be able to take notes using a scratchpad on the
        right side of the screen. These notes will still be visible while you are writing your
        message.
        """
    )

    img(src="static/instruction-screenshots/overview-full.png", alt="")

    p(
        """
        You will earn another bonus based on how well the participant who reads
        your message performs in the game, so make sure to write helpful messages!
        """
    )

    p(
        """
        Press 'Next' when you are ready to continue.
        """
    )


individual_page = div()

with individual_page:
    link(rel="stylesheet", href="/static/text-style.css")
    link(rel="stylesheet", href="/static/big-font.css")
    p(
        """
        While you play the game, you will be able to take notes using a scratchpad on the
        right side of the screen.
        """
    )

    img(src="static/instruction-screenshots/overview-scratchpad.png", alt="")

    p(
        """
        Press 'Next' when you are ready to continue.
        """
    )


def Instructions():
    return Module(
        "instructions",
        join(
            InfoPage(page1, time_estimate=15),
            InfoPage(page2, time_estimate=15),
            conditional(
                "show_message_passing_page",
                condition=lambda participant, experiment: participant.var.condition
                == "chain",
                logic_if_true=InfoPage(chain_page, time_estimate=15),
                logic_if_false=InfoPage(individual_page, time_estimate=15),
            ),
        ),
    )
