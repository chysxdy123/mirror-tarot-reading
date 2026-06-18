# Mirror Tarot Astro MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first Astro static-site MVP for Mirror Tarot Reading with core pages, content data, a lightweight card draw experience, SEO basics, and local verification.

**Architecture:** Use Astro as a static content site. Keep content/data separate from layouts and components; use structured data files for reading questions and card results, reusable layouts for hub/article/reading pages, and a small client-side script for local card draw interactions.

**Tech Stack:** Astro, TypeScript, plain CSS, Node/npm, static HTML output, Playwright CLI for visual smoke checks.

---

## File Structure

Create or modify these areas:

- `package.json`: npm scripts and dependencies.
- `astro.config.mjs`: Astro site config for `https://mirrortarotreading.com`.
- `tsconfig.json`: TypeScript config.
- `src/data/cards.ts`: Mirror Tarot theme-card data.
- `src/data/pages.ts`: page metadata, navigation, related links, and content definitions.
- `src/components/`: SEO head, nav, footer, card draw, related links, and page sections.
- `src/layouts/`: base layout, reading page layout, article page layout.
- `src/pages/`: homepage, hub page, question pages, pattern pages, legal/trust pages, cards page, 404 page.
- `src/styles/global.css`: site-wide Editorial Mystic / Calm Psychology styling.
- `public/robots.txt`: crawler instructions.
- `public/favicon.svg`: simple brand favicon.
- `docs/verification.md`: update with implementation verification commands and results.

## Task 1: Scaffold Astro Project

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `src/env.d.ts`
- Create: `public/favicon.svg`
- Create: `public/robots.txt`

- [ ] **Step 1: Create package and config files**

Use `npm create astro@latest` or manually create a minimal Astro setup. The final `package.json` must include:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check"
  },
  "dependencies": {
    "@astrojs/check": "latest",
    "astro": "latest",
    "typescript": "latest"
  },
  "devDependencies": {}
}
```

`astro.config.mjs` must set:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mirrortarotreading.com',
});
```

- [ ] **Step 2: Install dependencies**

Run:

```bash
npm install
```

Expected: dependencies install and `package-lock.json` is created.

- [ ] **Step 3: Verify scaffold builds or reports missing pages only after pages exist**

Run:

```bash
npm run check
```

Expected after initial scaffold: Astro type check runs. If it fails because no pages exist yet, proceed to Task 2 and re-run after adding pages.

- [ ] **Step 4: Commit scaffold**

```bash
git add package.json package-lock.json astro.config.mjs tsconfig.json src/env.d.ts public/favicon.svg public/robots.txt
git commit -m "Create Astro site scaffold"
```

## Task 2: Add Data Models and Tests

**Files:**
- Create: `src/data/cards.ts`
- Create: `src/data/pages.ts`
- Create: `src/data/site.ts`
- Create: `src/data/__tests__/content-data.test.mjs`
- Modify: `package.json`

- [ ] **Step 1: Add a failing data integrity test**

Add a Node test using the built-in test runner. It should assert:

- At least 16 cards exist.
- Each card has `id`, `name`, `hook`, `window`, `mirror`, `action`, and `categories`.
- The first release page list contains at least 24 pages.
- Every page has a unique slug and title.

Add script to `package.json`:

```json
"test:data": "node --test src/data/__tests__/content-data.test.mjs"
```

Run:

```bash
npm run test:data
```

Expected: FAIL because data files do not exist yet.

- [ ] **Step 2: Implement site, card, and page data**

Create structured data matching `docs/requirements/content-plan.md`. Include 16 theme cards and 24 page metadata entries.

- [ ] **Step 3: Run data test**

Run:

```bash
npm run test:data
```

Expected: PASS.

- [ ] **Step 4: Commit data layer**

```bash
git add package.json src/data
git commit -m "Add Mirror Tarot content data"
```

## Task 3: Build Layouts and Core Components

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/layouts/ArticleLayout.astro`
- Create: `src/layouts/ReadingLayout.astro`
- Create: `src/components/SeoHead.astro`
- Create: `src/components/SiteNav.astro`
- Create: `src/components/SiteFooter.astro`
- Create: `src/components/RelatedLinks.astro`
- Create: `src/styles/global.css`

- [ ] **Step 1: Add layout/component files**

Create reusable layouts and components. `BaseLayout` must provide:

- HTML shell.
- SEO metadata.
- Header navigation.
- Main slot.
- Footer with About, Contact, Privacy Policy, Disclaimer.

- [ ] **Step 2: Add global styling**

Style for Editorial Mystic / Calm Psychology:

- Warm off-white background.
- Deep green/charcoal text areas.
- Copper/gold accents.
- Mobile-first layouts.
- Stable card dimensions.
- Readable article width.

- [ ] **Step 3: Run Astro check**

```bash
npm run check
```

Expected: PASS once pages are added or only reports pages missing before Task 4.

- [ ] **Step 4: Commit layout system**

```bash
git add src/layouts src/components src/styles
git commit -m "Add site layouts and styling"
```

## Task 4: Implement Pages and Routing

**Files:**
- Create: `src/pages/index.astro`
- Create: `src/pages/love-tarot-reading.astro`
- Create: `src/pages/cards.astro`
- Create: `src/pages/about.astro`
- Create: `src/pages/contact.astro`
- Create: `src/pages/privacy-policy.astro`
- Create: `src/pages/disclaimer.astro`
- Create: `src/pages/404.astro`
- Create: `src/pages/[slug].astro`

- [ ] **Step 1: Implement static trust and hub pages**

Create homepage, love reading hub, cards index, About, Contact, Privacy Policy, Disclaimer, and 404.

- [ ] **Step 2: Implement dynamic content pages**

Use `getStaticPaths()` from `src/data/pages.ts` for question and pattern pages.

- [ ] **Step 3: Run build**

```bash
npm run build
```

Expected: PASS and `dist/` contains generated static pages.

- [ ] **Step 4: Commit pages**

```bash
git add src/pages
git commit -m "Add MVP pages"
```

## Task 5: Add Card Draw Interaction

**Files:**
- Create: `src/components/CardDraw.astro`
- Create: `src/components/ReadingResult.astro`
- Modify: `src/pages/love-tarot-reading.astro`
- Modify: `src/pages/[slug].astro`

- [ ] **Step 1: Add failing DOM smoke test if test harness exists**

If using a lightweight rendered HTML test is practical, add a test that confirms the built love reading page contains card draw controls and result text containers. If not practical, document manual browser verification in `docs/verification.md` before implementation.

- [ ] **Step 2: Implement card draw component**

CardDraw should:

- Render three stable card backs.
- Allow click or keyboard selection.
- Reveal one card result.
- Show Window, Mirror, and Gentle next step.
- Avoid sending user data anywhere.

- [ ] **Step 3: Include card draw on hub and P0 question pages**

Add the component to `/love-tarot-reading/` and core question pages.

- [ ] **Step 4: Verify locally**

Run:

```bash
npm run build
npm run preview
```

Then use Playwright CLI to open the preview URL, click a card, and capture a screenshot in `output/playwright/`.

- [ ] **Step 5: Commit interaction**

```bash
git add src/components/CardDraw.astro src/components/ReadingResult.astro src/pages docs/verification.md output/playwright
git commit -m "Add card draw experience"
```

## Task 6: SEO, Sitemap, Robots, and Verification

**Files:**
- Modify: `astro.config.mjs`
- Modify: `src/components/SeoHead.astro`
- Modify: `public/robots.txt`
- Modify: `docs/verification.md`

- [ ] **Step 1: Add sitemap support**

Install `@astrojs/sitemap` and configure it in `astro.config.mjs`.

- [ ] **Step 2: Verify production build output**

Run:

```bash
npm run check
npm run test:data
npm run build
```

Expected: all PASS.

- [ ] **Step 3: Verify generated files**

Check:

```bash
find dist -maxdepth 2 -type f | sort | sed -n '1,120p'
```

Expected: HTML pages, sitemap, robots-related output where applicable.

- [ ] **Step 4: Update verification docs**

Record build/check/manual browser verification results in `docs/verification.md`.

- [ ] **Step 5: Commit final MVP implementation**

```bash
git add astro.config.mjs package.json package-lock.json public/robots.txt src docs/verification.md
git commit -m "Prepare SEO-ready static build"
```

## Self-Review

Spec coverage:

- MVP positioning: covered by existing docs and homepage/page content tasks.
- 20 to 30 pages: covered by Task 2 data and Task 4 routing.
- Card draw: covered by Task 5.
- SEO basics: covered by Task 3 and Task 6.
- AdSense trust pages: covered by Task 4.
- Astro static architecture: covered by Task 1 and Task 6.

Placeholder scan:

- No implementation placeholder text is intended in this plan.
- Any manual verification fallback in Task 5 must be explicitly recorded in `docs/verification.md` if used.

Risk note:

- Full page copy quality may require iteration after the structural MVP exists. The first implementation should provide complete, non-empty English copy for all 24 pages, but later content refinement remains expected before AdSense application.
