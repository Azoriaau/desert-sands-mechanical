# Desert Sands Mechanical — Brand Guidelines

Source of truth for voice, messaging and visual identity. Update this file first; site copy and tokens follow it.

## Positioning

Desert Sands Mechanical is **the diesel 4WD tuning and performance workshop** for Geraldton and the Midwest, WA — for 4x4 owners who want real, measurable gains, because every tune is developed and validated on our own in-house dynamometer.

**Hierarchy rule:** 4WDs and tuning lead every page, headline and CTA. Heavy diesel (road transport, earthmoving & plant, equipment hire) is a supporting capability — always present, never the headline.

- Tagline: **4WD Tuning · Diesel Performance** (`site.tagline` in `lib/site.ts` — never hardcode it)
- Primary message: proof over promises. Lead with measured numbers (e.g. +38 hp / +80 Nm on the dyno), not adjectives.
- Supporting messages: licensed WA repairer · 15+ years trade experience · data over guesswork · mobile field service.

## Voice

Blunt Aussie tradie who backs it up with data. We are:

- **Straight-talking**, not salesy — "Top blokes, straight shooters." Short sentences. No marketing fluff.
- **Proven**, not boastful — claims come with numbers or a guarantee ("0 guesswork", "measured in-house").
- **Local**, not generic — Utakarra, Geraldton, the Midwest, hard yakka. A competitor in Perth shouldn't be able to reuse our copy.

Don't sound like: corporate ("mechanical outcomes aligned with specifications"), generic AI copy (eyebrow + "X. Y. Z." headline + checkmark lists), or a franchise chain.

## Visual identity

Dark industrial theme, defined in `app/globals.css` (`@theme`):

| Token | Hex | Role |
|---|---|---|
| `--color-ink` | `#0a0a0c` | Page background |
| `--color-sand` | `#22d3ee` | Primary accent / CTAs |
| `--color-ember` | `#e4572e` | Secondary accent (torque, urgency) |
| `--color-fg` | `#ececee` | Foreground text |
| `--color-muted` | `#9a9aa4` | Secondary text |

- Type: **Oswald** (display, uppercase, condensed) / **Inter** (body). Outlined stroke type (`.text-stroke`) for hero emphasis.
- Ownable motifs: the **dune silhouette**, the **desert-dusk ember horizon** (`.dusk`), and **dyno chart readouts**. Prefer these over generic textures (diagonal stripes, radial glows).
- Icons: SVG only (`components/icons.tsx`), never emoji.

## CTA conventions

- Primary action is always **calling the workshop** (`tel:` link, `btn-primary`).
- Secondary actions are quiet text links or `btn-outline` — never two competing solid buttons.
- CTA copy is job-shaped ("Book your vehicle in for a tune"), not generic ("Learn more", "Get started").
