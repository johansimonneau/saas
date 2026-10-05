// Fonction serverless Vercel : demande « Quelqu'un souhaite en savoir plus sur [outil] ».
// Envoi par e-mail via Resend si RESEND_API_KEY et CONTACT_TO_EMAIL sont définies ;
// sinon (ou en cas d'échec) création d'une issue dans le dépôt privé SUBMISSIONS_REPO avec GITHUB_TOKEN.
// Variables optionnelles : CONTACT_FROM (expéditeur Resend), SITE_URL.
const str = (v, max) => (typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max) : '');

export function validate(b) {
  const d = { tool: str(b.tool, 80), email: str(b.email, 120), name: str(b.name, 80), message: str(b.message, 1000), page: str(b.page, 200) };
  const e = [];
  if (!d.tool) e.push('Outil manquant');
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email)) e.push('E-mail invalide');
  if (!b.consent) e.push('Consentement requis');
  return { d, errors: e };
}

export const subject = d => `Quelqu'un souhaite en savoir plus sur ${d.tool}`;
export const bodyText = (d, siteUrl) => [
  subject(d) + '.', '',
  `E-mail : ${d.email}`, `Prénom : ${d.name || '—'}`, `Message : ${d.message || '—'}`,
  `Page : ${siteUrl}${d.page || ''}`,
].join('\n');

async function sendEmail(d, siteUrl, env) {
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${env.RESEND_API_KEY.trim()}`, 'content-type': 'application/json' },
    body: JSON.stringify({ from: (env.CONTACT_FROM || 'SaaSbrief <onboarding@resend.dev>').trim(), to: [env.CONTACT_TO_EMAIL.trim()], reply_to: d.email, subject: subject(d), text: bodyText(d, siteUrl) }),
  });
  if (!r.ok) console.error('Resend a refusé l\'envoi :', r.status, (await r.text().catch(() => '')).slice(0, 300));
  return r.ok;
}

async function createIssue(d, siteUrl, env) {
  const r = await fetch(`https://api.github.com/repos/${env.SUBMISSIONS_REPO.trim()}/issues`, {
    method: 'POST',
    headers: { authorization: `Bearer ${env.GITHUB_TOKEN.trim()}`, accept: 'application/vnd.github+json', 'content-type': 'application/json', 'user-agent': 'saasbrief-contact' },
    body: JSON.stringify({ title: subject(d), body: '```\n' + bodyText(d, siteUrl) + '\n```', labels: ['contact'] }),
  });
  if (!r.ok) console.error('GitHub a refusé la demande de contact :', r.status, (await r.text().catch(() => '')).slice(0, 300));
  return r.ok;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Méthode non autorisée' });
  const b = typeof req.body === 'string' ? (() => { try { return JSON.parse(req.body); } catch { return {}; } })() : (req.body || {});
  if (b.company_site) return res.status(200).json({ ok: true }); // honeypot
  const { d, errors } = validate(b);
  if (errors.length) return res.status(400).json({ error: errors.join(' · ') });
  const env = process.env, siteUrl = (env.SITE_URL || 'https://saasbrief.fr').trim();
  let sent = false;
  if (env.RESEND_API_KEY && env.CONTACT_TO_EMAIL) sent = await sendEmail(d, siteUrl, env).catch(() => false);
  if (!sent && env.GITHUB_TOKEN && env.SUBMISSIONS_REPO) sent = await createIssue(d, siteUrl, env).catch(() => false);
  if (!sent) return res.status(502).json({ error: 'Envoi impossible pour le moment, réessayez plus tard.' });
  return res.status(200).json({ ok: true });
}
