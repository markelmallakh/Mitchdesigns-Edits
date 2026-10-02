# Components

Three-layer architecture. Strict directionality — `ui` knows nothing about `blocks`; `blocks` compose `ui` + `layout`; pages compose `blocks`.

## `components/ui/` — primitives

Stateless, presentational, no domain logic. Map 1:1 to the Figma component library.

| Component    | Variants (from Figma)                 | Notes                                       |
| ------------ | ------------------------------------- | ------------------------------------------- |
| `Button`     | primary, secondary, ghost, icon, link | 101 instances — most reused; `rounded-full` |
| `Input`      | default, focus, error                 | text + email + tel                          |
| `Textarea`   | default, focus, error                 |                                             |
| `Radio`      | default, checked, disabled            | 77 instances                                |
| `Checkbox`   | default, checked, indeterminate       | 15+ instances                               |
| `Tag`        | default, accent                       | 24 instances                                |
| `Accordion`  | collapsed, expanded                   | FAQ primitive                               |
| `Card`       | default, selected                     | funnel service-select card                  |
| `FileUpload` | default, progress, success            | quote form                                  |
| `Icon`       | wraps an SVG sprite                   | HugeIcons-style set                         |
| `Marquee`    | —                                     | infinite horizontal scroll (logos, tech)    |
| `LinkButton` | default, hover                        | 18 instances                                |
| `IconButton` | default, hover                        |                                             |
| `Divider`    | horizontal, vertical                  |                                             |
| `Rating`     | 1–5 stars                             | testimonials                                |

## `components/layout/` — chrome

| Component    | Notes                                                                        |
| ------------ | ---------------------------------------------------------------------------- |
| `Container`  | width-capped (`--container-max`), padded                                     |
| `Section`    | vertical rhythm + `data-theme` toggle                                        |
| `Header`     | scroll-aware (collapsed/expanded × light/dark × desktop/mobile = 5 variants) |
| `Footer`     | desktop, mobile                                                              |
| `MegaMenu`   | inside Header (expanded state)                                               |
| `MobileMenu` | inside Header (mobile)                                                       |

## `components/blocks/` — composable page sections

Each block is a self-contained section that takes content as props. Stitched together on pages.

- `Hero` (default)
- `HeroAnimated` — word/headline rotator ("Innovate animation")
- `OurServices` — service cards ( Accordion, Button, Typography, etc )
- `ApproachGrid` — process / methodology steps
- `CaseStudyGrid` — featured project cards
- `CaseStudyHero` — single-project hero
- `TestimonialMarquee` — sliding testimonial track
- `StatsBand` — numeric stats strip
- `TechStack` — animated tech logos grid
- `LogoMarquee` — client logo strip (horizontal infinite scroll)
- `CTABanner` — "ready to start" pre-footer CTA
- `FAQSection` — accordion list
- `TeamGrid` — about page team members
- `TalksList` — talks index cards
- `CareersList` — careers index cards

## `components/funnel/` — quote wizard

| Component               | Notes                                  |
| ----------------------- | -------------------------------------- |
| `ServicePicker`         | entry point — pick path                |
| `StepShell`             | progress bar, back button, transitions |
| `steps/RadioStep`       | single-select radio cards              |
| `steps/MultiSelectStep` | multi-select checkbox cards            |
| `steps/FileUploadStep`  | sitemap / brief upload                 |
| `steps/ContactStep`     | name / email / phone form              |
| `steps/SummaryStep`     | review + submit                        |

The quote funnel is driven by a JSON schema (`src/lib/quote/schema.ts`) — one entry per service describing its step graph, options, validation, and branching rules. **Do not build a page per Figma frame.**

## Reuse rules

- Buttons, inputs, and accordions must never be re-implemented inline in blocks
- Any element appearing 3+ times across the design lives in `ui/`
- Any section appearing on 2+ pages lives in `blocks/`
- Pages should be ≤ 100 lines — just composition + content
