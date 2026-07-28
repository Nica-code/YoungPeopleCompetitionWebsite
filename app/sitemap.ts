import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "competition/",
    "apply/",
    "winners/",
    "about/",
    "faq/",
    "contact/",
    "privacy/",
    "terms/",
    "accessibility/",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date("2026-07-28"),
    changeFrequency:
      route === "" || route === "competition/" || route === "apply/"
        ? "monthly"
        : "yearly",
    priority: route === "" ? 1 : route === "competition/" ? 0.9 : 0.7,
  }));
}
