# MitchDesigns Website

## Company

MitchDesigns — Website & Mobile App Design Company based in Egypt.

## Goals

- Showcase portfolio (case studies)
- Generate qualified leads through a multi-step quote funnel
- Present services with dedicated landing pages per offering
- Build trust through testimonials, talks, and team transparency

## Stack

- Next.js 15 (App Router)
- TypeScript (strict)
- Tailwind CSS v4 (token-driven via `@theme`)
- Framer Motion (component-level animation)
- GSAP + ScrollTrigger (scroll-pinned sequences and marquees, where Framer falls short)

## Main surfaces

- Marketing pages (Home, About, FAQs, Talks index + detail, Case Studies index + detail, Careers index + detail)
- Service landers (Corporate Website, Mobile App, eCommerce, Custom Platform, Media Buying, Rank with SEO, Google Ads)
- Quote funnel (branched, service-specific multi-step form)
- Funnel outcomes (Schedule Call, Thank You with sitemap, Thank You without sitemap)
- Orderbase microsite (deep-dive case study)
- 404

## Style

- Modern, minimal, premium, motion-forward
- Single typeface (Satoshi) with a signature font for accents (MungSignature)
- One brand accent: Yellow (#FFDB00)
- Section-scoped theming — light, dark, and beige surfaces flip via `data-theme`

## Source of truth

Figma file: `tWkSItDoRdiy7aSJzHlN5T` (Untitled — MitchDesigns V10).
Design tokens, components, and variants are mirrored in `src/app/globals.css` (`@theme`) and `src/components/`.
