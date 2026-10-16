import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Partnership } from "@/components/Partnership";
import { currentEdition, displayFact } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "2027 competition details",
  "Eligibility, repertoire, audition instructions, deadlines, concert schedule, and awards for the 2027 Young People’s Competition.",
  "/competition",
);

const requirements = [
  { number: "01", title: "Who may audition", text: "Students aged 12–18 who live in the Tri-State Area. Instrumental soloists and vocalists are welcome." },
  { number: "02", title: "What to perform", text: "A composition for solo instrument or voice with orchestra. One concerto movement is appropriate. The limit is 12 minutes, and orchestra parts must be available for rent." },
  { number: "03", title: "How to prepare", text: "Audition music must be memorized. Bring a well-qualified accompanist and three copies of the score of your chosen audition repertoire for the three judges." },
  { number: "04", title: "When to arrive", text: "Both soloist and accompanist must check in by 12:15 p.m. on audition day. Auditions begin at 12:30 p.m.; late arrivals will not be permitted to audition." },
] as const;

const events = [
  { date: "Dec 14", day: "Monday, 2026", title: "Application deadline", detail: "The application and $30 check must be received—not merely postmarked—by this date." },
  { date: "Jan 10", day: "Sunday, 2027", title: "Auditions", detail: "12:30 p.m. at Smith Music Hall, Marshall University. Check in by 12:15 p.m." },
  { date: "Mar 01", day: "Monday, 2027", title: "Dress rehearsal", detail: "6:30 p.m. at Smith Music Hall. Required for the selected soloist." },
  { date: "Mar 02", day: "Tuesday, 2027", title: "Young People’s Concert", detail: "9:00 a.m. at the Keith Albee Performing Arts Center, Huntington, WV." },
  { date: "Mar 02", day: "Tuesday, 2027", title: "Community concert", detail: "7:30 p.m. at Smith Music Hall. A snow alternate date may be required." },
  { date: "Mar 03", day: "Wednesday, 2027", title: "Woman’s Club luncheon", detail: "12:00 p.m. at Brad D. Smith Foundation Hall. The winner performs and receives a monetary stipend." },
] as const;

export default function CompetitionPage() {
  return (
    <>
      <PageIntro
        eyebrow="2027 competition"
        title="2027 competition details."
        intro="Audition for a solo performance with the Marshall University Symphony Orchestra, joined by members of the Huntington Symphony Orchestra. Find the eligibility, repertoire, dates, and award information below."
        current="Competition"
      />

      <section className="section section-paper section-first">
        <div className="container">
          <div className="notice-panel notice-important">
            <div><p className="notice-label">Deadline · December 14, 2026</p><h2>Mail your application and fee in time to arrive.</h2></div>
            <p>The $30 check and application must both be received by December 14, 2026.</p>
          </div>
          <div className="fact-grid" aria-label="2027 competition facts">
            {currentEdition.facts.map((fact) => (
              <div className="fact-card" key={fact.label}>
                <p>{fact.label}</p><strong>{displayFact(fact)}</strong><span>{fact.placeholder}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Partnership />

      <section className="section section-ivory" aria-labelledby="requirements-heading">
        <div className="container content-split">
          <div className="sticky-heading">
            <p className="eyebrow">Audition essentials</p><h2 id="requirements-heading">Know the music. Know the room.</h2>
            <p>Review these requirements before selecting your audition music.</p>
          </div>
          <div className="rule-grid">
            {requirements.map((item) => (
              <article className="rule-card" key={item.number}>
                <p className="eyebrow">{item.number}</p><h3>{item.title}</h3><p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="dates-heading">
        <div className="container content-split">
          <div className="sticky-heading">
            <p className="eyebrow">Important dates</p><h2 id="dates-heading">From the mailbox to the concert hall.</h2>
            <p>The selected soloist must attend the rehearsal and performances. All times are local to Huntington, West Virginia.</p>
          </div>
          <ol className="event-list">
            {events.map((event, index) => (
              <li className="event-item" key={`${event.date}-${event.title}`}>
                <div className="event-date"><strong>{event.date}</strong><span>{event.day}</span></div>
                <div><span className="event-index">{String(index + 1).padStart(2, "0")}</span><h3>{event.title}</h3><p>{event.detail}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-dark" aria-labelledby="award-heading">
        <div className="container content-split">
          <div className="sticky-heading">
            <p className="eyebrow eyebrow-light">The opportunity</p><h2 id="award-heading">Perform with an orchestra. Share the stage with a community.</h2>
          </div>
          <div className="checklist-panel">
            <p className="eyebrow eyebrow-light">First prize · Winner</p>
            <p className="award-amount">$300</p>
            <p className="checklist-intro">The winner receives a $300 award and performs with the Marshall University Symphony Orchestra, joined by members of the Huntington Symphony Orchestra. Only the winner performs with the orchestra.</p>
            <div className="additional-prizes" aria-label="Additional monetary prizes">
              <div><span>Second prize</span><strong>$175</strong></div>
              <div><span>Third prize</span><strong>$75</strong></div>
            </div>
            <p>Second and third prizes are monetary awards only.</p>
            <p>The Huntington Symphony Orchestra also sponsors the prizes. The Woman’s Club of Huntington sponsors the concert in cooperation with Cabell County Schools and the Marshall University School of Music.</p>
          </div>
        </div>
      </section>

      <section className="compact-cta">
        <div className="container compact-cta-inner">
          <div><p className="eyebrow eyebrow-light">Ready to enter?</p><h2>Review the mailing checklist before December 14.</h2></div>
          <Link className="button button-accent" href="/apply">How to apply</Link>
        </div>
      </section>
    </>
  );
}
