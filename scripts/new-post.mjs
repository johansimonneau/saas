#!/usr/bin/env node
// Usage : npm run post -- "Titre de l'article" [--date=AAAA-MM-JJ]
import { writeFileSync, existsSync, readFileSync } from 'node:fs';
const args = process.argv.slice(2);
const title = args.find(a => !a.startsWith('--'));
const date = (args.find(a => a.startsWith('--date=')) ?? `--date=${new Date().toISOString().slice(0, 10)}`).split('=')[1];
if (!title) { console.error('Usage : npm run post -- "Titre" [--date=AAAA-MM-JJ]'); process.exit(1); }
const slug = title.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
const file = `src/content/blog/${slug}.md`;
if (existsSync(file)) { console.error(`${file} existe déjà`); process.exit(1); }
const tpl = readFileSync('src/content/blog/_modele-article.md', 'utf8')
  .replace(/^---\n# MODÈLE[^\n]*\n/, '---\n')
  .replace(/title: ".*"/, `title: ${JSON.stringify(title)}`)
  .replace(/pubDate: .*/, `pubDate: ${date}`);
writeFileSync(file, tpl);
console.log(`Créé : ${file}`);
