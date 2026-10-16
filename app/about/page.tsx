import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "About the competition",
  "A Huntington tradition connecting young musicians and live orchestral performance.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title="Music that brings a community together." intro="The Young People’s Competition gives regional students a chance to perform with an orchestra and share music with new audiences." current="About" />
      <section className="section section-paper section-first">
        <div className="container about-simple-grid">
          <div><p className="eyebrow">The tradition</p><h2>Young talent on a larger stage.</h2></div>
          <div>
            <p>The competition is part of Huntington’s long-running Young People’s Concert tradition. Each year, young instrumentalists and vocalists prepare for an audition. The selected soloist performs with the Marshall University Symphony Orchestra.</p>
            <p>The Woman’s Club of Huntington sponsors the concert in cooperation with Cabell County Schools and the Marshall University School of Music. Together, they bring live orchestral music to young listeners and a meaningful performance opportunity to a young musician.</p>
          </div>
        </div>
      </section>
      <section className="section section-ivory">
        <div className="container about-simple-grid">
          <div><p className="eyebrow">2027</p><h2>The next concert.</h2></div>
          <div><p>The 66th Annual Young People’s Concert is scheduled for March 2, 2027 at the Keith Albee Performing Arts Center. Auditions for the soloist take place January 10.</p><Link className="button button-dark" href="/competition">View 2027 details</Link></div>
        </div>
      </section>
    </>
  );
}
