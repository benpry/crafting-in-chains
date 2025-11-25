from dominate.tags import a, div, h1, p, strong
from psynet.consent import NoConsent
from psynet.modular_page import CheckboxControl, ModularPage
from psynet.timeline import Module, join

time_estimate_min = 30
base_payment = 6
max_bonus = 2

consent_form = div()

with consent_form:
    h1("CONSENT")

    p(
        strong("DESCRIPTION:"),
        """ You are invited to participate in a research study on human
        learning and communication. You will be asked to play a game and
        possibly send messages to other participants about the game.
        """,
    )

    p(
        strong("TIME INVOLVEMENT:"),
        f"""
        Your participation will take approximately {time_estimate_min} minutes.
        """,
    )

    p(
        strong("RISKS AND BENEFITS:"),
        """ If you communicate personally-identifiable
        information to another participant, then the researchers and recipient
        of the message will have that information. It is possible that
        information study data could be leaked in a data breach. Study data will
        be stored securely, in compliance with Stanford University standards,
        minimizing the risk of confidentiality breach. We cannot and do not
        guarantee or promise that you will receive any benefits from this study.
        """,
    )

    p(
        strong("PAYMENTS:"),
        f"""
        You will receive ${base_payment} as payment for your
        participation, as well as a bonus of up to ${max_bonus} depending on your
        performance.
        """,
    )

    p(
        strong("PARTICIPANT'S RIGHTS:"),
        """ If you have read this form and have decided to
        participate in this project, please understand your participation is
        voluntary and you have the right to withdraw your consent or discontinue
        participation at any time without penalty or loss of benefits to which
        you are otherwise entitled. The alternative is not to participate. You
        have the right to refuse to answer particular questions. The results of
        this research study may be presented at scientific or professional
        meetings or published in scientific journals. Your individual privacy
        will be maintained in all published and written data resulting from the
        study.
        """,
    )

    p(
        strong("PRIVACY AND CONFIDENTIALITY:"),
        """ The risks associated with this study are
        minimal. Study data will be stored securely, in compliance with Stanford
        University standards, minimizing the risk of confidentiality breach.
        Your individual privacy will be maintained during the research and in
        all published and written data resulting from the study.
        """,
    )

    p(strong("CONTACT INFORMATION:"))

    p(
        strong("Questions:"),
        """ If you have any questions, concerns or complaints about this
        research, its procedures, risks and benefits, contact """,
        strong("Ben Prystawski"),
        " (",
        a("benpry@stanford.edu", href="mailto://benpry@stanford.edu"),
        ") or the Protocol Director, Noah Goodman (ngoodman@stanford.edu).",
    )

    p(
        strong("Independent Contact:"),
        """ If you are not satisfied with how this study is
        being conducted, or if you have any concerns, complaints, or general
        questions about the research or your rights as a participant, please
        contact the Stanford Institutional Review Board (IRB) to speak to
        someone independent of the research team at 650-723-2480 or toll free at
        1-866-680-2906, or email at irbnonmed@stanford.edu. You can also write
        to the Stanford IRB, Stanford University, 1705 El Camino Real, Palo
        Alto, CA 94306.
        """,
    )

    p("Please save or print a copy of this page for your records.")

    p('If you agree to participate in this research, please click "I agree" below.')


consent = Module(
    "consent",
    join(
        NoConsent(),
        ModularPage(
            "consent_form",
            consent_form,
            CheckboxControl(
                choices=["I agree"],
                force_selection=True,
            ),
            time_estimate=10,
            bot_response=lambda: '["I agree"]',
        ),
    ),
)
