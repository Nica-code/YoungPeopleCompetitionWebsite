import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { winners } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Winners archive",
  "Explore a source-backed selection of Young People’s Competition winners documented in Marshall University records.",
  "/winners",
);

export default function WinnersPage() {
  const [featured, ...archive] = winners;

  return (
    <>
      <PageIntro
        eyebrow="Winners"
        title="The archive begins with names we can verify."
        intro="This first release publishes only winner details supported by accessible institutional records. It does not claim to be complete, and it uses no portrait without documented permission."
        current="Winners"
      />

      <section className="section winner-feature winner-feature-page section-first">
        <div className="container winner-feature-grid">
          <div className="winner-portrait-placeholder" aria-hidden="true">
            <span className="portrait-year">{featured.year}</span>
            <span className="portrait-initials">IB</span>
            <p>Portrait pending publication permission</p>
          </div>
          <div className="winner-feature-copy">
            <p className="eyebrow">Most recent winner currently verified</p>
            <h2>{featured.name}</h2>
            <p className="winner-instrument">{featured.instrument}</p>
            <p className="winner-summary">
              Isaiah appeared with the Marshall University Symphony Orchestra
              in the 62nd Young People’s Concert in 2023. Marshall reported
              that the concert was attended by Cabell County fifth graders.
            </p>
            <dl className="winner-facts">
              <div>
                <dt>Award</dt>
                <dd>{featured.award}</dd>
              </div>
              <div>
                <dt>Orchestra</dt>
                <dd>{featured.orchestra}</dd>
              </div>
            </dl>
            <div className="source-caption">
              <span>Source</span>
              <a href={featured.sourceUrl} target="_blank" rel="noreferrer">
                {featured.sourceTitle}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-ivory" aria-labelledby="archive-heading">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Verified selection</p>
              <h2 id="archive-heading">A record built source by source.</h2>
            </div>
            <p>
              Historical programs use several naming variants. Each entry keeps
              the award wording and institutional source close to the record.
            </p>
          </div>
          <div className="winner-archive">
            {archive.map((winner) => (
              <article className="winner-card" key={`${winner.year}-${winner.name}`}>
                <div className="winner-card-top">
                  <span>{winner.year}</span>
                  <p>{winner.instrument}</p>
                </div>
                <h3>{winner.name}</h3>
                {winner.schoolOrHometown && (
                  <p className="winner-school">{winner.schoolOrHometown}</p>
                )}
                <dl>
                  <div>
                    <dt>Award</dt>
                    <dd>{winner.award}</dd>
                  </div>
                  <div>
                    <dt>Orchestra</dt>
                    <dd>{winner.orchestra}</dd>
                  </div>
                </dl>
                <a
                  className="text-link"
                  href={winner.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View source <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="archive-next-heading">
        <div className="container archive-next-grid">
          <div>
            <p className="eyebrow">Build the archive responsibly</p>
            <h2 id="archive-next-heading">Programs first. Permissions always.</h2>
          </div>
          <div>
            <p>
              Future records can support year, edition, name, instrument or
              voice, school, hometown, teacher, accompanist, repertoire,
              composer, award, orchestra, conductor, venue, video, press links,
              and publication-consent status.
            </p>
            <p>
              Marshall Special Collections holds relevant Woman’s Club
              material. Organizers should reconcile that archive with current
              records before presenting this list as complete.
            </p>
            <Link className="button button-outline" href="/contact">
              See the archive checklist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
