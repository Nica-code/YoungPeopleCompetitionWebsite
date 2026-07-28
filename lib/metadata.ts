import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const normalizedPath = path === "/" ? "" : `${path.replace(/\/$/, "")}/`;
  const url = `${siteConfig.siteUrl}${normalizedPath.replace(/^\//, "")}`;
  const socialImage = `${siteConfig.siteUrl}og.png`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: `${siteConfig.shortName} — ${siteConfig.name}`,
      title,
      description,
      url,
      images: [
        {
          url: socialImage,
          alt: "Young People’s Competition — Huntington, West Virginia",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
