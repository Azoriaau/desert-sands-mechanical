# Desert Sands Mechanical

Marketing website for **Desert Sands Mechanical Pty Ltd**, a diesel tuning and
mechanical workshop servicing Geraldton and the Midwest, WA.

Designed and built by [Azoria](https://azoria.com.au).

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4,
with a strong focus on technical SEO and performance. Every route is statically
prerendered.

## Stack

- **Next.js 16** App Router, Turbopack, fully static output
- **React 19** server components
- **Tailwind CSS v4** design system (`app/globals.css`)
- **next/font** self-hosted Oswald + Inter (no external font requests)

## SEO

- Per-page `metadata` with a title template and canonical URLs
- `metadataBase` set so OG/Twitter/canonical URLs resolve absolutely
- **JSON-LD structured data**: `AutoRepair` / `LocalBusiness` (full NAP, geo,
  opening hours, `sameAs`, service catalog), `WebSite`, per-page `Service`,
  `BreadcrumbList` and `ContactPage`
- Dynamic Open Graph image (`app/opengraph-image.tsx`) + `summary_large_image`
  Twitter cards
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`
- SVG favicon (`app/icon.svg`) + generated Apple touch icon
- Semantic HTML, one `<h1>` per page, skip link, focus styles, reduced-motion
  support, accessible mobile nav, descriptive `alt`/`aria` labels
- Security headers and `poweredByHeader: false` in `next.config.ts`

## Content

All business content (services, contact details, hire fleet, testimonial) lives
in **`lib/site.ts`** as a single source of truth that also feeds the structured
data. Edit that file to update the site.

Brand direction is documented in `docs/brand-guidelines.md`. Logo assets
(cropped from the print artwork) live in `public/brand/`.

## Develop

```bash
npm run dev     # http://localhost:3000
npm run build   # static export -> ./out
npm run lint    # eslint
```

`next start` is not used — the site is a static export (`output: "export"`), so
serve `./out` with any static file server (`npx serve out`) or the container
below.

## Deploy

Every push builds a container image via `.github/workflows/docker.yml`; pushes
to `main` also move the `latest` tag. The image is stock `nginx:alpine` serving
the static export on port **3000** (config in `nginx/default.conf`, health probe
at `/healthz`).

`NEXT_PUBLIC_*` values are inlined into the client bundle at build time, so they
are passed to the image as build args from the repository's Actions secrets:

- `NEXT_PUBLIC_CONTACT_ENDPOINT`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`

Changing either one requires a rebuild, not a container restart. With
`NEXT_PUBLIC_CONTACT_ENDPOINT` unset the contact form falls back to a `mailto:`
composer — see `.env.example`.
