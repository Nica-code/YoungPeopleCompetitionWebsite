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

The printable application at `/application-form/` mirrors the fields in the supplied 2027 notice. It is filled locally in the browser and printed; the site does not submit or store entries.

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

The 2027 edition uses a mailed paper application and $30 check; there is no online submission or Zelle payment. Before changing those instructions:

1. Confirm any changes to eligibility, repertoire, memorization, accompaniment, audition format, judging, prizes, dates, fee, and refund policy with the organizer.
2. Confirm all named partner roles and contact details in writing.
3. Approve a privacy notice, guardian consent, media release options, retention schedule, and deletion process before adding any online form for minors.
4. The public winners page shows 2023–2026. Earlier known winners remain in `content/site.ts` for the future complete archive. Add new winners only with a public source or organizer-approved archival record.
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
