import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';

export async function GET(context) {
  const now = new Date();
  const reviews = (await getCollection('reviews', r => !r.data.draft && r.data.pubDate <= now))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return rss({
    title: SITE.name,
    description: SITE.tagline,
    site: context.site,
    items: reviews.map(r => ({ title: r.data.title, pubDate: r.data.pubDate, description: r.data.description, link: `/reviews/${r.id}/` })),
  });
}
