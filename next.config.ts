import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Invalid src prop (http://localhost:1337/images/case-studies/el-gouna.webp) on `next/image`, hostname "localhost" is not configured under images in your `next.config.js`
    // pub-aa7546047e2b40c9810cb247ee90e22d.r2.dev
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 31 days (report flagged /_next/image as "None").
    minimumCacheTTL: 2678400,
    remotePatterns: [
      // Add CMS image domains here, e.g.:
      // { protocol: "https", hostname: "cdn.sanity.io" },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "pub-aa7546047e2b40c9810cb247ee90e22d.r2.dev",
      },
      {
        protocol: "https",
        hostname: "cms.mitchdesigns.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
    viewTransition: true,
  },
  // RFC 8288 Link headers — advertise real, agent-useful resources from the
  // homepage. All three use IANA-registered relation types and point to
  // resources that actually exist. Relative URIs resolve against the request
  // host, so this works on staging and prod without env coupling.
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value: [
              '</sitemap.xml>; rel="sitemap"',
              '</privacy>; rel="privacy-policy"',
              '</terms>; rel="terms-of-service"',
            ].join(", "),
          },
        ],
      },
    ];
  },
};

// GitHub Pages preview build (see .github/workflows/pages.yml): a fully static
// export served from /<repo>/. Server-only features (API routes, image
// optimisation, response headers) don't exist on a static host.
const isPagesExport = process.env.GITHUB_PAGES === "true";
const pagesBasePath = process.env.PAGES_BASE_PATH || undefined;

const pagesConfig: NextConfig = {
  ...nextConfig,
  output: "export",
  basePath: pagesBasePath,
  trailingSlash: true,
  images: { ...nextConfig.images, unoptimized: true },
  headers: undefined,
};

export default function config(phase: string): NextConfig {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    initOpenNextCloudflareForDev({
      configPath: "wrangler.dev.jsonc",
    });
  }

  return isPagesExport ? pagesConfig : nextConfig;
}
