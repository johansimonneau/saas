import { getCollection } from 'astro:content';

const live = (d: { draft: boolean; pubDate: Date }) => !d.draft && d.pubDate <= new Date();
const byDateDesc = <T extends { data: { pubDate: Date } }>(a: T, b: T) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf();

export const getReviews = async () => (await getCollection('reviews', r => live(r.data))).sort(byDateDesc);
export const getPosts = async () => (await getCollection('blog', p => live(p.data))).sort(byDateDesc);
export const getTools = async () =>
  (await getCollection('annuaire', t => t.data.status === 'published'))
    .sort((a, b) => Number(b.data.sponsored) - Number(a.data.sponsored) || a.data.name.localeCompare(b.data.name, 'fr'));

export const fmtDate = (d: Date) => d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

// Outils populaires (pied de page). Tant qu'aucune statistique n'est saisie (champ `popularity`),
// l'ordre est tiré au sort, avec une graine qui change chaque jour (le site est reconstruit chaque matin).
export const getPopularTools = async (n = 6) => {
  const tools = await getTools();
  const ranked = tools.filter(t => t.data.popularity != null).sort((a, b) => b.data.popularity! - a.data.popularity!);
  const rest = tools.filter(t => t.data.popularity == null);
  let seed = Number(new Date().toISOString().slice(0, 10).replace(/-/g, ''));
  const rnd = () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };
  for (let i = rest.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [rest[i], rest[j]] = [rest[j], rest[i]]; }
  return [...ranked, ...rest].slice(0, n);
};
