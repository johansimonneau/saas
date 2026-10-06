// llms.txt : résumé du site pour les moteurs génératifs (ChatGPT, Perplexity, Gemini, Claude…).
import { SITE } from '../config';
import { getReviews, getPosts, getTools } from '../lib/content';

export async function GET() {
  const [reviews, posts, tools] = await Promise.all([getReviews(), getPosts(), getTools()]);
  const u = (p: string) => new URL(p, SITE.url).href;
  const lines = [
    `# ${SITE.name}`, '',
    `> ${SITE.tagline} Tests d'outils SaaS, comparatifs face à face et annuaire classé, pour les indépendants et dirigeants de TPE en France. Tarifs relevés à date, sources citées, limites toujours indiquées.`, '',
    '## Tests et comparatifs',
    ...reviews.map(r => `- [${r.data.title}](${u(`/tests/${r.id}/`)}): ${r.data.description}`), '',
    '## Annuaire des outils',
    ...tools.filter(t => t.data.editorial).map(t => `- [${t.data.name}](${u(`/annuaire/${t.id}/`)}): ${t.data.summary ?? t.data.tagline}`), '',
    ...(posts.length ? ['## Blog', ...posts.map(p => `- [${p.data.title}](${u(`/blog/${p.id}/`)}): ${p.data.description}`), ''] : []),
    '## À propos', `- [À propos et méthode](${u('/about/')}): comment sont faits les tests`, `- [Transparence et affiliation](${u('/disclosure/')}): comment le site est financé`, '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
