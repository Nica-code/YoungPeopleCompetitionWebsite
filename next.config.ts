import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = "YoungPeopleCompetitionWebsite";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  trailingSlash: true,
  basePath: isGitHubPages ? `/${repositoryName}` : "",
  env: {
    NEXT_PUBLIC_ASSET_BASE: isGitHubPages ? `/${repositoryName}` : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
