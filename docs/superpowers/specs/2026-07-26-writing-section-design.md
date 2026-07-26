# Writing section — design

Date: 2026-07-26

## Goal

Add a **Writing** section to the portfolio homepage, directly after Experience.
Each entry links to an internal post page inside this app — no external blog
platform, no outbound links.

## Naming

The section is called **Writing**, not "Blog". "Blog" implies a publishing
cadence and reads like a CMS; "Writing" matches the portfolio's design language
and stays honest at any posting frequency.

Routes:

- `/writing` — full index of every post
- `/writing/<slug>` — a single post

Slugs are human-readable and derived from the content filename
(`scaling-langgraph-agents`), not sequential ids (`blog-001`).

## Constraints

`next.config.ts` sets `output: "export"` and `images.unoptimized`. The site is
built to static HTML and served by GitHub Pages. Therefore:

- No server, no API routes, no runtime data fetching.
- Every post route must be enumerated by `generateStaticParams()` at build time.
- Filesystem reads are build-time only.
- `next/image` optimization is unavailable, so content images use plain `<img>`.

## Content model

```
content/writing/<slug>.mdx
public/writing/<slug>/banner.png
public/writing/<slug>/<screenshot>.png
```

Frontmatter:

```yaml
---
title: Scaling LangGraph Agents
date: 2026-06-14
summary: What broke at 10k concurrent runs.
tags: [Python, LangGraph, GenAI]
banner: /writing/scaling-langgraph-agents/banner.png
bannerAlt: Queue depth graph spiking past ten thousand
---
```

`title`, `date` and `summary` are required. `tags`, `banner` and `bannerAlt` are
optional; `bannerAlt` is required whenever `banner` is set, so no image ships
unlabeled. Posts without a banner render without a hero.

Reading time is computed from word count (words ÷ 200), not authored.

## Images

- **Banner** — full-width hero above the post title, `aspect-[2/1]`, rounded,
  subtle ring. Also used as the small thumbnail on `/writing` and as the
  OpenGraph image in per-post metadata.
- **Screenshots** — authored as ordinary markdown images. The MDX `img` mapping
  renders a styled `<figure>`; a markdown title becomes a `<figcaption>`.
  Screenshots break slightly wider than the prose column to stay legible.

Images are committed to the repo, so they should be kept at or below 1600px
wide. This is a convention documented in the sample post, not enforced in code.

## Architecture

New dependencies: `gray-matter` (frontmatter parsing), `next-mdx-remote`
(MDX compiled to RSC output at build time).

| File | Responsibility |
| --- | --- |
| `src/lib/writing.ts` | Read and parse the content directory. `getAllPosts()` returns metadata sorted newest-first; `getPost(slug)` returns metadata plus raw body. Build-time only. |
| `src/app/components/mdx.tsx` | Maps MDX elements (`h2`, `h3`, `p`, `a`, `ul`, `ol`, `blockquote`, `pre`, `code`, `img`, `hr`) to the site's slate/teal palette. |
| `src/app/components/PostItem.tsx` | One row in a post list. Modeled on `TimelineItem` — date occupies the left column where `period` sits; tags reuse `SkillItem`. |
| `src/app/components/Writing.tsx` | Homepage section. Three most recent posts plus a "View all writing" link. |
| `src/app/writing/page.tsx` | Index page. Every post, with banner thumbnails. |
| `src/app/writing/[slug]/page.tsx` | Focused reader. `generateStaticParams()` and `generateMetadata()`. |

### Post page layout

Single centered column, no sticky sidebar — prose gets the full width rather
than the homepage's 52%. A "← Yuval Elarat" link returns home. Same dark
palette and teal accents as the rest of the site.

Order: back link → banner → date · reading time → title → tags → rule → prose.

### Homepage vs index

The homepage list is text-only, consistent with Experience and Education.
Thumbnails appear only on `/writing`. The homepage shows three posts so the
section cannot grow unbounded and dwarf the sections around it.

## Changes to existing files

- `src/app/page.tsx` — remove `'use client'` and the dead commented-out toast
  block so the tree can read the filesystem at build time. `layout.tsx` remains
  a client component; its `children` still render on the server.
- `src/app/layouts/main.tsx` — insert `<Writing />` between `<Experience />`
  and `<Education />`.
- `src/app/layouts/header.tsx` — add `Writing: "#writing"` to the `sections`
  map.

## Seed content

One sample post, `hello-world.mdx`, that explains what the section is for and
exercises every supported element: headings, paragraphs, a list, a link, a
blockquote, a fenced code block, a banner and an inline screenshot. It is
obviously placeholder content, written to be deleted or rewritten. Its banner
and screenshot are hand-written SVGs, so no binary assets enter the repo for
throwaway content.

## Out of scope

Syntax highlighting (Shiki adds meaningful build weight; plain styled `pre`
first), RSS, tag filtering, prev/next navigation, pagination, comments,
search, draft states.

## Verification

`npm run build` must emit `out/writing/index.html` and
`out/writing/hello-world/index.html`. The dev server must render the sample
post with its banner and screenshot, and the homepage must show the Writing
section between Experience and Education.

## Risk

`next-mdx-remote`'s RSC entrypoint against Next 15.4 with Turbopack is the one
unverified piece. Fallback: `@next/mdx` with a dynamic `import()` per slug —
same content files, same routes, more configuration.
