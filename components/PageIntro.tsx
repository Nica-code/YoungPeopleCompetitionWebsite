import type { ReactNode } from "react";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/content/site";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  current: string;
  children?: ReactNode;
};

export function PageIntro({
  eyebrow,
  title,
  intro,
  current,
  children,
}: PageIntroProps) {
  const path = current.toLowerCase().replace(/\s+/g, "-");
  const url = `${siteConfig.siteUrl}${path}/`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteConfig.siteUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: current,
              item: url,
            },
          ],
        }}
      />
      <section className="page-intro">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{current}</span>
          </nav>
          <div className="page-intro-grid">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <h1>{title}</h1>
            </div>
            <div className="page-intro-copy">
              <p className="lede">{intro}</p>
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
