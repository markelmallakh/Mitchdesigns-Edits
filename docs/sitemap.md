# Sitemap

Mirrors the Figma V10 page set. Route groups in parentheses are App Router segments and don't affect URLs.

## Marketing — `(marketing)` group

- `/` — Home
- `/about` — About Us
- `/faqs` — FAQs
- `/talks` — Talks index
- `/talks/[slug]` — Single Talk
- `/case-studies` — Case Studies index
- `/case-studies/[slug]` — Single Case Study (e.g. El Gouna)
- `/careers` — Careers index
- `/careers/[slug]` — Single Career
- `/services/[service]` — Service lander
  - corporate-website
  - mobile-app
  - ecommerce
  - custom-platform
  - media-buying
  - seo
  - google-ads

## Quote funnel — `(funnel)` group

- `/quote` — Service picker (entry point)
- `/quote/[service]/[step]` — Dynamic step renderer driven by a JSON schema
  - service ∈ { corporate-website | custom-web | mobile-app | ecommerce }
  - step is numeric (1..N); each service has its own step graph
- `/quote/schedule-call` — Outcome: book a call
- `/quote/thank-you` — Outcome: form submitted (with/without sitemap variant via query)

## Microsite

- `/orderbase` — Orderbase landing page (deep-dive case study; may move to `/work/orderbase`)

## System

- `/404` (not-found)

## Footer-only / legal (to add)

- `/privacy`
- `/terms`
