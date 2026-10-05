import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { SITE, CATEGORIES, AUDIENCES, PRICING_MODELS, TEAM_SIZES, REVIEW_LAYOUTS, BLOG_CATEGORIES } from './config';

const category = z.enum(CATEGORIES);
const audience = z.enum(AUDIENCES);
const pricingModel = z.enum(PRICING_MODELS);

// Tests éditoriaux : un par jour, écrits par l'auteur.
const reviews = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(80).max(160),
    punchline: z.string().max(90).optional(),        // accroche affichée dans le hero
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    // La mise en page change selon l'article : évite les pages jumelles (contenu dupliqué).
    layout: z.enum(REVIEW_LAYOUTS).default('classique'),
    tool: z.object({
      name: z.string(),
      website: z.string().url(),
      affiliateUrl: z.string().url().optional(),
      pricing: z.string(),
      bestFor: z.string(),
      freeTrial: z.boolean().default(false),
    }),
    category,
    audiences: z.array(audience).default([]),
    pricingModel: pricingModel.optional(),
    tags: z.array(z.string()).default([]),
    rating: z.number().min(1).max(5).optional(),
    scores: z.record(z.string(), z.number().min(0).max(5)).optional(), // ex. { "Prise en main": 4 }
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    goIf: z.array(z.string()).default([]),            // layout « checklist » : prenez-le si…
    skipIf: z.array(z.string()).default([]),          // … évitez-le si…
    versus: z.object({                                 // layout « duel »
      name: z.string(),
      affiliateUrl: z.string().url().optional(),
      rows: z.array(z.object({ label: z.string(), tool: z.string(), other: z.string() })).min(3),
    }).optional(),
    // Preuve d'expérience directe (E-E-A-T). Obligatoire pour publier.
    handsOn: z.object({
      testedFor: z.string(),
      verdict: z.string(),
    }),
    alternatives: z.array(z.string()).default([]),
  }),
});

// Annuaire : fiches outils, ajoutées par les éditeurs via le formulaire puis modérées.
const annuaire = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/annuaire' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string().max(90),
    website: z.string().url(),
    logo: z.string().url().optional(),
    status: z.enum(['pending', 'published']).default('pending'),
    editorial: z.boolean().default(false),   // true = fiche enrichie par l'éditeur du site => indexable
    sponsored: z.boolean().default(false),
    popularity: z.number().optional(),       // plus haut = plus populaire ; vide = tirage au sort du jour
    listedAt: z.coerce.date(),
    category,
    tags: z.array(z.string()).max(8).default([]),
    audiences: z.array(audience).min(1),
    pricingModel,
    startingPrice: z.string().optional(),     // ex. « 9 €/mois »
    freeTrialDays: z.number().int().optional(),
    features: z.array(z.string()).min(3).max(12),
    integrations: z.array(z.string()).default([]),
    languages: z.array(z.string()).default([]),
    frenchSupport: z.boolean().default(false),
    supportChannels: z.array(z.string()).default([]),
    apps: z.array(z.enum(['iOS', 'Android', 'Web', 'Desktop'])).default([]),
    api: z.boolean().default(false),
    company: z.object({
      name: z.string(),
      country: z.string(),
      founded: z.number().int().optional(),
      teamSize: z.enum(TEAM_SIZES).optional(),
      linkedin: z.string().url().optional(),
    }),
    compliance: z.object({
      hosting: z.string().optional(),         // ex. « France », « UE », « États-Unis »
      gdpr: z.boolean().default(false),
      dpa: z.boolean().default(false),
      certifications: z.array(z.string()).default([]),
    }).default({ gdpr: false, dpa: false, certifications: [] }),
    demoUrl: z.string().url().optional(),
    verifiedOn: z.coerce.date().optional(),   // date de la dernière vérification éditoriale
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).max(6).default([]),  // sources tierces consultées
    affiliateUrl: z.string().url().optional(),
    directLink: z.boolean().default(false),   // true = autorise un lien direct vers le site (sinon : formulaire « en savoir plus »)
  }),
});

// Blog : guides, comparatifs, retours d'expérience. Mise en page propre, distincte des fiches.
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(90),
    description: z.string().min(80).max(170),
    kicker: z.string().max(40).optional(),    // petite étiquette au-dessus du titre
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    category: z.enum(BLOG_CATEGORIES),
    tags: z.array(z.string()).default([]),
    author: z.string().default(SITE.author),
    takeaways: z.array(z.string()).default([]),   // « L'essentiel en 30 secondes »
    // Pour les « Top / Meilleurs » : classement affiché avant le texte, dans l'ordre du tableau.
    ranking: z.array(z.object({
      name: z.string(),
      slug: z.string().optional(),            // id de la fiche annuaire (lien interne si elle existe)
      bestFor: z.string(),
      price: z.string().optional(),
      verdict: z.string(),
      tested: z.boolean().default(false),     // true = testé par la rédaction
    })).default([]),
  }),
});

export const collections = { reviews, annuaire, blog };
