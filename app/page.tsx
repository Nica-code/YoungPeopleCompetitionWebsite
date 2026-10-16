import type { Metadata } from "next";
import Link from "next/link";
import { Partnership } from "@/components/Partnership";
import { currentEdition, displayFact, siteConfig, winners } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

const homeMetadata = pageMetadata(
  "Young People’s Competition in Huntington, West Virginia",
  "Apply for the 2027 Young People’s Competition: auditions January 10, 2027, with applications due December 14, 2026.",
  "/",
);

export const metadata: Metadata = {
  ...homeMetadata,
  title: { absolute: "YPC — Young People’s Competition | Huntington, West Virginia" },
};

export default function Home() {
  return (
    <>
      <section className="home-hero home-hero-refined">
        <div className="hero-atmosphere" aria-hidden="true">
          <span className="hero-light" />
          <span className="hero-stage-line hero-stage-line-one" />
          <span className="hero-stage-line hero-stage-line-two" />
          <span className="hero-stage-line hero-stage-line-three" />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">{siteConfig.location} · 2027 competition</p>
            <h1>Your moment with the orchestra begins here.</h1>
            <p className="hero-lede">Young musicians ages 12–18 are invited to audition for a solo performance with the Marshall University Symphony Orchestra, joined by members of the Huntington Symphony Orchestra.</p>
            <div className="button-row">
              <Link className="button button-accent" href="/apply">Apply for 2027</Link>
              <Link className="text-link text-link-light" href="/competition">Competition details <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <aside className="edition-panel" aria-label="2027 competition essentials">
            <div className="edition-panel-head"><p>At a glance</p></div>
            <dl>
              {currentEdition.facts.slice(0, 4).map((fact) => (
                <div key={fact.label}><dt>{fact.label}</dt><dd>{displayFact(fact)}</dd></div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="home-essentials section section-paper" aria-labelledby="home-essentials-title">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">The opportunity</p><h2 id="home-essentials-title">A stage for young musicians.</h2></div>
            <p>The winner receives $300 and performs with the Marshall University Symphony Orchestra, joined by members of the Huntington Symphony Orchestra. Second prize is $175 and third prize is $75; both are monetary awards only. The Huntington Symphony Orchestra also sponsors the prizes.</p>
          </div>
          <div className="home-essentials-grid">
            <div><span>01</span><h3>Who can enter</h3><p>Instrumentalists and vocalists ages 12–18 who live in the Tri-State Area.</p></div>
            <div><span>02</span><h3>What to prepare</h3><p>A memorized solo with orchestra, no longer than 12 minutes. Bring an accompanist and three copies of your score for the judges.</p></div>
            <div><span>03</span><h3>When to apply</h3><p>Your application and $30 check must arrive by December 14, 2026.</p></div>
          </div>
        </div>
      </section>

      <Partnership />

      <section className="section section-ivory home-winner" aria-labelledby="home-winner-title">
        <div className="container home-winner-inner">
          <div><p className="eyebrow">Past winners</p><h2 id="home-winner-title">Meet the musicians.</h2><p>Discover young performers recognized by the competition through the years.</p></div>
          <div className="home-winner-highlight"><span>{winners[0].year}</span><strong>{winners[0].name}</strong><span>{winners[0].instrument}</span><Link className="text-link" href="/winners">See past winners <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="compact-cta">
        <div className="container compact-cta-inner">
          <div><p className="eyebrow eyebrow-light">2027 auditions</p><h2>Applications are due December 14, 2026.</h2></div>
          <Link className="button button-accent" href="/apply">How to apply</Link>
        </div>
      </section>
    </>
  );
}
