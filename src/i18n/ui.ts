export const LOCALES = ['ar', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'ar';

export const DIR: Record<Locale, 'rtl' | 'ltr'> = { ar: 'rtl', en: 'ltr' };
export const HTML_LANG: Record<Locale, string> = { ar: 'ar', en: 'en' };
export const LOCALE_NAME: Record<Locale, string> = { ar: 'العربية', en: 'English' };
export const OG_LOCALE: Record<Locale, string> = { ar: 'ar_QA', en: 'en_US' };

/** Verified personal details — sourced from the CV. Never edit to unverified values. */
export const SITE = {
  url: 'https://salahegla.com',
  email: 'salah.egla@gmail.com',
  phone: '+974 30606821',
  phoneHref: '+97430606821',
  linkedin: 'https://www.linkedin.com/in/salaheldeen-ijla/',
  linkedinLabel: 'linkedin.com/in/salaheldeen-ijla',
  nameAr: 'صلاح الدين مازن العجلة',
  nameEn: 'Salah Eldin Mazen Al-Ajla',
  cityAr: 'الدوحة، قطر',
  cityEn: 'Doha, Qatar',
  tagEn: 'Economic Research & Policy Insights',
} as const;

export const ui = {
  ar: {
    // --- navigation ---
    'nav.home': 'الرئيسية',
    'nav.about': 'من أنا',
    'nav.research': 'الأوراق البحثية',
    'nav.articles': 'المقالات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'تواصل معي',
    'nav.cta': 'تواصل معي',
    'nav.menu': 'القائمة',
    'nav.openMenu': 'فتح القائمة',
    'nav.closeMenu': 'إغلاق القائمة',
    'nav.skip': 'تخطَّ إلى المحتوى',
    'nav.lang': 'اللغة',
    'nav.switchTo': 'English',
    'nav.primary': 'التنقّل الرئيسي',

    // --- home ---
    'home.title': 'باحث اقتصادي — تمويل التنمية وتمويل المنشآت الصغيرة والمتوسطة',
    'home.desc':
      'باحث اقتصادي متخصّص في تمويل التنمية وتمويل المنشآت الصغيرة والمتوسطة. أوراق بحثية وتحليلات حول وصول التمويل والبنية المؤسسية للائتمان والسياسات الاقتصادية.',
    'home.eyebrow': 'باحث اقتصادي · تمويل التنمية والمنشآت الصغيرة والمتوسطة · الدوحة',
    'home.h1': 'أبحث في تمويل التنمية وتمويل المنشآت الصغيرة والمتوسطة',
    'home.sub':
      'أوراق بحثية وتحليلات مبنية على البيانات حول وصول التمويل إلى المنشآت الصغيرة والمتوسطة، والبنية المؤسسية للائتمان، والسياسات الاقتصادية في السياقين الخليجي والفلسطيني.',
    'home.cta1': 'تواصل معي',
    'home.cta2': 'استعرض الأوراق البحثية',
    'home.expertise.eyebrow': 'مجالات التخصّص',
    'home.expertise.h': 'أين أقدّم القيمة الأكبر',
    'home.articles.eyebrow': 'الأوراق البحثية',
    'home.articles.h': 'أحدث الأوراق',
    'home.articles.all': 'كل الأوراق البحثية',
    'home.projects.eyebrow': 'المشاريع',
    'home.projects.h': 'أطر عمل ونماذج تحليلية',
    'home.projects.all': 'كل المشاريع',
    'home.cv.h': 'السيرة الذاتية',
    'home.cv.p': 'المؤهّلات والخبرات والأوراق البحثية بشكل مفصّل.',
    'home.credentials.eyebrow': 'مؤشّرات موثّقة',
    'home.credentials.h': 'خلفية موثّقة بالسيرة الذاتية',
    'home.credentials.note': 'كل رقم هنا مأخوذ من السيرة الذاتية ويمكن التحقّق منه؛ ولا تُعرض أي أرقام تقديرية أو ترويجية.',

    // --- about ---
    'about.title': 'من أنا — السيرة المهنية والخبرات والأبحاث',
    'about.desc': 'السيرة المهنية والخبرات العملية والمؤهّلات الأكاديمية والأوراق البحثية ومنهجية العمل.',
    'about.h1': 'من أنا',
    'about.bio': 'نبذة مهنية',
    'about.expertise': 'مجالات الخبرة',
    'about.interests': 'الاهتمامات البحثية',
    'about.experience': 'الخبرات العملية',
    'about.education': 'المؤهّلات العلمية',
    'about.certs': 'الشهادات والدورات المهنية',
    'about.publications': 'الأبحاث والأوراق',
    'about.published': 'أوراق منشورة ومحكَّمة',
    'about.working': 'أوراق عمل غير منشورة',
    'about.method': 'منهجية العمل',
    'about.tools': 'الأدوات',
    'about.cta.h': 'مهتمّ بالتعاون البحثي؟',
    'about.cta.p': 'يسعدني التواصل بشأن الأوراق البحثية أو التعاون الأكاديمي.',

    // --- services ---

    // --- articles ---
    'articles.title': 'المقالات',
    'articles.desc': 'مقالات وأدلّة عملية ودراسات حالة في الاقتصاد والتمويل.',
    'articles.h1': 'المقالات',
    'articles.intro': 'مقالات وأدلّة عملية ودراسات حالة، بلغة أقرب للممارسة منها إلى الورقة الأكاديمية.',
    'research.title': 'الأوراق البحثية',
    'research.desc': 'أوراق بحثية محكَّمة وغير منشورة وموجزات سياسات في الاقتصاد والتمويل والتنمية.',
    'research.h1': 'الأوراق البحثية',
    'research.intro': 'أوراق محكَّمة ومنشورة، وأوراق عمل غير منشورة، وموجزات سياسات — كل ورقة بملخّص على الموقع ونصّها الكامل للتحميل.',
    'research.published': 'منشورة ومحكَّمة',
    'research.unpublished': 'غير منشورة',
    'research.backToAll': 'كل الأوراق البحثية',
    'research.empty': 'لا توجد أوراق مطابقة',
    'articles.search': 'ابحث في العناوين والملخّصات',
    'articles.searchLabel': 'بحث',
    'articles.filterCat': 'التصنيف',
    'articles.filterType': 'نوع المحتوى',
    'articles.all': 'الكل',
    'articles.results': 'نتيجة',
    'articles.resultsPlural': 'نتائج',
    'articles.empty': 'لا توجد نتائج مطابقة',
    'articles.emptyHint': 'جرّب كلمة بحث أخرى أو أعد ضبط عوامل التصفية.',
    'articles.reset': 'إعادة ضبط',
    'articles.featured': 'مميّز',
    'articles.readMore': 'اقرأ المقال',
    'articles.comingSoon': 'قيد الإعداد',
    'articles.comingSoonNote': 'هذا العمل قيد الإعداد ولم يُنشر بعد.',
    'articles.readingTime': 'دقيقة قراءة',
    'articles.published': 'تاريخ النشر',
    'articles.updated': 'آخر تحديث',
    'articles.author': 'الكاتب',
    'articles.toc': 'محتويات المقال',
    'articles.references': 'المراجع',
    'articles.share': 'مشاركة',
    'articles.copyLink': 'نسخ الرابط',
    'articles.copied': 'تم نسخ الرابط',
    'articles.print': 'طباعة',
    'articles.pdf': 'تحميل PDF',
    'articles.related': 'مقالات ذات صلة',
    'articles.backToAll': 'كل المقالات',
    'articles.noTranslation': 'هذه المادة متاحة بالعربية فقط حاليًا.',

    // --- projects ---
    'projects.title': 'المشاريع ودراسات الحالة',
    'projects.desc': 'أطر عمل ونماذج منهجية ودراسات حالة توضيحية في الجدوى والتحليل المالي.',
    'projects.h1': 'المشاريع ودراسات الحالة',
    'projects.intro': 'أطر عمل ونماذج منهجية توضّح طريقة التحليل والمخرجات.',
    'projects.sector': 'القطاع',
    'projects.type': 'نوع العمل',
    'projects.status': 'الحالة',
    'projects.question': 'السؤال أو المشكلة',
    'projects.methodology': 'المنهجية',
    'projects.scope': 'نطاق التحليل',
    'projects.tools': 'الأدوات المستخدمة',
    'projects.deliverables': 'المخرجات',
    'projects.value': 'القيمة المضافة',
    'projects.view': 'عرض التفاصيل',
    'projects.empty': 'لا توجد مشاريع منشورة بعد.',

    // --- consultation ---
    'contact.title': 'تواصل معي',
    'contact.desc': 'للتعاون البحثي أو الاستفسارات الأكاديمية أو طلبات التواصل المهني.',
    'contact.h1': 'تواصل معي',
    'contact.intro': 'للتعاون البحثي، أو مناقشة ورقة، أو أي استفسار مهني — املأ النموذج وسأعود إليك.',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.org': 'اسم الجهة أو المنشأة',
    'contact.country': 'الدولة',
    'contact.prefLang': 'لغة التواصل المفضّلة',
    'contact.subject': 'طبيعة التواصل',
    'contact.sector': 'القطاع',
    'contact.details': 'موضوع الرسالة',
    'contact.stage': 'مرحلة المشروع الحالية',
    'contact.timeframe': 'الإطار الزمني المتوقّع',
    'contact.channel': 'طريقة التواصل المفضّلة',
    'contact.consent': 'أوافق على استخدام بياناتي للردّ على طلبي فقط، وفق سياسة الخصوصية.',
    'contact.optional': 'اختياري',
    'contact.submit': 'إرسال الرسالة',
    'contact.sending': 'جارٍ الإرسال…',
    'contact.success': 'وصلتني رسالتك. سأعود إليك على البريد الذي أدخلته.',
    'contact.error': 'تعذّر الإرسال. يمكنك المراسلة مباشرة على البريد الإلكتروني.',
    'contact.reqField': 'هذا الحقل مطلوب.',
    'contact.reqEmail': 'أدخل بريدًا إلكترونيًا صحيحًا.',
    'contact.reqConsent': 'يلزم الموافقة للمتابعة.',
    'contact.direct': 'أو راسلني مباشرة',
    'contact.choose': '— اختر —',

    // --- newsletter / footer / misc ---
    'nl.h': 'النشرة البريدية',
    'nl.p': 'أحدث الأبحاث والتحليلات إلى بريدك.',
    'nl.email': 'بريدك الإلكتروني',
    'nl.submit': 'اشترك',
    'nl.success': 'تم تسجيل بريدك. شكرًا لك.',
    'foot.nav': 'روابط',
    'foot.contact': 'للتواصل',
    'foot.rights': 'جميع الحقوق محفوظة',
    'foot.privacy': 'سياسة الخصوصية',
    'foot.legalNote': 'هذا موقع مهني شخصي. المحتوى البحثي المعروض لأغراض معرفية ولا يُعدّ استشارة مالية أو قانونية مُلزِمة.',
    'cv.download': 'تحميل السيرة الذاتية',
    'cv.unavailable': 'ملف السيرة الذاتية غير مرفوع بعد',
    'crumb.home': 'الرئيسية',
    '404.h': 'الصفحة غير موجودة',
    '404.p': 'الرابط الذي فتحته غير صحيح أو أن الصفحة نُقلت.',
    '404.cta': 'العودة للرئيسية',
    'privacy.title': 'سياسة الخصوصية',
    'date.locale': 'ar',
  },

  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.research': 'Research Papers',
    'nav.articles': 'Articles',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cta': 'Get in touch',
    'nav.menu': 'Menu',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.skip': 'Skip to content',
    'nav.lang': 'Language',
    'nav.switchTo': 'العربية',
    'nav.primary': 'Primary navigation',

    'home.title': 'Economic Researcher — Development Finance and SME Finance',
    'home.desc':
      'Economic researcher specialising in development finance and SME finance. Research papers and analysis on access to finance, the institutional infrastructure of credit, and economic policy.',
    'home.eyebrow': 'Economic researcher · Development finance & SMEs · Doha',
    'home.h1': 'Research on development finance and SME finance',
    'home.sub':
      'Evidence-based research and analysis on how finance reaches small and medium-sized firms, the institutional infrastructure of credit, and economic policy in the Gulf and Palestinian contexts.',
    'home.cta1': 'Get in touch',
    'home.cta2': 'Explore the research',
    'home.expertise.eyebrow': 'Areas of focus',
    'home.expertise.h': 'Where I add the most value',
    'home.articles.eyebrow': 'Research papers',
    'home.articles.h': 'Latest papers',
    'home.articles.all': 'All research papers',
    'home.projects.eyebrow': 'Projects',
    'home.projects.h': 'Analytical frameworks and models',
    'home.projects.all': 'All projects',
    'home.cv.h': 'Curriculum Vitae',
    'home.cv.p': 'Qualifications, professional experience, and research output in detail.',
    'home.credentials.eyebrow': 'Verified indicators',
    'home.credentials.h': 'A background documented in the CV',
    'home.credentials.note': 'Every figure here is taken from the CV and can be verified; no estimated or promotional numbers are shown.',

    'about.title': 'About — Professional background, experience and research',
    'about.desc': 'Professional biography, work experience, academic qualifications, research output and working method.',
    'about.h1': 'About',
    'about.bio': 'Professional profile',
    'about.expertise': 'Areas of expertise',
    'about.interests': 'Research interests',
    'about.experience': 'Professional experience',
    'about.education': 'Education',
    'about.certs': 'Certifications and professional training',
    'about.publications': 'Research and papers',
    'about.published': 'Published, peer-reviewed',
    'about.working': 'Unpublished working papers',
    'about.method': 'How I work',
    'about.tools': 'Tools',
    'about.cta.h': 'Interested in research collaboration?',
    'about.cta.p': 'I would be glad to hear from you about papers or academic collaboration.',

    'articles.title': 'Articles',
    'articles.desc': 'Articles, practical guides and case studies on economics and finance.',
    'articles.h1': 'Articles',
    'articles.intro': 'Articles, practical guides and case studies — written closer to practice than to the academic paper.',
    'research.title': 'Research Papers',
    'research.desc': 'Peer-reviewed and unpublished research papers and policy briefs on economics, finance and development.',
    'research.h1': 'Research Papers',
    'research.intro': 'Peer-reviewed publications, unpublished working papers and policy briefs — each with a summary on the site and its full text available to download.',
    'research.published': 'Published & peer-reviewed',
    'research.unpublished': 'Unpublished',
    'research.backToAll': 'All research papers',
    'research.empty': 'No matching papers',
    'articles.search': 'Search titles and summaries',
    'articles.searchLabel': 'Search',
    'articles.filterCat': 'Category',
    'articles.filterType': 'Content type',
    'articles.all': 'All',
    'articles.results': 'result',
    'articles.resultsPlural': 'results',
    'articles.empty': 'No matching results',
    'articles.emptyHint': 'Try a different keyword or reset the filters.',
    'articles.reset': 'Reset',
    'articles.featured': 'Featured',
    'articles.readMore': 'Read the article',
    'articles.comingSoon': 'Coming soon',
    'articles.comingSoonNote': 'This work is in preparation and has not been published yet.',
    'articles.readingTime': 'min read',
    'articles.published': 'Published',
    'articles.updated': 'Updated',
    'articles.author': 'Author',
    'articles.toc': 'Contents',
    'articles.references': 'References',
    'articles.share': 'Share',
    'articles.copyLink': 'Copy link',
    'articles.copied': 'Link copied',
    'articles.print': 'Print',
    'articles.pdf': 'Download PDF',
    'articles.related': 'Related articles',
    'articles.backToAll': 'All articles',
    'articles.noTranslation': 'This item is currently available in Arabic only.',

    'projects.title': 'Projects & Case Studies',
    'projects.desc': 'Analytical frameworks, methodological models and illustrative case studies.',
    'projects.h1': 'Projects & Case Studies',
    'projects.intro': 'Analytical frameworks and methodological models showing how the analysis and deliverables work.',
    'projects.sector': 'Sector',
    'projects.type': 'Type',
    'projects.status': 'Status',
    'projects.question': 'Question or problem',
    'projects.methodology': 'Methodology',
    'projects.scope': 'Scope of analysis',
    'projects.tools': 'Tools used',
    'projects.deliverables': 'Deliverables',
    'projects.value': 'Added value',
    'projects.view': 'View details',
    'projects.empty': 'No projects published yet.',

    'contact.title': 'Contact',
    'contact.desc': 'For research collaboration, academic enquiries, or professional correspondence.',
    'contact.h1': 'Get in touch',
    'contact.intro': 'For research collaboration, to discuss a paper, or any professional enquiry — fill in the form and I will reply.',
    'contact.name': 'Full name',
    'contact.email': 'Email address',
    'contact.phone': 'Phone number',
    'contact.org': 'Organization',
    'contact.country': 'Country',
    'contact.prefLang': 'Preferred language',
    'contact.subject': 'Nature of enquiry',
    'contact.sector': 'Sector',
    'contact.details': 'Your message',
    'contact.stage': 'Current project stage',
    'contact.timeframe': 'Expected timeframe',
    'contact.channel': 'Preferred contact method',
    'contact.consent': 'I agree that my details may be used only to respond to this request, per the privacy policy.',
    'contact.optional': 'optional',
    'contact.submit': 'Send message',
    'contact.sending': 'Sending…',
    'contact.success': 'Your message has been received. I will reply to the email you provided.',
    'contact.error': 'Sending failed. You can email me directly instead.',
    'contact.reqField': 'This field is required.',
    'contact.reqEmail': 'Enter a valid email address.',
    'contact.reqConsent': 'Consent is required to continue.',
    'contact.direct': 'Or contact me directly',
    'contact.choose': '— Select —',

    'nl.h': 'Newsletter',
    'nl.p': 'New research and analysis, straight to your inbox.',
    'nl.email': 'Your email address',
    'nl.submit': 'Subscribe',
    'nl.success': 'Your email has been registered. Thank you.',
    'foot.nav': 'Links',
    'foot.contact': 'Contact',
    'foot.rights': 'All rights reserved',
    'foot.privacy': 'Privacy policy',
    'foot.legalNote': 'This is a personal professional website. The research published here is for informational purposes and does not constitute binding financial or legal advice.',
    'cv.download': 'Download CV',
    'cv.unavailable': 'CV file not uploaded yet',
    'crumb.home': 'Home',
    '404.h': 'Page not found',
    '404.p': 'The link you opened is incorrect, or the page has moved.',
    '404.cta': 'Back to home',
    'privacy.title': 'Privacy Policy',
    'date.locale': 'en',
  },
} as const;

export type UIKey = keyof (typeof ui)['ar'];

/** Translate a UI key for a locale, falling back to Arabic then to the key itself. */
export function useT(locale: Locale) {
  return function t(key: UIKey): string {
    return (ui[locale] as Record<string, string>)[key] ?? (ui.ar as Record<string, string>)[key] ?? key;
  };
}

/** Build a locale-prefixed path: rel('ar','about') -> '/ar/about' */
export function rel(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${locale}/${clean}` : `/${locale}/`;
}

/** Extract the locale from a pathname; defaults to Arabic. */
export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  return (LOCALES as readonly string[]).includes(seg) ? (seg as Locale) : DEFAULT_LOCALE;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'ar' ? 'en' : 'ar';
}

/** Format a date in the reader's language. */
export function fmtDate(d: Date | string, locale: Locale): string {
  const date = typeof d === 'string' ? new Date(d) : d;
  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/** Reading time from a Markdown body — Arabic and Latin aware. */
export function readingTime(body: string): number {
  const text = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!?\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/[#>*_`|\-]/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 180));
}
