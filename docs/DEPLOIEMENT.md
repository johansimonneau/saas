# Mise en ligne sur Vercel

La connexion Vercel de cette session n'a pas la permission de créer un projet (erreur 403). Les 5 minutes ci-dessous sont à faire une fois dans le tableau de bord.

1. **Importer le projet** : vercel.com/new → importer `johansimonneau/saas` (preset Astro détecté, rien à changer). Installez l'app GitHub de Vercel si on vous le demande.
2. **Branche de production** : l'historique utile est sur `claude/quirky-planck-w6pv9l`. Fusionnez-la dans `main` (pull request) pour avoir une production ; chaque branche poussée a déjà son déploiement de prévisualisation.
3. **Domaine** : Settings → Domains → ajouter `saasbrief.fr` (à acheter d'abord chez un registrar ou sur Vercel). Vérifiez la disponibilité au moment de l'achat.
4. **Variables d'environnement** (Settings → Environment Variables, Production) :
   - `GITHUB_TOKEN` : jeton GitHub avec le droit « Issues » (lecture/écriture) limité au dépôt des soumissions.
   - `SUBMISSIONS_REPO` : `owner/repo` d'un dépôt **privé** (les issues contiennent l'e-mail du contact).
5. **Rebuild quotidien** (publication programmée) : Settings → Git → Deploy Hooks → créer un hook sur la branche `main`, puis le copier dans GitHub → Settings → Secrets → `VERCEL_DEPLOY_HOOK_URL`. Le workflow `.github/workflows/daily-rebuild.yml` le déclenche chaque jour (05:15 UTC).
6. **Après la mise en ligne** : mettre `SITE.url` à jour si le domaine change, soumettre `https://saasbrief.fr/sitemap-index.xml` dans Google Search Console, compléter `LEGAL.email` (`npm run check:legal`).

## Demandes « Je veux en savoir plus »
Elles partent directement par e-mail grâce à Web3Forms (clé publique `SITE.web3formsKey`, la même que sur le portfolio), sans variable d'environnement.
Dans le tableau de bord Web3Forms, ajoutez le domaine du site (saasbrief.fr et l'adresse `.vercel.app`) aux domaines autorisés pour limiter le spam. Le quota gratuit est partagé avec le portfolio.
