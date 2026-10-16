import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Terms of use",
  "Read the informational terms for the Young People’s Competition website.",
  "/terms",
);

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Terms"
        title="Website information."
        intro="Use the Competition and Apply pages for the 2027 audition details."
        current="Terms"
      />
      <section className="section section-paper section-first">
        <div className="container legal-layout">
          <aside><p>2027 applications</p><strong>By mail</strong></aside>
          <article className="legal-prose">
            <h2>Informational website</h2>
            <p>
              This website publishes the 2027 audition notice in an accessible
              format. It does not receive applications or payments. Applicants
              must send the paper entry and check as described on the Apply page.
            </p>

            <h2>Historical information</h2>
            <p>
              The past-winners list includes musicians identified in public
              concert records and information supplied by the organizer.
            </p>

            <h2>Names, logos, images, and recordings</h2>
            <p>
              Names of participating institutions are used for identification.
              Images and recordings remain the property of their respective owners.
            </p>

            <h2>External links</h2>
            <p>
              This website may link to other organizations. Their content and
              privacy practices are their own.
            </p>

            <h2>Contact</h2>
            <p>
              Direct questions to chairperson Judith Short using the details
              on the Contact page. Mail entries only to the published address.
            </p>
            <Link className="text-link" href="/competition">
              View competition details <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
