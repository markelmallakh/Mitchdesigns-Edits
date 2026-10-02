# Design System

Tokens live in `src/app/globals.css` under `@theme`. Consume them via Tailwind v4 utilities (e.g. `bg-bg`, `text-fg`, `text-hero-1`) or CSS variables (`var(--color-accent)`).

## Colors

| Token | Value | Usage |
|---|---|---|
| `--color-white` | `#FFFFFF` | base light surface |
| `--color-black` | `#07020D` | base text / dark surface |
| `--color-space-grey` | `#1D1D1B` | dark surface alt |
| `--color-grey-500` (Medium) | `#878787` | secondary text |
| `--color-grey-200` (Light) | `#D6D6D6` | borders, dividers |
| `--color-bej` | `#F9F7F1` | beige alt surface |
| `--color-yellow` | `#FFDB00` | primary accent |
| `--color-orderbase-red` | `#E72B29` | case-study scoped (Orderbase) |

**Semantic aliases** (preferred in components):
`--color-bg`, `--color-bg-alt`, `--color-fg`, `--color-fg-muted`, `--color-border`, `--color-accent`, `--color-accent-fg`.

**Section theming** — apply `data-theme="dark"` or `data-theme="beige"` to a `<Section>` to flip surface tokens. Header observes intersections and adapts its variant.

## Typography

Single family: **Satoshi** (variable 300–900). Signature/accent: **MungSignature**.

| Token | Size | Weight | Line-height | Notes |
|---|---|---|---|---|
| `text-hero-1` | 92px | 900 | 1.10 | Hero H1 |
| `text-hero-2` | 60px | 700 | 1.10 | Hero H2 |
| `text-display` | 56px | 900 | 1.20 | Display (`-1px` tracking) |
| `text-hero-3` | 46px | 700 | 1.10 | Section title |
| `text-hero-4` | 40px | 700 | 1.10 | Section title (sm) |
| `text-hero-5` | 32px | 700 | 1.10 | Block title |
| `text-xl` | 24px | 500/700 | 1.25 | Lead body |
| `text-lg` | 20px | 400/500/700 | 1.30 | Large body |
| `text-base` | 16px | 400/500/700 | 1.25 | Body |
| `text-sm` | 14px | 400/500 | 1.30 | Meta / labels |
| `text-xs` | 12px | 400/500 | 1.30 | Captions |

Fonts loaded via `@font-face` in `globals.css` — drop `.woff2` files into `public/fonts/`:
- `Satoshi-Variable.woff2`
- `MungSignature.woff2`

## Radii

| Token | Value | Used by |
|---|---|---|
| `--radius-card` | 24px | Service / project / blog cards |
| `--radius-card-sm` | 10px | FAQs, testimonials, featured, tech stack |
| `--radius-pill` | 9999px | Buttons, tags |

## Shadows

- `--shadow-soft` — `0 4px 24px -8px rgb(7 2 13 / 0.08)`
- `--shadow-soft-lg` — `0 12px 48px -12px rgb(7 2 13 / 0.12)`

## Layout

- Desktop canvas: **1512px** with **60px** horizontal padding → **1392px** content
- `--container-max`: 1392px
- `--container-padding`: 24px (mobile), 60px (≥1024px)
- Mobile breakpoint: **420px** (Figma) → use Tailwind's `sm:` 640+ in practice
- Tablet breakpoint: not defined in Figma — code defines a fluid container between 768–1024

## Spacing

Multiples of 4/8. Common values: 4, 8, 12, 16, 20, 24, 32, 40, 60, 80, 120.
Section vertical rhythm typically 80–120px between blocks.

## Motion

- Easings: `--ease-out-soft` `cubic-bezier(.22,1,.36,1)`, `--ease-in-out-soft` `cubic-bezier(.65,0,.35,1)`
- Reusable Framer variants in `src/lib/motion.ts` (`fadeUp`, `stagger`)
- Heavy scroll-pinned sequences (e.g. Innovate animation) use GSAP + ScrollTrigger
- All motion respects `prefers-reduced-motion`

## Theming rules

- Yellow is the only brand accent — never invent secondary accents
- Backgrounds: White → Bej → Black/Space Grey — never use raw grey-500 as a surface
- Borders use `--color-border`, which switches per theme
- Text uses `--color-fg` and `--color-fg-muted` exclusively (no raw hex in components)
