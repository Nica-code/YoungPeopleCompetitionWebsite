import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Accessibility",
  "Learn about the accessibility approach, current features, and known limitations of the YPC website.",
  "/accessibility",
);

export default function AccessibilityPage() {
  return (
    <>
      <PageIntro
        eyebrow="Accessibility"
        title="The competition should be understandable before it is impressive."
        intro="YPC targets WCAG 2.2 Level AA and treats accessibility as part of the applicant experience, not a final compliance pass."
        current="Accessibility"
      />
      <section className="section section-paper section-first">
        <div className="container legal-layout">
          <aside>
            <p>Current target</p>
            <strong>WCAG 2.2 AA</strong>
          </aside>
          <article className="legal-prose">
            <h2>Features in this release</h2>
            <ul>
              <li>Semantic page landmarks and a logical heading structure</li>
              <li>A skip link and visible keyboard focus</li>
              <li>Keyboard-operable navigation and native FAQ disclosures</li>
              <li>High-contrast text and non-color status labels</li>
              <li>Responsive layouts with practical touch targets</li>
              <li>Reduced-motion support</li>
              <li>No autoplay audio, autoplay video, or scroll-jacking</li>
              <li>Descriptive links and source labels</li>
            </ul>

            <h2>Future registration</h2>
            <p>
              Any future form must add persistent labels, clear instructions,
              inline field errors, an error summary, keyboard-safe focus
              management, and screen-reader announcements for submission and
              application-status changes.
            </p>

            <h2>Known limitations</h2>
            <p>
              External source pages and PDFs are controlled by their respective
              publishers and may not meet the same accessibility standard. The
              first release therefore keeps essential YPC information in HTML
              and treats downloads as secondary.
            </p>

            <h2>Feedback</h2>
            <p>
              A public accessibility contact will be added when organizers
              approve the official YPC email address. The contact-status page
              explains the current limitation.
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
