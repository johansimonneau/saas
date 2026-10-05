# Routine quotidienne : une présentation SaaS par jour

Objectif : 1 page publiée par jour, chacune avec une vraie contribution personnelle. Les systèmes de
Google (contenu utile) déclassent le texte IA générique produit en masse et récompensent l'expérience
visible. **L'IA rédige le brouillon, vous apportez la preuve.**

## Boucle quotidienne (45 à 60 min par article)

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
