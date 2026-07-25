import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../../i18n/ui';
import { sectionOf } from '../../content.config';

export function getStaticPaths() {
  return [{ params: { locale: 'ar' } }, { params: { locale: 'en' } }];
}

/**
 * RSS feed per language. This is what makes the newsletter automatic:
 * an RSS-to-email campaign (Buttondown / Mailchimp) watches this feed and
 * mails every newly published article to subscribers without manual work.
 */
export async function GET(context: APIContext) {
  const locale = context.params.locale as 'ar' | 'en';
  const articles = await getCollection(
    'articles',
    ({ data }) => data.locale === locale && data.status === 'published',
  );
  articles.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

  return rss({
    title:
      locale === 'ar'
        ? `${SITE.nameAr} — الأبحاث والمقالات`
        : `${SITE.nameEn} — Research & Articles`,
    description:
      locale === 'ar'
        ? 'أوراق بحثية ومقالات وتحليلات في الاقتصاد والتمويل والسياسات العامة.'
        : 'Research papers, articles and analysis across economics, finance and public policy.',
    site: context.site!,
    trailingSlash: false,
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.excerpt,
      pubDate: a.data.publishDate,
      link: `/${locale}/${sectionOf(a.data.contentType)}/${a.data.slug}`,
      ...(a.data.pdfUrl ? { enclosure: undefined } : {}),
    })),
    customData: `<language>${locale}</language>`,
  });
}
