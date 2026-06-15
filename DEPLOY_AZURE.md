# Deploying to Azure Static Web Apps via GitHub

A step-by-step guide to publishing the **LoqalAds** website
(`loqalads.in`) to **Azure Static Web Apps**, with automatic deployments
on every push to GitHub.

**How it works:** You push the project to a GitHub repository. Azure Static
Web Apps connects to that repository and adds a GitHub Actions workflow. From
then on, every push to the `main` branch automatically builds the site
(`npm run build`) and deploys the `dist/` folder — no manual steps.

The Azure Static Web Apps **Free** plan is enough for this site and includes
free SSL certificates and one custom domain.

---

## Prerequisites

- A **GitHub account** — <https://github.com>
- An **Azure account** — <https://azure.microsoft.com/free> (free tier is fine)
- **Git** installed locally — check with `git --version`
- The project builds cleanly locally — run `npm run build` once to confirm

---

## Step 1 — Project preparation (already done)

Two small files make the Azure build reliable and the routing correct. **Both
are already included in this project** — no action needed; this step just
explains what they do so you can verify them.

### 1a. Node.js version pin — `package.json`

Azure's build server must use a Node.js version Astro supports. The
`package.json` already contains an `engines` field:

```json
"engines": {
  "node": ">=20.3.0"
}
```

This tells Azure's build environment to use Node 20.3 or newer.

### 1b. Static Web Apps config — `public/staticwebapp.config.json`

This file is already present:

```json
{
  "$schema": "https://json.schemastore.org/staticwebapp.config.json",
  "responseOverrides": {
    "404": {
      "rewrite": "/404.html"
    }
  },
  "routes": [
    {
      "route": "/_astro/*",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    }
  ]
}
```

Astro copies everything in `public/` into `dist/` during the build, so Azure
finds it automatically. It makes unknown URLs serve the site's custom 404 page
(with a correct 404 status), and tells browsers to cache the hashed asset
bundles long-term for fast repeat visits.

---

## Step 2 — Push the project to GitHub

Open a terminal in the project folder:

```bash
cd /Users/xeadmin/Documents/LoqalAds/loqalads-site
```

Initialise Git and make the first commit:

```bash
git init
git branch -M main
git add .
git commit -m "Initial commit — Nexus Engineering website"
```

> The project's `.gitignore` already excludes `node_modules/`, `dist/`, and
> `.astro/`, so only source files are committed.

Now create a GitHub repository and push to it. **Choose one option:**

**Option A — GitHub CLI** (if you have `gh` installed):

```bash
gh repo create loqalads-site --private --source=. --remote=origin --push
```

**Option B — GitHub website:**

1. Go to <https://github.com/new>.
2. Repository name: `loqalads-site`. Set it Private (or Public). Do **not**
   add a README, `.gitignore`, or licence — the project already has them.
3. Click **Create repository**.
4. Back in the terminal, run the commands GitHub shows under
   *"…or push an existing repository"*:

   ```bash
   git remote add origin https://github.com/<your-username>/loqalads-site.git
   git push -u origin main
   ```

The code is now on GitHub.

---

## Step 3 — Create the Azure Static Web App

1. Sign in to the **Azure Portal** — <https://portal.azure.com>.
2. In the search bar at the top, type **Static Web Apps** and select it.
3. Click **+ Create**.
4. Fill in the **Basics** tab:

   | Field | Value |
   | :--- | :--- |
   | **Subscription** | Your subscription |
   | **Resource Group** | Click *Create new* → name it `loqalads-rg` |
   | **Name** | `loqalads-web` |
   | **Plan type** | **Free** |
   | **Region** | Pick the region closest to your users (e.g. *Central India*) |
   | **Source** | **GitHub** |

5. Click **Sign in with GitHub** and authorise Azure when prompted.
6. Select:
   - **Organization** — your GitHub username
   - **Repository** — `loqalads-site`
   - **Branch** — `main`

---

## Step 4 — Set the build details

Still on the create screen, under **Build Details**:

| Field | Value |
| :--- | :--- |
| **Build Presets** | **Astro** |
| **App location** | `/` |
| **Api location** | *(leave empty)* |
| **Output location** | `dist` |

> **App location** is `/` because the Astro project sits at the root of the
> `loqalads-site` repository. **Output location** `dist` is the folder Astro
> produces. The **Astro** preset usually fills these in for you — just confirm
> they match the table above.

Click **Review + create**, then **Create**.

---

## Step 5 — Let the first deployment run

When Azure finishes creating the resource, it automatically:

1. Adds a workflow file to your repo at
   `.github/workflows/azure-static-web-apps-*.yml`.
2. Adds a secret named `AZURE_STATIC_WEB_APPS_API_TOKEN` to the repo.
3. Triggers the first GitHub Actions run.

To watch it:

- Go to your GitHub repo → **Actions** tab → click the running workflow.
- A green checkmark means the build and deployment succeeded (takes 2–4 minutes).

> Because Azure committed a new workflow file to GitHub, run `git pull` locally
> afterwards to sync that file into your local copy.

When it finishes, open the Static Web App in the Azure Portal — the
**Overview** page shows the live URL, e.g.
`https://loqalads-web-xxxx.azurestaticapps.net`. Open it to verify the site.

---

## Step 6 — Connect the custom domain (loqalads.in)

1. In the Azure Portal, open your Static Web App → **Custom domains** (left menu).
2. Click **+ Add** → choose **Custom domain on other DNS**.

### Add the `www` subdomain

3. Enter `www.loqalads.in`. Azure shows a **CNAME** record to create.
4. In your domain registrar's DNS settings, add:
   - **Type:** CNAME · **Name:** `www` · **Value:** the
     `*.azurestaticapps.net` hostname Azure provides.
5. Back in Azure, click **Validate**, then **Add**.

### Add the apex domain `loqalads.in`

6. Click **+ Add** again, enter `loqalads.in`, and choose the
   **TXT record** validation method.
7. Add the **TXT** record Azure shows in your registrar's DNS, then add the
   apex record Azure provides — an **ALIAS** / **ANAME** record if your
   registrar supports it, otherwise the **A record** IP address Azure lists.
8. Click **Validate**, then **Add**.

> DNS changes can take from a few minutes up to a few hours to take effect.
> Azure issues a free SSL certificate automatically once a domain validates.

### Set the canonical domain

9. Decide whether `www.loqalads.in` or `loqalads.in` is your primary address,
   and add a redirect from the other to it. You can do this with a rule in
   `public/staticwebapp.config.json`, or via the registrar's domain forwarding.

---

## Step 7 — Ongoing deployments

From now on, deployment is automatic:

```bash
# make your edits, then:
git add .
git commit -m "Describe the change"
git push
```

Every push to `main` triggers the GitHub Action, which rebuilds and redeploys
the site within a few minutes. Pull requests get their own temporary preview
URL automatically.

---

## Troubleshooting

| Problem | Fix |
| :--- | :--- |
| Action fails with a Node version error | Confirm the `engines` field in `package.json` (Step 1a) and that it was committed and pushed. |
| Action fails at `npm run build` | Run `npm run build` locally — it must succeed before Azure can build it. |
| Site loads but pages 404 | Confirm `public/staticwebapp.config.json` exists (Step 1b) and **Output location** is `dist`. |
| Custom domain stuck on "Validating" | DNS records can take hours to propagate; re-check the record names/values and click Validate again. |
| Workflow didn't appear | In the Azure Portal, open the Static Web App → **Manage deployment token**, and confirm the GitHub repo/branch are linked correctly. |

---

*Once the site is live, complete the remaining launch tasks in
[`NEXT_STEPS.md`](./NEXT_STEPS.md) — analytics, the social-share image, and
submitting the sitemap to Google Search Console.*
