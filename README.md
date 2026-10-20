# Young People’s Competition

A source-conscious public website for Huntington, West Virginia’s Young People’s Competition and the wider Young People’s Concert tradition.

The site is static and privacy-preserving. It publishes the 2027 audition notice, including the organizer-corrected December 14, 2026 deadline and Sunday, January 10, 2027 audition, alongside documented history and recent winners. It does not collect applicant or minor data.

## Local development

Requirements: Node.js 22.13 or newer and pnpm 11.

```bash
pnpm install
pnpm dev
```

The local Vinext preview is available at `http://localhost:3000`.

The homepage presents the competition, dates, prizes, partners, and recent past winners. Every Apply button opens the complete printable application directly at `/apply/`. The older `/application-form/` address also shows this dedicated application so existing links keep working. It mirrors the fields in the supplied 2027 notice, is filled locally in the browser and printed, and does not submit or store entries.

Useful checks:

```bash
pnpm lint
pnpm typecheck
GITHUB_PAGES=true pnpm build:pages
pnpm test
```

On Windows PowerShell, set the Pages build flag with:

```powershell
$env:GITHUB_PAGES = "true"
pnpm build:pages
pnpm test
```

## GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`. It builds a static Next.js export and deploys the generated `out/` directory whenever `main` changes.

In GitHub:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Do not select a branch or folder. The workflow is the publishing source.
4. Open **Actions → Deploy YPC to GitHub Pages** and confirm the first run succeeds.

The expected project URL is:

`https://nica-code.github.io/YoungPeopleCompetitionWebsite/`

If the repository name or owner changes, update `siteUrl` and `repositoryName` in `content/site.ts`, plus `repositoryName` in `next.config.ts`.

### Custom domain: youngpeoplescompetition.com

The deployment reads GitHub Pages' configured base URL and path automatically. A custom domain uses `/` instead of `/YoungPeopleCompetitionWebsite/` for application links, images, and downloads; canonical URLs, the sitemap, and robots.txt follow the configured public URL.

1. Recommended: verify domain ownership under GitHub account **Settings → Pages** using its TXT record.
2. In this repository's **Settings → Pages**, set **Custom domain** to `youngpeoplescompetition.com`. Keep **Source: GitHub Actions**.
3. Run **Actions → Deploy YPC to GitHub Pages → Run workflow** after changing the domain so the export picks up the new URL.
4. In Namecheap **Domain List → Manage → Advanced DNS**, replace conflicting `@`/`www` parking or redirect records with four `@` A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Set `www` CNAME to `nica-code.github.io`. Leave email/MX records untouched.
5. Once DNS and the certificate are ready, enable **Enforce HTTPS** in GitHub Pages. DNS and certificate changes can take up to 24 hours.

GitHub Actions publishing uses the repository's Pages setting, not a `CNAME` file, to configure the domain. Until that setting changes, the existing github.io site keeps its current paths.

To test a custom-domain export locally in PowerShell:

```powershell
$env:GITHUB_PAGES = "true"
$env:PAGES_BASE_PATH = ""
$env:PAGES_SITE_URL = "https://youngpeoplescompetition.com"
pnpm build:pages
pnpm test
```

## Updating an edition

The public facts, winner records, FAQ answers, partner statuses, and research links live in `content/site.ts`.

The 2027 edition uses a mailed paper application and $30 check; there is no online submission or Zelle payment. Before changing those instructions:

1. Confirm any changes to eligibility, repertoire, memorization, accompaniment, audition format, judging, prizes, dates, fee, and refund policy with the organizer.
2. Confirm all named partner roles and contact details in writing.
3. Approve a privacy notice, guardian consent, media release options, retention schedule, and deletion process before adding any online form for minors.
4. The “Recent past winners” list shows 2023–2026 on the homepage and winners page. Earlier known winners remain in `content/site.ts` for the future complete archive. Add new winners only with a public source or organizer-approved archival record.
5. Run the checks above and proofread on desktop and mobile.

See [docs/FOUNDATION.md](docs/FOUNDATION.md) for the research ledger, audience journeys, design system, architecture, data model, and launch risks.

## Content and privacy guardrails

- No invented dates, rules, prize amounts, eligibility limits, or contact details.
- No public applicant list.
- No unapproved photographs or names of minors.
- No website payment collection or claims that a mailed check has been received.
- No exposure of private administrative notes or payment evidence.
- Historical claims link to their source wherever practical.

## Stack

- Next.js App Router with React and TypeScript
- Static export for GitHub Pages
- Vinext/Vite compatibility for local preview and optional Sites hosting
- Plain CSS with no runtime font or UI-library dependency
