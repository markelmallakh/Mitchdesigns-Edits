# Claude Development Rules

## Stack & framework

- Next.js 15 App Router only (no Pages Router)
- TypeScript strict — no `any`, no `@ts-ignore` without a comment explaining why
- Tailwind CSS v4 — tokens come from `@theme` in `globals.css`, NOT from `tailwind.config.*`
- Framer Motion for component motion; GSAP + ScrollTrigger for scroll-pinned sequences
- Server components by default; opt into `"use client"` only when needed (state, refs, browser APIs, motion hooks)

## Architecture

- Feature-based folder structure
- Strict layer direction: `ui` ← `layout` ← `blocks` ← `pages`. Never call upward.
- Use the `@/` import alias (configured in `tsconfig.json`)
- Pages are composition only — no inline business logic, no inline styling beyond spacing

## Components

- Build reusable components — anything appearing 3+ times in Figma is a primitive
- Use `cn()` from `@/lib/cn` for class merging — never raw `className` concatenation
- Variant patterns: prefer discriminated unions over open string props
- All interactive elements must be keyboard accessible and have focus styles
- Use semantic HTML — `<button>` for actions, `<a>` for navigation, `<section>` for blocks

## Styling

- No raw hex colors in components — always use semantic tokens (`bg-bg`, `text-fg`, `text-fg-muted`, `border-border`)
- No raw font sizes — use the type scale (`text-hero-1` … `text-xs`)
- Surface theming via `data-theme` on `<Section>`, not via component props
- Mobile-first responsive design

## Motion

- Respect `prefers-reduced-motion` at the primitive level (handled globally in `globals.css`)
- Animations should be smooth and minimal — easings come from `--ease-out-soft` / `--ease-in-out-soft`
- Use `fadeUp` / `stagger` from `@/lib/motion` for entrance animations
- Marquees are CSS/GSAP — never render the 5–7k px Figma frames as images

## Quote funnel

- Driven by a JSON schema, not one page per Figma frame
- State persisted to `sessionStorage` on each step
- Step index lives in the URL for back-button + share behavior

## Content

- Static content (services, FAQs, talks, careers) → MDX or CMS (Sanity/Contentful); never hardcoded inside components
- Use `generateStaticParams` + ISR for content-driven routes

## Don'ts

- Don't recreate components Figma already defines — check `components.md` first
- Don't add a tablet breakpoint until designs are confirmed
- Don't introduce a second font family beyond Satoshi + MungSignature
- Don't ship the 30+ quote form variants as separate pages
