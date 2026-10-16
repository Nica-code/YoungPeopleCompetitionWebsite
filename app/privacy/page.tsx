import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Privacy notice",
  "How the Young People’s Competition website handles applicant information.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy"
        title="Your privacy."
        intro="Applications are mailed to the competition chairperson, not submitted through this website."
        current="Privacy"
      />
      <section className="section section-paper section-first">
        <div className="container legal-layout">
          <aside><p>2027 applications</p><strong>By mail</strong></aside>
          <article className="legal-prose">
            <h2>Current website</h2>
            <p>
              This website has no online application, payment, newsletter, or contact form.
              The printable application can be filled in your browser, but its contents
              are not sent to or stored by this site. Paper applications are mailed
              directly to the competition chairperson.
            </p>
            <p>
              The site is intended for static hosting. The hosting provider may
              process ordinary technical request data under its own terms and
              privacy practices.
            </p>

            <h2>Applicants who are minors</h2>
            <p>
              Do not include additional sensitive information about a minor in
              an application unless the chairperson requests it.
            </p>

            <h2>Payment information</h2>
            <p>
              The 2027 notice requires a $30 check payable to Young People’s
              Concert Committee, mailed with the application. This website does
              not process or verify payments.
            </p>

            <h2>Questions</h2>
            <p>
              Contact chairperson Judith Short with privacy questions.
            </p>
            <Link className="text-link" href="/contact">
              Contact Judith Short <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
