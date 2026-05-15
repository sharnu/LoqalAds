# Nexus Engineering — loqalads.in

Marketing website for **Nexus Engineering**, the software engineering practice
of **LoqalAds Media Private Limited**.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com) —
static-first, near-zero JavaScript, optimised for fast mobile loads and SEO.

> **New here?** See [`NEXT_STEPS.md`](./NEXT_STEPS.md) for a step-by-step guide
> to running the project locally and the remaining steps before launch.

## Commands

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Start the local dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`        |
| `npm run preview` | Preview the production build locally          |

## Project structure

```
src/
├── components/   Reusable UI components (Header, Footer, Card, …)
├── content/
│   ├── config.ts        Case-study collection schema
│   └── work/            Case studies as Markdown — add new ones here
├── data/site.ts  Brand, contact, and navigation constants
├── layouts/      BaseLayout — <head>, SEO meta, JSON-LD
├── pages/        One file per route
└── styles/       global.css
public/           Static assets (favicon, og-image, robots.txt)
```

## Editing content

- **Brand / contact details** — `src/data/site.ts` (single source of truth).
- **Case studies** — add a Markdown file to `src/content/work/`. The frontmatter
  schema is defined in `src/content/config.ts`. New files appear automatically
  on the Work page, ordered by the `order` field.
- **Page copy** — each page is a self-contained file in `src/pages/`.

## Deployment

Static output — the `dist/` folder can be hosted on any static host.

For a full, step-by-step **Azure Static Web Apps + GitHub** deployment guide
(automatic deploys on every push), see [`DEPLOY_AZURE.md`](./DEPLOY_AZURE.md).

## Pre-launch checklist

- [ ] Replace `public/og-image.svg` with a `1200×630` PNG/JPG and update the
      `ogImage` path in `src/layouts/BaseLayout.astro` (some social scrapers do
      not render SVG previews).
- [ ] Add an analytics snippet (Plausible or GA4) to `BaseLayout.astro`.
- [ ] Confirm the canonical domain (`www` vs apex) and set a host redirect.
- [ ] Submit `sitemap-index.xml` to Google Search Console.
