// Un seul endroit pour changer la marque. Remplacez les valeurs avant le lancement.
export const SITE = {
  name: 'SaaSDaily',
  tagline: 'Un outil SaaS testé et expliqué, chaque jour.',
  url: 'https://example.com',
  lang: 'fr',
  author: 'Votre Nom',
  // Publicité : renseignez votre identifiant éditeur AdSense (ca-pub-XXXXXXXXXXXXXXXX) une fois approuvé.
  adsensePublisherId: '',
  // Statistiques : domaine Plausible, par exemple. Vide = désactivé.
  analyticsDomain: '',
};

export const CATEGORIES = [
  'CRM', 'Emailing', 'Gestion de projet', 'SEO', 'Analytics',
  'Support client', 'Comptabilité', 'RH', 'Automatisation', 'Outils IA', 'Design', 'Autre',
] as const;

// Slug d'URL sans accents : "Comptabilité" -> "comptabilite"
export const catSlug = (c: string) =>
  c.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Identité légale : source unique pour mentions légales, confidentialité, CGU.
// Reprenez ici les infos de johan.simonneau.fr. `npm run check:legal` liste ce qui manque.
const TODO = '[À COMPLÉTER]';
export const LEGAL = {
  editorName: 'Johan Simonneau',            // éditeur (personne physique ou raison sociale)
  legalForm: TODO,                          // ex. Micro-entreprise, EI, SASU
  siret: TODO,
  vatNumber: TODO,                          // ou « TVA non applicable, art. 293 B du CGI »
  address: TODO,
  email: TODO,                              // contact et exercice des droits RGPD
  phone: '',                                // facultatif
  publicationDirector: 'Johan Simonneau',
  hostName: 'Vercel Inc.',                  // à ajuster selon l'hébergeur réel
  hostAddress: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
  hostUrl: 'https://vercel.com',
  updated: '2026-10-05',
};
