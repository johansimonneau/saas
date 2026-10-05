// Liste les champs d'identité encore à compléter dans src/config.ts. À lancer avant la mise en ligne.
import { readFileSync } from 'node:fs';
const lines = readFileSync('src/config.ts', 'utf8').split('\n');
const missing = lines.map((l, i) => [i + 1, l]).filter(([, l]) => l.includes('TODO,'));
for (const [n, l] of missing) console.log(`config.ts:${n}  ${l.trim()}`);
console.log(missing.length ? `\n${missing.length} champ(s) à compléter.` : 'Identité légale complète.');
process.exit(missing.length ? 1 : 0);
