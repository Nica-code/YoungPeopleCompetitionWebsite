import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import {
  applicationStatuses,
  applicationSteps,
  currentEdition,
} from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Apply",
  "Prepare for the Young People’s Competition and understand the planned application, Zelle payment review, and confirmation stages.",
  "/apply",
);

export default function ApplyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Apply"
        title="Preparation can begin before the form opens."
        intro="The application is intentionally closed while organizers confirm eligibility, repertoire, fee, venue, privacy terms, and the approved payment recipient."
        current="Apply"
      >
        <span className="button button-disabled" aria-disabled="true">
          Application not yet available
        </span>
      </PageIntro>

      <section className="section section-paper section-first">
        <div className="container">
          <div className="notice-panel notice-important">
            <div>
              <p className="notice-label">Current status</p>
              <h2>Planning, not accepting entries.</h2>
            </div>
            <p>
              {currentEdition.notice} No applicant information or payment
              should be sent until an official form and recipient are published
              here.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-ivory" aria-labelledby="process-heading">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Application sequence</p>
              <h2 id="process-heading">Six stages. Two distinct confirmations.</h2>
            </div>
            <p>
              “Application received” means the form arrived. “Application
              complete” means staff has also verified payment and required
              materials.
            </p>
          </div>
          <ol className="application-steps application-steps-large">
            {applicationSteps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="checklist-heading">
        <div className="container content-split">
          <div className="sticky-heading">
            <p className="eyebrow">Readiness checklist</p>
            <h2 id="checklist-heading">What to have ready.</h2>
            <p>
              Final requirements may change. This checklist reflects the
              minimum structure planned for a responsible application.
            </p>
          </div>
          <div className="checklist-columns">
            <div>
              <h3>Musical details</h3>
              <ul className="check-list check-list-dark">
                <li>Instrument or voice category</li>
                <li>Composer, title, movement, and edition</li>
                <li>Accurate performance duration</li>
                <li>Teacher and accompanist information</li>
                <li>Orchestral-parts availability if requested</li>
              </ul>
            </div>
            <div>
              <h3>Applicant details</h3>
              <ul className="check-list check-list-dark">
                <li>Minimum necessary contact information</li>
                <li>Eligibility information</li>
                <li>Parent or guardian consent for minors</li>
                <li>Separate media-release preference</li>
                <li>Entry fee only after official instructions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="payment-section" aria-labelledby="payment-heading">
        <div className="container payment-grid">
          <div>
            <p className="eyebrow eyebrow-light">Zelle, described honestly</p>
            <h2 id="payment-heading">A transfer is not an automatic confirmation.</h2>
            <p>
              If Zelle is approved, the website will issue an application ID
              such as <code>YPC-2027-A7K4</code>. The applicant will use that
              ID in the memo. An authorized administrator will match and verify
              the transfer before the application becomes complete.
            </p>
          </div>
          <div className="payment-truths">
            <div>
              <span>01</span>
              <p>The site will publish one approved recipient.</p>
            </div>
            <div>
              <span>02</span>
              <p>Clicking “payment sent” will never mark a record paid.</p>
            </div>
            <div>
              <span>03</span>
              <p>Staff verification triggers the completion email.</p>
            </div>
            <div>
              <span>04</span>
              <p>The future data model can support a different provider.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="status-heading">
        <div className="container content-split">
          <div className="sticky-heading">
            <p className="eyebrow">Application status</p>
            <h2 id="status-heading">Language families can trust.</h2>
            <p>
              Each status represents a real operational state. Staff changes
              will be logged in a future secure system.
            </p>
          </div>
          <ol className="status-flow">
            {applicationStatuses.map((status, index) => (
              <li key={status}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <code>{status}</code>
                <p>
                  {status === "complete"
                    ? "All required materials and payment have been verified."
                    : status === "payment_under_review"
                      ? "Staff is matching the transfer to the application ID."
                      : status === "submitted"
                        ? "The form has been received; completion is not yet confirmed."
                        : "A supported state for transparent application handling."}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="compact-cta">
        <div className="container compact-cta-inner">
          <div>
            <p className="eyebrow eyebrow-light">Before applications open</p>
            <h2>Review the unanswered questions.</h2>
          </div>
          <Link className="button button-accent" href="/faq">
            Read the FAQ
          </Link>
        </div>
      </section>
    </>
  );
}
