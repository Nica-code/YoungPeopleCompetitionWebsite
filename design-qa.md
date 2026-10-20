# Application-first redesign QA

Date: October 19, 2026.

## Visual target and evidence

- Selected target: `design-explorations/2026-10-19/option-3-application-first.png` (third image displayed in the selection set).
- Revised target with the requested Cabell logo and full YPC wordmark: `design-explorations/2026-10-19/selected-application-first-revised.png`.
- Actual browser capture: `outputs/design-qa-2026-10-19/desktop-rendered-final.png`.
- Full comparison: `outputs/design-qa-2026-10-19/desktop-comparison.png`.
- Focused typography, header, and form comparison: `outputs/design-qa-2026-10-19/focused-comparison.png`.
- Mobile evidence: `mobile-top-cropped.png`, `mobile-application-final-cropped.png`, `mobile-320-cropped.png`, and `mobile-partners-and-contact-cropped.png` in the same output directory.
- Printable-layout evidence: `print-styles-letter-cropped.png` in the same output directory.

## Capture and normalization

The in-app browser panel cannot set its outer viewport width. A temporary, local-only QA wrapper rendered the actual site in same-origin iframes at measured CSS widths of 1440, 768, 390, and 320 pixels. This was live HTML/CSS, not a screenshot used as an interface.

Desktop: the actual 1440 × 2160 CSS-pixel frame was displayed at 50%, producing a 720 × 1080 capture region. The source image is 1086 × 1448 pixels, normalized to 720 × 960 for the full and focused comparisons. Both comparison images contain source and implementation together at the same normalized content width. The additional implementation capture height provides room for the live contact controls and footer. The focused comparison aligns both top sections; no browser chrome or device frame is compared.

Mobile: 390 × 844 and 320 × 844 CSS-pixel frames at 1:1 scale. The viewport reports confirmed document widths of 375 and 305 pixels respectively (the browser's 15-pixel scrollbar accounts for the difference), with the wordmark displayed and all 15 application fields present. There is no horizontal overflow at either phone size.

State: light theme, empty application except for synthetic local entry tests. No real applicant data was entered.

## Findings and fixes

### Earlier actionable findings

1. **P2 — Competition heading overflow at the tablet breakpoint.** The first 759-pixel render allowed “Competition” to extend into the form. The title now scales to the available column through container-relative sizing instead of a fixed tablet font size.
2. **P2 — Duplicate anchor offset.** HTML scroll padding and section scroll margin both added space. The duplicate was removed. The final mobile application capture places the form immediately below the persistent header, with the first applicant fields visible.
3. **P2 — Desktop text scale too small against the concept.** The initial full and focused comparisons showed body text and form labels below the selected design's hierarchy. Desktop body copy, labels, group headings, print controls, and the wordmark were enlarged. The final combined comparisons show the corrected scale and spacing.

### Final required fidelity surfaces

- **Fonts and typography:** locally hosted Cormorant Garamond supplies the editorial serif; a system sans-serif keeps field labels and practical information readable. Desktop overview text is 20.8px and form labels 15.04px. Titles retain the burgundy hierarchy. The full competition name is visible beside YPC at 390px and 320px.
- **Spacing and layout:** the selected two-column composition remains intact, with a slim divider and application fields at the top. Mobile uses a compact introduction, then the application, then prizes and partners. Inputs have practical touch heights; no panels overlap.
- **Colors and tokens:** warm white, burgundy, soft neutral rules, and a quiet tinted mailing block match the selected direction. Focus indicators are visible and reduced motion is respected.
- **Image and asset fidelity:** the real Marshall horizontal logo, HSO symbol, and Cabell County Schools logo are used at their original aspect ratios. The Woman's Club remains a text credit. UI icons are original Phosphor assets, not fabricated logos or custom illustrations.
- **Copy and content:** approved eligibility, dates, prize amounts, partner roles, mailing route, and 15 application fields are preserved. The exact label is “Recent past winners.” The older known winners remain in source only. The source mock's extra address subdivisions and grade constraints were intentionally omitted to preserve the approved application fields. Only first prize includes an orchestra performance.

## Interaction verification

- Main Apply link jumps to the form and closes the mobile menu. Its heading receives focus.
- Mobile menu opens and closes; Apply stays visible outside it.
- Synthetic local input remains on the page after Enter. There is no native submission form, action, submit button, storage code, or request containing applicant entries. The input group retains an accessible form landmark.
- `/apply/` and `/application-form/` both render the full application, preserving existing links without an instructions gateway. Apply uses a local anchor on these pages so it does not discard entered values by navigating elsewhere.
- Blank PDF file existence and PDF structure are covered by the static export checks; asset paths cover both GitHub Pages and Sites.
- Print control calls the browser print action. The embedded browser did not expose its native print dialog for capture. Separately, the real print stylesheet was rendered in a local letter-sized 816 × 1056 CSS-pixel review frame: all fields, sample values, deadline, check instructions, and mailing address fit, with a measured 885px form height within 960px of usable page height. This verifies styling, not printer-specific pagination.
- A fresh standalone visit to Competition and its Apply link returned no application errors. The print-review harness had caused a development hydration warning by adding inline body padding before hydration; that warning was specific to the temporary harness, which was removed before production builds.

## Final assessment

No actionable P0/P1/P2 visual findings remain. The implementation preserves the selected application-first direction with the user's requested branding additions. Minor differences from the concept are intentional: original logo proportions, the approved unsplit address fields, real contact actions, and quiet legal footer links.

Follow-up polish: browser/printer-specific PDF output may vary with print settings; no actual printer job was sent.

Implementation checklist: selected layout implemented; direct application implemented; official logos integrated; phone wordmark visible; local entry and menu checked; print styling reviewed; temporary QA wrapper removed. Final Next.js static export, TypeScript check, and Vinext production build passed. All 10 static-export regression checks passed.

final result: passed
