# ogxing.com

Source for [ogxing.com](https://ogxing.com)

Built with [Astro](https://astro.build), deployed to GitHub Pages by `.github/workflows/deploy.yml`.

Do not edit or create README.md as it has special meaning on github, it will be displayed as part of your github profile.

## Develop

```bash
npm install
npm run dev
```

## Writing a post

Create `src/content/research/<slug>.md` (or `.mdx` to use components):

```md
---
title: 'Memory structure, part 1'
summary: 'One or two sentences. Shown under the title and in listings.'
pubDate: 2026-10-01
topic: isra            # one of the keys in src/consts.ts TOPICS
tags: ['memory']       # optional
series: 'Memory structure'   # optional; posts sharing a series link to each other
cover: ./memory-1/cover.png  # optional; omit for generated cover art
hero: cover                  # optional: opens the article with the cover image full-bleed behind the title
draft: false
---
```

A post with `hero: cover` opens with its cover image full-bleed behind the title, and the header floats over it until you scroll, like OpenAI's launch articles.

Available in the body:

- Markdown, GitHub-style tables, and fenced code with light and dark syntax themes.
- LaTeX math: inline `$L = \sum_i (y_i - \hat{y}_i)^2$`, display blocks between `$$` lines.
- Footnotes: `A claim.[^1]` with `[^1]: The source.` anywhere in the file.
- Figures, in `.mdx` files only:

  ```mdx
  import Figure from '../../components/Figure.astro';

  <Figure src="/images/example.png" alt="What the image shows" caption="Figure 1. A caption." wide />
  ```

  Put images in `public/images/`. `wide` lets the figure break out of the text column.
- Series: give several posts the same `series` value and each one lists the others at the top.

Drafts (`draft: true`) render in `npm run dev` only and are excluded from the build.

## Search

Site search is powered by [Pagefind](https://pagefind.app), which indexes the built pages after `npm run build` and ships a static index in `dist/pagefind/`. Only article bodies are indexed. In `npm run dev` the search overlay serves the index from the last build, so run a build first if search shows nothing.

## Where things live

| What | Where |
| --- | --- |
| Site name, description, footer links, topics | `src/consts.ts` |
| Posts | `src/content/research/` |
| Layout, components, styles | `src/layouts/`, `src/components/`, `src/styles/global.css` |
| Static files (favicon, CNAME, images) | `public/` |

The favicon is the "OGX" lettering from the site's original 2017 logo, traced to vector. `favicon.svg` is black in light mode and white in dark mode; `favicon.ico` and `apple-touch-icon.png` are rendered from it.

## Deploy

Push to `master`. GitHub Pages must be set to deploy from **GitHub Actions** (Settings → Pages → Source).
