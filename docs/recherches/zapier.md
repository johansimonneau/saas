# Zapier : dossier d'analyse (2026-10-25)

## Choix de l'outil
Revolut Business (backlog n° 17) était le premier candidat sans fiche : son site officiel renvoie un défi anti-bot Cloudflare (HTTP 403, « Just a moment ») à curl, WebFetch et Chromium. Aucun contournement tenté ; passage à Zapier (n° 22).

## Sources consultées
### Site officiel (Chromium + WebFetch, 2026-10-25)
| URL | Ce qu'elle confirme |
|---|---|
| zapier.com/fr/ | Positionnement « automatisation à l'ère agentique » ; Zapier MCP (9 000+ applications, 230+ outils d'IA) ; Next Gen Zaps en accès anticipé ; SOC 2 Type II, SOC 3, RGPD, CCPA |
| zapier.com/fr/pricing (et /pricing) | Free 0 $ (100 tâches/mois, Zaps à deux étapes) ; Professional dès 19,99 $/mois en annuel, 29,99 $ en mensuel (bascule vérifiée dans le navigateur) ; Team dès 69 $/mois ; Enterprise sur devis ; remise annuelle de 33 % ; add-ons Agents et Chatbots ; prix en USD |
| zapier.com/legal/terms-of-service | Zapier, Inc., société du Delaware, San Francisco (CA) |

### Sources tierces
| Titre | URL | Date | Ce qu'elle confirme |
|---|---|---|---|
| Trustpilot, avis Zapier | https://fr.trustpilot.com/review/zapier.com | consultée le 2026-10-25 (avis du 2020-04-20 au 2026-05-15) | TrustScore 1,3/5, 325 avis, 75 % à 1 étoile ; thèmes : facturation après résiliation, remboursements refusés, support injoignable, bugs et coût |
| Digidop, fiche Zapier | https://www.digidop.com/fr/tools/zapier | 2025-09-03 | Coût par tâche jugé plus élevé que Make/Pabbly ; plan gratuit limité (100 tâches, 2 étapes) ; alternatives Make, Pabbly Connect, Power Automate ; interface accessible |
| Le Blog du Dirigeant, Zapier | https://www.leblogdudirigeant.com/zapier-outil-automatisation-taches/ | non datée | Freemium, prise en main rapide, limites (prix qui monte vite, applications premium absentes du gratuit). Ses tarifs sont obsolètes (anciennes offres Starter/Company), non repris. |

Domaines bloqués (403) : capterra.fr, getapp.fr, g2.com, leptidigital.fr, business.revolut.com. Joinsecret : aucun avis.

## Tarifs relevés le 2026-10-25 (USD, facturation annuelle sauf mention)
Free 0 $ · Professional dès 19,99 $ (29,99 $ mensuel) pour 750 tâches · 49 $ pour 2 000 tâches (page tarifs, WebFetch) · Team dès 69 $ pour 2 000 tâches · Enterprise sur devis. Mention HT/TTC absente de la page : `priceValue` non renseigné pour les offres payantes (le schéma attend des euros HT).

## Limites relevées
Coût par tâche élevé face à Make/Pabbly ; gratuit limité ; prix en dollars ; avis Trustpilot très négatifs sur facturation et support.

## À tester soi-même
Création d'un Zap à deux étapes en Free, consommation réelle de tâches, annulation/rétrogradation et facturation, délai du support, interface en français, comparaison de coût avec Make.

## Questions à poser à l'auteur
Quels outils relier ? Combien de tâches par mois en pratique ? Expérience de la résiliation ? Make a-t-il suffi ?

## Niveau de confiance
Élevé pour offres, prix et société (site officiel du jour). Moyen pour les retours : Trustpilot (avis spontanés, polarisés), un test d'agence, un article non daté.

## Points non vérifiés
Essai de 14 jours (indiqué par la FAQ de la page tarifs, repliée, lue via WebFetch) ; localisation d'hébergement des données et DPA ; fonctionnement de l'interface en français ; support par chat selon palier. Fiche non `editorial`.
