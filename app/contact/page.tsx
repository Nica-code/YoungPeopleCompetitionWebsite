import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { partners, siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Contact and organizer decisions",
  "Find the current YPC contact status and the decisions organizers must approve before applications can open.",
  "/contact",
);

const organizerDecisions = [
  "Official competition name and presenting entity",
  "Current roles for every partner organization",
  "Application opening date and deadline",
  "Competition and concert dates",
  "Eligible ages or grades and geographic area",
  "Eligible instruments, voice, and divisions",
  "Repertoire, duration, memorization, and parts rules",
  "Accompanist responsibilities",
  "Audition venue, format, access, and schedule",
  "Judges, criteria, feedback, and results process",
  "Entry fee, refund policy, prize, and winner opportunity",
  "Official application form",
  "Approved Zelle recipient and reconciliation owner",
  "Public contact email and response expectations",
  "Minor consent, privacy, and data-retention policies",
  "Media-release choices",
  "Winner-publication permissions",
  "Authorized logos, photographs, programs, and video",
] as const;

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="One official contact point—once the organizer approves it."
        intro="A public YPC email address has not been verified for this release. The site avoids publishing a personal address from a directory or inventing a contact form that cannot deliver."
        current="Contact"
      />

      <section className="section section-paper section-first">
        <div className="container contact-status-grid">
          <div className="contact-status-card contact-status-primary">
            <p className="eyebrow eyebrow-light">YPC contact</p>
            <h2>Awaiting organizer confirmation</h2>
            <p>
              Placeholder: <code>[CONTACT EMAIL]</code>
            </p>
            <span className="button button-disabled button-disabled-light" aria-disabled="true">
              Email address not yet published
            </span>
          </div>
          <div className="contact-status-card">
            <p className="eyebrow">Application questions</p>
            <h2>Hold submissions and payments.</h2>
            <p>
              Applications are closed. Do not send applicant information,
              identity documents, repertoire files, or fees until this site
              publishes an official route.
            </p>
          </div>
          <div className="contact-status-card">
            <p className="eyebrow">Research & archive</p>
            <h2>Build the record with permission.</h2>
            <p>
              Marshall Special Collections is the logical institutional source
              for reconciling editions, programs, and historical winners.
            </p>
            <a
              className="text-link"
              href="https://mds.marshall.edu/sc_finding_aids/169/"
              target="_blank"
              rel="noreferrer"
            >
              View the finding aid <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section section-ivory" aria-labelledby="decisions-heading">
        <div className="container content-split">
          <div className="sticky-heading">
            <p className="eyebrow">Organizer checklist</p>
            <h2 id="decisions-heading">Decisions required before applications open.</h2>
            <p>
              Once these fields are approved, they can be entered in the
              central content file and update the full website.
            </p>
          </div>
          <ol className="decision-checklist">
            {organizerDecisions.map((decision, index) => (
              <li key={decision}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{decision}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="institution-contact-heading">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Institutional websites</p>
              <h2 id="institution-contact-heading">Verified public destinations.</h2>
            </div>
            <p>
              These links are for institution-level information. They are not a
              substitute for a confirmed YPC application contact.
            </p>
          </div>
          <div className="institution-links">
            {partners.map((partner) => (
              <a
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                key={partner.name}
              >
                <span>{partner.name}</span>
                <i aria-hidden="true">↗</i>
              </a>
            ))}
          </div>
          <p className="contact-updated">
            Contact status reviewed {siteConfig.researchUpdated}.
          </p>
        </div>
      </section>
    </>
  );
}
