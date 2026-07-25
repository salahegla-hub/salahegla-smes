import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* ============================================================
   CONTENT MODEL  (the "CMS" schema)
   Files live at  src/content/<collection>/<locale>/<slug>.md
   The folder name IS the locale, so a file's language is never
   guessed. `translationKey` links the ar/en versions of one item.
   Zod validates every field at build time — a typo in frontmatter
   fails the build instead of silently shipping a broken page.
   ============================================================ */

const LOCALE = z.enum(['ar', 'en']);

/** The glob loader's default id drops the folder, so ar/x.md and en/x.md would
 *  collide on the id "x" and silently overwrite each other. Keep the locale
 *  folder in the id so every entry stays unique. */
const localeId = ({ entry }: { entry: string }) => entry.replace(/\.md$/, '');

export const CATEGORIES = [
  'development-economics',
  'public-administration',
  'economics-policy',
  'sme-finance',
  'financial-credit-analysis',
  'feasibility-investment',
  'development-gulf',
  'energy-markets',
] as const;

export const CONTENT_TYPES = [
  'article',
  'research-paper',
  'working-paper',
  'policy-brief',
  'economic-analysis',
  'guide',
  'case-study',
  'presentation',
  'critical-reading',
] as const;


/** Three public sections: research papers, articles, and critical readings.
 *  Derived from contentType so existing entries need no frontmatter change.
 *  NOTE: 'articles' stays the fallback, so any future type added without
 *  being listed below lands there rather than breaking the build. */
export const RESEARCH_TYPES = ['research-paper', 'working-paper', 'policy-brief', 'economic-analysis', 'presentation'] as const;
export const ARTICLE_TYPES = ['article', 'guide', 'case-study'] as const;
export const READING_TYPES = ['critical-reading'] as const;
export type Section = 'research' | 'articles' | 'readings';
export const sectionOf = (t: string): Section => {
  if ((RESEARCH_TYPES as readonly string[]).includes(t)) return 'research';
  if ((READING_TYPES as readonly string[]).includes(t)) return 'readings';
  return 'articles';
};

export const STATUSES = ['published', 'draft', 'coming-soon', 'archived'] as const;

/** Display labels for taxonomy values, in both languages. */
export const CATEGORY_LABELS: Record<(typeof CATEGORIES)[number], { ar: string; en: string }> = {
  'development-economics': { ar: 'اقتصاديات التنمية', en: 'Development Economics' },
  'public-administration': { ar: 'الإدارة العامة', en: 'Public Administration' },
  'economics-policy': { ar: 'الاقتصاد والسياسات العامة', en: 'Economics & Public Policy' },
  'sme-finance': { ar: 'تمويل المنشآت الصغيرة والمتوسطة', en: 'SME Finance' },
  'financial-credit-analysis': { ar: 'التحليل المالي والائتماني', en: 'Financial & Credit Analysis' },
  'feasibility-investment': { ar: 'دراسات الجدوى والاستثمار', en: 'Feasibility Studies & Investment' },
  'development-gulf': { ar: 'التنمية واقتصادات الخليج', en: 'Development & Gulf Economies' },
  'energy-markets': { ar: 'الطاقة والأسواق', en: 'Energy & Markets' },
};

export const TYPE_LABELS: Record<(typeof CONTENT_TYPES)[number], { ar: string; en: string }> = {
  article: { ar: 'مقال', en: 'Article' },
  'research-paper': { ar: 'ورقة بحثية', en: 'Research Paper' },
  'working-paper': { ar: 'ورقة عمل', en: 'Working Paper' },
  'policy-brief': { ar: 'موجز سياسات', en: 'Policy Brief' },
  'economic-analysis': { ar: 'تحليل اقتصادي', en: 'Economic Analysis' },
  guide: { ar: 'دليل عملي', en: 'Guide' },
  'case-study': { ar: 'دراسة حالة', en: 'Case Study' },
  presentation: { ar: 'عرض تقديمي', en: 'Presentation' },
  'critical-reading': { ar: 'قراءة نقدية', en: 'Critical Reading' },
};

/** Optional badge shown on a card, e.g. peer-reviewed. Only set when true. */
export const REVIEW_LABELS = {
  'peer-reviewed': { ar: 'محكَّم ومنشور', en: 'Peer-reviewed' },
} as const;

const seo = {
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  canonicalUrl: z.string().url().optional(),
};

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles', generateId: localeId }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    slug: z.string(),
    locale: LOCALE,
    translationKey: z.string(),
    excerpt: z.string(),
    category: z.enum(CATEGORIES),
    tags: z.array(z.string()).default([]),
    contentType: z.enum(CONTENT_TYPES).default('article'),
    status: z.enum(STATUSES).default('draft'),
    peerReviewed: z.boolean().default(false),
    /** Where a published version lives (journal, institution). Free text — never fabricate. */
    publishedIn: z.string().optional(),
    author: z.string().default('صلاح الدين مازن العجلة'),
    publishDate: z.coerce.date(),
    /** Shown instead of the formatted date when only the year is known —
     *  avoids printing an invented month. */
    displayDate: z.string().optional(),
    updatedDate: z.coerce.date().optional(),
    coverImage: z.string().optional(),
    coverImageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    pdfUrl: z.string().optional(),
    /** External link when the full text lives elsewhere (e.g. a journal). */
    externalUrl: z.string().url().optional(),
    /** For critical readings only: the work being read, and where to find it.
     *  Kept separate from `externalUrl` so a reading never looks as though the
     *  source paper were the author's own published work. */
    sourceCitation: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    references: z.array(z.string()).default([]),
    relatedArticles: z.array(z.string()).default([]), // translationKeys
    ...seo,
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects', generateId: localeId }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    locale: LOCALE,
    translationKey: z.string(),
    summary: z.string(),
    sector: z.string(),
    projectType: z.string(),
    /** Honest framing — never imply a completed client engagement. */
    engagement: z
      .enum(['analytical-framework', 'methodological-model', 'research-concept', 'illustrative-case-study'])
      .default('analytical-framework'),
    status: z.enum(STATUSES).default('draft'),
    question: z.string().optional(),
    methodology: z.array(z.string()).default([]),
    scope: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    deliverables: z.array(z.string()).default([]),
    value: z.string().optional(),
    order: z.number().default(50),
    relatedArticles: z.array(z.string()).default([]),
    ...seo,
  }),
});

export const collections = { articles, projects };

export const ENGAGEMENT_LABELS = {
  'analytical-framework': { ar: 'إطار تحليلي', en: 'Analytical framework' },
  'methodological-model': { ar: 'نموذج منهجي', en: 'Methodological model' },
  'research-concept': { ar: 'تصوّر بحثي', en: 'Research concept' },
  'illustrative-case-study': { ar: 'دراسة حالة توضيحية', en: 'Illustrative case study' },
} as const;
