# Folder Structure

```
MD-website-v1/
├── docs/                          # planning / system documentation
├── public/
│   ├── fonts/                     # Satoshi-Variable.woff2, MungSignature.woff2
│   └── images/
├── src/
│   ├── app/
│   │   ├── (marketing)/           # route group — public site chrome
│   │   │   ├── layout.tsx         # Header + Footer wrapper
│   │   │   ├── page.tsx           # Home
│   │   │   ├── about/page.tsx
│   │   │   ├── faqs/page.tsx
│   │   │   ├── talks/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── case-studies/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── careers/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   └── services/
│   │   │       └── [service]/page.tsx
│   │   ├── (funnel)/              # route group — quote wizard chrome
│   │   │   └── quote/
│   │   │       ├── layout.tsx
│   │   │       ├── page.tsx       # service picker
│   │   │       ├── [service]/
│   │   │       │   └── [step]/page.tsx
│   │   │       ├── schedule-call/page.tsx
│   │   │       └── thank-you/page.tsx
│   │   ├── orderbase/page.tsx     # microsite (or move under /work/orderbase)
│   │   ├── layout.tsx             # root layout: fonts, html lang, providers
│   │   ├── globals.css            # @theme tokens, fonts, base styles
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── ui/                    # primitives — Button, Input, Tag, …
│   │   ├── layout/                # Container, Section, Header, Footer
│   │   ├── blocks/                # composable page sections
│   │   └── funnel/                # quote wizard pieces
│   ├── lib/
│   │   ├── cn.ts                  # className merge helper
│   │   ├── motion.ts              # Framer variants + easings
│   │   ├── quote/
│   │   │   └── schema.ts          # quote funnel step graph
│   │   └── cms/                   # CMS clients (Sanity/Contentful)
│   ├── content/                   # MDX content if not on a CMS
│   ├── types/                     # shared TS types
│   └── hooks/                     # custom React hooks (client only)
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── eslint.config.mjs
└── package.json
```

## Naming

- Components: `PascalCase.tsx`, one component per file, default export
- Hooks: `useThing.ts`
- Utilities: `kebab-case.ts`
- Route segments: `kebab-case`
- Dynamic params: `[slug]`, `[service]`, `[step]`

## Why route groups

- `(marketing)` — wraps Header + Footer once; every public marketing page inherits it
- `(funnel)` — quote wizard runs in its own minimal chrome (progress bar, back button, no Footer); isolating it prevents accidental component bleed
- Both groups produce no path segments

## Why a single `[service]/[step]` dynamic route for the funnel

The Figma file has 30+ frame variants for the quote form. Building each as a page would mean massive duplication. One dynamic route + a JSON schema = one source of truth for branching, validation, and copy.
