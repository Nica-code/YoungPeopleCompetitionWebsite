import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Privacy notice",
  "Read the privacy status of the informational YPC website and the requirements for any future application system involving minors.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy"
        title="Collect less. Protect what matters."
        intro="This is a draft operational notice for organizer review, not a substitute for legal advice. The current informational site contains no YPC registration form and intentionally requests no applicant data."
        current="Privacy"
      />
      <section className="section section-paper section-first">
        <div className="container legal-layout">
          <aside>
            <p>Draft status</p>
            <strong>Organizer and counsel review required</strong>
          </aside>
          <article className="legal-prose">
            <h2>Current website</h2>
            <p>
              YPC does not intentionally collect names, email addresses,
              application materials, payment information, or information about
              minors through this first release. No YPC analytics product,
              advertising tracker, newsletter form, or contact form is
              configured.
            </p>
            <p>
              The site is intended for static hosting. The hosting provider may
              process ordinary technical request data under its own terms and
              privacy practices.
            </p>

            <h2>Future applications</h2>
            <p>
              Before an application form is introduced, organizers must approve
              a specific privacy notice that identifies the responsible entity,
              purpose of collection, required and optional fields, retention
              period, access controls, service providers, contact route, and
              deletion/correction process.
            </p>

            <h2>Applicants who are minors</h2>
            <p>
              The future form should minimize data, collect parent or guardian
              information where required, separate participation consent from
              media permission, and avoid public exposure of applicant records.
              Uploaded files must be private and available only to authorized
              staff and adjudicators.
            </p>

            <h2>Payment information</h2>
            <p>
              The website must never collect a bank password or represent a
              Zelle transfer as automatically verified. Staff should record
              only the minimum reconciliation details needed to match a payment
              to an application ID.
            </p>

            <h2>Questions</h2>
            <p>
              A privacy contact will be added after organizers approve the
              public YPC email address. Until then, do not send personal
              information through an unofficial channel.
            </p>
            <Link className="text-link" href="/contact">
              View contact status <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
