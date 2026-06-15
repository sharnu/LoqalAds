# LoqalAds Website — Running Locally & Remaining Steps

This document covers two things:

1. **[How to run the project on your local machine](#1-running-the-project-locally)**
2. **[The remaining steps before the site goes live](#2-remaining-steps-before-launch)**

---

## 1. Running the Project Locally

### Prerequisites

You need **Node.js 18.20.8 or newer** (Node 20+ recommended) and **npm**.

Check what you have:

```bash
node -v
npm -v
```

If Node is missing or too old, install it from [nodejs.org](https://nodejs.org)
(download the LTS version), or via Homebrew on macOS:

```bash
brew install node
```

### Step 1 — Open the project folder

```bash
cd /Users/xeadmin/Documents/LoqalAds/loqalads-site
```

### Step 2 — Install dependencies

Run this once (and again only when `package.json` changes):

```bash
npm install
```

This creates a `node_modules/` folder. It is ignored by git and never edited
by hand.

### Step 3 — Start the development server

```bash
npm run dev
```

Then open **http://localhost:4321/** in your browser.

The dev server has **hot reload** — save any file in `src/` and the browser
updates automatically. Leave this running while you work. Press `Ctrl + C` in
the terminal to stop it.

### Step 4 — Build the production site

When you want the final, optimised output:

```bash
npm run build
```

This generates a `dist/` folder containing the complete static website
(HTML, CSS, fonts, sitemap). That folder is what gets deployed.

### Step 5 — Preview the production build

To check the built site exactly as it will appear in production:

```bash
npm run preview
```

This also serves at **http://localhost:4321/**.

### Command summary

| Command           | What it does                                          |
| :---------------- | :---------------------------------------------------- |
| `npm install`     | Install dependencies (run once, then on dep changes)  |
| `npm run dev`     | Start dev server with hot reload — for editing        |
| `npm run build`   | Build the production site into `dist/`                |
| `npm run preview` | Serve the built `dist/` folder for a final check      |

### Common editing tasks

- **Change contact details, phone, email, nav** → `src/data/site.ts`
  (single source of truth — edit once, updates everywhere).
- **Edit page text** → the matching file in `src/pages/`
  (e.g. `src/pages/about.astro`).
- **Add a new case study** → create a `.md` file in `src/content/work/`,
  copying the frontmatter format from the existing files. It appears on the
  Work page automatically, ordered by the `order:` field.
- **Change colours/fonts** → `tailwind.config.mjs`.

---

## 2. Remaining Steps Before Launch

The website is fully built and functional. The steps below are what is left to
make it production-ready and publicly live.

### Step A — Replace the social-share image (recommended)

The current `public/og-image.svg` is a placeholder. Some social platforms
(WhatsApp, LinkedIn, Facebook) do not reliably render **SVG** link previews.

- [ ] Create a **1200 × 630 pixel PNG or JPG** version of the share image.
- [ ] Save it as `public/og-image.png`.
- [ ] In `src/layouts/BaseLayout.astro`, change the line
      `const ogImage = new URL('/og-image.svg', site.url).href;`
      to use `/og-image.png`.

### Step B — Add website analytics

To see visitor numbers and where enquiries come from, add an analytics tool.

- [ ] Choose **Plausible** (lightweight, privacy-friendly, paid) or
      **Google Analytics 4** (free).
- [ ] Paste the provided tracking snippet into the `<head>` section of
      `src/layouts/BaseLayout.astro`.
- [ ] For Google: also create a **Search Console** property to monitor SEO.

### Step C — Add real case-study photography (optional)

The two case studies currently use text-only cards. If you have permission to
show client work, real images will make them stronger.

- [ ] Collect approved photos/screenshots for the transport engineering firm
      and Lonavilla Stay.
- [ ] Add them to `public/images/` and reference them in the case study
      components. (Ask the developer to wire this up — it is a small change.)

### Step D — Review and confirm all content

- [ ] Read every page and confirm the wording, claims, and statistics are
      accurate and approved for public use.
- [ ] Confirm the contact details in `src/data/site.ts` are correct:
      email `loqalads@gmail.com`, phone `+91 99213 89393`.
- [ ] Decide whether a dedicated business email (e.g. `hello@loqalads.in`)
      should replace the Gmail address before launch.

### Step E — Deploy the site

The site is static, so hosting is simple, fast, and free on these platforms:

- [ ] Create an account on **Netlify** or **Cloudflare Pages**.
- [ ] Either connect a Git repository, or drag-and-drop the `dist/` folder
      produced by `npm run build`.
- [ ] Build settings (if connecting a repo):
  - Build command: `npm run build`
  - Publish directory: `dist`

### Step F — Connect the domain

- [ ] In your domain registrar, point **loqalads.in** and **www.loqalads.in**
      DNS to the hosting provider (the host gives exact instructions).
- [ ] Enable **HTTPS / SSL** (automatic on Netlify and Cloudflare Pages).
- [ ] Choose one canonical address — either `www.loqalads.in` or the bare
      `loqalads.in` — and set the host to redirect the other to it.

### Step G — Post-launch checks

- [ ] Visit the live site on a phone and a desktop; click every link.
- [ ] Test the email, phone, and WhatsApp buttons on a real mobile device.
- [ ] Submit `https://www.loqalads.in/sitemap-index.xml` to Google Search
      Console so the site gets indexed.
- [ ] Run a [Lighthouse](https://pagespeed.web.dev/) check and confirm strong
      Performance, Accessibility, Best Practices, and SEO scores.

---

*Questions on any step above — ask the developer. Steps A, B, E, F, and G are
required for launch; steps C and D are quality improvements you can do before
or shortly after going live.*
