import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = "YoungPeopleCompetitionWebsite";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  trailingSlash: true,
  basePath: isGitHubPages ? `/${repositoryName}` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
