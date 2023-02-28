import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import astroI18next from 'astro-i18next';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://michaelmauricelee.github.io',

  integrations: [react(), astroI18next(), tailwind(), robotsTxt()],
});
