import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from './config';

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(80).max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tool: z.object({
      name: z.string(),
      website: z.string().url(),
      affiliateUrl: z.string().url().optional(),
      pricing: z.string(),            // ex. "Offre gratuite ; payant dès 12 €/utilisateur/mois"
      bestFor: z.string(),
      freeTrial: z.boolean().default(false),
    }),
    category: z.enum(CATEGORIES),
    rating: z.number().min(1).max(5).optional(),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    // Preuve d'expérience directe (E-E-A-T). Obligatoire pour publier.
    handsOn: z.object({
      testedFor: z.string(),          // "2 semaines sur un vrai compte client"
      verdict: z.string(),            // votre avis, 1-2 phrases
    }),
    alternatives: z.array(z.string()).default([]),
  }),
});

export const collections = { reviews };
