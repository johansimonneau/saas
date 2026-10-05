// Un seul endroit pour changer la marque. Remplacez les valeurs avant le lancement.
export const SITE = {
  name: 'SaaSbrief',
  tagline: 'Les outils SaaS des indépendants et dirigeants de TPE, testés un par un.',
  url: 'https://saasbrief.fr',
  lang: 'fr',
  author: 'La rédaction SaaSbrief',  // affiché publiquement : pas de nom propre
  // Publicité : renseignez votre identifiant éditeur AdSense (ca-pub-XXXXXXXXXXXXXXXX) une fois approuvé.
  adsensePublisherId: '',
  // Statistiques : domaine Plausible, par exemple. Vide = désactivé.
  analyticsDomain: '',
};

// Classification : 4 grands rayons > catégories. Source unique pour menus, filtres et schémas.
export const CATEGORY_GROUPS = {
  'Finance et admin': ['Facturation', 'Comptabilité', 'Banque pro', 'Juridique', 'RH et paie'],
  'Vente et marketing': ['CRM', 'Emailing', 'Marketing et SEO', 'Support client'],
  'Productivité': ['Gestion de projet', 'Automatisation', 'Outils IA'],
  'Autre': ['Autre'],
} as const satisfies Record<string, readonly string[]>;

export const CATEGORIES = Object.values(CATEGORY_GROUPS).flat() as unknown as [string, ...string[]];
export const groupOf = (cat: string) =>
  Object.entries(CATEGORY_GROUPS).find(([, v]) => (v as readonly string[]).includes(cat))?.[0] ?? 'Autre';

// Couleur d'accent par rayon (utilisée en CSS via --accent).
export const GROUP_COLORS: Record<string, string> = {
  'Finance et admin': '#16a34a',
  'Vente et marketing': '#ea580c',
  'Productivité': '#5b3df5',
  'Autre': '#0891b2',
};

export const AUDIENCES = ['Freelance', 'Micro-entrepreneur', 'TPE (1-10)', 'PME (10-50)', 'Agence', 'E-commerçant'] as const;
export const PRICING_MODELS = ['Gratuit', 'Freemium', 'Essai gratuit', 'Payant', 'Sur devis'] as const;
export const TEAM_SIZES = ['1', '2-10', '11-50', '51-200', '200+'] as const;
export const REVIEW_LAYOUTS = ['classique', 'verdict', 'story', 'duel', 'checklist'] as const;
export const BLOG_CATEGORIES = ['Guides', 'Comparatifs', 'Retours d\'expérience', 'Stack et méthode', 'Actus'] as const;

// Slug d'URL sans accents : "Comptabilité" -> "comptabilite"
export const catSlug = (c: string) =>
  c.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Identité légale : source unique pour mentions légales, confidentialité, CGU.
// Identité légale (obligatoire sur les mentions légales et la politique de confidentialité uniquement).
// `npm run check:legal` liste ce qui manque.
const TODO = '[À COMPLÉTER]';
export const LEGAL = {
  editorName: 'Johan Simonneau',            // éditeur (personne physique ou raison sociale)
  legalForm: 'Entrepreneur individuel',
  siret: '879 545 564 00020',  // SIREN 879 545 564 · RNE depuis le 01/10/2019 · non inscrit au RCS
  vatNumber: 'FR24879545564',
  address: '7 rue de Ligner, 37520 La Riche, France',
  email: 'johansimonneau.pro@gmail.com',   // contact et exercice des droits RGPD
  phone: '',                                // facultatif
  publicationDirector: 'Johan Simonneau',
  hostName: 'Vercel Inc.',                  // à ajuster selon l'hébergeur réel
  hostAddress: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
  hostUrl: 'https://vercel.com',
  updated: '2026-10-05',
};
