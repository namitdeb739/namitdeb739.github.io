# namitdeb739.github.io

Personal site, built with [Astro](https://astro.build) and deployed to GitHub
Pages by `.github/workflows/deploy.yml` on every push to `main`.

**The prose is unwritten on purpose.** Every visible string is a `TODO`
placeholder — search the repo for `TODO` to find them. Placeholders render with
a yellow highlight so an unfinished page is obvious in the browser.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the built output
```

## Adding a project

Drop a Markdown file in `src/content/projects/`. It appears on the homepage
automatically — there is no list to maintain.

```markdown
---
title: "SG Film Calendar"
summary: "Scrapes cinema listings into a single subscribable calendar"
order: 1
tech: ["Python", "iCal"]
repo: https://github.com/namitdeb739/SG-Film-Calendar
draft: false
---

Optional write-up. Appears at /projects/<filename>.
```

- `draft: true` hides it from the homepage **and** stops it getting a public URL.
- If you only set `repo`, the homepage card links straight to GitHub and the
  detail page is never generated.
- `order` sorts ascending; omit it and the project sorts last.

## Structure

| Path | What |
| ---- | ---- |
| `src/pages/index.astro` | Homepage — most placeholders live here |
| `src/layouts/Base.astro` | Shell: head, nav, footer |
| `src/styles/global.css` | Catppuccin Latte/Mocha, follows system appearance |
| `src/content/projects/` | One Markdown file per project |
| `src/content.config.ts` | Frontmatter schema — build fails on a typo |

## Before first deploy

1. Create the repo as `namitdeb739.github.io` (the name is what makes GitHub
   serve it at the root domain).
2. Repo **Settings → Pages → Source → GitHub Actions**. Without this the
   workflow builds but never publishes.
3. Push to `main`.
