# Weekly Briefings — Storage & AI

A blog-style website hosting two parallel weekly briefing tracks for the CTO and VP Sales Engineering, NetApp EMEA, LATAM & Middle East:

1. **Storage** — *Weekly Storage & AI Data Platform Briefing* (NetApp-centric, competitive intelligence)
2. **AI & Compute** — *Weekly AI & Compute Innovation Briefing* (frontier models, GPUs, memory, networking, safety, policy)

Users land on Storage by default and can switch to AI & Compute via the header nav or the on-page tabs (`/?category=ai`).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding New Briefings

Drop new markdown files into the `content/` directory. The filename prefix determines which track the briefing belongs to:

```
Weekly_Storage_AI_Briefing_YYYY-MM-DD.md   # Storage track
Weekly_AI_Briefing_YYYY-MM-DD.md           # AI & Compute track
```

The site will automatically:
- Detect the track from the filename prefix
- Parse the date from the filename
- Extract key signals — first by the `**Signal N — ...**` pattern, then by bullet points under "Executive Summary"
- Count confidence markers (`[CROSS-VALIDATED]`, `[MULTI-PASS]`, `[SINGLE SOURCE]`, or `⚠️ single-source` for AI briefings)
- Render the full briefing as a blog post under `/briefings/<slug>`

## Deploying to Vercel

1. Push this repo to GitHub
2. Import the repo in [Vercel](https://vercel.com/new)
3. Deploy with default Next.js settings (no configuration needed)

Every push to `main` will auto-deploy.

## Tech Stack

- **Next.js 15** — App Router with static generation
- **Tailwind CSS 4** — Styling with custom design tokens
- **marked** — Markdown to HTML rendering
- **gray-matter** — Frontmatter parsing (for future use)
