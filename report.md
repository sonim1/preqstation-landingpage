# Dogfood Report: Landing Page + Guide

- Date: 2026-03-26
- Branch: `main`
- Scope: `landing` marketing site and `guide` documentation site
- Review mode: browser-based dogfooding from four perspectives
- Reviewers:
  - Landing content and conversion
  - Landing UI and responsive behavior
  - Guide docs, navigation, and localization
  - Cross-journey from landing into guide

## Test Setup

- Landing target: `http://127.0.0.1:4173/`
- Guide target: `http://127.0.0.1:4174/guide/`
- Evidence directory: `.dogfood/screenshots/` (local QA artifact, not committed)

Local preview note:
- The built artifacts opened correctly, but the local static preview was split across ports.
- Landing worked on `4173`.
- Guide worked on `4174`.
- `4173/guide/*` returned `404` in local preview, so any cross-link failure on that route is reported as a local-preview artifact unless it is reproduced again in Cloudflare Pages.

## Summary

| Severity | Count | Notes |
| --- | ---: | --- |
| High | 0 | No confirmed production-blocking issues found in the built output |
| Medium | 9 | Main gaps are messaging clarity, mobile polish, and Korean docs completeness |
| Low | 6 | Mostly terminology, localization edge cases, and minor IA polish |
| Environment-only | 1 | Local split-preview routing issue between landing and guide |

## Follow-up Status (2026-03-27)

This report captures the original dogfood findings. The current `main` branch has already addressed most of the execution blockers found during that pass.

Resolved on `main`:
- `L-03` Audience framing is now led by fit and workflow value instead of exclusion-heavy copy.
- `L-05` Landing now includes an execution-proof section instead of unsupported claims alone.
- `L-06`, `L-07`, `L-08` Narrow-screen header and mobile rail issues were reworked.
- `G-01` Korean sidebar/navigation chrome is localized.
- `G-02`, `G-03` Korean setup body and its TOC now render in Korean instead of mixed English fallback.
- `G-04`, `G-05` Shared guide chrome and code-copy UI were localized for Korean routes, including fallback pages.
- `G-06` Quick Start now walks through the first API-key flow with concrete steps.
- `G-07` Repeated generic `Setup` labels were renamed to more specific nav labels.

Improved but still worth a future pass:
- `L-01` Hero clarity is stronger, but the first sentence can still get even plainer for first-time visitors.
- `L-02` CTA flow is better because the primary path now points at execution proof, but a short demo or live product walkthrough would still strengthen conversion.
- `L-04` Terminology is more consistent than before, but the site still uses several adjacent terms (`AI`, `agent`, `engine`, `session`) that could be tightened further.
- `X-01` Cross-origin `/guide` behavior still needs one real Cloudflare Pages check rather than local split-port preview only.

## Top Priorities

1. Clarify the landing hero and conversion path so first-time visitors understand the product in one pass.
2. Finish Korean localization across navigation chrome and high-traffic setup pages.
3. Fix narrow-screen landing behavior for the header, CTA, and horizontal feature rail.
4. Replace placeholder onboarding gaps in Quick Start with a complete first-key flow.

## Findings

### Landing

#### L-01 Medium: Hero does not explain the product in plain language

- URL: `http://127.0.0.1:4173/`
- Repro: Open the landing page and read the hero without prior product context.
- Observed: The hero introduces queueing, agents, and run-state overlays, but it does not state the product category or the simplest job-to-be-done in plain language.
- Why it matters: First-time visitors need to infer whether PREQSTATION is issue tracking, agent orchestration, or a developer workflow tool.
- Recommendation: Add a one-line product definition directly under the headline, such as what PREQSTATION is, who it is for, and what outcome it produces.
- Evidence: `.dogfood/screenshots/landing-hero.png`

#### L-02 Medium: Primary CTA is docs-first instead of activation-oriented

- URL: `http://127.0.0.1:4173/`
- Repro: Open the landing page and inspect the primary actions above the fold.
- Observed: The main CTA sends users to the guide, and the secondary CTA sends them to GitHub. There is no “see it working” or “try the workflow” path.
- Why it matters: Docs are valuable, but they are not the best first step for visitors deciding whether the product is worth adopting.
- Recommendation: Keep the guide CTA, but add a product-first activation path such as a short demo, animated walkthrough, or live example repo.
- Evidence: `.dogfood/screenshots/landing-hero.png`

#### L-03 Medium: Audience framing mixes target users with exclusion language

- URL: `http://127.0.0.1:4173/`
- Repro: Read the “Who is it for?” and surrounding positioning sections.
- Observed: The page explains who should use PREQSTATION, but also spends significant space explaining what it is not and what should not be done with it.
- Why it matters: The positioning is directionally correct, but it makes the value proposition feel defensive before it feels useful.
- Recommendation: Lead with who gets value and the concrete situations where PREQSTATION fits, then keep the “not a generic issue tracker” framing as supporting guidance.
- Evidence: `.dogfood/screenshots/landing-mobile-carousel.png`

#### L-04 Low: Terminology shifts between AI, agents, engines, and sessions

- URL: `http://127.0.0.1:4173/`
- Repro: Read the hero and feature sections end to end.
- Observed: The page alternates between “AI”, “agents”, “engine”, and “raw AI sessions” without defining the terms or their relationship.
- Why it matters: Visitors have to normalize vocabulary mentally before they can understand the product model.
- Recommendation: Standardize the top-level language and define secondary terms once.
- Evidence: `.dogfood/screenshots/landing-hero.png`

#### L-05 Low: Strong claims are not supported with proof

- URL: `http://127.0.0.1:4173/`
- Repro: Read the page looking for social proof or concrete proof points.
- Observed: The page claims safer execution and better workflow control, but there are no short proofs such as screenshots of the app, logs, audit trail examples, or a real-world flow.
- Why it matters: For infrastructure-adjacent products, credibility usually improves when claims are paired with visible artifacts.
- Recommendation: Add one evidence-heavy section with a small workflow capture, audit trail snippet, or before/after developer flow.
- Evidence: `.dogfood/screenshots/landing-hero.png`

#### L-06 Medium: Mobile hero CTA clips on very narrow widths

- URL: `http://127.0.0.1:4173/`
- Repro: Open the landing page at `320px` width.
- Observed: The `Read the Guide` CTA clips against the right edge and feels cramped in the header.
- Why it matters: The page still renders, but the CTA looks unstable at the smallest common mobile width.
- Recommendation: Collapse the header earlier, reduce CTA size in the navbar, or move the primary CTA out of the fixed header on small screens.
- Evidence: `.dogfood/screenshots/landing-mobile-header-320.png`

#### L-07 Medium: Mobile header does not expose a clear menu pattern

- URL: `http://127.0.0.1:4173/`
- Repro: Open the landing page on a narrow mobile viewport.
- Observed: The header shows branding, GitHub, locale, and CTA, but there is no obvious menu toggle for additional navigation.
- Why it matters: The current header behaves more like a compressed desktop bar than a purpose-built mobile navigation pattern.
- Recommendation: Introduce a visible mobile menu toggle or intentionally reduce the header to the essential actions only.
- Evidence: `.dogfood/screenshots/landing-mobile-header-320.png`

#### L-08 Medium: Horizontal feature rail becomes swipe-only on mobile

- URL: `http://127.0.0.1:4173/`
- Repro: Open the page on mobile and scroll to the card rail under the positioning content.
- Observed: The rail overflows horizontally, but desktop-style navigation affordances disappear, leaving discovery dependent on manual swipe behavior.
- Why it matters: Some users will not realize more cards exist, especially when the current viewport only shows one card cleanly.
- Recommendation: Add mobile-specific pagination indicators, visible next/previous affordances, or stack the cards vertically on smaller screens.
- Evidence: `.dogfood/screenshots/landing-mobile-carousel.png`

### Guide

#### G-01 Medium: Korean sidebar navigation remains mostly English

- URL: `http://127.0.0.1:4174/guide/ko/getting-started/overview/`
- Repro: Open the Korean overview page and compare page body language with sidebar language.
- Observed: The page title and main content are Korean, but most sidebar section labels remain English.
- Why it matters: The locale switch feels partial, and navigation confidence drops because the surrounding chrome does not match the selected language.
- Recommendation: Localize sidebar labels for the high-traffic Korean routes first, even if the full docs set is not yet translated.
- Evidence: `.dogfood/screenshots/guide-overview-ko.png`

#### G-02 Medium: Korean setup page body remains English

- URL: `http://127.0.0.1:4174/guide/ko/web-app/setup/`
- Repro: Open the Korean setup page.
- Observed: The route is under `/ko/`, and the top-level UI is Korean, but the document body is still English.
- Why it matters: This is more confusing than a clear fallback because the URL and chrome imply that the page is localized when it is not.
- Recommendation: Either translate the full page or route Korean users to the English canonical version with a more explicit fallback banner.
- Evidence: `.dogfood/screenshots/guide-setup-ko.png`

#### G-03 Low: In-page table of contents mixes Korean and English

- URL: `http://127.0.0.1:4174/guide/ko/web-app/setup/`
- Repro: Open the Korean setup page and inspect the right-side table of contents.
- Observed: The page chrome is Korean, but the TOC entries stay English because the underlying headings are untranslated.
- Why it matters: The mixed-language TOC reinforces the incomplete-localization feeling.
- Recommendation: Translate headings together with page body content or suppress the localized route until the page is fully ready.
- Evidence: `.dogfood/screenshots/guide-setup-ko.png`

#### G-04 Low: Previous and next doc navigation is only partially localized

- URL: `http://127.0.0.1:4174/guide/ko/web-app/setup/`
- Repro: Navigate to the bottom doc pager on Korean routes.
- Observed: Pager labels and nearby UI strings are only partially translated.
- Why it matters: This is a small polish issue, but it makes the Korean experience feel unfinished.
- Recommendation: Audit shared UI strings in the Starlight chrome and localize them consistently.
- Evidence: `.dogfood/screenshots/guide-setup-ko.png`

#### G-05 Low: Code block copy actions remain untranslated

- URL: `http://127.0.0.1:4174/guide/ko/web-app/setup/`
- Repro: Inspect code blocks on Korean routes.
- Observed: Copy-action UI remains in English.
- Why it matters: This is a minor polish gap, but it stands out because code blocks are used heavily in setup docs.
- Recommendation: Localize code block action strings in the shared guide theme layer.
- Evidence: `.dogfood/screenshots/guide-setup-ko.png`

#### G-06 Medium: Quick Start has a non-actionable “Issue Your First API Key” step

- URL: `http://127.0.0.1:4174/guide/getting-started/quick-start/`
- Repro: Open Quick Start and follow the install steps through the “Issue Your First API Key” section.
- Observed: The section exists in the navigation, but it does not guide the user through an actual first-key flow with concrete steps or screenshots.
- Why it matters: API-key issuance is a critical activation milestone. If that step is vague, the guide stops being truly quick-start oriented.
- Recommendation: Add the exact first-key workflow, expected UI location, required permissions, and example request/response.
- Evidence: `.dogfood/screenshots/guide-quickstart-ko-fallback.png`

#### G-07 Low: Sidebar contains duplicate “Setup” labels

- URL: `http://127.0.0.1:4174/guide/getting-started/quick-start/`
- Repro: Inspect the left sidebar structure while moving between Getting Started, Web App, and OpenClaw sections.
- Observed: The docs IA exposes multiple adjacent “Setup” entries across different product areas, which makes scanning slower.
- Why it matters: The labels are technically correct, but not specific enough when repeated in different contexts.
- Recommendation: Rename repeated entries with context-specific labels such as `Web App Setup` and `OpenClaw Setup`.
- Evidence: `.dogfood/screenshots/guide-quickstart-ko-fallback.png`

### Cross-Journey

#### X-01 Environment-only: Landing guide CTA leads to a dead route in split local preview

- URL: `http://127.0.0.1:4173/`
- Repro: Click `Read the Guide` from the landing page while using the local static preview described above.
- Observed: The CTA opens `http://127.0.0.1:4173/guide/getting-started/overview`, which returns `404` in the local split-port preview.
- Why it matters: This breaks local dogfooding of the cross-site journey, but it was not reproduced as a confirmed production issue.
- Recommendation: Re-test the same flow on the Cloudflare Pages deployment before treating this as a product bug. For local QA, serve the merged `.cf-pages-dist` on a single origin or use a preview tool that preserves the `/guide` subtree correctly.
- Evidence: `.dogfood/screenshots/landing-hero.png`

## Recommended Next Actions

1. Landing conversion pass
   - Rewrite the hero subheading in plain product language.
   - Add a proof section with a real workflow artifact.
   - Introduce a higher-intent CTA than “read the docs”.

2. Landing mobile pass
   - Rework the narrow-screen header.
   - Fix CTA clipping at `320px`.
   - Replace the swipe-only rail behavior.

3. Guide localization pass
   - Localize sidebar and shared UI chrome.
   - Decide whether partially translated pages should stay under `/ko/`.
   - Finish translation for high-traffic setup pages first.

4. Guide onboarding pass
   - Make Quick Start fully actionable through first API key issuance.
   - Rename repeated `Setup` nav labels to reduce ambiguity.

5. Deployment QA pass
   - Re-run the cross-journey checks on the real Cloudflare Pages deployment to confirm whether the `/guide` link issue exists outside local preview.

## Evidence Files

- `.dogfood/screenshots/landing-hero.png`
- `.dogfood/screenshots/landing-mobile-header-320.png`
- `.dogfood/screenshots/landing-mobile-carousel.png`
- `.dogfood/screenshots/guide-home-en.png`
- `.dogfood/screenshots/guide-overview-en.png`
- `.dogfood/screenshots/guide-overview-ko.png`
- `.dogfood/screenshots/guide-quickstart-ko-fallback.png`
- `.dogfood/screenshots/guide-setup-ko.png`
