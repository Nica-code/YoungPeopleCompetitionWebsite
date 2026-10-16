import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Contact the competition",
  "Questions about the 2027 Young People’s Competition? Reach chairperson Judith Short by phone or email.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Get in touch."
        intro="For questions about eligibility, repertoire, or applications, contact competition chairperson Judith Short."
        current="Contact"
      />
      <section className="section section-paper section-first">
        <div className="container contact-status-grid">
          <div className="contact-status-card contact-status-primary">
            <p className="eyebrow eyebrow-light">Competition chairperson</p>
            <h2>Judith Short</h2>
            <p>Woman’s Club of Huntington</p>
            <a className="button button-accent" href="mailto:cathwayjcs@yahoo.com">Email Judith</a>
          </div>
          <div className="contact-status-card">
            <p className="eyebrow">Call</p><h2><a href="tel:+13046173367">304-617-3367</a></h2>
            <p>Ask about the 2027 audition or the required mailed application.</p>
          </div>
          <div className="contact-status-card">
            <p className="eyebrow">Email</p><h2><a href="mailto:cathwayjcs@yahoo.com">cathwayjcs@yahoo.com</a></h2>
            <p>For questions about the 2027 competition.</p>
          </div>
        </div>
      </section>
      <section className="section section-ivory" aria-labelledby="mail-heading">
        <div className="container content-split">
          <div className="sticky-heading">
            <p className="eyebrow">Application mailing address</p>
            <h2 id="mail-heading">Send your entry before the deadline.</h2>
            <p>The application and $30 check must be received by December 14, 2026.</p>
          </div>
          <div className="mailing-card mailing-card-light">
            <p className="mailing-card-label">Mail to</p>
            <address>Judith Short<br />121 Elwood Avenue<br />Huntington, WV 25705</address>
            <p>Make checks payable to Young People’s Concert Committee.</p>
            <Link className="text-link" href="/apply">Review how to apply <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
