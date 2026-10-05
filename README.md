# SaaSbrief : site de niche SEO (une présentation SaaS par jour)

Site statique Astro. Le contenu = fichiers Markdown dans `src/content/reviews/`.

```bash
npm install
npm run dev                    # http://localhost:4321
npm run new -- "Nom de l'outil"  # crée le brouillon du jour
npm run build
```

1. Modifiez `src/config.ts` (nom, domaine, auteur, identifiant AdSense une fois approuvé).
2. Complétez le bloc `LEGAL` de `src/config.ts` (`npm run check:legal` liste les manques) et les TODO de `src/pages/about.astro`.
3. Suivez `docs/PLAYBOOK.md` pour la routine quotidienne.
4. Déployez sur Vercel (preset Astro).

Les brouillons (`draft: true`) et les articles datés dans le futur ne sont pas publiés.
