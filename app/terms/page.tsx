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
        title="Information for applicants and families."
        intro="The 2027 competition details on this site are based on the supplied audition notice, with the deadline and audition weekday corrected by the organizer."
        current="Terms"
      />
      <section className="section section-paper section-first">
        <div className="container legal-layout">
          <aside>
            <p>Draft status</p>
            <strong>Organizer and counsel review required</strong>
          </aside>
          <article className="legal-prose">
            <h2>Informational website</h2>
            <p>
              This website publishes the 2027 audition notice in an accessible
              format. It does not receive applications or payments. Applicants
              must send the paper entry and check as described on the Apply page.
            </p>

            <h2>Authoritative competition rules</h2>
            <p>
              The Competition page presents the current audition details from
              the organizer-supplied notice. If an inconsistency is discovered,
              organizers should publish a correction and communicate material
              changes to affected applicants.
            </p>

            <h2>Historical information</h2>
            <p>
              Winner and program information is cited to institutional records
              where possible. The first archive is selective and may contain
              gaps. Historical participation does not establish current
              eligibility, award, orchestra, or partner terms.
            </p>

            <h2>Names, logos, images, and recordings</h2>
            <p>
              Institutional names are used for identification and source
              attribution. Logos, competitor portraits, archival images,
              recordings, and video should be published only after the
              necessary permissions are documented.
            </p>

            <h2>External links</h2>
            <p>
              External institutional and source links are provided for context.
              YPC does not control the availability, accessibility, or privacy
              practices of those sites.
            </p>

            <h2>Contact</h2>
            <p>
              Direct questions to chairperson Judith Short using the details
              on the Contact page. Mail entries only to the published address.
            </p>
            <Link className="text-link" href="/competition">
              View competition status <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
