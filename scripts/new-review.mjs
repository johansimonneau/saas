#!/usr/bin/env node
// Usage : npm run new -- "Notion" [AAAA-MM-JJ]
// Crée un brouillon à partir du modèle. Remplissez les TODO, passez draft à false, commit.
import { writeFileSync, existsSync } from 'node:fs';

const [name, date = new Date().toISOString().slice(0, 10)] = process.argv.slice(2);
if (!name) { console.error('Usage : npm run new -- "Nom de l\'outil" [AAAA-MM-JJ]'); process.exit(1); }

const slug = name.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const file = `src/content/reviews/${slug}-avis.md`;
if (existsSync(file)) { console.error(`${file} existe déjà`); process.exit(1); }

writeFileSync(file, `---
title: "Avis ${name} ${new Date(date).getFullYear()} : tarifs, avantages et limites"
description: "TODO (80-160 car.) : pour qui est ${name}, sa principale force, sa principale limite et son prix."
pubDate: ${date}
draft: true
category: Autre
tool:
  name: "${name}"
  website: "https://TODO.com"
  # affiliateUrl: "https://..."   # à ajouter une fois inscrit au programme
  pricing: "TODO à vérifier sur la page tarifs le jour même"
  bestFor: "TODO"
  freeTrial: false
rating: 4
pros: ["TODO"]
cons: ["TODO"]
handsOn:
  testedFor: "TODO ce que vous avez réellement fait, pendant combien de temps"
  verdict: "TODO votre avis personnel en 1-2 phrases"
alternatives: []
---

## Qu'est-ce que ${name} ?

TODO : un paragraphe. Quel problème, pour qui.

## Pour qui ?

TODO

## Qui devrait passer son chemin ?

TODO (cette section crée la confiance et convertit mieux que l'enthousiasme)

## Fonctionnalités clés

TODO : 3 à 5 fonctionnalités réellement utilisées, avec un exemple concret chacune.

## Tarifs

TODO : offres, ce qui est limité, coûts cachés. Datez : « Vérifié le ${date} ».

## ${name} face aux alternatives

TODO : comparaison courte avec les alternatives listées dans l'en-tête.

## FAQ

### ${name} est-il gratuit ?
TODO

### ${name} s'intègre-t-il avec TODO ?
TODO

## Verdict final

TODO
`);
console.log(`Créé : ${file}`);
