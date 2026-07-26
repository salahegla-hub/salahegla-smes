/* ============================================================
   VERIFIED PROFILE DATA
   Every entry below is transcribed from the author's own CV files.
   Nothing here may be added, rounded up or embellished without a
   source in those documents. (Brief §3, §8.2, §17.)
   ============================================================ */

export interface Bi {
  ar: string;
  en: string;
}
export interface Role {
  period: Bi;
  title: Bi;
  org: Bi;
  points: Bi[];
}

export const EDUCATION: { period: Bi; degree: Bi; org: Bi; note?: Bi }[] = [
  {
    period: { ar: '2024 — حتى الآن', en: '2024 — present' },
    degree: { ar: 'دكتوراه في اقتصاديات التنمية', en: 'PhD in Development Economics' },
    org: { ar: 'معهد الدوحة للدراسات العليا — قطر', en: 'Doha Institute for Graduate Studies — Qatar' },
  },
  {
    period: { ar: '2020 — 2022', en: '2020 — 2022' },
    degree: { ar: 'ماجستير في اقتصاديات التنمية', en: 'MA in Development Economics' },
    org: { ar: 'معهد الدوحة للدراسات العليا — قطر', en: 'Doha Institute for Graduate Studies — Qatar' },
    note: { ar: 'التقدير: 3.61 — جدارة', en: 'GPA 3.61 — with merit' },
  },
  {
    period: { ar: '2010 — 2014', en: '2010 — 2014' },
    degree: { ar: 'بكالوريوس اقتصاد', en: 'BA in Economics' },
    org: { ar: 'جامعة الأزهر — كلية الاقتصاد والعلوم الإدارية — غزة', en: 'Al-Azhar University — Faculty of Economics and Administrative Sciences — Gaza' },
    note: { ar: 'التقدير: 93.05% — امتياز مع مرتبة الشرف، والأول على الدفعة لثمانية فصول دراسية متتالية', en: '93.05% — excellent with first-class honours; ranked 1st in class for eight consecutive semesters' },
  },
];

export const EXPERIENCE: Role[] = [
  {
    period: { ar: 'مايو 2025 — حتى الآن', en: 'May 2025 — present' },
    title: { ar: 'باحث إحصائي — قسم التقييم والجودة', en: 'Statistical Researcher — Evaluation & Quality Department' },
    org: { ar: 'جهة حكومية — الدوحة، قطر', en: 'A government entity — Doha, Qatar' },
    points: [
      { ar: 'إدارة مشروع فريق قياس مؤشرات الأداء الرئيسية للإدارات، بما يدعم ثقافة الأداء واتخاذ القرار المبني على البيانات.', en: 'Led the project team measuring departmental key performance indicators, supporting a performance culture and data-driven decision-making.' },
      { ar: 'إدارة مشروع فريق تصميم سياسات وعمليات الموارد البشرية لضمان الحوكمة.', en: 'Led the team designing HR policies and processes to strengthen governance.' },
      { ar: 'إعداد تقارير أداء شهرية لتقييم سير العمل والكفاءة التشغيلية.', en: 'Prepared monthly performance reports assessing workflow and operational efficiency.' },
      { ar: 'إعداد دراسات بحثية وإحصائية مقارنة مع مؤسسات مماثلة.', en: 'Produced comparative research and statistical studies benchmarked against similar institutions.' },
    ],
  },
  {
    period: { ar: 'سبتمبر 2024 — حتى الآن', en: 'September 2024 — present' },
    title: { ar: 'وحدة العمل الكمّي (دوام جزئي)', en: 'Quantitative Work Unit (part-time)' },
    org: { ar: 'معهد الدوحة للدراسات العليا — قطر', en: 'Doha Institute for Graduate Studies — Qatar' },
    points: [
      { ar: 'تدريب طلبة الدكتوراه والماجستير على المهارات البحثية الكمّية والإحصائية عبر STATA.', en: 'Trained PhD and MA students in quantitative and statistical research skills using STATA.' },
      { ar: 'إعداد محاضرات تدريبية في النظريات الاقتصادية لطلبة الماجستير.', en: 'Prepared teaching sessions on economic theory for MA students.' },
    ],
  },
  {
    period: { ar: 'يناير 2025 — مايو 2025', en: 'January 2025 — May 2025' },
    title: { ar: 'متعاون — قسم المشاريع والاستشارات', en: 'Associate — Projects & Consulting Department' },
    org: { ar: 'مركز الامتياز للتدريب والاستشارات — قطر', en: 'Excellence Centre for Training and Consulting — Qatar' },
    points: [
      { ar: 'المساهمة في إعداد الدراسات البحثية والتنسيق مع الجهات العاملة.', en: 'Contributed to research studies and coordination with partner entities.' },
      { ar: 'متابعة مراحل المشاريع وإعداد موازناتها والخطط الاستراتيجية ومؤشرات الأداء.', en: 'Tracked project phases and prepared budgets, strategic plans and performance indicators.' },
    ],
  },
  {
    period: { ar: '2015 — 2024', en: '2015 — 2024' },
    title: { ar: 'مسؤول تمويل وائتمان المنشآت الصغيرة والمتوسطة', en: 'SME & Credit Officer' },
    org: { ar: 'الشركة الفلسطينية للإقراض والتنمية «فاتن» — غزة، فلسطين', en: 'Palestine for Credit and Development “FATEN” — Gaza, Palestine' },
    points: [
      { ar: 'إدارة محفظة إقراض للمنشآت الصغيرة والمتوسطة بقيمة 10 ملايين دولار، وإعداد أكثر من 140 تحليلًا ائتمانيًا وماليًا، خصوصًا في القطاعين الصناعي والزراعي.', en: 'Managed a US$10 million SME lending portfolio and delivered 140+ credit and financial analyses, primarily in the industrial and agricultural sectors.' },
      { ar: 'إعداد دراسات جدوى وتنبّؤات كمّية لطالبي التمويل دعمًا لقرارات إقراض سليمة.', en: 'Prepared feasibility studies and quantitative forecasts for finance applicants to support sound lending decisions.' },
      { ar: 'تأمين تمويل لعددٍ من أكبر المنشآت في قطاع غزة وتوسيع قاعدة العملاء.', en: 'Secured financing for some of the largest enterprises in the Gaza Strip, expanding the client base.' },
      { ar: 'بناء أطر لتقييم المخاطر وتطبيقها، وتقديم المشورة للعملاء في تحديد المخاطر وتخفيفها.', en: 'Built and applied risk-assessment frameworks and advised clients on identifying and mitigating risk.' },
      { ar: 'التدرّج من أدوار التسويق إلى التمويل إلى ائتمان المنشآت، بخبرة متكاملة في اكتساب العملاء وإدارة المحفظة.', en: 'Progressed through marketing, finance and SME credit roles, building end-to-end expertise in client acquisition and portfolio management.' },
    ],
  },
  {
    period: { ar: 'مايو 2022 — يونيو 2022', en: 'May 2022 — June 2022' },
    title: { ar: 'متدرّب — قسم الخدمات المصرفية', en: 'Intern — Banking Services' },
    org: { ar: 'البنك الأهلي — قطر', en: 'Ahli Bank — Qatar' },
    points: [{ ar: 'إعداد دراسة ائتمانية ومالية تطبيقية لمنشأة صناعية في قطر.', en: 'Prepared an applied credit and financial study for an industrial firm in Qatar.' }],
  },
  {
    period: { ar: 'يوليو 2013 — سبتمبر 2013', en: 'July 2013 — September 2013' },
    title: { ar: 'متدرّب', en: 'Intern' },
    org: { ar: 'سلطة النقد الفلسطينية — فلسطين', en: 'Palestine Monetary Authority — Palestine' },
    points: [{ ar: 'العمل على السياسات النقدية والمالية وإعداد التقارير البحثية.', en: 'Worked on monetary and fiscal policy and prepared research reports.' }],
  },
];

export const PUBLISHED: { title: Bi; where: Bi }[] = [
  {
    title: {
      ar: 'تداعيات العدوان الإسرائيلي على الاقتصاد الفلسطيني في قطاع غزة وتحديات التعافي الاقتصادي',
      en: 'The Impact of the Israeli War on the Palestinian Economy in the Gaza Strip: The Challenges of Economic Recovery',
    },
    where: { ar: 'مجلة عُمران — العدد 53، صيف 2025 (محكَّم)', en: 'Omran Journal — Issue 53, Summer 2025 (peer-reviewed)' },
  },
];

/** Unpublished working papers — Doha Institute for Graduate Studies. */
export const WORKING_PAPERS: { title: Bi; date: Bi }[] = [
  { title: { ar: 'أثر العوامل الاقتصادية والسياسية والمناخية على الاقتصاد الزراعي في قطاع غزة', en: 'The effect of economic, political and climatic factors on the agricultural economy in the Gaza Strip' }, date: { ar: 'مايو 2025', en: 'May 2025' } },
  { title: { ar: 'الاقتصاد الزراعي في قطاع غزة: مقاربة تحليلية في ظل الأزمات المتعددة', en: 'The agricultural economy in the Gaza Strip: an analytical approach under compounded crises' }, date: { ar: 'مايو 2025', en: 'May 2025' } },
  { title: { ar: 'ما مدى تأثير الأوضاع الاقتصادية والسياسية والأمنية على الدخل الشهري للأسر الفلسطينية؟', en: 'How far do economic, political and security conditions affect the monthly income of Palestinian households?' }, date: { ar: 'ديسمبر 2024', en: 'December 2024' } },
  { title: { ar: 'هل فاقم العدوان الإسرائيلي على قطاع غزة من آثار التغير المناخي على القطاع الزراعي؟', en: 'Did the assault on Gaza compound the effects of climate change on the agricultural sector?' }, date: { ar: 'مايو 2022', en: 'May 2022' } },
  { title: { ar: 'إشكالية الفساد الإداري وضرورة مواجهتها', en: 'Administrative corruption and the necessity of confronting it' }, date: { ar: 'أبريل 2022', en: 'April 2022' } },
  { title: { ar: 'واجبات الموظف تجاه المناقصات والمزايدات في القطاع العام', en: 'Employee obligations regarding public-sector tenders and auctions' }, date: { ar: 'أبريل 2022', en: 'April 2022' } },
  { title: { ar: 'الدور الاقتصادي للحكومة في تاريخ الفكر الاقتصادي بين الضرورة والحدود', en: 'The economic role of government in the history of economic thought: necessity and limits' }, date: { ar: 'ديسمبر 2021', en: 'December 2021' } },
  { title: { ar: 'الآثار الاقتصادية لأزمة الكهرباء على قطاع غزة', en: 'The economic effects of the electricity crisis on the Gaza Strip' }, date: { ar: 'ديسمبر 2021', en: 'December 2021' } },
  { title: { ar: 'المساعدات الخارجية التي تلقّتها فلسطين في مجال الطاقة المتجددة', en: 'Foreign aid received by Palestine in the field of renewable energy' }, date: { ar: 'ديسمبر 2021', en: 'December 2021' } },
  { title: { ar: 'العلاقة بين الأجور والبطالة في الاقتصاد الفلسطيني 2004–2020', en: 'The relationship between wages and unemployment in the Palestinian economy, 2004–2020' }, date: { ar: 'نوفمبر 2021', en: 'November 2021' } },
  { title: { ar: 'فعالية المساعدات الخارجية في الاقتصاد الفلسطيني', en: 'The effectiveness of foreign aid in the Palestinian economy' }, date: { ar: 'نوفمبر 2021', en: 'November 2021' } },
  { title: { ar: 'دور القطاعات الإنتاجية في النمو الاقتصادي في فلسطين 1995–2020', en: 'The role of productive sectors in economic growth in Palestine, 1995–2020' }, date: { ar: 'أبريل 2021', en: 'April 2021' } },
  { title: { ar: 'بطالة الشباب في فلسطين ودور المشاريع الصغيرة والمتوسطة في معالجتها', en: 'Youth unemployment in Palestine and the role of SMEs in addressing it' }, date: { ar: 'مارس 2021', en: 'March 2021' } },
  { title: { ar: 'آثار النفط على تطوّر وصعود دول مجلس التعاون الخليجي', en: 'The effects of oil on the development and rise of the GCC states' }, date: { ar: 'مارس 2021', en: 'March 2021' } },
];

export const CERTS: { title: Bi; org: Bi; date: Bi }[] = [
  { title: { ar: 'محترف إدارة المشاريع (PMP)', en: 'Project Management Professional (PMP)' }, org: { ar: 'معهد إدارة المشاريع (PMI) · أكاديمية قطر للمال والأعمال — 35 ساعة', en: 'Project Management Institute (PMI) · Qatar Finance & Business Academy — 35 hours' }, date: { ar: '2026', en: '2026' } },
  { title: { ar: 'المحترف المعتمد في مؤشرات الأداء الرئيسية (Certified KPI Professional)', en: 'Certified KPI Professional' }, org: { ar: 'The KPI Institute — 40 ساعة', en: 'The KPI Institute — 40 hours' }, date: { ar: 'نوفمبر 2025', en: 'November 2025' } },
  { title: { ar: 'محلل النمذجة المالية والتقييم (FMVA) — قيد الاستكمال', en: 'Financial Modeling & Valuation Analyst (FMVA) — in progress' }, org: { ar: 'CFI Education Inc.', en: 'CFI Education Inc.' }, date: { ar: 'من مايو 2024', en: 'from May 2024' } },
  { title: { ar: 'معسكر تدريبي في تحليل البيانات: Python وExcel وPower BI', en: 'Data analysis bootcamp: Python, Excel and Power BI' }, org: { ar: 'Assal Education', en: 'Assal Education' }, date: { ar: 'مايو — سبتمبر 2024', en: 'May — September 2024' } },
  { title: { ar: 'تمويل الشركات', en: 'Corporate finance' }, org: { ar: 'معهد الدراسات المصرفية — الأردن', en: 'Institute of Banking Studies — Jordan' }, date: { ar: 'يوليو 2022', en: 'July 2022' } },
  { title: { ar: 'إعداد وتقييم دراسات الجدوى للمشروعات الصغيرة والمتوسطة', en: 'Preparing and appraising feasibility studies for SMEs' }, org: { ar: 'المعهد العربي للتخطيط', en: 'Arab Planning Institute' }, date: { ar: 'يناير 2021', en: 'January 2021' } },
  { title: { ar: 'مهارات تحليل التقارير الاقتصادية المحلية والإقليمية والدولية', en: 'Analysing local, regional and international economic reports' }, org: { ar: 'المعهد العربي للتخطيط', en: 'Arab Planning Institute' }, date: { ar: 'ديسمبر 2021', en: 'December 2021' } },
];

export const TOOLS = ['STATA', 'SPSS', 'Python', 'Power BI', 'Excel', 'GIS'];

export const EXPERTISE: { icon: string; title: Bi; text: Bi }[] = [
  {
    icon: 'feasibility',
    title: { ar: 'دراسات الجدوى وتقييم الاستثمار', en: 'Feasibility & investment appraisal' },
    text: { ar: 'تقدير الطلب والتكاليف والتدفّقات ونقطة التعادل للوصول إلى قرار استثماري مسنود.', en: 'Estimating demand, costs, cash flows and break-even to reach a supported investment decision.' },
  },
  {
    icon: 'credit',
    title: { ar: 'التمويل والتحليل الائتماني', en: 'Finance & credit analysis' },
    text: { ar: 'أكثر من عشر سنوات في إقراض المنشآت الصغيرة وتقييم الجدارة الائتمانية من جانب المُقرِض.', en: 'Over a decade in SME lending and creditworthiness assessment, from the lender’s side.' },
  },
  {
    icon: 'research',
    title: { ar: 'البحث الاقتصادي والقياسي', en: 'Economic & econometric research' },
    text: { ar: 'بحث محكَّم منشور و14 ورقة عمل، وتحليل قياسي بـSTATA وتدريب طلبة الدراسات العليا عليه.', en: 'A peer-reviewed publication, 14 working papers, econometric analysis in STATA and teaching it at postgraduate level.' },
  },
  {
    icon: 'monitoring',
    title: { ar: 'مؤشرات الأداء وتقييم الأثر', en: 'Performance indicators & evaluation' },
    text: { ar: 'تصميم مؤشرات الأداء الرئيسية وأنظمة المتابعة، بشهادة معتمدة من The KPI Institute.', en: 'Designing KPIs and monitoring systems, with certification from The KPI Institute.' },
  },
];

/** Only figures that can be checked against the CV. */
export const CREDENTIALS: { value: string; label: Bi; note: Bi }[] = [
  {
    value: '+10',
    label: { ar: 'سنوات خبرة', en: 'years of experience' },
    note: { ar: 'في تمويل المنشآت والتحليل الائتماني والبحث الاقتصادي', en: 'in SME finance, credit analysis and economic research' },
  },
  {
    value: '$10M',
    label: { ar: 'محفظة إقراض أُديرت', en: 'lending portfolio managed' },
    note: { ar: 'تمويل المنشآت الصغيرة والمتوسطة — مؤسسة «فاتن»، فلسطين', en: 'SME finance — FATEN, Palestine' },
  },
  {
    value: '+140',
    label: { ar: 'تحليلًا ائتمانيًا وماليًا', en: 'credit and financial analyses' },
    note: { ar: 'خصوصًا في القطاعين الصناعي والزراعي', en: 'primarily in the industrial and agricultural sectors' },
  },
  {
    value: '2025',
    label: { ar: 'بحث محكَّم منشور', en: 'peer-reviewed publication' },
    note: { ar: 'مجلة عُمران، العدد 53 — المركز العربي للأبحاث ودراسة السياسات', en: 'Omran Journal, Issue 53 — Arab Center for Research and Policy Studies' },
  },
  {
    value: '+14',
    label: { ar: 'ورقة عمل بحثية', en: 'research working papers' },
    note: { ar: 'معهد الدوحة للدراسات العليا، 2021–2025', en: 'Doha Institute for Graduate Studies, 2021–2025' },
  },
];

export const BIO: Bi = {
  ar: 'باحث اقتصادي مقيم في الدوحة، متخصّص في تمويل التنمية وتمويل المنشآت الصغيرة والمتوسطة، ومرشّح لدرجة الدكتوراه في اقتصاديات التنمية بمعهد الدوحة للدراسات العليا. عملتُ نحو عشر سنوات في تمويل المنشآت الصغيرة والمتوسطة والتحليل الائتماني في مؤسسة «فاتن»، أدرتُ خلالها محفظة إقراض بقيمة 10 ملايين دولار وأعددتُ أكثر من 140 تحليلًا ائتمانيًا وماليًا — وهي سنوات قضيتها في الجانب الذي يُقيّم الطلبات لا الذي يقدّمها — وهذا ما يشكّل زاويتي في العمل حتى اليوم. أعمل حاليًا باحثًا إحصائيًا في قسم التقييم والجودة، وأُدرّس المهارات البحثية الكمّية لطلبة الدراسات العليا. اهتمامي البحثي يتركّز حول سؤال واحد: لماذا لا يصل التمويل إلى المنشآت التي تستحقه، وما البنية التي تجعله يصل.',
  en: 'I am an economic researcher based in Doha specialising in development finance and SME finance, and a PhD candidate in development economics at the Doha Institute for Graduate Studies. I spent close to a decade in SME finance and credit analysis at FATEN, where I managed a US$10 million lending portfolio and delivered more than 140 credit and financial analyses — years spent on the side that assesses applications rather than the side that submits them, which still shapes how I approach the work. I currently work as a statistical researcher in an evaluation and quality department, and teach quantitative research methods to postgraduate students. My research centres on a single question: why finance fails to reach the firms that merit it, and what infrastructure makes it reach them.',
};

export const METHOD: { title: Bi; text: Bi }[] = [
  {
    title: { ar: 'الافتراضات معلنة لا مخفيّة', en: 'Assumptions are stated, not hidden' },
    text: { ar: 'كل تقدير جوهري يُعرض بمصدره ومداه وأثره على النتيجة، حتى يستطيع صاحب القرار مراجعته بنفسه.', en: 'Every material estimate is presented with its source, its range and its effect on the result, so the decision-maker can interrogate it.' },
  },
  {
    title: { ar: 'الفصل بين الحقيقة والتفسير والافتراض', en: 'Fact, interpretation and assumption kept apart' },
    text: { ar: 'ما هو موثّق يُنسب لمصدره، وما هو تفسير نظري يُعلَن كذلك، وما هو افتراض يُصرَّح به. لا تُخلَط الثلاثة.', en: 'What is documented is attributed, what is theoretical interpretation is labelled as such, and what is an assumption is declared. The three are never blurred.' },
  },
  {
    title: { ar: 'الفجوات تُذكر ولا تُملأ', en: 'Gaps are disclosed, not filled' },
    text: { ar: 'حين تغيب البيانات يُقال ذلك صراحةً وتُبيَّن آثاره على قوة الاستنتاج، بدل سدّ الفجوة بتقدير غير مسنود.', en: 'Where data is missing, this is said plainly along with its effect on the strength of the conclusion, rather than papered over with an unsupported estimate.' },
  },
  {
    title: { ar: 'النتيجة تُختبر قبل تقديمها', en: 'Results are tested before they are presented' },
    text: { ar: 'تُختبر متانة كل نتيجة عبر سيناريوهات وتحليل حساسية، ويُحدَّد أي متغيّر هو الذي يقلب القرار.', en: 'Every result is stress-tested through scenarios and sensitivity analysis, identifying which variable actually flips the decision.' },
  },
];
