# Ringover : dossier d'analyse (2026-11-15)

## Choix de l'outil
Backlog épuisé hors Revolut Business, Make et Abby : leurs sites officiels répondent toujours 403 au navigateur le 2026-11-15 (protection anti-robot), non consultables sans contournement, donc non livrés. Deux candidats hors backlog écartés le même jour :
- **Zervant** : site consulté, mais sa page tarifs annonce que « Shine Facture » lui « succède progressivement » et ses conditions générales sont désormais celles de Shine. Outil en fin de vie, et Shine a déjà une fiche proposée.
- **noCRM** : site consulté, mais les prix ne s'affichent qu'en dollars depuis cet environnement (tarification selon l'adresse IP). Prix en euros non vérifiables, fiche non livrée.

Ringover retenu : éditeur français (Montrouge), tarifs publics en euros HT, besoin courant des TPE (numéro professionnel, standard téléphonique), très présent dans les recherches « téléphonie cloud ». Catégorie « Support client » faute de catégorie Téléphonie.

## Sources consultées
### Site officiel (navigateur Chromium, locale fr-FR, 2026-11-15)
| URL | Ce qu'elle confirme |
|---|---|
| ringover.fr/ | Positionnement (« plateforme de communication IA pour les commerciaux »), téléphonie d'entreprise, standard activé en moins de 5 minutes, « 4.3/5 parmi + de 14 000 clients » |
| ringover.fr/tarifs | Offres TALK, BUSINESS, UNIFIED, ENTERPRISE ; prix annuel et mensuel ; engagement 12 mois ; 3 utilisateurs minimum (50 pour ENTERPRISE) ; contenu de chaque offre ; add-ons ; tableau comparatif ; FAQ (essai 7 jours, appels illimités, RGPD et hébergement en France, portabilité, matériel, SMS, renvoi d'appel) ; renvoi des créateurs d'entreprise vers Quicktalk ; mentions de pied de page (raison sociale, RCS, siège) |
| ringover.fr/informations-legales | Centre légal : mentions légales, RGPD et sécurité, accord de traitement des données (DPA), CGV |
| ringover.fr/securite | Disponibilité 99,95 %, chiffrement des appels (DTLS-SRTP), API en HTTPS, conformité RGPD déclarée, 17 centres de données dans le monde dont 5 en France |
| ringover.fr/qui-sommes-nous | Débuts en 2005, lancement de Ringover en 2018, levées de 10 M€ (2021) et 20 M€ (2023), +10 000 clients, +330 collaborateurs, 4 bureaux, +100 intégrations, trois cofondateurs |

### Sources tierces (consultées le 2026-11-15)
| Titre | URL | Date | Ce qu'elle confirme |
|---|---|---|---|
| Annuaire des Entreprises (État), via l'API Recherche d'entreprises | https://recherche-entreprises.api.gouv.fr/search?q=480234210 | consultée le 2026-11-15 | BJT PARTNERS (BJT PARTNERS - RINGOVER GROUP), SIREN 480 234 210, créée le 2005-01-01, active, siège 8 rue François Ory 92120 Montrouge, NAF 61.10Z, catégorie PME, tranche d'effectif 250 à 499, SAS ; président Jean-Samuel Najnudel, directeur général Ludovic Rateau |
| Le Monde Informatique, « Le spécialiste de la relation client Ringover lève 20 M€ » | https://www.lemondeinformatique.fr/actualites/lire-le-specialiste-de-la-relation-client-ringover-leve-20-meteuro-90655.html | 7 juin 2023 | Série B de 20 M€ (Orange Ventures, Bpifrance Large Venture, Expedition Growth Capital), 10 M€ en 2021, opérateur télécom depuis 2005, 10 000 clients, près de 300 salariés, éditeur français |
| Trustpilot, avis sur Ringover | https://fr.trustpilot.com/review/ringover.com | consultée le 2026-11-15 | 3,9/5 sur 1 098 avis (155 sur 12 mois) : 69 % de 5 étoiles, 11 % de 4, 1 % de 3, 2 % de 2, 17 % de 1. Positifs : simplicité, intégrations CRM (Pipedrive), support réactif. Négatifs : service client, fiabilité de l'application, résiliation et portabilité sortante, frais de portabilité cités par un avis |

Complément concordant non retenu dans `sources` : Maddyness, article du 7 juin 2023 sur la même levée (mêmes chiffres, logiciel créé en 2018, trois cofondateurs). Inaccessibles : Capterra France et GetApp (403), Appvizer (connexion interrompue), page web annuaire-entreprises.data.gouv.fr (vide ; l'API publique du même service a répondu). Aucun domaine bloqué par la politique réseau.

## Tarifs relevés le 2026-11-15 (€ HT par utilisateur et par mois)
| Offre | Paiement annuel | Paiement mensuel | Minimum | Engagement affiché |
|---|---|---|---|---|
| TALK | 19 | 29 | 3 utilisateurs | 12 mois |
| BUSINESS (« Le plus populaire ») | 49 | 69 | 3 utilisateurs | 12 mois |
| UNIFIED | 69 | 89 | 3 utilisateurs | 12 mois |
| ENTERPRISE | sur demande | | 50 utilisateurs | |

Add-ons affichés : ligne individuelle + 10 € (TALK), campagnes + 10 €, forfait mobile à partir de 10 €, numéro mobile + 5 € (BUSINESS et au-delà), par utilisateur et par mois. Essai : 7 jours, 5 utilisateurs, 5 numéros, 5 heures sortantes, 5 € de crédit ; sans numéros mobiles, SMS ni WhatsApp.

## Limites relevées
Minimum de 3 utilisateurs ; engagement 12 mois ; TALK limité à un numéro partagé, aux appels nationaux et aux applications web et mobile ; intégrations et statistiques avancées à partir de BUSINESS ; SMS sortants, hors forfait, renvois externes, mobile et campagnes en supplément ; une part notable d'avis d'utilisateurs très négatifs (service client, résiliation, portabilité sortante).

## Points non vérifiés
- La mention « Engagement 12 mois » reste affichée quand on bascule sur le paiement mensuel : la fiche reprend l'affichage tel quel, sans affirmer qu'une offre sans engagement existe.
- Hébergement : la FAQ tarifs annonce des données hébergées en France, la page sécurité cite 17 centres de données dans le monde (dont 5 en France) et le Privacy Shield. La fiche reprend la formulation de la FAQ en l'attribuant à Ringover.
- Nombre de clients : « +10 000 » (page À propos) et « + de 14 000 » (accueil, sécurité). La fiche retient « plus de 10 000 » en l'attribuant à l'éditeur.
- Note Trustpilot rattachée au domaine ringover.com (groupe) et non au seul site français.
- `alternatives` pointe vers `crisp`, fiche proposée mais non fusionnée : elle s'affichera après fusion.
- Le prompt de la routine demande la mention « Pas encore testé par la rédaction » ; `docs/STANDARD-FICHE.md` l'interdit. Le standard a été suivi.

## À tester soi-même
Ouverture d'un essai, configuration du standard (horaires, message d'accueil), qualité des appels sur mobile et ordinateur, résumés d'appels par IA, connexion à un CRM (BUSINESS), réactivité du support en français, conditions réelles d'engagement et de résiliation dans le contrat.

## Questions à poser à l'auteur
Offre testée et nombre d'utilisateurs ? Paiement mensuel ou annuel, et l'engagement de 12 mois s'applique-t-il aux deux ? Portabilité d'un numéro existant effectuée ? Quels suppléments apparaissent sur la facture (SMS, hors forfait) ? Une catégorie « Téléphonie » est-elle souhaitée dans l'annuaire ?

## Niveau de confiance
Élevé pour les prix, les offres et la société (site officiel du jour, recoupé par le registre et la presse). Moyen pour les retours d'utilisateurs (une seule plateforme d'avis accessible, avis polarisés).
