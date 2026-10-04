/**
 * GitHub Pages preview only (this file lives on the `pages` branch): swaps
 * the CMS blog banners on the homepage Talks section for our office photos,
 * so the team can review the section design. Keyed by CMS talk slug.
 * Production keeps the CMS covers.
 */
export const PREVIEW_TALK_COVERS: Record<string, { url: string; alternativeText: string }> = {
  "late-digital-decisions-egypt": {
    url: "/images/talks/agency-ux.webp",
    alternativeText: "MitchDesigns team designing mobile app screens in the office",
  },
  "media-buying-optimization": {
    url: "/images/talks/responsive-designer.webp",
    alternativeText: "Designer working on a laptop in the MitchDesigns office",
  },
  "how-to-evaluate-media-buying-agency-egypt": {
    url: "/images/talks/branding.webp",
    alternativeText: "Two MitchDesigns team members at a meeting table with laptops",
  },
  "ux-vs-design-trends": {
    url: "/images/talks/featured.webp",
    alternativeText: "Restaurant manager reviewing orders on a tablet beside an open kitchen",
  },
};
