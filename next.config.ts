import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = "YoungPeopleCompetitionWebsite";
// configure-pages supplies an empty path for a custom domain and a repository
// path for github.io. Preserve the existing path for manual project builds.
const pagesBasePath = isGitHubPages
  ? (process.env.PAGES_BASE_PATH ?? `/${repositoryName}`)
  : "";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  trailingSlash: true,
  basePath: pagesBasePath,
  env: {
    NEXT_PUBLIC_ASSET_BASE: pagesBasePath,
    ...(process.env.PAGES_SITE_URL ? {
      NEXT_PUBLIC_SITE_URL: `${process.env.PAGES_SITE_URL.replace(/\/$/, "")}/`,
    } : {}),
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
