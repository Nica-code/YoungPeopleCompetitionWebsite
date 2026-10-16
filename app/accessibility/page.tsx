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
        title="Accessibility."
        intro="We aim to make competition information easy to find, read, and use. The website targets WCAG 2.2 AA."
        current="Accessibility"
      />
      <section className="section section-paper section-first">
        <div className="container legal-layout">
          <aside>
            <p>Current target</p>
            <strong>WCAG 2.2 AA</strong>
          </aside>
          <article className="legal-prose">
            <h2>Website features</h2>
            <ul>
              <li>Semantic page landmarks and a logical heading structure</li>
              <li>A skip link and visible keyboard focus</li>
              <li>Keyboard-operable navigation and native FAQ disclosures</li>
              <li>High-contrast text</li>
              <li>Responsive layouts with practical touch targets</li>
              <li>Reduced-motion support</li>
              <li>No autoplay audio, autoplay video, or scroll-jacking</li>
              <li>Descriptive links</li>
            </ul>

            <h2>Known limitations</h2>
            <p>
              Linked websites and PDFs are maintained by their publishers.
              Essential 2027 competition information is available in HTML on this site.
            </p>

            <h2>Feedback</h2>
            <p>
              Contact Judith Short if you have trouble using this website or
              need the competition information in another format.
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
