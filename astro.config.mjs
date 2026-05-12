import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

const isProd = process.env.CNAME === 'true';

export default defineConfig({
  site: 'https://cuss2.com',
  base: isProd ? '/' : '/cuss2.com',
  integrations: [vue(), sitemap()],
  output: 'static',
});
