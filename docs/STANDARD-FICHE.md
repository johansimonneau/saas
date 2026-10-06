# Standard d'une fiche annuaire (SEO + GEO)

Ce document est la **référence** des routines et de l'auteur. Une fiche n'est « complète » que si elle respecte tout ce qui suit.
Modèles de référence : `src/content/annuaire/indy.md` et `tiime.md`.

## 1. Données (frontmatter), toutes à remplir
| Champ | Règle |
|---|---|
| `summary` | « En bref » : réponse directe en 1-2 phrases (≤ 320 car.) : ce que c'est, pour qui, prix d'entrée, le point clé. C'est ce que citent les moteurs génératifs. |
| `seo.title` | ≤ 46 caractères (le site ajoute « \| SaaSbrief »), format « Avis X 2026 : prix, gratuit et alternatives ». |
| `seo.description` | 140-160 car., avec 2-3 faits chiffrés (prix, essai, particularité). Jamais de superlatif creux. |
| `logo` | `/tools/<slug>/logo.webp` (voir §3). |
| `screenshots` | au moins 2 : `hero.webp` (haut de la page d'accueil du site officiel) et `tarifs.webp` ; `alt` descriptif, `caption` datée, `width`/`height` renseignés. |
| `plans` | toutes les offres relevées sur la page officielle : `name`, `price`, `priceValue` (€ HT/mois, nombre), `billing` (annuel/mensuel, essai), `highlights` (3-7), `popular` si l'éditeur l'indique. |
| `features` | 6-12, issues du site officiel, avec le palier entre parenthèses quand c'est pertinent. |
| `pros` / `cons` | 3-6 chacun, chaque point sourcé ou marqué « retour d'usage de la rédaction ». Au moins 2 limites réelles. |
| `forWho` / `notFor` | 2-4 chacun, avec une alternative citée dans `notFor`. |
| `faq` | 5 à 8 questions réelles (« X est-il gratuit ? », « À partir de quelle offre… ? », « X ou Y ? »), réponse directe en 1-3 phrases, avec chiffres et date de relevé. |
| `alternatives` | ids de fiches existantes. |
| `sources` | 3 sources tierces fiables, de domaines différents (jamais le site de l'éditeur). `verifiedOn` = date du jour. |
| `company` | raison sociale et pays lus sur le site officiel (mentions légales). |

## 2. Texte (corps Markdown, 350 mots minimum)
`## Présentation de X` (qui, quoi, quel prix d'entrée) · `## Notre retour d'usage` (uniquement si la rédaction l'a testé ; sinon « Pas encore testé par la rédaction ») · `## Ce qu'il faut savoir avant de choisir` (3-4 puces concrètes) · `## X face à Y` avec lien interne vers le test ou le comparatif.
Règles GEO : phrases autonomes et factuelles, entité nommée en toutes lettres (« Indy », pas « l'outil »), chiffres datés, réponse d'abord puis le détail, pas de promesse non sourcée.

## 3. Logo et captures (la routine les fabrique)
1. Ouvrir le site officiel avec Playwright (Chromium préinstallé, `executablePath` `/opt/pw-browsers/chromium-*/chrome-linux/chrome`), viewport 1440×900.
2. **Logo** : chercher dans l'ordre le logo du `<header>` (SVG ou image), puis `link[rel~=icon]` / `apple-touch-icon`, puis `og:image` en dernier recours. Enregistrer en `public/tools/<slug>/logo.webp` (carré, 256 px max, fond conservé ou transparent). Si rien de propre n'est trouvé : ne rien inventer, laisser `logo` absent (le site affiche une initiale).
3. **Capture du hero** : capture de la zone visible de la page d'accueil (1440×900, bandeau cookies fermé s'il y en a un), recadrée sur le haut de page, convertie en WebP (Pillow : largeur 1400, qualité 75-80, poids visé < 150 Ko). Nommer `hero.webp`.
4. **Capture des tarifs** (`tarifs.webp`) : la page tarifs, mêmes réglages.
5. Légende : « Capture d'écran du site officiel de X, relevée le AAAA-MM-JJ. » ; `alt` décrit réellement ce qu'on voit.
6. Les logos et captures sont la propriété de leurs éditeurs : usage limité à la présentation et à la critique de l'outil, jamais retouchés, toujours datés et attribués.

## 4. Règles du site (inchangées)
Aucun lien direct vers le site de l'outil (seul `website` en métadonnée), nom de l'éditeur du site absent, `editorial: false` tant qu'il n'y a pas de test de la rédaction, `status: published` seulement si site officiel consulté ET 3 sources distinctes, aucune invention : un fait non vérifié est écarté ou signalé dans le dossier de recherche (`docs/recherches/<slug>.md`).

## 5. Contrôle avant PR
`npm run build` passe ; la page `dist/annuaire/<slug>/index.html` existe ; 1 seul `<h1>` ; aucune `<img>` sans `alt` ; JSON-LD parsable (BreadcrumbList, SoftwareApplication, WebPage, FAQPage) ; titre ≤ 60 caractères avec le suffixe du site ; description 140-165 ; plus de 900 mots visibles ; pas de débordement mobile à 390 px.
