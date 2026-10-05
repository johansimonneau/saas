# SaaSDaily — SEO niche site (daily SaaS presentation)

Static site built with Astro. Content = Markdown files in `src/content/reviews/`.

```bash
npm install
npm run dev          # http://localhost:4321
npm run new -- "Tool Name"   # scaffold today's draft
npm run build
```

1. Edit `src/config.ts` (name, domain, author, AdSense id once approved).
2. Fill the TODOs in `src/pages/about.astro`.
3. Follow `docs/PLAYBOOK.md` for the daily routine.
4. Deploy on Vercel (framework preset: Astro).

Drafts (`draft: true`) and future-dated posts are not published.
