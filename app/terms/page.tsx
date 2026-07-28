import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Terms of use",
  "Read the draft terms and informational status of the Young People’s Competition website.",
  "/terms",
);

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Terms"
        title="Information first. Official rules before entry."
        intro="These draft terms describe the current informational website. Organizers should review and approve final legal language before applications open."
        current="Terms"
      />
      <section className="section section-paper section-first">
        <div className="container legal-layout">
          <aside>
            <p>Draft status</p>
            <strong>Organizer and counsel review required</strong>
          </aside>
          <article className="legal-prose">
            <h2>Informational preview</h2>
            <p>
              This website does not currently offer an open competition entry,
              accept payment, guarantee eligibility, promise an award, or
              confirm a performance engagement. Fields labeled pending or
              provisional are not official rules.
            </p>

            <h2>Authoritative competition rules</h2>
            <p>
              Once approved, the edition-specific Competition page will be the
              accessible source of current rules. A downloadable PDF may be
              provided as a convenience. If an inconsistency is discovered,
              organizers must publish a correction and communicate material
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
              The official contact route is pending organizer approval. Do not
              send applications or payments based on information from an
              unofficial source.
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
