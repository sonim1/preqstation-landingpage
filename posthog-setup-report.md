<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the PreqStation landing page. The project uses a client-side posthog-js browser snippet (already embedded in `PostHog.astro` and loaded via `Layout.astro`). A thin TypeScript helper `apps/landing/src/lib/posthog.ts` wraps `window.posthog.capture()` safely — it no-ops during SSR and when PostHog is blocked, so it works correctly in the Astro + React hybrid rendering model.

PostHog environment variables are set in `apps/landing/.env`. Event tracking covers all key conversion touchpoints across the landing page.

| Event | Description | File |
|---|---|---|
| `hero_cta_clicked` | User clicked "See the workflow" primary CTA in the hero section | `apps/landing/src/components/Hero/Hero.tsx` |
| `setup_guide_clicked` | User clicked "Start Setup" guide CTA — strongest install-intent signal | `apps/landing/src/components/Hero/Hero.tsx`, `apps/landing/src/components/CTA/CTA.tsx` |
| `github_link_clicked` | User clicked a GitHub link; `location` property identifies which section (hero / nav / nav_mobile / cta) | `apps/landing/src/components/Hero/Hero.tsx`, `apps/landing/src/components/common/Nav.tsx`, `apps/landing/src/components/CTA/CTA.tsx` |
| `nav_cta_clicked` | User clicked the "Start Setup" CTA in the sticky navigation bar | `apps/landing/src/components/common/Nav.tsx` |
| `locale_changed` | User switched interface language; `from_locale` and `to_locale` properties track the transition | `apps/landing/src/components/common/Nav.tsx` |
| `faq_question_expanded` | User expanded a FAQ item; `question` and `question_index` properties identify which one | `apps/landing/src/components/FAQ/FAQ.tsx` |
| `pricing_github_clicked` | User clicked the GitHub CTA on the pricing section | `apps/landing/src/components/Pricing/Pricing.tsx` |
| `cta_section_clicked` | User clicked the "See the workflow" button in the bottom CTA section | `apps/landing/src/components/CTA/CTA.tsx` |
| `footer_privacy_clicked` | User clicked the Privacy Policy link in the footer | `apps/landing/src/components/common/Footer.tsx` |
| `footer_terms_clicked` | User clicked the Terms of Service link in the footer | `apps/landing/src/components/common/Footer.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events instrumented across the landing page:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/413231/dashboard/1554310
- **GitHub click conversions (all locations)**: https://us.posthog.com/project/413231/insights/JPxZk5oy
- **CTA performance comparison**: https://us.posthog.com/project/413231/insights/3FDxY8RV
- **Landing page conversion funnel** (hero CTA → setup guide → GitHub): https://us.posthog.com/project/413231/insights/R8FOqvkY
- **FAQ engagement — questions expanded**: https://us.posthog.com/project/413231/insights/PqnrkqEG
- **Locale / language switches**: https://us.posthog.com/project/413231/insights/mnRbQUsV

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
