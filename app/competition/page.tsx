import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { StatusBadge } from "@/components/StatusBadge";
import {
  currentEdition,
  displayFact,
  faqs,
  siteConfig,
} from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Competition details",
  "Read the current status of YPC eligibility, repertoire, auditions, dates, awards, application materials, and policies.",
  "/competition",
);

const ruleGroups = [
  {
    title: "Eligibility",
    text: "Age or grade range, geographic limits, prior-winner eligibility, and repeat-entry rules.",
  },
  {
    title: "Instruments & voice",
    text: "Eligible instruments, voice participation, divisions, and how categories are judged.",
  },
  {
    title: "Repertoire",
    text: "Permitted works, concerto-movement expectations, editions, cuts, and orchestral-parts availability.",
  },
  {
    title: "Performance length",
    text: "Minimum and maximum time, timing procedure, and whether judges may stop a performance.",
  },
  {
    title: "Memorization",
    text: "Whether memorization is required by category and what exceptions may apply.",
  },
  {
    title: "Accompanists",
    text: "Who provides an accompanist, rehearsal expectations, and whether unaccompanied works are permitted.",
  },
  {
    title: "Audition format",
    text: "Live or recorded rounds, check-in, warm-up, public access, scheduling, and accessibility.",
  },
  {
    title: "Adjudication",
    text: "Judging panel, criteria, conflicts policy, feedback, ties, results, and finality of decisions.",
  },
] as const;

export default function CompetitionPage() {
  return (
    <>
      <PageIntro
        eyebrow="Competition"
        title="Practical details, without the fine-print maze."
        intro="The web page will be the accessible source of truth for the next edition. Until the rules are approved, every operational field remains visibly marked for confirmation."
        current="Competition"
      >
        <p className="last-updated">
          Last updated <time dateTime="2026-07-28">{siteConfig.researchUpdated}</time>
        </p>
      </PageIntro>

      <section className="section section-paper section-first">
        <div className="container">
          <div className="notice-panel notice-important">
            <div>
              <p className="notice-label">Applications are not open</p>
              <h2>Do not use rules from a previous year.</h2>
            </div>
            <p>
              {currentEdition.notice} This page is ready to receive the approved
              information without a redesign.
            </p>
          </div>

          <div className="fact-grid" aria-label="Next competition facts">
            {currentEdition.facts.map((fact) => (
              <div className="fact-card" key={fact.label}>
                <p>{fact.label}</p>
                <strong>{displayFact(fact)}</strong>
                <span>{fact.placeholder}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ivory" aria-labelledby="overview-heading">
        <div className="container content-split">
          <div className="sticky-heading">
            <p className="eyebrow">Overview</p>
            <h2 id="overview-heading">What the next rules must establish.</h2>
            <p>
              Essential eligibility and deadline information will remain
              visible. Longer policies may use disclosure controls, but no
              applicant should need to download a PDF to decide whether to
              enter.
            </p>
          </div>
          <div className="rule-grid">
            {ruleGroups.map((group) => (
              <article className="rule-card" key={group.title}>
                <div className="rule-card-head">
                  <h3>{group.title}</h3>
                  <StatusBadge status="pending" />
                </div>
                <p>{group.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="dates-heading">
        <div className="container content-split">
          <div className="sticky-heading">
            <p className="eyebrow">Important dates</p>
            <h2 id="dates-heading">One sequence, stated in plain language.</h2>
            <p>
              Dates will be stored in machine-readable form and displayed with
              the time zone when a time matters.
            </p>
          </div>
          <div className="date-list">
            {[
              ["Application opens", "[APPLICATION OPEN DATE]"],
              ["Application deadline", "[APPLICATION DEADLINE + TIME ZONE]"],
              ["Schedule released", "[SCHEDULE NOTIFICATION DATE]"],
              ["Competition", "[COMPETITION DATE]"],
              ["Results announced", "[RESULTS DATE]"],
              ["Winner rehearsal", "[REHEARSAL DATE]"],
              ["Young People’s Concert", "[CONCERT DATE]"],
            ].map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" aria-labelledby="materials-heading">
        <div className="container content-split">
          <div className="sticky-heading">
            <p className="eyebrow eyebrow-light">Application materials</p>
            <h2 id="materials-heading">Prepare once. Submit with confidence.</h2>
          </div>
          <div className="checklist-panel">
            <p className="checklist-intro">
              The final checklist is pending. The system is prepared to support
              only materials that organizers confirm are operationally
              necessary.
            </p>
            <ul className="check-list">
              {[
                "Applicant and parent/guardian contact information",
                "School, grade or age, and hometown",
                "Instrument or voice category",
                "Teacher and accompanist information",
                "Composer, work, movement, edition, and duration",
                "Proof of age or residency only if required",
                "Consent, privacy acknowledgment, and media preference",
                "Entry fee and application ID memo",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="policies-heading">
        <div className="container faq-preview-grid">
          <div>
            <p className="eyebrow">Policies & questions</p>
            <h2 id="policies-heading">Secondary detail, still easy to reach.</h2>
            <p className="section-copy">
              Refunds, schedule changes, consent, photography, and orchestral
              feasibility require explicit organizer decisions.
            </p>
            <Link className="text-link" href="/faq">
              Read the complete FAQ <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="faq-list">
            {faqs.slice(0, 6).map((faq) => (
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

      <section className="compact-cta">
        <div className="container compact-cta-inner">
          <div>
            <p className="eyebrow eyebrow-light">Next step</p>
            <h2>Understand the application and payment stages.</h2>
          </div>
          <Link className="button button-accent" href="/apply">
            Review how to apply
          </Link>
        </div>
      </section>
    </>
  );
}
