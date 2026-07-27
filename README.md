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
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint
```

## Before launch (client to-dos)

- **Verify the map coordinates** in `lib/site.ts` (`geo`) against the exact
  street address.
- **Add real photography** (workshop, dyno, builds, plant) to replace the
  CSS/SVG-only hero and cards, and add a static `app/opengraph-image` photo if
  preferred over the generated one.
- **Wire up the contact form.** It currently composes an email via the visitor's
  mail client (`mailto:`). For inbox-independent delivery, point
  `components/ContactForm.tsx` at a form endpoint (e.g. Formspree, or a Next.js
  route handler).
- Add Google Search Console verification via `metadata.verification` in
  `app/layout.tsx` once the domain is connected.
