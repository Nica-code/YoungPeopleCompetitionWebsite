import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { recentWinners } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Recent winners",
  "Recent winners of Huntington’s Young People’s Competition, 2023–2026.",
  "/winners",
);

export default function WinnersPage() {
  return (
    <>
      <PageIntro eyebrow="Recent winners" title="Young musicians, lasting impressions." intro="Meet the competition winners from 2023 through 2026." current="Winners" />
      <section className="section section-paper section-first" aria-label="Recent winners">
        <div className="container winners-list-wrap">
          <div className="winners-list-heading"><span>Year</span><span>Musician</span><span>Instrument</span></div>
          <ol className="winners-simple-list">
            {recentWinners.map((winner) => (
              <li key={`${winner.year}-${winner.name}`}>
                <span className="winner-list-year">{winner.year}</span>
                <strong>{winner.name}</strong>
                <span>{winner.instrument}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
