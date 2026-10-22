import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config.ts';

// Domaines tiers autorisés uniquement s'ils sont activés dans src/config.ts.
const ads = SITE.adsensePublisherId ? ['https://pagead2.googlesyndication.com', 'https://*.googlesyndication.com', 'https://*.doubleclick.net', 'https://*.google.com'] : [];
const stats = SITE.analyticsDomain ? ['https://plausible.io'] : [];

export default defineConfig({
  site: SITE.url,
  integrations: [sitemap()],
  // CSP générée au build : chaque script/style inline est autorisé par son empreinte (hash) exacte,
  // tout script injecté (XSS) est donc bloqué par le navigateur.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data: https:",
        "font-src 'self'",
        `connect-src 'self' https://api.web3forms.com ${[...ads, ...stats].join(' ')}`.trim(),
        `frame-src ${ads.length ? ads.join(' ') : "'none'"}`,
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        'upgrade-insecure-requests',
      ],
      scriptDirective: { resources: ["'self'", ...ads, ...stats] },
      // Attributs style="" (largeur des barres, couleur d'accent) : sans risque d'exécution de code.
      styleDirective: { resources: ["'self'", { resource: "'unsafe-inline'", kind: 'attribute' }] },
    },
  },
});
