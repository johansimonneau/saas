import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';

export async function GET(context) {
  const now = new Date();
  const live = d => !d.draft && d.pubDate <= now;
  const [reviews, posts] = await Promise.all([getCollection('reviews', r => live(r.data)), getCollection('blog', p => live(p.data))]);
  const items = [
    ...reviews.map(r => ({ title: r.data.title, pubDate: r.data.pubDate, description: r.data.description, link: `/tests/${r.id}/` })),
    ...posts.map(p => ({ title: p.data.title, pubDate: p.data.pubDate, description: p.data.description, link: `/blog/${p.id}/` })),
  ].sort((a, b) => b.pubDate - a.pubDate);
  return rss({ title: SITE.name, description: SITE.tagline, site: context.site, items });
}
