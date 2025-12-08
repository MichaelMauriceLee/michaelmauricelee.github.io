import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import robotsTxt from 'astro-robots-txt';

const ReactCompilerConfig = {};

export default defineConfig({
  site: 'https://michaelmauricelee.github.io',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },

  integrations: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
      },
    }),
    robotsTxt(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
