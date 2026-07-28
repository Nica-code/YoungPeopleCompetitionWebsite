import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { StatusBadge } from "@/components/StatusBadge";
import {
  historyMilestones,
  partners,
  researchSources,
} from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "About YPC",
  "Learn how the Young People’s Competition, Young People’s Concert, Woman’s Club of Huntington, and Marshall University appear in the documented record.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About YPC"
        title="One shared tradition. Two distinct moments."
        intro="The competition is where a young musician is selected. The concert is where that opportunity can become a public, educational performance. Keeping those names distinct makes the story clearer."
        current="About"
      />

      <section className="section section-paper section-first">
        <div className="container naming-grid">
          <div className="naming-lead">
            <p className="eyebrow">Recommended naming</p>
            <h2>A brand architecture that respects the record.</h2>
          </div>
          <div className="naming-items">
            <div>
              <span>01</span>
              <h3>Young People’s Competition</h3>
              <p>The audition and selection event; the website’s primary name.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Young People’s Concert</h3>
              <p>The educational performance associated with the program.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Young People’s Concert program</h3>
              <p>
                The umbrella term when discussing the civic tradition as a
                whole.
              </p>
            </div>
          </div>
          <p className="naming-note">
            Historical sources also use “Young People’s Concert Competition.”
            The site preserves that wording in archival citations without
            merging the competition and concert into one event.
          </p>
        </div>
      </section>

      <section className="section section-ivory" aria-labelledby="institutions-heading">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Institutions & roles</p>
              <h2 id="institutions-heading">Credit what is known. Label what is not.</h2>
            </div>
            <p>
              Partner language is content, not decoration. Each role can be
              updated independently once the organizations approve it.
            </p>
          </div>
          <div className="institution-grid">
            {partners.map((partner) => (
              <article className="institution-card" key={partner.name}>
                <StatusBadge status={partner.status} />
                <h3>{partner.name}</h3>
                <p>{partner.role}</p>
                <a
                  className="text-link"
                  href={partner.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit institution <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section" aria-labelledby="mission-heading">
        <div className="container mission-grid">
          <div>
            <p className="eyebrow eyebrow-light">Shared mission</p>
            <h2 id="mission-heading">
              Preparation becomes performance. Performance becomes access.
            </h2>
          </div>
          <div>
            <p>
              For the competitor, YPC can focus months of study into one
              consequential performance. For regional students in the
              audience, the Young People’s Concert can make orchestral music
              immediate, live, and local.
            </p>
            <p>
              That connection—youth development, music education, civic
              stewardship, and public performance—is the program’s strongest
              distinction.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="timeline-heading">
        <div className="container content-split">
          <div className="sticky-heading">
            <p className="eyebrow">Documented milestones</p>
            <h2 id="timeline-heading">A history with room for the archive.</h2>
            <p>
              The exact founding year should be published only after organizers
              reconcile program numbering with archival material.
            </p>
          </div>
          <ol className="history-timeline">
            {historyMilestones.map((milestone) => (
              <li key={milestone.year}>
                <span>{milestone.year}</span>
                <div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.text}</p>
                  <a
                    href={milestone.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-ivory" aria-labelledby="sources-heading">
        <div className="container source-grid">
          <div>
            <p className="eyebrow">Research record</p>
            <h2 id="sources-heading">The first build shows its work.</h2>
            <p>
              Full research, open questions, design concepts, workflows, and
              technical decisions are documented in the repository.
            </p>
            <Link className="button button-outline" href="/contact">
              Review organizer decisions
            </Link>
          </div>
          <ul className="source-list">
            {researchSources.map((source) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noreferrer">
                  <span>{source.label}</span>
                  <i aria-hidden="true">↗</i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
