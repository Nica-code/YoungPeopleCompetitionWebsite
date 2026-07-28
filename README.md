# Young People’s Competition

A source-conscious public website for Huntington, West Virginia’s Young People’s Competition and the wider Young People’s Concert tradition.

The first release is intentionally static and privacy-preserving. It explains the program, documents verified history and winners, and marks all unconfirmed current-edition information as “To be confirmed.” It does not collect applicant or minor data.

## Local development

Requirements: Node.js 22.13 or newer and pnpm 11.

```bash
pnpm install
pnpm dev
```

The local Vinext preview is available at `http://localhost:3000`.

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

## Updating an edition

The public facts, winner records, FAQ answers, partner statuses, and research links live in `content/site.ts`.

Before opening applications:

1. Replace every current-edition placeholder with organizer-approved information.
2. Confirm eligibility, repertoire, memorization, accompaniment, audition format, judging, prizes, winner obligations, venue, deadlines, fee, refund policy, and accessibility arrangements.
3. Confirm all named partner roles in writing.
4. Approve the privacy notice, guardian consent, media release options, retention schedule, and deletion process before collecting minor data.
5. If Zelle is used, publish only the verified recipient and exact memo format. Keep “application received,” “payment under review,” and “application complete” as separate statuses; website submission must never be treated as bank confirmation.
6. Add new winners only with a public source or organizer-approved archival record.
7. Run the checks above, proofread on desktop and mobile, and test the complete applicant journey with a non-production record.

See [docs/FOUNDATION.md](docs/FOUNDATION.md) for the research ledger, audience journeys, design system, architecture, data model, and launch risks.

## Content and privacy guardrails

- No invented dates, rules, prize amounts, eligibility limits, or contact details.
- No public applicant list.
- No unapproved photographs or names of minors.
- No storage of bank credentials or automated claims that a Zelle payment cleared.
- No exposure of private administrative notes or payment evidence.
- Historical claims link to their source wherever practical.

## Stack

- Next.js App Router with React and TypeScript
- Static export for GitHub Pages
- Vinext/Vite compatibility for local preview and optional Sites hosting
- Plain CSS with no runtime font or UI-library dependency
