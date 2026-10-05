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

## Recevoir les demandes « Je veux en savoir plus » par e-mail (optionnel)
Sans réglage supplémentaire, chaque demande crée une issue (étiquette `contact`) dans le dépôt privé `SUBMISSIONS_REPO`.
Pour la recevoir directement par e-mail :
1. Créez un compte sur resend.com et une clé d'API (« Sending access »).
2. Dans Vercel → Settings → Environment Variables, ajoutez `RESEND_API_KEY` (la clé, type Sensitive) et `CONTACT_TO_EMAIL` (votre adresse de réception).
3. Sans domaine vérifié, Resend n'envoie qu'à l'adresse du compte Resend, avec l'expéditeur `onboarding@resend.dev`. Une fois `saasbrief.fr` vérifié chez Resend, ajoutez `CONTACT_FROM` (ex. `SaaSbrief <contact@saasbrief.fr>`).
4. Redéployez. Si l'e-mail échoue, la demande retombe automatiquement dans une issue : rien n'est perdu.
