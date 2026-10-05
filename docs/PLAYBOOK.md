# Routine quotidienne : une présentation SaaS par jour

Objectif : 1 page publiée par jour, chacune avec une vraie contribution personnelle. Les systèmes de
Google (contenu utile) déclassent le texte IA générique produit en masse et récompensent l'expérience
visible. **L'IA rédige le brouillon, vous apportez la preuve.**

## Boucle quotidienne (45 à 60 min : 1 test + 1 fiche annuaire)

1. **Choisir l'outil** dans `docs/BACKLOG.md`. Privilégier : programme d'affiliation, volume de recherche
   sur « avis <outil> / prix / alternative », concurrence faible en autorité.
2. `npm run new -- "Nom de l'outil" --layout=verdict` crée le brouillon (voir « Varier les pages » plus bas).
3. **Recherche (10 min)** : ouvrez l'outil, créez un compte gratuit/essai, faites 3+ captures d'écran
   personnelles, copiez la page tarifs *du jour*, notez un point agaçant et un point convaincant.
4. **Brouillon IA (10 min)** : donnez à Claude le modèle + vos notes + les tarifs. Consigne : n'utiliser
   *que* vos faits, marquer TODO tout ce qui n'est pas vérifié. Jamais de fonctionnalité, prix ou
   statistique inventés.
5. **Votre expertise (15 min)** : remplissez `handsOn`, la section « Qui devrait passer son chemin »,
   votre verdict, les captures.
6. **Contrôle** : prix et fonctionnalités vérifiés, lien affilié ajouté, meta description 80-160
   caractères, `draft: false`, `npm run build` passe.
7. **Commit et push** : l'hébergeur (Vercel) déploie. Une `pubDate` future permet de programmer
   (rebuild quotidien par cron).

## Exigences qualité (non négociables)
- Ne jamais publier un outil que vous n'avez pas ouvert. Dites clairement ce que vous n'avez pas testé.
- Toujours au moins un point négatif et une section « à éviter si ».
- Revérifier les tarifs des pages principales tous les 90 jours ; renseigner `updatedDate`.
- Liens affiliés : `rel="sponsored"` (intégré) et mention de transparence en haut (intégrée).
  En France, la mention claire de l'affiliation est une obligation légale.

## Mix de contenus (pas 100 % d'avis sur un seul outil)
- 5 jours par semaine : présentation d'un outil (longue traîne : « avis <outil> », « prix <outil> »).
- Chaque semaine : 1 page « Meilleurs outils X pour Y » qui renvoie vers les avis. Ce sont elles qui rapportent.
- Chaque mois : 1 comparatif « A vs B » à partir de paires déjà testées.

## Ordre de monétisation
1. Affiliation (PartnerStack, Impact, Awin, programmes directs). Beaucoup de SaaS versent 20-40 % récurrents.
   Cela rapporte bien avant la publicité.
2. Publicité display : AdSense exige un vrai trafic et un site complet (À propos, transparence,
   politique de confidentialité, mentions légales, bandeau cookies/CMP en UE). Passage à Mediavine/Raptive
   aux seuils de trafic.
3. Capture d'emails plus tard.

## Publication programmée
Un article avec `pubDate` future reste masqué jusqu'à cette date. Ajoutez un Deploy Hook Vercel et un cron
quotidien (GitHub Actions `schedule`) pour reconstruire chaque matin : vous pouvez ainsi écrire en avance.

## Ligne éditoriale (à garder à chaque article)
Positionnement : média d'indépendants et de dirigeants de TPE, dans l'esprit d'independant.io et du
Blog du Dirigeant (conseils concrets entre pairs), avec une lecture « outil » façon BDM (tests, comparatifs, actualité).
- **Lecteur cible :** freelance, micro-entrepreneur, gérant de TPE de 1 à 10 personnes. Pas de grand compte.
- **Angle systématique :** coût réel annuel, temps gagné, courbe d'apprentissage, conformité française
  (facturation électronique, TVA, RGPD, hébergement UE quand c'est pertinent).
- **Voix :** celle d'un indépendant qui a utilisé l'outil, à la première personne, sans jargon.
  Le recul de consultant (conseil aux affaires) est l'atout E-E-A-T : montrez-le (cas d'usage clients, chiffres réels).
- **Priorité aux outils pratiques en France :** Qonto, Pennylane, Indy, Tiime, Brevo, Malt-adjacents, etc.
  (à vérifier outil par outil : programme d'affiliation et tarifs du jour).

## Varier les pages (anti contenu dupliqué)
Chaque test choisit une mise en page (`--layout=`) avec sa propre structure : `classique`, `verdict` (note géante + barres de scores),
`story` (récit en première personne), `duel` (tableau face-à-face, champ `versus`), `checklist` (prenez-le si / évitez-le si).
Règles : jamais deux mises en page identiques d'affilée, titres H2 différents, une accroche (`punchline`) unique,
captures et chiffres propres à l'article. Ne réutilisez pas de paragraphes d'un test à l'autre.

## Annuaire : modération des fiches
1. Un éditeur remplit `/soumettre/`. La fonction `api/submit.js` crée une issue GitHub (dépôt **privé**, car elle contient l'e-mail du contact).
   Variables Vercel : `GITHUB_TOKEN` (droit Issues), `SUBMISSIONS_REPO` (`owner/repo`).
2. L'issue contient le fichier prêt à coller dans `src/content/annuaire/<slug>.md` et une checklist de modération.
3. Vérifiez le site, réécrivez la description (jamais de copier-coller), passez `status: published`.
4. Fiche non enrichie = `noindex` automatique. Passez `editorial: true` après avoir ajouté votre contenu (test lié, avis, comparaison) pour l'indexer.
5. Pages de facettes (catégorie/profil/prix) avec moins de 3 éléments : `noindex` et absentes du sitemap, automatiquement.

## Blog
`npm run post -- "Titre"` crée un article depuis `src/content/blog/_modele-article.md`. Même charte graphique que le reste du site, avec une mise en page de lecture dédiée
(layout `blog/[...slug].astro`), sommaire, temps de lecture, encadré « l'essentiel en 30 s ». Rubriques : Guides, Comparatifs, Retours d'expérience, Stack et méthode, Actus.
Le blog vit sous `/blog/` ; son layout est autonome, il peut être déplacé sur un sous-domaine plus tard.

## Rubriques : ce qui va où
- **Tests** : avis sur un seul outil **et** comparatifs face à face (mise en page `duel`). C'est la rubrique principale, un contenu par jour.
- **Annuaire** : **une nouvelle fiche chaque jour** (`npm run tool -- "Nom" --category=Facturation`). Complétez avec les faits de la page officielle, ajoutez un lien vers votre test, puis `status: published`. Une fiche `editorial: true` est indexée.
- **Blog** : guides et retours d'expérience, hors tests d'outils (même charte que le site).

## Outils populaires (pied de page)
Le pied de page affiche 6 outils de l'annuaire. Tant qu'aucune fiche n'a de champ `popularity`, l'ordre est tiré au sort et change chaque jour au rebuild.
Quand vous aurez des statistiques (clics, pages vues), renseignez `popularity: 10` (plus haut = plus populaire) sur les fiches qui marchent : elles passent en tête.

## Anonymat de l'éditeur
Le nom propre n'apparaît que là où la loi l'impose : mentions légales et politique de confidentialité (bloc `LEGAL` de `src/config.ts`) et, pour le contact, les CGU.
Partout ailleurs la signature est `SITE.author` (« La rédaction SaaSbrief »). Ne tapez pas votre nom dans les articles.

## Liens vers les outils : règle « pas de lien direct sans affiliation »
Tant qu'un outil n'a pas de `affiliateUrl`, **aucune page ne renvoie vers son site** : le bouton devient un formulaire « Je veux en savoir plus »
(`src/components/ContactCTA.astro`) qui vous envoie « Quelqu'un souhaite en savoir plus sur [outil] ».
- Dès que vous avez un lien d'affiliation : renseignez `tool.affiliateUrl` (tests) ou `affiliateUrl` (fiches annuaire) : le bouton devient un lien sponsorisé automatiquement.
- Comparatif (`duel`) : `versus.affiliateUrl` pour le second outil ; un seul formulaire regroupe les outils sans lien.
- Fiche d'un éditeur qui a soumis son outil et que vous voulez lier directement : `directLink: true` (lien simple, sans mention d'affiliation).
- Les demandes arrivent **directement par e-mail** (Web3Forms, même mécanisme et même clé que le portfolio), avec le visiteur en « Répondre à ».

## Routines automatiques (Claude Code, dans « Routines »)
Elles ouvrent toujours une **pull request** : rien n'est publié sans que vous la fusionniez.

| Routine | Fréquence | Ce qu'elle fait |
|---|---|---|
| Analyse quotidienne d'un nouvel outil | tous les jours, 05:47 (Paris) | Prend le prochain outil du backlog, lit son site officiel et 3 sources fiables, prépare la fiche annuaire (`sources`, `verifiedOn`) et un dossier `docs/recherches/<outil>.md`. Fiche non indexée tant que vous n'avez pas ajouté votre test (`editorial: true`). |
| Top / Meilleurs / Comparatifs | tous les 3 jours (jours 1, 4, 7… du mois), 06:27 (Paris) | Rédige un classement sourcé pour le blog à partir de `docs/TOPICS.md` (critères publics et pondération affichés ; « Testé par la rédaction » seulement pour vos vrais tests). |
| Checkup SaaSbrief | le 1er et le 15 de chaque mois, 09:12 (Paris) | Audit sécurité, performance (Lighthouse), UX et mobile ; vérifie aussi les règles du site (pas de nom hors pages légales, pas de lien direct vers un outil, pas de texte provisoire) ; corrige le sûr et ouvre une PR. |

Pour modifier ou désactiver une routine : onglet Routines de Claude Code. Le portfolio a sa propre routine de checkup (hebdomadaire avec un rythme d'une semaine sur deux), indépendante de celles-ci.

**Réseau** : les sessions des routines utilisent la politique réseau de votre environnement. Si des domaines d'outils sont bloqués (message `EGRESS_BLOCKED`), la routine le signale et passe la fiche en `pending` ; pour qu'elle puisse lire les sites des outils, élargissez l'accès réseau de l'environnement.
