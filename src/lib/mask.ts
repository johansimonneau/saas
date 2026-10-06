import { randomBytes } from 'node:crypto';

// Masquage côté page : la valeur n'apparaît pas en clair dans le HTML (anti-collecte par les robots).
// Décodée dans le navigateur par le script de src/layouts/Base.astro. C'est de l'obfuscation, pas du chiffrement :
// le visiteur doit pouvoir lire la valeur. Format : base64(8 octets de clé aléatoire + valeur XOR clé).
export function mask(value: string): string {
  const k = randomBytes(8), v = Buffer.from(value, 'utf8'), out = Buffer.alloc(8 + v.length);
  k.copy(out);
  for (let i = 0; i < v.length; i++) out[8 + i] = v[i] ^ k[i % 8];
  return out.toString('base64');
}
