import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { StatusBadge } from "@/components/StatusBadge";
import { faqs } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Frequently asked questions",
  "Find clear, honest answers about YPC eligibility, repertoire, dates, fees, Zelle, judging, awards, minors, and media consent.",
  "/faq",
);

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
      <PageIntro
        eyebrow="FAQ"
        title="Clear answers—even when the answer is “not confirmed yet.”"
        intro="No outdated fee, rule, deadline, prize, or partner relationship is presented as current. This page will become the living applicant guide as decisions are approved."
        current="FAQ"
      />

      <section className="section section-paper section-first">
        <div className="container faq-page-grid">
          <aside className="faq-page-aside">
            <p className="eyebrow">Reading the labels</p>
            <h2>Know the evidence behind an answer.</h2>
            <div className="status-key">
              <div>
                <StatusBadge status="verified-current" />
                <p>Supported by a recent official source.</p>
              </div>
              <div>
                <StatusBadge status="verified-historical" />
                <p>Documented historically, not promised for the next edition.</p>
              </div>
              <div>
                <StatusBadge status="provisional" />
                <p>Planned approach that still needs organizer approval.</p>
              </div>
              <div>
                <StatusBadge status="pending" />
                <p>No responsible current answer is available yet.</p>
              </div>
            </div>
          </aside>
          <div className="faq-list faq-list-large">
            {faqs.map((faq) => (
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
            <p className="eyebrow eyebrow-light">Still looking?</p>
            <h2>See the contact and organizer-decision checklist.</h2>
          </div>
          <Link className="button button-accent" href="/contact">
            Contact & decisions
          </Link>
        </div>
      </section>
    </>
  );
}
