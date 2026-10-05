// Garde-fou : refuse de construire le site si un article PUBLIÉ (draft: false) contient encore un marqueur à compléter.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const MARKER = /TODO|À COMPLÉTER|À VÉRIFIER/;
const bad = [];
for (const dir of ['src/content/reviews', 'src/content/blog', 'src/content/annuaire']) {
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir).filter(f => f.endsWith('.md') && !f.startsWith('_'))) {
    const txt = readFileSync(join(dir, f), 'utf8');
    if (/^draft:\s*true/m.test(txt) || /^status:\s*pending/m.test(txt)) continue;
    txt.split('\n').forEach((l, i) => { if (MARKER.test(l)) bad.push(`${dir}/${f}:${i + 1}  ${l.trim().slice(0, 80)}`); });
  }
}
if (bad.length) { console.error('Article publié avec des marqueurs à compléter :\n' + bad.join('\n')); process.exit(1); }
