from dominate.tags import div, p, h1, strong, em, a, strong, img

from psynet.page import InfoPage
from psynet.timeline import Module, join

page1 = div()

with page1:
    p(
        """
        In this experiment, you will play a game where you craft items together
        and discover new items. The game interface looks like this:
        """
    )

    div(
        img(src="static/instruction-screenshots/overview.png", alt=""),
        style="text-align: center;",
    )

    p(
        """
        In the game, you have an inventory of items that you can combine together
        to discover new items. You will start with a few basic items and will
        discover more items as you play. You can think of combining items as putting them together, using one item
        on the other, or using one in the context of the other.
        """
    )

    p(
        """
        To craft two items together, first drag one item from your inventory to
        the crafting area in the center of the board...
        """,
    )

    div(
        img(src="static/instruction-screenshots/crafting-step1.png", alt=""),
        style="text-align: center;",
    )

    p(
        """
        ...then drag the second item onto it. Those items will then be combined
        into a new item.
        """
    )

    div(
        img(src="static/instruction-screenshots/crafting-step2.png", alt=""),
        style="text-align: center;",
    )

    p(
        """
        If two items do not combine together, they will create junk. Junk has no value and cannot be combined with other items.
        """
    )

    p(
        """
        Every item you discover has a value. Some items have higher values than
        others. Items that take more steps to discover tend to be of higher value.
        Your goal is to maximize the values of the items you combine. You only get
        to craft a limited number of combinations, so you probably can't discover
        everything.
        """
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
        You will earn a
        """,
        strong("bonus"),
        """
        that depends on the total value of the items you discover. The higher the
        total value, the higher your bonus will be.
        """,
    )


page2 = div()

with page2:
    p(
        """
        Luckily, you don't have to discover everything yourself! Before you play
        the game, you will read a message from a previous participant who played
        the same game as you.
        """
    )

    p(
        """
        After you have finished the game, you will write a message to help the
        next participant.
        """
    )

    p(
        """
        You will earn another bonus based on how well the participant who reads
        your message does in the game, so make sure to write helpful messages!
        """
    )

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
            InfoPage(page2, time_estimate=5),
        ),
    )

    return InfoPage(html, time_estimate=15)