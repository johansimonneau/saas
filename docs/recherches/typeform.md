# Typeform : dossier d'analyse (2026-10-20)

## Choix de l'outil
Le premier outil du backlog sans fiche ni branche était Revolut Business (#17). Son site officiel (revolut.com/fr-FR/business/) renvoie une page « Just a quick security check » (HTTP 403, `cf-mitigated: challenge`) à WebFetch, curl et Chromium : non consultable, non contourné. Passage à l'outil suivant, Typeform (#18).

## Sources consultées
### Site officiel (consulté au navigateur le 2026-10-20)
| URL | Ce qu'elle confirme |
|---|---|
| typeform.com/ | Positionnement « AI forms & automation » ; Intelligent Forms, Growth Flow, Research Flow ; « 48 millions de réponses par mois » (allégation éditeur) ; bouton « Get started, it's free » |
| typeform.com/pricing | Offres et prix en USD (annuel : Basic 28, Plus 56, Business 91, Growth Flow 266 ; mensuel après bascule : 39, 79, 129) ; quotas de réponses (100 / 1 000 / 10 000, maxima 750 / 2 500 / 50 000) ; sièges (1 / 3 / 5) ; Enterprise sur devis dès 6 utilisateurs, choix du centre de données US ou UE ; Growth Flow essai 14 jours ; plan « Free » mentionné |
| typeform.com/legal/privacy-policy | TYPEFORM, S.L., Via Augusta 29-31, 08006 Barcelone (Espagne) |

### Sources tierces (consultées le 2026-10-20)
| Titre | URL | Date | Ce qu'elle confirme |
|---|---|---|---|
| Capterra France, Typeform | https://www.capterra.fr/software/137289/typeform | page 2026 | 4,7/5 sur 984 avis, 96 % d'avis positifs ; avis récurrents : prise en main simple, mais coût élevé des fonctions avancées et volume de réponses limité selon l'offre |
| Jet Admin, Typeform Review 2026 | https://www.jetadmin.io/blog/typeform-review/ | 2026-09-30 | Recherche documentaire (pas de test), quotas partagés entre formulaires, tarifs identiques au site officiel, limites : prix, CRM, exports. Biais déclaré : éditeur d'un produit d'une autre catégorie |
| meetergo, Typeform tarif 2026 | https://meetergo.com/fr/blog/typeform-tarif | 2026-08-27 | Grille tarifaire identique à l'officielle, plafond de réponses sans dépassement payant, hébergement UE réservé à Enterprise. Biais : meetergo édite un concurrent |

Non consultables : G2 (403), Trustpilot (contrôle anti-robot), SaaSWorthy (403), hackceleration.com (403), appvizer.fr (erreur HTTP). Domaines concernés non contournés.

## Tarifs relevés le 2026-10-20 (USD, sans mention HT/TTC)
Basic 28 $/mois annuel (39 $ mensuel), Plus 56 $ (79 $), Business 91 $ (129 $), Growth Flow 266 $ annuel avec essai 14 jours, Enterprise sur devis. `priceValue` volontairement absent : la devise n'est pas l'euro.

## Limites relevées
Quotas de réponses mensuels et coût qui suit le volume ; tarif jugé élevé (avis d'utilisateurs) ; hébergement UE présenté pour Enterprise ; prix en dollars.

## À tester soi-même
Plan Free (limites réelles), consommation de quota sur un vrai formulaire, retrait de la marque, export des réponses, fonctionnement du RGPD et du lieu d'hébergement par défaut, affichage des prix en euros depuis la France.

## Questions à poser à l'auteur
Quel usage (leads, enquêtes, candidatures) ? Volume mensuel réel de réponses ? L'offre Plus suffit-elle ? Coût annuel réel en euros TTC ? Point agaçant ?

## Niveau de confiance
Élevé pour prix, offres, société (site officiel du jour). Moyen pour les retours d'utilisateurs : une source d'avis fiable (Capterra) et deux comparatifs dont les éditeurs ont un intérêt concurrent, déclaré.

## Points non vérifiés
- Détail du plan Free (10 réponses par mois selon meetergo, non lu sur le site officiel : écarté de la fiche).
- Conformité RGPD et hébergement par défaut (États-Unis selon meetergo, non confirmé par l'éditeur : écarté).
- Notes G2 et Trustpilot (sites non accessibles).
- Fiche non `editorial` : non indexée tant qu'un test n'est pas lié.
