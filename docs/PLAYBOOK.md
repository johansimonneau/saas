# Daily SaaS presentation playbook

Goal: 1 published page/day, each with real first-hand input. Google's helpful-content systems
demote scaled, generic AI text; they reward visible experience. So the AI drafts, **you add the proof**.

## Daily loop (~45-60 min per article)

1. **Pick the tool** from the backlog (`docs/BACKLOG.md`). Prefer tools with: an affiliate program,
   search volume for "<tool> review / pricing / alternatives", and low-authority competing pages.
2. `npm run new -- "Tool Name"` creates the draft.
3. **Research (10 min):** open the tool, sign up for the free plan/trial, take 3+ own screenshots,
   copy the pricing page *today*, note one thing that annoyed you and one that impressed you.
4. **AI draft (10 min):** give Claude the template + your notes + the pricing facts. Instruct it to use
   *only* your supplied facts and mark anything unverified as TODO. Never let it invent features, prices, stats.
5. **Add your expertise (15 min):** fill `handsOn`, the "Who should skip it" section, your verdict, screenshots.
6. **Check:** every price/feature verified, affiliate link added, meta description 80-160 chars,
   `draft: false`, `npm run build` passes.
7. **Commit and push** — the host (Vercel) deploys. Use a future `pubDate` to schedule (rebuild daily via cron).

## Quality bars (non-negotiable)
- Never publish a tool you did not open. Say plainly what you did not test.
- Include at least one negative point and a "skip it if" section.
- Re-check pricing of top pages every 90 days; set `updatedDate`.
- Affiliate links: `rel="sponsored"` (built in) and the disclosure near the top (built in).

## Content mix (avoid 100% single-tool reviews)
- Days 1-5 of the week: single tool presentations (long tail: "<tool> review", "<tool> pricing").
- Weekly: 1 hub/roundup ("Best X tools for Y") linking to the individual reviews — these earn the money terms.
- Monthly: 1 comparison ("A vs B") from pairs you already reviewed.

## Monetisation order
1. Affiliate (PartnerStack, Impact, direct programs — Many SaaS pay 20-40% recurring). Earns long before ads do.
2. Display ads: AdSense needs real traffic and an About/Disclosure/Privacy site; move to Mediavine/Raptive at their traffic thresholds.
3. Email capture later.

## Rebuild daily for scheduled posts
Articles with a future `pubDate` are hidden until the date passes. Add a Vercel Deploy Hook + a daily cron
(GitHub Actions `schedule`) to rebuild each morning, so you can batch-write ahead.
