import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://elevationai.github.io/cuss2.com',
  base: '/cuss2.com',
  integrations: [vue(), sitemap()],
  output: 'static',
});
