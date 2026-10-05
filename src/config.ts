// Un seul endroit pour changer la marque. Remplacez les valeurs avant le lancement.
export const SITE = {
  name: 'SaaSbrief',
  tagline: 'Les outils SaaS des indépendants et dirigeants de TPE, testés un par un.',
  url: 'https://saasbrief.fr',
  lang: 'fr',
  author: 'Votre Nom',
  // Publicité : renseignez votre identifiant éditeur AdSense (ca-pub-XXXXXXXXXXXXXXXX) une fois approuvé.
  adsensePublisherId: '',
  // Statistiques : domaine Plausible, par exemple. Vide = désactivé.
  analyticsDomain: '',
};

export const CATEGORIES = [
  'Facturation', 'Comptabilité', 'Banque pro', 'CRM', 'Gestion de projet',
  'Emailing', 'Marketing et SEO', 'Support client', 'RH et paie', 'Juridique',
  'Automatisation', 'Outils IA', 'Autre',
] as const;

// Slug d'URL sans accents : "Comptabilité" -> "comptabilite"
export const catSlug = (c: string) =>
  c.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Identité légale : source unique pour mentions légales, confidentialité, CGU.
// Reprenez ici les infos de johan.simonneau.fr. `npm run check:legal` liste ce qui manque.
const TODO = '[À COMPLÉTER]';
export const LEGAL = {
  editorName: 'Johan Simonneau',            // éditeur (personne physique ou raison sociale)
  legalForm: 'Entrepreneur individuel',
  siret: '879 545 564 00020',  // SIREN 879 545 564 · RNE depuis le 01/10/2019 · non inscrit au RCS
  vatNumber: 'FR24879545564',
  address: '7 rue de Ligner, 37520 La Riche, France',
  email: TODO,                              // contact et exercice des droits RGPD
  phone: '',                                // facultatif
  publicationDirector: 'Johan Simonneau',
  hostName: 'Vercel Inc.',                  // à ajuster selon l'hébergeur réel
  hostAddress: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
  hostUrl: 'https://vercel.com',
  updated: '2026-10-05',
};
