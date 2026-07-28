import type { Metadata } from "next";
import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";
import {
  applicationSteps,
  currentEdition,
  displayFact,
  faqs,
  historyMilestones,
  participantBenefits,
  partners,
  siteConfig,
  winners,
} from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

const homeMetadata = pageMetadata(
  "Young People’s Competition in Huntington, West Virginia",
  "Meet YPC: a regional music competition connected to Huntington’s more-than-six-decade Young People’s Concert tradition.",
  "/",
);

export const metadata: Metadata = {
  ...homeMetadata,
  title: {
    absolute: "YPC — Young People’s Competition | Huntington, West Virginia",
  },
};

export default function Home() {
  const featuredWinner = winners[0];

  return (
    <>
      <section className="home-hero">
        <div className="hero-atmosphere" aria-hidden="true">
          <span className="hero-light" />
          <span className="hero-stage-line hero-stage-line-one" />
          <span className="hero-stage-line hero-stage-line-two" />
          <span className="hero-stage-line hero-stage-line-three" />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">{siteConfig.location}</p>
            <h1>Your moment with the orchestra begins here.</h1>
            <p className="hero-lede">
              YPC invites the region’s young musicians to prepare, be heard,
              and pursue the opportunity to step from solo practice into live
              orchestral performance.
            </p>
            <div className="button-row">
              <Link className="button button-accent" href="/apply">
                Prepare to apply
              </Link>
              <Link className="text-link text-link-light" href="/competition">
                View competition details <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <aside className="edition-panel" aria-label="Next competition details">
            <div className="edition-panel-head">
              <p>{currentEdition.title}</p>
              <StatusBadge status="pending" />
            </div>
            <dl>
              {currentEdition.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{displayFact(fact)}</dd>
                </div>
              ))}
            </dl>
            <p className="edition-note">
              {currentEdition.notice}{" "}
              <Link href="/contact">See what organizers still need to confirm.</Link>
            </p>
          </aside>
        </div>
        <div className="hero-cue" aria-hidden="true">
          <span>Scroll to explore</span>
          <i />
        </div>
      </section>

      <section className="credibility-strip" aria-labelledby="presented-heading">
        <div className="container credibility-grid">
          <div>
            <p className="section-kicker" id="presented-heading">
              A Huntington music tradition
            </p>
            <p className="credibility-statement">
              Historically sponsored by the Woman’s Club of Huntington and
              performed with Marshall University ensembles.
            </p>
          </div>
          <div className="partner-wordmarks" aria-label="Organizations">
            {partners.map((partner) => (
              <div key={partner.name}>
                <span>{partner.name}</span>
                <StatusBadge status={partner.status} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Why participate</p>
              <h2 id="why-heading">A serious opportunity, close to home.</h2>
            </div>
            <p>
              The strongest competition experience is not built on grand
              promises. It gives musicians a clear reason to prepare and a
              meaningful place to perform.
            </p>
          </div>
          <div className="benefit-grid">
            {participantBenefits.map((benefit) => (
              <article className="benefit-item" key={benefit.number}>
                <p className="benefit-number">{benefit.number}</p>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section-ivory"
        aria-labelledby="essentials-heading"
      >
        <div className="container essentials-grid">
          <div className="essentials-lead">
            <p className="eyebrow">Competition essentials</p>
            <h2 id="essentials-heading">
              Know the requirements before you choose your repertoire.
            </h2>
            <p>
              Official rules will live on the website—not only in a PDF—so
              students, families, teachers, and accompanists can find the same
              current answer.
            </p>
            <Link className="text-link" href="/competition">
              Explore all requirements <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="decision-list">
            {[
              ["Who may enter", "Age, grade, and geographic limits are pending."],
              [
                "What may be performed",
                "Instrument, voice, repertoire, and duration rules are pending.",
              ],
              [
                "How auditions work",
                "Venue, format, judges, accompaniment, and scheduling are pending.",
              ],
              [
                "What the winner receives",
                "Historical soloist opportunities are documented; the next award is pending.",
              ],
            ].map(([title, text], index) => (
              <div className="decision-item" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="signature-section" aria-labelledby="signature-heading">
        <div className="signature-visual" aria-hidden="true">
          <span className="spotlight" />
          <span className="soloist-mark" />
          <span className="orchestra-arc orchestra-arc-one" />
          <span className="orchestra-arc orchestra-arc-two" />
          <span className="orchestra-arc orchestra-arc-three" />
        </div>
        <div className="container signature-content">
          <p className="eyebrow eyebrow-light">The signature experience</p>
          <h2 id="signature-heading">One musician. An orchestra listening.</h2>
          <p>
            Competition day asks for concentration: a prepared selection, a
            clear musical point of view, and the courage to share it. The
            concert changes the scale. A solo line becomes part of something
            larger—heard by an orchestra, a hall, and a new generation of
            listeners.
          </p>
          <Link className="text-link text-link-light" href="/about">
            Read the YPC story <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="legacy-heading">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">History & legacy</p>
              <h2 id="legacy-heading">More than six decades of listening.</h2>
            </div>
            <p>
              The record connects civic leadership, Marshall University
              musicians, regional schools, and competition winners. An exact
              founding year awaits archive confirmation.
            </p>
          </div>
          <ol className="timeline-preview">
            {historyMilestones.slice(0, 4).map((milestone) => (
              <li key={milestone.year}>
                <span>{milestone.year}</span>
                <div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="section-action">
            <Link className="button button-outline" href="/about">
              Explore the documented history
            </Link>
          </div>
        </div>
      </section>

      <section className="section winner-feature" aria-labelledby="winner-heading">
        <div className="container winner-feature-grid">
          <div className="winner-portrait-placeholder" aria-hidden="true">
            <span className="portrait-year">{featuredWinner.year}</span>
            <span className="portrait-initials">IB</span>
            <p>Portrait pending publication permission</p>
          </div>
          <div className="winner-feature-copy">
            <p className="eyebrow">Most recent winner currently verified</p>
            <h2 id="winner-heading">{featuredWinner.name}</h2>
            <p className="winner-instrument">{featuredWinner.instrument}</p>
            <p className="winner-summary">
              Marshall University reported that Isaiah performed with the
              university symphony in the 62nd Young People’s Concert in 2023,
              attended by Cabell County fifth graders.
            </p>
            <div className="source-caption">
              <span>Source</span>
              <a
                href={featuredWinner.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                {featuredWinner.sourceTitle}
              </a>
            </div>
            <Link className="text-link" href="/winners">
              Visit the verified archive <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-ivory" aria-labelledby="apply-heading">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">How to apply</p>
              <h2 id="apply-heading">A clear path, with no false confirmations.</h2>
            </div>
            <p>
              The planned process separates form submission, payment review,
              and final completion so every family knows exactly what has
              happened.
            </p>
          </div>
          <ol className="application-steps">
            {applicationSteps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="section-action">
            <Link className="button button-dark" href="/apply">
              Review the application plan
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="faq-heading">
        <div className="container faq-preview-grid">
          <div>
            <p className="eyebrow">Questions, answered plainly</p>
            <h2 id="faq-heading">Start with what matters most.</h2>
            <p className="section-copy">
              Pending facts are labeled instead of guessed. As organizers
              approve each detail, the same answer updates everywhere.
            </p>
            <Link className="text-link" href="/faq">
              View every question <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="faq-list">
            {faqs.slice(0, 5).map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <div>
                  <StatusBadge status={faq.status} />
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-atmosphere" aria-hidden="true" />
        <div className="container final-cta-grid">
          <div>
            <p className="eyebrow eyebrow-light">Prepare now</p>
            <h2>Choose the music. Build the performance. Watch for the date.</h2>
          </div>
          <div>
            <p>
              Applications will open only after the next edition’s rules, fee,
              venue, and payment instructions are confirmed.
            </p>
            <div className="button-row">
              <Link className="button button-accent" href="/apply">
                See application readiness
              </Link>
              <Link className="text-link text-link-light" href="/contact">
                Contact & updates <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
