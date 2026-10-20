import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PartnerMarks } from "@/components/PartnerMarks";
import { recentWinners, siteConfig } from "@/content/site";

export function CompetitionLanding() {
  return (
    <>
      <div className="container presentation-layout">
        <section className="presentation-heading" aria-labelledby="competition-title">
          <p className="eyebrow">Huntington, West Virginia</p>
          <h1 className="entry-title" id="competition-title"><span>Young</span><span>People’s</span><span>Competition</span><span className="entry-year">2027</span></h1>
        </section>
        <section className="presentation-intro" aria-labelledby="opportunity-title">
          <p className="eyebrow">2027 Young People’s Competition</p>
          <h2 id="opportunity-title">Your moment with the orchestra.</h2>
          <p>An opportunity for young musicians to perform as a soloist and compete for prizes. The winner performs with the Marshall University Symphony Orchestra, joined by members of the Huntington Symphony Orchestra.</p>
          <div className="presentation-actions"><Link className="button button-accent" href="/apply">Apply for 2027<Icon name="arrow-right" /></Link><Link className="text-link" href="/competition">Competition details & requirements</Link></div>
        </section>
          <dl className="entry-facts presentation-facts">
            <div><Icon name="calendar-blank" /><div><dt>Application and $30 check received by</dt><dd>December 14, 2026</dd></div></div>
            <div><Icon name="calendar-blank" /><div><dt>Auditions</dt><dd>Sunday, January 10, 2027</dd><dd className="fact-detail">Smith Music Hall, Marshall University</dd></div></div>
            <div><Icon name="users-three" /><div><dt className="fact-primary">Ages 12–18</dt><dd className="fact-detail">Instrumentalists and vocalists in the Tri-State Area</dd></div></div>
          </dl>
        <section className="presentation-details" aria-label="Prizes and partners">
          <div className="entry-prizes"><Icon name="trophy" /><div><h2>Prizes</h2><p><strong>First prize: $300</strong><br />Plus a solo performance with the Marshall University Symphony Orchestra alongside professional HSO musicians.</p><p className="prize-runners-up"><strong>Second prize: $175</strong><br /><strong>Third prize: $75</strong></p><p className="prize-note">Second and third prizes are monetary awards only. Only the first-prize winner performs with the orchestra.</p><p className="prize-note">The Huntington Symphony Orchestra also sponsors the prizes.</p></div></div>
          <div className="entry-partnership"><p>Presented by the Woman’s Club of Huntington in partnership with Marshall University School of Music and the Huntington Symphony Orchestra. The winner gains experience alongside professional players while bringing live orchestral music to local students.</p><PartnerMarks /></div>
        </section>
      </div>
      <div className="landing-bottom container">
        <section className="recent-winners" id="recent-past-winners" tabIndex={-1} aria-labelledby="recent-winners-title"><h2 id="recent-winners-title">Recent past winners</h2><ol className="recent-winners-list">{recentWinners.map((winner) => <li key={`${winner.year}-${winner.name}`}><span>{winner.year}</span><strong>{winner.name}</strong><span>{winner.instrument}</span></li>)}</ol></section>
        <section className="landing-contact" id="contact" tabIndex={-1} aria-labelledby="contact-title"><h2 id="contact-title">Questions?</h2><p>Contact chairperson Judith Short.</p><div className="contact-button-row"><a className="button button-outline" href={`mailto:${siteConfig.publicContactEmail}`}><Icon name="envelope-simple" />Email Judith</a><a className="button button-outline" href="tel:+13046173367"><Icon name="phone" />Call Judith</a></div></section>
      </div>
    </>
  );
}
