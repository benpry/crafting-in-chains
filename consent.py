from dominate.tags import div, p, h1, strong, em, a

from psynet.consent import NoConsent
from psynet.modular_page import ModularPage, CheckboxControl
from psynet.timeline import Module, join

time_estimate_min = 10
base_payment = 2
max_bonus = 1

consent_form = div()

with consent_form:
    h1("CONSENT")

    p(
        em(
            "Please read the following text and select 'Agree' if you consent to these terms."
        )
    )

    p(
        strong("DESCRIPTION:"),
        """
        You are invited to participate in a research
        study on human reasoning. We will ask you to answer a series of questions in
        order to learn how people reason. You will be asked to think about problems
        and answer by pressing buttons or writing text. Participation in this research
        is voluntary, and you are free to withdraw your consent at any time.
        """,
    )
    p(
        strong("TIME INVOLVEMENT:"),
        f"""
        Your participation will take approximately {time_estimate_min} minutes.
        """,
    )

    p(
        strong("PAYMENTS:"),
        f"""
        You will receive ${base_payment} as payment for
        your participation, as well as a bonus of up to ${max_bonus} depending on your
        performance.
        """,
    )

    p(
        strong("PRIVACY AND CONFIDENTIALITY:"),
        """
        The risks associated with this
        study are minimal. Study data will be stored securely, in compliance with
        Stanford University standards, minimizing the risk of confidentiality breach.
        Your individual privacy will be maintained during the research and in all
        published and written data resulting from the study.
        """,
    )

    p(strong("CONTACT INFORMATION:"))

    p(
        strong("Questions:"),
        """If you have any questions, concerns or complaints
        about this research, its procedures, risks and benefits, contact""",
        strong("Ben Prystawski"),
        a("benpry@stanford.edu", href="mailto://benpry@stanford.edu"),
        """or the Protocol Director, Noah Goodman (ngoodman@stanford.edu).
        """,
    )

    p(
        strong("Independent Contact:"),
        """
        If you are not satisfied with how this
        study is being conducted, or if you have any concerns, complaints, or general
        questions about the research or your rights as a participant, please contact
        the Stanford Institutional Review Board (IRB) to speak to someone independent
        of the research team at 650-723-2480 or toll free at 1-866-680-2906, or email
        at irbnonmed@stanford.edu. You can also write to the Stanford IRB, Stanford
        University, 1705 El Camino Real, Palo Alto, CA 94306.
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
        ),
    ),
)
