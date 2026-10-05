#!/usr/bin/env node
// Usage: npm run new -- "Notion" [YYYY-MM-DD]
// Creates a draft review from the template. Fill in the TODOs, set draft: false, commit.
import { writeFileSync, existsSync } from 'node:fs';

const [name, date = new Date().toISOString().slice(0, 10)] = process.argv.slice(2);
if (!name) { console.error('Usage: npm run new -- "Tool name" [YYYY-MM-DD]'); process.exit(1); }

const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const file = `src/content/reviews/${slug}-review.md`;
if (existsSync(file)) { console.error(`${file} already exists`); process.exit(1); }

writeFileSync(file, `---
title: "${name} Review ${new Date(date).getFullYear()}: Pricing, Pros & Cons"
description: "TODO (80-160 chars): who ${name} is for, its key strength, its key limitation, and what it costs."
pubDate: ${date}
draft: true
category: Other
tool:
  name: "${name}"
  website: "https://TODO.com"
  # affiliateUrl: "https://..."   # add once you're in the program
  pricing: "TODO verify on the pricing page today"
  bestFor: "TODO"
  freeTrial: false
rating: 4
pros: ["TODO"]
cons: ["TODO"]
handsOn:
  testedFor: "TODO what you actually did, how long"
  verdict: "TODO your own opinion in 1-2 sentences"
alternatives: []
---

## What is ${name}?

TODO: one paragraph. What problem, for whom.

## Who should use it

TODO

## Who should skip it

TODO (this section builds trust and converts better than hype)

## Key features

TODO: 3-5 features you actually used, with a concrete example each.

## Pricing

TODO: plans, what's gated, hidden costs. Date-stamp: "Checked ${date}".

## ${name} vs alternatives

TODO: short comparison with the alternatives listed in the frontmatter.

## FAQ

### Is ${name} free?
TODO

### Does ${name} integrate with TODO?
TODO

## Final verdict

TODO
`);
console.log(`Created ${file}`);
