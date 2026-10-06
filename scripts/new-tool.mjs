#!/usr/bin/env node
// Usage : npm run tool -- "Nom de l'outil" [--category=Facturation]
// Crée la fiche annuaire du jour (status: pending). Complétez-la, puis passez status: published.
import { writeFileSync, existsSync } from 'node:fs';
const args = process.argv.slice(2);
const name = args.find(a => !a.startsWith('--'));
const category = (args.find(a => a.startsWith('--category=')) ?? '--category=Autre').split('=')[1];
const date = new Date().toISOString().slice(0, 10);
if (!name) { console.error('Usage : npm run tool -- "Nom" [--category=Facturation]'); process.exit(1); }
const slug = name.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const file = `src/content/annuaire/${slug}.md`;
if (existsSync(file)) { console.error(`${file} existe déjà`); process.exit(1); }
writeFileSync(file, `---
name: "${name}"
tagline: "TODO : une phrase, 90 caractères max"
website: "https://TODO.com"
status: pending          # published une fois complétée
editorial: true          # true = fiche vérifiée et enrichie par vos soins
listedAt: ${date}
category: ${category}
tags: []
audiences: ["Freelance"]
pricingModel: Freemium
startingPrice: "TODO"
features:
  - "TODO fonctionnalité 1 (relevée sur la page officielle)"
  - "TODO fonctionnalité 2"
  - "TODO fonctionnalité 3"
integrations: []
company:
  name: "TODO"
  country: "France"
compliance:
  certifications: []
---

TODO : 2 à 3 phrases factuelles (ce que fait l'outil, ce qui est gratuit, ce qui est payant), puis « Notre avis » avec un lien vers le test ou le comparatif.
`);
console.log(`Créé : ${file}`);
