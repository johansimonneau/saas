#!/usr/bin/env node
// Usage : npm run new -- "Notion" [--layout=classique|verdict|story|duel|checklist] [--date=AAAA-MM-JJ]
// Chaque mise en page a sa propre structure : variez-les d'un jour à l'autre (évite les pages jumelles).
import { writeFileSync, existsSync } from 'node:fs';

const args = process.argv.slice(2);
const flag = (k, d) => (args.find(a => a.startsWith(`--${k}=`)) ?? `--${k}=${d}`).split('=')[1];
const name = args.find(a => !a.startsWith('--'));
const layout = flag('layout', 'classique');
const date = flag('date', new Date().toISOString().slice(0, 10));
const LAYOUTS = ['classique', 'verdict', 'story', 'duel', 'checklist'];
if (!name || !LAYOUTS.includes(layout)) { console.error(`Usage : npm run new -- "Outil" [--layout=${LAYOUTS.join('|')}] [--date=AAAA-MM-JJ]`); process.exit(1); }

const slug = name.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const file = `src/content/reviews/${slug}-avis.md`;
if (existsSync(file)) { console.error(`${file} existe déjà`); process.exit(1); }

const extra = {
  classique: '',
  verdict: 'scores:\n  "Prise en main": 4\n  "Rapport qualité/prix": 4\n  "Support": 3\n',
  story: '',
  duel: `versus:\n  name: "TODO autre outil"\n  rows:\n    - { label: "Prix d'entrée", tool: "TODO", other: "TODO" }\n    - { label: "Prise en main", tool: "TODO", other: "TODO" }\n    - { label: "Intégrations", tool: "TODO", other: "TODO" }\n`,
  checklist: 'goIf: ["TODO profil qui y gagne"]\nskipIf: ["TODO profil qui y perd"]\n',
}[layout];

const body = {
  classique: `## Qu'est-ce que ${name} ?\n\nTODO : un paragraphe, quel problème, pour qui.\n\n## Fonctionnalités testées\n\nTODO : 3 à 5 fonctions réellement utilisées, un exemple concret chacune.\n\n## Tarifs\n\nTODO : offres, limites, coût annuel réel pour un indépendant seul vs une TPE de 5. « Vérifié le ${date} ».\n\n## FAQ\n\n### ${name} est-il gratuit ?\nTODO\n\n## Verdict final\n\nTODO`,
  verdict: `## Le verdict en bref\n\nTODO : 3 phrases, la note se justifie ici.\n\n## Ce qui m'a convaincu\n\nTODO\n\n## Ce qui m'a agacé\n\nTODO\n\n## Combien ça coûte vraiment\n\nTODO\n\n## À qui je le recommande\n\nTODO`,
  story: `TODO : démarrez par la scène (le problème vécu), pas par la fiche produit.\n\n## Pourquoi j'ai essayé ${name}\n\nTODO\n\n## Semaine 1 : la prise en main\n\nTODO\n\n## Semaine 2 : l'usage réel\n\nTODO\n\n## Ce que j'en retiens\n\nTODO`,
  duel: `## Pourquoi comparer ces deux outils\n\nTODO\n\n## Là où ${name} gagne\n\nTODO\n\n## Là où l'autre gagne\n\nTODO\n\n## Mon choix selon votre profil\n\nTODO`,
  checklist: `## Le contexte en 3 lignes\n\nTODO\n\n## Les 3 critères qui décident\n\nTODO\n\n## Le test que je vous conseille\n\nTODO : ce qu'il faut vérifier pendant l'essai gratuit.\n\n## Décision\n\nTODO`,
}[layout];

writeFileSync(file, `---
title: "Avis ${name} ${new Date(date).getFullYear()} : TODO angle punchy"
description: "TODO (80-160 car.) : pour qui est ${name}, sa principale force, sa principale limite et son prix."
punchline: "TODO accroche courte (90 car. max)"
pubDate: ${date}
draft: true
layout: ${layout}
category: Autre   # voir CATEGORY_GROUPS dans src/config.ts
audiences: ["Freelance"]
pricingModel: Freemium
tags: []
tool:
  name: "${name}"
  website: "https://TODO.com"
  # affiliateUrl: "https://..."   # une fois inscrit au programme
  pricing: "TODO à vérifier sur la page tarifs le jour même"
  bestFor: "TODO"
  freeTrial: false
rating: 4
pros: ["TODO"]
cons: ["TODO"]
${extra}handsOn:
  testedFor: "TODO ce que vous avez réellement fait, pendant combien de temps"
  verdict: "TODO votre avis personnel en 1-2 phrases"
alternatives: []
---

${body}
`);
console.log(`Créé : ${file} (mise en page : ${layout})`);
