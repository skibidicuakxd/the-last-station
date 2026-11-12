import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// El dominio de producción se puede sobreescribir con SITE_URL en Vercel.
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://the-last-station.vercel.app');

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
