import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Apply for the 2027 competition",
  "Print and mail your 2027 Young People’s Competition application and $30 check by December 14, 2026.",
  "/apply",
);

export default function ApplyPage() {
  return (
    <>
      <PageIntro eyebrow="2027 application" title="Apply for the 2027 competition." intro="Complete the paper application and mail it with a $30 check. Both must be received by December 14, 2026." current="Apply">
        <Link className="button button-accent" href="/application-form">Open printable application</Link>
      </PageIntro>
      <section className="section section-paper section-first" aria-labelledby="apply-steps-title">
        <div className="container apply-simple-grid">
          <div><p className="eyebrow">How to enter</p><h2 id="apply-steps-title">Three steps to audition day.</h2></div>
          <ol className="apply-simple-steps">
            <li><span>01</span><div><h3>Check the requirements</h3><p>Applicants must be ages 12–18 and live in the Tri-State Area. Prepare a memorized instrumental or vocal solo with orchestra, no longer than 12 minutes. Orchestra parts must be available for rent.</p></div></li>
            <li><span>02</span><div><h3>Print the application</h3><p>Provide your contact and school information, teacher and accompanist details, and the title, composer, duration, and instrument or voice for your selection.</p><Link className="text-link" href="/application-form">Open printable application <span aria-hidden="true">→</span></Link></div></li>
            <li><span>03</span><div><h3>Mail the application and fee</h3><p>Enclose a $30 check payable to Young People’s Concert Committee. Both items must arrive by Monday, December 14, 2026; a postmark alone is not enough.</p></div></li>
          </ol>
        </div>
      </section>
      <section className="section section-ivory" aria-labelledby="mailing-title">
        <div className="container apply-mail-grid">
          <div><p className="eyebrow">Mail to</p><h2 id="mailing-title">Judith Short</h2><address>121 Elwood Avenue<br />Huntington, WV 25705</address></div>
          <div><p className="eyebrow">Audition day</p><h2>Sunday, January 10, 2027</h2><p>Smith Music Hall, Marshall University. Soloist and accompanist must check in by 12:15 p.m.; auditions begin at 12:30 p.m. Late arrivals cannot audition.</p><Link className="text-link" href="/competition">See all competition details <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>
      <section className="compact-cta"><div className="container compact-cta-inner"><div><p className="eyebrow eyebrow-light">Questions?</p><h2>We’re here to help.</h2></div><Link className="button button-accent" href="/contact">Contact Judith Short</Link></div></section>
    </>
  );
}
