import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { applicationSteps } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Apply for the 2027 competition",
  "How to mail a 2027 Young People’s Competition application and $30 check by December 14, 2026.",
  "/apply",
);

const formFields = [
  ["Applicant name", "Email", "Phone"],
  ["Mailing address", "Grade", "School"],
  ["Teacher’s name", "Teacher’s email", "Teacher’s phone"],
  ["Teacher’s address", "Accompanist’s name"],
  ["Musical selection", "Composer", "Duration", "Instrument or voice"],
] as const;

export default function ApplyPage() {
  return (
    <>
      <PageIntro
        eyebrow="2027 application"
        title="Prepare your entry. Mail it by December 14."
        intro="The audition notice calls for a mailed application and a $30 check. This website does not accept submissions or payments online."
        current="Apply"
      >
        <a className="button button-accent" href="#application-details">See application details</a>
      </PageIntro>

      <section className="section section-paper section-first" id="application-details">
        <div className="container">
          <div className="notice-panel notice-important">
            <div><p className="notice-label">Received by Monday, December 14, 2026</p><h2>Send the application and check together.</h2></div>
            <p>Mail to Judith Short, 121 Elwood Avenue, Huntington, WV 25705. Make the $30 check payable to Young People’s Concert Committee. A postmark alone does not meet the “received by” deadline.</p>
          </div>
        </div>
      </section>

      <section className="section section-ivory" aria-labelledby="process-heading">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">How to enter</p><h2 id="process-heading">Five steps, from selection to check-in.</h2></div>
            <p>The requirements below come from the 2027 audition notice. For questions about your eligibility or repertoire, contact the chairperson before mailing your entry.</p>
          </div>
          <ol className="application-steps application-steps-large">
            {applicationSteps.map((step, index) => (
              <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.text}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="form-heading">
        <div className="container content-split">
          <div className="sticky-heading">
            <p className="eyebrow">Application details</p><h2 id="form-heading">What the notice asks you to provide.</h2>
            <p>The source document includes these fields. You can fill and print a paper version here; nothing is submitted online.</p>
            <Link className="button button-outline" href="/application-form">Open printable application</Link>
          </div>
          <div className="form-field-groups">
            {formFields.map((group, index) => (
              <div className="form-field-group" key={index}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <ul>{group.map((field) => <li key={field}>{field}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="payment-section" aria-labelledby="mail-heading">
        <div className="container payment-grid">
          <div>
            <p className="eyebrow eyebrow-light">Mailing instructions</p>
            <h2 id="mail-heading">One envelope. Two required items.</h2>
            <p>Include your completed application and a $30 check payable to <strong>Young People’s Concert Committee</strong>. Both must reach the address by December 14, 2026.</p>
          </div>
          <div className="mailing-card">
            <p className="mailing-card-label">Mail to</p>
            <address>Judith Short<br />121 Elwood Avenue<br />Huntington, WV 25705</address>
            <p>The supplied notice does not list an online form, electronic payment method, or refund policy.</p>
          </div>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="audition-heading">
        <div className="container content-split">
          <div className="sticky-heading">
            <p className="eyebrow">After you apply</p><h2 id="audition-heading">Be ready for audition day.</h2>
            <p>Sunday, January 10, 2027 at Smith Music Hall, Marshall University.</p>
          </div>
          <div className="checklist-columns">
            <div><h3>Check-in · 12:15 p.m.</h3><p>Soloist and accompanist must both check in by this time. Late arrivals cannot audition.</p></div>
            <div><h3>Auditions · 12:30 p.m.</h3><p>Perform your memorized selection with a well-qualified accompanist. The music may last no more than 12 minutes.</p></div>
          </div>
        </div>
      </section>

      <section className="compact-cta">
        <div className="container compact-cta-inner">
          <div><p className="eyebrow eyebrow-light">Questions before mailing?</p><h2>Ask the competition chairperson.</h2></div>
          <Link className="button button-accent" href="/contact">Contact Judith Short</Link>
        </div>
      </section>
    </>
  );
}
