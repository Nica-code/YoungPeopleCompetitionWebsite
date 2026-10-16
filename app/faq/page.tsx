import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { faqs } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

const publicFaqs = faqs.filter((faq) => faq.status === "verified-current" && !faq.question.includes("confirmation"));

export const metadata: Metadata = pageMetadata(
  "Frequently asked questions",
  "Answers about eligibility, repertoire, dates, applications, and awards for the 2027 competition.",
  "/faq",
);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: publicFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }} />
      <PageIntro eyebrow="FAQ" title="Frequently asked questions." intro="Answers to the questions applicants and families ask most often." current="FAQ" />
      <section className="section section-paper section-first">
        <div className="container faq-simple-wrap">
          <div className="faq-list faq-list-large">
            {publicFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><div><p>{faq.answer}</p></div></details>)}
          </div>
          <div className="faq-contact"><h2>Still have a question?</h2><p>Contact competition chairperson Judith Short for help with eligibility, repertoire, or your application.</p><Link className="button button-dark" href="/contact">Contact Judith</Link></div>
        </div>
      </section>
    </>
  );
}
