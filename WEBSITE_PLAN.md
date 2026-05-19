# loqalads.in — Website Plan & Build Spec

> A complete, build-ready specification for the **Nexus Engineering** website
> (the software engineering practice of **LoqalAds Media Private Limited**),
> to be implemented with Claude Code.

---

## 1. Purpose & Goals

A lead-generation marketing site whose single job is to convince a founder or
CTO that **Nexus Engineering is a senior, trustworthy partner for end-to-end
software delivery** — and to make starting a conversation effortless.

**Primary goal:** Get qualified visitors to contact us for a free discovery call.

**Success criteria for the site:**
- Loads in **under 2 seconds on mobile** (we sell this; we must show it).
- Communicates seniority and full-lifecycle ownership within the first screen.
- Every page has a clear, low-friction path to contact.
- Ranks for intent keywords (see §9 SEO).
- Looks like it was built by senior engineers — clean, fast, accessible, no clutter.

**Audience:** Founders, CTOs, engineering leaders, and investors evaluating a
software delivery or modernization partner.

---

## 2. Brand & Naming

| Element | Value |
| :--- | :--- |
| **Team / site brand** | Nexus Engineering |
| **Legal entity** | LoqalAds Media Private Limited |
| **Domain** | www.loqalads.in |
| **Tagline** | *Senior Software Engineering, End-to-End* |
| **Supporting line** | *From requirements to production — and beyond.* |

**How to handle the two names:** The site presents as **Nexus Engineering**
throughout (logo, nav, headings). The legal entity appears in the **footer**
and **contact** page only: *"Nexus Engineering is the software engineering
practice of LoqalAds Media Private Limited."* This keeps the brand focused
while staying legally accurate.

**Contact details (used site-wide):**
- Email: `loqalads@gmail.com`
- Phone / WhatsApp: `+91 99213 89393`
- Website: `www.loqalads.in`

---

## 3. Tone of Voice

Match the Capabilities Statement exactly. The writing should feel like it comes
from people with 14–25 years of experience who have nothing to prove and
nothing to hide.

**Do:**
- Be plain, direct, and confident. Short sentences. Concrete claims.
- Lead with honesty: *"Optimism is not a delivery strategy."*
- Talk about outcomes and ownership, not buzzwords.
- Use "we" and "you". Speak to one decision-maker.

**Don't:**
- No hype words ("revolutionary", "world-class", "cutting-edge", "synergy").
- No stock-photo agency speak.
- No fake urgency, no countdown timers, no growth-hack patterns.
- Don't oversell — the brand promise is *honesty over optimism*.

---

## 4. Tech Stack

| Layer | Choice | Why |
| :--- | :--- | :--- |
| Framework | **Astro** | Ships zero JS by default; static-first; perfect for a fast marketing site and strong SEO. |
| Styling | **Tailwind CSS** | Fast, consistent, no CSS sprawl. |
| Content | **Astro content collections** (Markdown) for case studies | Lets case studies be added as `.md` files without touching components. |
| Interactivity | Vanilla JS / Astro islands, used sparingly | Mobile nav toggle, smooth scroll. Nothing heavy. |
| Fonts | Self-hosted via `@fontsource` or local files | No render-blocking Google Fonts request; faster + privacy-friendly. |
| Icons | Inline SVG (e.g. Lucide icons as components) | No icon-font payload. |
| Forms | **None** — direct contact only (see §7) | Zero backend, zero maintenance. |
| Hosting | Static host — Netlify / Cloudflare Pages / Vercel | Free tier, global CDN, automatic SSL, sub-2s loads. |
| Analytics | Plausible **or** Google Analytics 4 + Search Console | Lightweight; attribute enquiry sources. (Decide before launch.) |

**Rationale:** The site is content, not an app. Astro gives near-instant page
loads and excellent SEO with almost no JavaScript — which lets the site itself
serve as proof of the engineering quality we sell.

---

## 5. Information Architecture

Multi-page site. Global header nav + footer on every page.

```
/                 Home
/services         What We Do — the 7 SDLC phases
/how-we-work      Process, engineering discipline, security
/engagement       Engagement models
/work             Representative engagements (case studies index)
/work/[slug]      Individual case study pages
/about            Who we are — team, values
/contact          Get in touch / start a discovery call
```

**Header nav:** Home · Services · How We Work · Engagement · Work · About ·
**[Start a conversation]** (button, links to /contact).

**Footer (every page):** Brief brand line, nav links, contact details,
legal entity name, copyright. Example:
*"Nexus Engineering is the software engineering practice of LoqalAds Media
Private Limited. © 2026 LoqalAds Media Private Limited."*

---

## 6. Page-by-Page Content Spec

All copy below is drawn from and adapted to the Capabilities Statement. Keep
the senior, honest tone throughout.

### 6.1 Home (`/`)

1. **Hero**
   - Headline: *Senior software engineering, end-to-end.*
   - Sub: *A small, senior squad — 14 to 25 years of experience per engineer —
     that designs, builds, ships, and maintains production-grade software for
     clients who cannot afford to get it wrong.*
   - CTAs: **[Start a conversation]** (primary) · **[See how we work]** (secondary).
   - Optional small trust line: *Fully remote · Senior on every seat · Full-lifecycle ownership.*

2. **The problem we solve** (one short paragraph)
   - *"Most software projects fail in the first two weeks — long before any code
     is written — because the wrong problem gets defined."* Position Nexus as
     the team that prevents that.

3. **Why clients choose us** (4-card grid) — from §1 of the statement:
   - Seniority on every seat
   - Direct accountability
   - Full lifecycle ownership
   - Transparent execution

4. **What we deliver** (compact list/grid linking to /services):
   End-to-end development · Modern web platforms · Cloud-native architectures ·
   Data & AI/ML · Enterprise modernization.

5. **At a glance** (stat strip): 14–25 yrs experience/engineer · 5–10 senior
   engineers · Fully remote · End-to-end delivery.

6. **Representative work teaser** — 2 cards (Transport engineering firm,
   Lonavilla Stay) with headline outcomes (99.9% uptime; sub-2s mobile loads),
   linking to /work.

7. **Closing CTA band**: *"Every engagement starts with a free discovery
   conversation."* → **[Start a conversation]**.

### 6.2 Services — What We Do (`/services`)

Intro: *"We take responsibility for the entire journey — from a half-formed
idea to a system running reliably in production."*

The 7 SDLC phases as sections (each: heading, one-line summary, bullet points,
and "Deliverables" line where the statement provides them):

1. **Requirement Gathering & Discovery**
2. **Solution Architecture & Technical Design**
3. **UI / UX Design**
4. **Development & Engineering** — sub-grouped: Web & Full-Stack · Cloud & DevOps
   · Data, AI & ML · Enterprise & Modernization
5. **Quality Assurance & Testing**
6. **DevOps, Deployment & Release**
7. **Production Support & Maintenance**

Content for each is taken verbatim/adapted from §3.1–3.7 of the statement.
End with a **Technology Stack** table (§5 of the statement) and a CTA.

### 6.3 How We Work (`/how-we-work`)

From §4 of the statement. Four sections:
- **Agile delivery, adult conversations**
- **Engineering discipline**
- **Security & compliance built-in**
- **Communication & visibility**

Then **"Getting started — our process"** as a numbered 5-step timeline
(Discovery call → Scoping & proposal → Kick-off → Delivery → Live and beyond),
from §9. Close with CTA.

### 6.4 Engagement Models (`/engagement`)

From §6. Intro line: *"We will recommend the model that gives you the best
outcome — not the one that maximizes our hours."* Five cards:
- Project-based delivery
- Dedicated engineering team
- Staff augmentation
- Advisory & technical due diligence
- Managed support & maintenance

Pull-quote: *"Every engagement starts the same way: a free discovery
conversation, followed by a written proposal that explains exactly what we
will do, how long it will take, and what it will cost. No surprises."*

### 6.5 Work — Representative Engagements (`/work` + `/work/[slug]`)

Index page intro (verbatim disclaimer from §8): *"The engagements below are
illustrative of the kind of work we deliver. Specific client references and
detailed case studies are available on request, subject to confidentiality."*

Each case study is a Markdown file in a content collection with frontmatter:
`title, client, clientDescription, summary, tags, outcomes[]`. Body sections:
**Challenge · Our approach · Outcome.**

Two case studies to seed:
- **`transport-engineering-platform.md`** — Cloud-native platform (Azure,
  Angular, .NET, Terraform, AKS). Outcome: 99.9% uptime over 3 months, ~40%
  faster quote turnaround, single compliance audit trail.
- **`lonavilla-stay.md`** — Website development for a Lonavala pool villa.
  Outcome: recovered ~15–20% per direct booking, sub-2s mobile loads,
  ~35% more direct enquiries in 3 months, page-one ranking for long-tail terms.

### 6.6 About — Who We Are (`/about`)

From §2 and §7. Sections:
- **Who we are**: fully remote, distributed; *"senior engineers, working
  directly with clients, delivering software they would be proud to put their
  name on."*
- **At a glance** table (Team, Experience, Delivery model, Engagement, Focus).
- **Our values**: Craftsmanship · Honesty over optimism · Ownership · Pragmatism.
- **Why Nexus Engineering**: the 6-row table from §7 (Senior on every seat,
  Direct accountability, Full-lifecycle ownership, Right-sized engagements,
  Transparent execution, Honest engineering judgement, Long-term partnership).

### 6.7 Contact (`/contact`)

**Direct contact only — no form.** Clean, confident page:
- Heading: *Let's talk.* Sub: *"If you are evaluating partners for a new build,
  a modernization, an AI initiative, or anything in between — we would welcome
  a conversation."*
- Three large, clickable contact cards:
  - **Email** → `mailto:loqalads@gmail.com`
  - **Call** → `tel:+919921389393`
  - **WhatsApp** → `https://wa.me/919921389393` (pre-filled message optional)
- "What happens next" — restate the 5-step process briefly.
- Closing line: *"Thank you for considering us. We look forward to building
  something excellent with you."*
- Legal entity line near the footer.

---

## 7. Contact Strategy (no form)

Per the chosen approach, there is **no form and no backend**. Every CTA across
the site labelled *"Start a conversation"* links to `/contact`, where the three
direct channels (email, phone, WhatsApp) are presented as tap-friendly cards.
This keeps the site fully static, zero-maintenance, and instantly hostable.

All contact links use proper protocols (`mailto:`, `tel:`, `wa.me`) so they
work natively on mobile.

---

## 8. Design System

Visual direction: **confident, calm, engineering-grade.** Lots of whitespace,
strong typography, restrained colour. Looks expensive without trying hard.

**Colour palette** (dark, trustworthy, with one accent):

| Token | Hex | Use |
| :--- | :--- | :--- |
| `ink` | `#0B1220` | Primary text, dark sections |
| `slate` | `#334155` | Body text on light |
| `mist` | `#F6F8FA` | Light section background |
| `white` | `#FFFFFF` | Base background |
| `accent` | `#2563EB` | Links, primary buttons, highlights |
| `accent-dark` | `#1D4ED8` | Button hover |
| `line` | `#E2E8F0` | Borders, dividers |

(Adjust if a brand colour already exists — confirm before build.)

**Typography:**
- Headings: a strong sans (e.g. *Inter*, *Sora*, or *Space Grotesk*).
- Body: *Inter* — highly readable.
- Self-host both. Limit to 2 families, 3 weights total.

**Layout & components:**
- Max content width ~1200px; generous vertical rhythm.
- Reusable components: `Header`, `Footer`, `Section`, `Hero`, `Card`,
  `StatStrip`, `CTABand`, `ServiceBlock`, `CaseStudyCard`, `ProcessTimeline`,
  `TechTable`, `ContactCard`, `Button`.
- Buttons: solid accent (primary), outline (secondary).
- Subtle, tasteful motion only (fade/slide on scroll) — never blocking content.

**Accessibility (non-negotiable — we sell WCAG):**
- WCAG 2.1 AA contrast on all text.
- Semantic HTML landmarks, single `<h1>` per page, logical heading order.
- Keyboard-navigable nav with visible focus states.
- `alt` text on all images; `prefers-reduced-motion` respected.
- Fully responsive: mobile (360px) → tablet → desktop.

---

## 9. SEO & Performance

**SEO:**
- Unique `<title>` and meta description per page.
- Open Graph + Twitter card tags; one branded OG image.
- `Organization` and `ProfessionalService` JSON-LD structured data (name,
  legal name, contact, area served).
- `sitemap.xml` (Astro sitemap integration) and `robots.txt`.
- Semantic, keyword-aware headings.
- Target keywords: *software development company India*, *senior software
  engineering team*, *end-to-end software development*, *cloud migration
  partner*, *AI/ML development services*, *legacy system modernization*,
  *dedicated engineering team India*.

**Performance budget:**
- Lighthouse ≥ 95 across Performance, Accessibility, Best Practices, SEO.
- Mobile load **< 2 seconds**; near-zero JS shipped.
- Images: modern formats (WebP/AVIF), explicit dimensions, lazy-loaded
  below the fold, served via host CDN.
- Self-hosted fonts with `font-display: swap`.

---

## 10. Project Structure

```
loqalads-site/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/            # logo, OG image, case study photos
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro      # <head>, SEO meta, Header, Footer, slot
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Section.astro
│   │   ├── Card.astro
│   │   ├── Button.astro
│   │   ├── StatStrip.astro
│   │   ├── CTABand.astro
│   │   ├── ServiceBlock.astro
│   │   ├── ProcessTimeline.astro
│   │   ├── TechTable.astro
│   │   ├── CaseStudyCard.astro
│   │   └── ContactCard.astro
│   ├── content/
│   │   ├── config.ts             # case study collection schema
│   │   └── work/
│   │       ├── transport-engineering-platform.md
│   │       └── lonavilla-stay.md
│   ├── data/
│   │   └── site.ts               # contact info, nav, brand constants
│   ├── pages/
│   │   ├── index.astro
│   │   ├── services.astro
│   │   ├── how-we-work.astro
│   │   ├── engagement.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── work/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       └── global.css
└── README.md
```

Centralise contact details, nav items, and brand strings in `src/data/site.ts`
so nothing is hard-coded twice.

---

## 11. Build Plan with Claude Code

Suggested sequence of prompts/steps once this plan is approved:

1. **Scaffold** — `npm create astro@latest`, add Tailwind + sitemap
   integrations, set up `tailwind.config.mjs` with the §8 design tokens.
2. **Foundation** — `BaseLayout.astro` with SEO meta + JSON-LD, `Header`,
   `Footer`, `site.ts` constants, global styles, self-hosted fonts.
3. **Core components** — Button, Section, Hero, Card, CTABand, StatStrip.
4. **Home page** — assemble from components using §6.1 copy.
5. **Inner pages** — Services, How We Work, Engagement, About, Contact, using
   §6.2–6.7. Build `ServiceBlock`, `ProcessTimeline`, `TechTable`,
   `ContactCard` as needed.
6. **Case studies** — content collection config + the two `.md` files,
   `/work` index, `/work/[slug]` dynamic page, `CaseStudyCard`.
7. **Polish** — responsive QA at 360/768/1280px, accessibility pass,
   `prefers-reduced-motion`, focus states, alt text.
8. **SEO & assets** — per-page titles/descriptions, OG image, sitemap,
   `robots.txt`, structured data, favicon.
9. **Verify** — `npm run build`, run Lighthouse, confirm < 2s mobile load and
   ≥ 95 scores; fix regressions.
10. **Deploy** — connect repo to Netlify / Cloudflare Pages, point
    `loqalads.in` DNS, confirm SSL.

---

## 12. Deployment & Domain

- Host on **Netlify** or **Cloudflare Pages** (static, free tier, global CDN).
- Point `loqalads.in` and `www.loqalads.in` DNS to the host; enforce HTTPS
  and a canonical redirect (recommend `www` → apex or vice versa, pick one).
- Enable automatic SSL.
- Set up the GA4 + Search Console property (or Plausible) and submit the
  sitemap after launch.

---

## 13. Pre-Build Checklist (confirm before implementation)

- [ ] Logo / wordmark for "Nexus Engineering" — exists, or design a simple
      typographic mark?
- [ ] Brand colour — use the proposed accent `#2563EB` or an existing colour?
- [ ] Photography for the two case studies — real images available, or use
      tasteful abstract/illustrative placeholders?
- [ ] Analytics choice — Plausible vs GA4.
- [ ] Confirm `www` vs apex as the canonical domain.
- [ ] Confirm whether the legal entity name should also appear in the header
      or footer-only (plan assumes footer-only).

---

*Prepared as a build specification for the loqalads.in website — Nexus
Engineering, LoqalAds Media Private Limited.*
