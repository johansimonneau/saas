import { getCollection } from 'astro:content';

const live = (d: { draft: boolean; pubDate: Date }) => !d.draft && d.pubDate <= new Date();
const byDateDesc = <T extends { data: { pubDate: Date } }>(a: T, b: T) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf();

export const getReviews = async () => (await getCollection('reviews', r => live(r.data))).sort(byDateDesc);
export const getPosts = async () => (await getCollection('blog', p => live(p.data))).sort(byDateDesc);
export const getTools = async () =>
  (await getCollection('annuaire', t => t.data.status === 'published'))
    .sort((a, b) => Number(b.data.sponsored) - Number(a.data.sponsored) || a.data.name.localeCompare(b.data.name, 'fr'));

export const fmtDate = (d: Date) => d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
