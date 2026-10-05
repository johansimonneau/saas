import { CATEGORIES, AUDIENCES, PRICING_MODELS } from '../config';

export const FACETS = {
  categorie: { values: CATEGORIES as readonly string[], label: (v: string) => `Outils SaaS ${v}`, h: (v: string) => `${v} : les SaaS à connaître` },
  profil: { values: AUDIENCES as readonly string[], label: (v: string) => `SaaS pour ${v}`, h: (v: string) => `Les SaaS pour ${v}` },
  prix: { values: PRICING_MODELS as readonly string[], label: (v: string) => `SaaS ${v}`, h: (v: string) => `SaaS : ${v}` },
} as const;
export type Facet = keyof typeof FACETS;
