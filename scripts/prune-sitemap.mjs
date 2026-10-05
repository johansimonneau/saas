// Retire du sitemap les pages marquées noindex (fiches minces, facettes vides).
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
const dist = 'dist';
const walk = d => readdirSync(d).flatMap(f => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : []; });
const noindex = walk(dist).filter(f => /<meta name="robots" content="noindex/.test(readFileSync(f, 'utf8')))
  .map(f => '/' + f.slice(dist.length + 1).replace(/index\.html$/, ''));
let removed = 0;
for (const f of readdirSync(dist).filter(f => /^sitemap-\d+\.xml$/.test(f))) {
  const p = join(dist, f), xml = readFileSync(p, 'utf8');
  const out = xml.replace(/<url>.*?<\/url>/gs, u => { const loc = u.match(/<loc>(.*?)<\/loc>/)[1]; const path = new URL(loc).pathname;
    if (noindex.includes(path)) { removed++; return ''; } return u; });
  writeFileSync(p, out);
}
console.log(`Sitemap : ${removed} page(s) noindex retirée(s).`);
