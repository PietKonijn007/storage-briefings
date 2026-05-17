# Storage & AI Weekly Briefing

A blog-style website for the Weekly Storage & AI Data Platform Briefings prepared for the CTO and VP Sales Engineering, NetApp EMEA, LATAM & Middle East.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding New Briefings

Drop new markdown files into the `content/` directory following the naming convention:

```
Weekly_Storage_AI_Briefing_YYYY-MM-DD.md
```

The site will automatically:
- Parse the date from the filename
- Extract key signals from the Executive Summary
- Count confidence markers
- Render the full briefing as a blog post

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
