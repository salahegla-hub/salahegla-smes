import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';
import { sectionOf, type Section } from '../content.config';

type Article = CollectionEntry<'articles'>;
type Project = CollectionEntry<'projects'>;

/** Drafts and archived items never reach the public site. "coming-soon" is
 *  visible in archives but has no reading link — per brief §8.4. */
const isPublic = (status: string) => status === 'published' || status === 'coming-soon';
const isLive = (status: string) => status === 'published';

/* ---------------- Articles ---------------- */

export async function getArticles(locale: Locale, { includeComingSoon = true, section }: { includeComingSoon?: boolean; section?: Section } = {}) {
  const all = await getCollection('articles', ({ data }) => {
    if (data.locale !== locale) return false;
    if (section && sectionOf(data.contentType) !== section) return false;
    return includeComingSoon ? isPublic(data.status) : isLive(data.status);
  });
  return all.sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
  });
}

/** Only entries that render their own page (coming-soon items have no page). */
export async function getRenderableArticles(locale?: Locale) {
  return getCollection('articles', ({ data }) => isLive(data.status) && (!locale || data.locale === locale));
}

export async function getArticleByKey(translationKey: string, locale: Locale) {
  const all = await getCollection('articles', ({ data }) => data.translationKey === translationKey && data.locale === locale && isPublic(data.status));
  return all[0];
}

/* ---------------- Projects ---------------- */

export async function getProjects(locale: Locale) {
  const all = await getCollection('projects', ({ data }) => data.locale === locale && isPublic(data.status));
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getRenderableProjects(locale?: Locale) {
  return getCollection('projects', ({ data }) => isLive(data.status) && (!locale || data.locale === locale));
}

/* ---------------- Cross-language linking ---------------- */

/** Does a translation of this item exist and is it public? Used by the
 *  language switcher so it never points at a 404 (brief §4). */
export async function hasTranslation(
  collection: 'articles' | 'projects',
  translationKey: string,
  locale: Locale,
): Promise<boolean> {
  const all = await getCollection(collection as 'articles');
  return all.some((e: any) => e.data.translationKey === translationKey && e.data.locale === locale && isLive(e.data.status));
}

export async function translatedSlug(
  collection: 'articles' | 'projects',
  translationKey: string,
  locale: Locale,
): Promise<string | null> {
  const all = await getCollection(collection as 'articles');
  const hit = all.find((e: any) => e.data.translationKey === translationKey && e.data.locale === locale && isLive(e.data.status));
  return hit ? (hit.data as any).slug : null;
}

/* ---------------- Related content ---------------- */

export async function resolveRelatedArticles(keys: string[], locale: Locale, excludeKey?: string) {
  if (!keys.length) return [] as Article[];
  const all = await getCollection('articles', ({ data }) => data.locale === locale && isLive(data.status));
  return keys
    .filter((k) => k !== excludeKey)
    .map((k) => all.find((e) => e.data.translationKey === k))
    .filter(Boolean) as Article[];
}

export async function resolveRelatedProjects(keys: string[], locale: Locale) {
  if (!keys.length) return [] as Project[];
  const all = await getCollection('projects', ({ data }) => data.locale === locale && isLive(data.status));
  return keys.map((k) => all.find((e) => e.data.translationKey === k)).filter(Boolean) as Project[];
}

export type { Article, Project };
