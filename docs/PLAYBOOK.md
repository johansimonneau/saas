# Routine quotidienne : une présentation SaaS par jour

Objectif : 1 page publiée par jour, chacune avec une vraie contribution personnelle. Les systèmes de
Google (contenu utile) déclassent le texte IA générique produit en masse et récompensent l'expérience
visible. **L'IA rédige le brouillon, vous apportez la preuve.**

## Boucle quotidienne (45 à 60 min par article)

1. **Choisir l'outil** dans `docs/BACKLOG.md`. Privilégier : programme d'affiliation, volume de recherche
   sur « avis <outil> / prix / alternative », concurrence faible en autorité.
2. `npm run new -- "Nom de l'outil"` crée le brouillon.
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
