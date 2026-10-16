import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { winners } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Past winners",
  "Past winners of Huntington’s Young People’s Competition.",
  "/winners",
);

export default function WinnersPage() {
  return (
    <>
      <PageIntro eyebrow="Past winners" title="Young musicians, lasting impressions." intro="A selection of musicians who have won the Young People’s Competition." current="Winners" />
      <section className="section section-paper section-first" aria-label="Past winners">
        <div className="container winners-list-wrap">
          <div className="winners-list-heading"><span>Year</span><span>Musician</span><span>Instrument</span></div>
          <ol className="winners-simple-list">
            {winners.map((winner) => (
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
