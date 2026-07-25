import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeTableWrap from './plugins/rehype-table-wrap.mjs';

export default defineConfig({
  site: 'https://salahegla.com',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  markdown: {
    gfm: true,
    smartypants: false,
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { className: ['h-anchor'] } }],
      rehypeTableWrap,
    ],
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'ar', locales: { ar: 'ar', en: 'en' } },
    }),
  ],
  build: { inlineStylesheets: 'auto' },
});
