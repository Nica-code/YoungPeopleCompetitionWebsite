import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.shortName} — ${siteConfig.name}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.shortName} — ${siteConfig.name}`,
  keywords: [
    "young musicians competition West Virginia",
    "music competition Huntington WV",
    "student soloist competition West Virginia",
    "Young People’s Concert Huntington",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: `${siteConfig.shortName} — ${siteConfig.name}`,
    title: `${siteConfig.shortName} — ${siteConfig.name}`,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    images: [
      {
        url: `${siteConfig.siteUrl}og.png`,
        alt: "Young People’s Competition — Huntington, West Virginia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} — ${siteConfig.name}`,
    description: siteConfig.description,
    images: [`${siteConfig.siteUrl}og.png`],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#7b1937",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: `${siteConfig.shortName} — ${siteConfig.name}`,
            url: siteConfig.siteUrl,
            description: siteConfig.description,
            inLanguage: "en-US",
          }}
        />
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
