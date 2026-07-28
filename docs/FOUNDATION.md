# YPC website foundation

Research and product direction prepared July 28, 2026.

This document records the decisions behind the first public-ready website build. It deliberately separates documented history from current operational details that still need organizer approval.

## 1. Repository assessment

- Starting state: empty project folder; no prior application or remote was configured locally.
- Chosen implementation: Next.js App Router with TypeScript and a static export for GitHub Pages.
- Content model: typed local data. Dates, fees, rules, contact information, partners, winners, FAQs, and application settings are not scattered through page components.
- Hosting: GitHub Pages through a repository Actions workflow. The same source remains compatible with the local preview and can be adapted to a server-backed registration system later.
- First-release constraint: no registration database, payment integration, email service, CMS, or applicant-data collection is included.

## 2. Research summary

### Recommended brand architecture

Use three distinct terms:

1. **Young People’s Competition** — the audition/selection event.
2. **Young People’s Concert** — the educational concert at which a selected competitor may perform.
3. **Young People’s Concert program** — the broader civic and educational tradition when referring to the competition and concert together.

Use **YPC — Young People’s Competition** as the website identity because applicants primarily arrive to understand and enter the competition. A short naming note on the About page should acknowledge that historical programs often use “Young People’s Concert Competition.”

### Verified current facts

| Claim | Source | Date | Confidence | Organizer confirmation |
| --- | --- | --- | --- | --- |
| The Woman’s Club of Huntington is an active GFWC West Virginia club. | [GFWC WV clubs directory](https://www.gfwcwestvirginia.org/_files/ugd/47dfb4_486d7d39061142f69c7090b886a1dc5e.pdf) | 2024–2026 directory | High | Confirm preferred public naming and contact route |
| Marshall University listed “MU Orchestra Young People’s Concerts” at Smith Music Hall. | [Marshall University events calendar](https://events.marshall.edu/calendar/day/2025/3/4) | March 4, 2025 | High | Confirm whether this concert included a competition winner and the current venue |
| The Huntington Symphony Orchestra is an active professional orchestra with community and educational outreach. | [Huntington Symphony Orchestra](https://www.huntingtonsymphony.org/) | Current site reviewed July 2026 | High | Confirm whether HSO has any role in YPC |

No recent official source located during this research confirmed current application dates, eligibility, fee, prize, audition format, accompanist requirements, adjudicators, payment recipient, or registration URL.

### Verified historical facts

| Claim | Source | Date | Confidence | Organizer confirmation |
| --- | --- | --- | --- | --- |
| The Woman’s Club of Huntington was created in October 1898 and developed a long civic and cultural role in Huntington. | [Clio: Woman’s Club of Huntington](https://theclio.com/entry/27262) | Entry updated 2020 | Medium-high | Confirm preferred summary language |
| Marshall Special Collections holds a 1961–1993 Woman’s Club collection containing programs, clippings, photographs, and scrapbooks about a Young People’s Concert series. | [Marshall Special Collections finding aid](https://mds.marshall.edu/sc_finding_aids/169/) | Collection through 1993 | High | Archive consultation recommended |
| A 2008 Marshall program calls the concert its 47th season, features competition winner Sesil Dikener, and thanks the Woman’s Club for its contribution. | [Marshall Digital Scholar, 2008 program](https://mds.marshall.edu/music_perf/818/) | March 4, 2008 | High | Confirm official founding year before publishing one |
| A 2009 Marshall family concert identifies Erica Shen as winner of the Young People’s Concert Competition sponsored by the Woman’s Club of Huntington. | [Marshall Digital Scholar, 2009 program](https://mds.marshall.edu/music_perf/586/) | March 3, 2009 | High | None for archival use; image rights remain separate |
| A 2011 Marshall family concert identifies Olivia Hay as the competition winner. | [Marshall Digital Scholar, 2011 program](https://mds.marshall.edu/music_perf/388/) | March 1, 2011 | High | None for archival use; image rights remain separate |
| A 2014 Marshall family concert identifies Raleigh Frail as the competition winner. | [Marshall Digital Scholar, 2014 program](https://mds.marshall.edu/music_perf/239/) | March 4, 2014 | High | None for archival use; image rights remain separate |
| A 2018 Marshall family concert identifies clarinetist Armâan Karimpour as the competition winner and credits the Woman’s Club. | [Marshall Digital Scholar, 2018 program](https://mds.marshall.edu/music_perf/947/) | 2018 | High | Confirm spelling from original program before expanded biography |
| Marshall reported that violinist Isaiah Biele, a Young People’s Competition winner, performed with the Marshall University Symphony Orchestra in the 62nd Young People’s Concert; the concert was for Cabell County fifth graders and involved the Woman’s Club and Cabell County Board of Education. | [Marshall Board of Governors agenda](https://www.marshall.edu/board/files/April-26-2023-Board-of-Governors-Regular-Meeting_agenda.pdf) | April 26, 2023 | High | Confirm current organizer/partner wording |

These sources support the public phrase **“a Huntington tradition spanning more than six decades.”** They do not establish an exact founding year strongly enough for the site to publish one without organizer confirmation.

### Plausible but unconfirmed

- A supplied Herald-Dispatch URL describes soloists chosen for a “63rd Young People’s Concert.” The page was inaccessible to the research tools, so names and details from that article are not used in the site.
- The project brief proposes a partnership with the Huntington Symphony Orchestra. HSO’s own site confirms its educational mission, but no source located ties it to this competition.
- Recent editions may use more than one selected soloist. The data model therefore supports multiple winners and award types per year.
- The next competition may lead into a Marshall University Orchestra performance, but the current orchestra, conductor, concert format, and contractual relationship must be confirmed.

### Missing organizer information

Before applications can open, organizers must supply or approve:

- Official competition name and preferred abbreviated name
- Legal/presenting entity and current partner roles
- Application opening date and deadline
- Competition and concert dates
- Eligible ages/grades and geographic limits
- Eligible instruments and whether voice is included
- Divisions/categories
- Repertoire, duration, memorization, and orchestral-parts rules
- Accompanist responsibilities
- Audition format, venue, accessibility, and travel details
- Judges and adjudication process
- Entry fee, refund policy, prize, and winner opportunity
- Registration form URL
- Approved Zelle recipient and reconciliation owner
- Public contact email and response expectations
- Minor consent, media release, privacy, and retention policies
- Current and past winner publication permissions
- Authorized partner logos, photographs, programs, and video

## 3. Reference-site analysis

### YAIPC

- Strengths: compact navigation, immediate application action, visible winner recognition, simple benefits.
- Weaknesses: generic international language, repeated winner modules, and limited practical decision support above the fold.
- YPC takeaway: keep the direct route to Apply and the celebratory tone, but make regional identity and operational clarity much stronger.

### NACUSA Young Composers’ Competition

- Strengths: deadline, eligibility, prizes, and rules are immediately scannable.
- Weaknesses: little visual hierarchy beyond the text and a long-page administrative feel.
- YPC takeaway: surface the five decision facts early, then use stronger editorial pacing.

### International Youth Composers Society

- Strengths: “Are you eligible?” framing, understandable levels, plain-language submission requirements, FAQ proximity.
- Weaknesses: key rules are split into external documents and the page has limited institutional credibility.
- YPC takeaway: answer eligibility in the page itself; use downloads only as a secondary convenience.

### MTNA

- Strengths: precise dates, categories, fees, awards, progression, repertoire rules, and explicit exceptions.
- Weaknesses: very dense navigation and long text blocks make first-time orientation difficult.
- YPC takeaway: match its specificity once official details exist, but separate essentials from secondary policy.

### YoungArts

- Strengths: confident mission, strong hero imagery, clear age/deadline language, simple apply → adjudicate → support narrative, and prominent winners.
- Weaknesses for this project: national scale and multi-discipline breadth are not appropriate models for a local orchestral tradition.
- YPC takeaway: borrow the narrative confidence and progression while remaining specific to Huntington and live orchestral performance.

## 4. Audiences and user journeys

### Prospective competitor

Home → confirm likely fit → read complete rules → review checklist → enter external application → receive application ID → follow payment instructions → receive separate application and payment confirmations.

### Parent or guardian

Home → understand organizer and setting → verify eligibility, fee, consent, safety, and logistics → review privacy/media policy → help submit → retain confirmation and contact route.

### Teacher or accompanist

Competition → inspect repertoire, duration, memorization, parts, and accompaniment rules → download/print authoritative rules if desired → help prepare materials → monitor deadline and schedule.

### Community member or supporter

Home/About → understand civic history → explore verified winners → learn about the educational concert → find approved support or contact route.

## 5. Information architecture

Primary navigation:

- Home
- Competition
- Apply
- Winners
- About
- FAQ
- Contact

Policy routes:

- Privacy
- Terms
- Accessibility

Future routes should be added only when content justifies them:

- Winner profiles
- News
- Support
- Application confirmation
- Payment instructions
- Authenticated administration

## 6. Homepage content outline

1. Location eyebrow, brand promise, two actions, and next-edition fact panel
2. Presenter/partner credibility note with confirmation status
3. Four meaningful participant benefits
4. Competition essentials and current unknowns
5. Signature “from preparation to performance” editorial section
6. More-than-six-decades history note and compact timeline
7. Most recent winner currently verified in accessible sources
8. Six-step application sequence with honest payment stages
9. Critical FAQ preview
10. Application-readiness call to action

## 7. Visual concepts

### Concept A — Orchestral Spotlight

- Idea: the moment a prepared soloist crosses into public performance
- Mood: quiet confidence, warmth, concentration
- Typography: large editorial serif with a precise humanist sans-serif
- Color: ink green, warm ivory, oxblood, muted brass
- Image treatment: dark performance crops when authorized; otherwise light, shadow, and stage geometry
- Hero: focused type framed by a restrained radial “spotlight”
- Signature device: a curved stage/orchestral arc that becomes a section divider
- Advantage: memorable without depending on unlicensed photography
- Risk: needs disciplined spacing to avoid feeling too austere

### Concept B — River & Resonance

- Idea: musical phrasing and the Ohio River as parallel lines moving through Huntington
- Mood: civic, contemporary, calm
- Typography: transitional serif with a wide grotesk
- Color: river blue-black, limestone, copper, weathered green
- Image treatment: wide Huntington and rehearsal panoramas
- Hero: horizontal rhythm and a low horizon
- Signature device: layered lines that widen like sound traveling across water
- Advantage: strong local distinction
- Risk: the connection to a soloist opportunity is less immediate

### Concept C — Archive in Motion

- Idea: six decades of programs and winners brought into the present
- Mood: tactile, cultured, intergenerational
- Typography: book serif with a compact modern sans
- Color: paper, charcoal, faded red, library green
- Image treatment: archival programs, marginal notes, and contemporary portraits
- Hero: modern type over a tightly cropped program artifact
- Signature device: year stamps and catalog-style captions
- Advantage: makes legacy uniquely ownable
- Risk: cannot reach its potential until archive and image permissions are secured

### Recommendation

Build **Orchestral Spotlight** now. It communicates the core opportunity, works with no unauthorized imagery, and can later absorb approved winner photography and archival materials. Borrow River & Resonance’s subtle horizontal rhythm and Archive in Motion’s source captions on the history and winner pages.

## 8. Design system

- Ink: `#10231f`
- Deep ink: `#071511`
- Ivory: `#f5f0e7`
- Paper: `#fffaf2`
- Oxblood: `#7b2f3a`
- Brass: `#b78045`
- Sage: `#73867f`
- Text: `#17201d`
- Muted text: `#5f6c67`
- Display type: a system-first editorial serif stack (Iowan/Baskerville/Georgia fallbacks)
- Interface type: a system-first humanist sans stack (Aptos/Segoe UI fallbacks)
- Grid: max content width 76rem; reading width 44rem
- Spacing: fluid section spacing based on `clamp()`
- Radius: restrained 0.5–1rem; avoid pill-shaped containers except compact status labels
- Shadows: soft and rare; depth comes primarily from color and overlap
- Motion: opacity/translate reveals and hover transitions only; all disabled or simplified under reduced motion
- Breakpoints: content-driven at approximately 48rem and 68rem

## 9. Technology architecture

- Next.js App Router and React Server Components by default
- TypeScript strict mode
- Static export, one HTML file per route
- One small client component for active navigation and the mobile menu
- CSS variables and hand-authored responsive CSS; no component framework
- Typed local content as the first content-management layer
- Native `<details>` for FAQs and secondary rule disclosure
- GitHub Actions builds and deploys the `out` directory to Pages
- No external runtime services or environment variables in release one

This preserves a future path to a server deployment with:

- validated application APIs
- private object storage
- Postgres/Supabase
- authenticated staff administration
- transactional email
- provider-neutral payments

## 10. Data model

The implementation centralizes:

- site identity and canonical URL
- competition edition and important dates
- current facts and confirmation state
- eligibility and repertoire rules
- awards and partner roles
- winners and source links
- FAQs
- application steps, required materials, and statuses
- payment configuration
- contact information
- policy review status

Unknown values are `null` or explicitly marked `pending`, not invented strings distributed across JSX.

## 11. Application and Zelle workflow

Release one explains the workflow but does not collect data.

Future integrated flow:

1. Applicant reviews eligibility and privacy terms.
2. Applicant/guardian submits validated minimum-necessary data.
3. Server generates a non-sequential identifier such as `YPC-2027-A7K4`.
4. System sends **application received** and payment-instruction emails.
5. Applicant sends the disclosed fee to the approved Zelle recipient with the application ID in the memo.
6. Staff matches the transfer and marks it `payment_under_review`.
7. Authorized staff marks it `complete` only after verification.
8. System sends **payment confirmed / application complete**.

Status model:

`draft` → `submitted` → `payment_pending` → `payment_under_review` → `complete`

Additional outcomes:

`incomplete`, `withdrawn`, and later `scheduled`, `adjudicated`, `winner`, `honorable_mention`.

The payment interface should call a provider adapter so Zelle can later be replaced by Stripe, Square, PayPal, Givebutter, or another approved provider. A client-side “I paid” button must never set the application to complete.

## 12. Accessibility plan

- WCAG 2.2 AA target
- semantic landmarks and logical headings
- skip link
- visible focus treatment
- minimum practical 44px touch targets
- keyboard-operable mobile navigation
- native disclosure controls
- status information expressed in text, not color alone
- no autoplay media or scroll-jacking
- reduced-motion support
- high-contrast palette
- descriptive link text
- future forms to include persistent labels, error summaries, field errors, and live status messages

## 13. Performance and SEO plan

- static HTML per route
- no remote images or runtime font requests
- minimal client JavaScript
- responsive CSS without an animation library
- page-specific title and description
- canonical metadata
- Open Graph/X metadata and a dedicated social card
- Organization, Event (only when dates are verified), FAQ, and breadcrumb structured data
- sitemap and robots rules
- no unverified Event structured data
- no keyword stuffing

## 14. Implementation sequence

1. Establish typed content and confirmation states.
2. Build the shared shell, navigation, footer, and design tokens.
3. Build Home, Competition, Apply, Winners, About, FAQ, Contact, and policy routes.
4. Add metadata, JSON-LD, sitemap, robots, and social image.
5. Add GitHub Pages static-export configuration and workflow.
6. Validate compilation, static output, links, keyboard behavior, responsive layouts, and placeholder states.
7. Commit and publish.

## 15. Launch risks and decisions

The site may be published as an informative preview, but the Apply action must remain closed until all operational details are approved. The largest risks are:

- presenting a historical partner relationship as current
- publishing an incorrect eligibility rule or deadline
- using winner/archival imagery without permission
- implying automatic Zelle verification
- collecting minor data before privacy, retention, and access controls exist

The implementation addresses these risks through explicit confirmation states, an inactive application path, local structured content, and no applicant-data collection.
