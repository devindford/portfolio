// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://devinford.dev',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('404')
    })
  ],
  compressHTML: true
});
