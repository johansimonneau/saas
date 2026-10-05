// Fonction serverless Vercel : reçoit le formulaire et crée une issue GitHub (file de modération).
// Variables d'environnement : GITHUB_TOKEN (droit « issues »), SUBMISSIONS_REPO ("owner/repo").
// ATTENTION : l'issue contient l'e-mail du contact. Utilisez un dépôt PRIVÉ pour SUBMISSIONS_REPO.
const CATEGORIES = ['Facturation','Comptabilité','Banque pro','Juridique','RH et paie','CRM','Emailing','Marketing et SEO','Support client','Gestion de projet','Automatisation','Outils IA','Autre'];
const AUDIENCES = ['Freelance','Micro-entrepreneur','TPE (1-10)','PME (10-50)','Agence','E-commerçant'];
const PRICING = ['Gratuit','Freemium','Essai gratuit','Payant','Sur devis'];
const TEAM = ['1','2-10','11-50','51-200','200+'];
const APPS = ['Web','iOS','Android','Desktop'];

const str = (v, max) => (typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max) : '');
const list = (v, sep, max, itemMax = 80) => (typeof v === 'string' ? v.split(sep) : Array.isArray(v) ? v : [])
  .map(x => str(x, itemMax)).filter(Boolean).slice(0, max);
const url = v => { const s = str(v, 300); try { const u = new URL(s); return u.protocol === 'https:' ? u.href : ''; } catch { return ''; } };
const q = s => JSON.stringify(s); // chaîne YAML sûre (JSON est du YAML valide)

export function validate(b) {
  const e = [];
  const d = {
    name: str(b.name, 60), website: url(b.website), tagline: str(b.tagline, 90), description: str(b.description, 1500),
    category: str(b.category, 40), tags: list(b.tags, ',', 8, 30), audiences: list(b.audiences, ',', 6).filter(a => AUDIENCES.includes(a)),
    logo: url(b.logo), demoUrl: url(b.demoUrl), pricingModel: str(b.pricingModel, 20), startingPrice: str(b.startingPrice, 60),
    freeTrialDays: Number.isInteger(+b.freeTrialDays) && b.freeTrialDays !== '' ? Math.min(Math.max(+b.freeTrialDays, 0), 365) : null,
    features: list(b.features, '\n', 12, 140), integrations: list(b.integrations, '\n', 40, 40),
    languages: list(b.languages, ',', 10, 30), supportChannels: list(b.supportChannels, ',', 8, 30),
    apps: list(b.apps, ',', 4).filter(a => APPS.includes(a)), frenchSupport: !!b.frenchSupport, api: !!b.api,
    companyName: str(b.companyName, 80), companyCountry: str(b.companyCountry, 40), founded: Number.isInteger(+b.founded) && b.founded !== '' ? +b.founded : null,
    teamSize: TEAM.includes(b.teamSize) ? b.teamSize : '', linkedin: url(b.linkedin),
    hosting: str(b.hosting, 60), certifications: list(b.certifications, ',', 10, 40), gdpr: !!b.gdpr, dpa: !!b.dpa,
    contactName: str(b.contactName, 80), contactEmail: str(b.contactEmail, 120), affiliateProgram: str(b.affiliateProgram, 300),
  };
  if (!d.name) e.push('Nom de l\'outil requis');
  if (!d.website) e.push('Site web en https requis');
  if (!d.tagline) e.push('Slogan requis');
  if (d.description.length < 300) e.push('Description : 300 caractères minimum');
  if (!CATEGORIES.includes(d.category)) e.push('Catégorie invalide');
  if (!d.audiences.length) e.push('Choisissez au moins un profil');
  if (!PRICING.includes(d.pricingModel)) e.push('Modèle tarifaire invalide');
  if (d.features.length < 3) e.push('Au moins 3 fonctionnalités');
  if (!d.companyName || !d.companyCountry) e.push('Société et pays requis');
  if (!d.contactName || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.contactEmail)) e.push('Contact (nom + e-mail valide) requis');
  if (!b.consent) e.push('Consentement requis');
  return { d, errors: e };
}

// Génère un fichier prêt à copier dans src/content/annuaire/<slug>.md
export function toIssueBody(d) {
  const slug = d.name.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const arr = a => `[${a.map(q).join(', ')}]`;
  const fm = [
    `name: ${q(d.name)}`, `tagline: ${q(d.tagline)}`, `website: ${q(d.website)}`, d.logo && `logo: ${q(d.logo)}`,
    `status: pending`, `editorial: false`, `listedAt: ${new Date().toISOString().slice(0, 10)}`,
    `category: ${q(d.category)}`, `tags: ${arr(d.tags)}`, `audiences: ${arr(d.audiences)}`, `pricingModel: ${q(d.pricingModel)}`,
    d.startingPrice && `startingPrice: ${q(d.startingPrice)}`, d.freeTrialDays != null && `freeTrialDays: ${d.freeTrialDays}`,
    `features: ${arr(d.features)}`, `integrations: ${arr(d.integrations)}`, `languages: ${arr(d.languages.length ? d.languages : ['Français'])}`,
    `frenchSupport: ${d.frenchSupport}`, `supportChannels: ${arr(d.supportChannels)}`, `apps: ${arr(d.apps.length ? d.apps : ['Web'])}`, `api: ${d.api}`,
    `company:`, `  name: ${q(d.companyName)}`, `  country: ${q(d.companyCountry)}`, d.founded && `  founded: ${d.founded}`,
    d.teamSize && `  teamSize: ${q(d.teamSize)}`, d.linkedin && `  linkedin: ${q(d.linkedin)}`,
    `compliance:`, d.hosting && `  hosting: ${q(d.hosting)}`, `  gdpr: ${d.gdpr}`, `  dpa: ${d.dpa}`, `  certifications: ${arr(d.certifications)}`,
    d.demoUrl && `demoUrl: ${q(d.demoUrl)}`,
  ].filter(Boolean).join('\n');
  return { slug, body:
`**Fichier à créer : \`src/content/annuaire/${slug}.md\`** (puis \`status: published\` après relecture)

\`\`\`md
---
${fm}
---

${d.description}
\`\`\`

**Contact (privé)** : ${d.contactName} <${d.contactEmail}>
**Programme d'affiliation proposé** : ${d.affiliateProgram || 'non'}

Checklist modération : [ ] site réel et actif · [ ] description non copiée · [ ] aucune promesse mensongère · [ ] RGPD plausible · [ ] liens https`};
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Méthode non autorisée' });
  const b = typeof req.body === 'string' ? (() => { try { return JSON.parse(req.body); } catch { return {}; } })() : (req.body || {});
  if (b.company_site) return res.status(200).json({ ok: true }); // honeypot : on fait semblant
  const { d, errors } = validate(b);
  if (errors.length) return res.status(400).json({ error: errors.join(' · ') });
  // trim : un retour à la ligne ou un espace collé avec la valeur provoque un refus 401/404.
  const token = (process.env.GITHUB_TOKEN || '').trim(), repo = (process.env.SUBMISSIONS_REPO || '').trim();
  if (!token || !repo) return res.status(500).json({ error: 'Service de soumission non configuré.' });
  const { slug, body } = toIssueBody(d);
  const r = await fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'POST',
    headers: { authorization: `Bearer ${token}`, accept: 'application/vnd.github+json', 'content-type': 'application/json', 'user-agent': 'saasbrief-submit' },
    body: JSON.stringify({ title: `Soumission annuaire : ${d.name}`, body, labels: ['soumission'] }),
  });
  if (!r.ok) {
    const detail = await r.text().catch(() => '');
    console.error(`GitHub a refusé la création de l'issue : ${r.status} (dépôt ${repo})`, detail.slice(0, 300));
    const HINTS = {
      401: 'jeton invalide ou expiré',
      403: 'le jeton n\'a pas la permission Issues (lecture et écriture)',
      404: 'dépôt introuvable ou non autorisé pour ce jeton (vérifiez SUBMISSIONS_REPO et l\'accès du jeton à ce dépôt)',
      410: 'les issues sont désactivées sur ce dépôt',
    };
    return res.status(502).json({ error: `Envoi impossible (GitHub ${r.status}${HINTS[r.status] ? ' : ' + HINTS[r.status] : ''}).` });
  }
  return res.status(200).json({ ok: true, slug });
}
