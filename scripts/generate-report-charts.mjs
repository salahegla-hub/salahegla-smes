import fs from 'node:fs';
import path from 'node:path';

/* Site tokens, with literal fallbacks so a figure survives outside the page. */
const C = {
  teal: 'var(--teal, #1F5F6B)',
  gold: 'var(--gold-dark, #8A6B27)',
  navy: 'var(--navy, #0B1F33)',
  ink: 'var(--text, #17212B)',
  muted: 'var(--text-3, #5B6672)',
  grid: 'var(--line-soft, #EBEEF0)',
  axis: 'var(--line, #DDE2E5)',
  surface: 'var(--card, #FFFFFF)',
};
const FONT = 'var(--font-ar, Tajawal, Segoe UI, Tahoma, sans-serif)';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const num = (n, d = 1) => Number(n).toFixed(d).replace(/\.0$/, '');

/* Round axis ticks to values a reader can hold in their head (0/10/20/30),
   never to whatever max*1.15 happened to produce (0/7/15/22/29). */
function ticks(maxVal) {
  for (const st of [0.5, 1, 2, 2.5, 5, 10, 20, 25, 50, 100, 200]) {
    const n = Math.ceil(maxVal / st);
    if (n >= 3 && n <= 5) return { max: st * n, n };
  }
  return { max: maxVal, n: 4 };
}

function open(w, h, title, desc) {
  return `<svg class="chart" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(title)}" xmlns="http://www.w3.org/2000/svg" style="font-family:${FONT}">
<title>${esc(title)}</title><desc>${esc(desc)}</desc>`;
}
const close = () => '</svg>';
const txt = (x, y, s, o = {}) => {
  const { size = 12, fill = C.muted, anchor = 'middle', weight = 400 } = o;
  return `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" text-anchor="${anchor}" font-weight="${weight}">${esc(s)}</text>`;
};

/* ---------- vertical columns over time ---------- */
function columns(cfg) {
  const { title, desc, years, values, unit = '' } = cfg;
  const W = 720, H = 300, L = 46, R = 16, T = 30, B = 42;
  const pw = W - L - R, ph = H - T - B;
  const { max, n } = ticks(Math.max(...values) * 1.1);
  const x = (i) => L + (pw / years.length) * (i + 0.5);
  const y = (v) => T + ph - (v / max) * ph;
  const bw = Math.min(46, (pw / years.length) * 0.56);
  let s = open(W, H, title, desc);
  for (let g = 0; g <= n; g++) {
    const gy = T + (ph / n) * g;
    s += `<line x1="${L}" y1="${gy}" x2="${W - R}" y2="${gy}" stroke="${C.grid}" stroke-width="1"/>`;
    s += txt(L - 8, gy + 4, num(max - (max / n) * g, 0), { size: 11, anchor: 'end' });
  }
  values.forEach((v, i) => {
    const bh = Math.max(2, (v / max) * ph);
    s += `<rect x="${(x(i) - bw / 2).toFixed(1)}" y="${y(v).toFixed(1)}" width="${bw.toFixed(1)}" height="${bh.toFixed(1)}" rx="4" fill="${C.teal}"/>`;
    s += txt(x(i), y(v) - 7, num(v) + unit, { size: 11.5, fill: C.ink, weight: 600 });
  });
  years.forEach((yr, i) => { s += txt(x(i), H - 14, yr, { size: 11 }); });
  s += `<line x1="${L}" y1="${T + ph}" x2="${W - R}" y2="${T + ph}" stroke="${C.axis}" stroke-width="1"/>`;
  return s + close();
}

/* ---------- multi-series line chart ---------- */
function lines(cfg) {
  const { title, desc, years, series, target, targetLabel, unit = '٪' } = cfg;
  const W = 720, H = 340, L = 44, R = 18, T = 48, B = 62;
  const pw = W - L - R, ph = H - T - B;
  const all = series.flatMap((sr) => sr.values.filter((v) => v != null));
  const { max, n } = ticks(Math.max(...all, target || 0) * 1.05);
  const x = (i) => L + (pw / (years.length - 1)) * i;
  const y = (v) => T + ph - (v / max) * ph;
  let s = open(W, H, title, desc);
  for (let g = 0; g <= n; g++) {
    const gy = T + (ph / n) * g;
    s += `<line x1="${L}" y1="${gy}" x2="${W - R}" y2="${gy}" stroke="${C.grid}" stroke-width="1"/>`;
    s += txt(L - 8, gy + 4, num(max - (max / n) * g), { size: 11, anchor: 'end' });
  }
  if (target != null) {
    s += `<line x1="${L}" y1="${y(target)}" x2="${W - R}" y2="${y(target)}" stroke="${C.gold}" stroke-width="2" stroke-dasharray="6 4"/>`;
    s += txt(W - R, y(target) - 8, targetLabel, { size: 11, fill: C.gold, anchor: 'end', weight: 600 });
  }
  series.forEach((sr) => {
    const pts = sr.values.map((v, i) => (v == null ? null : [x(i), y(v)])).filter(Boolean);
    s += `<polyline fill="none" stroke="${sr.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" points="${pts.map((p) => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ')}"/>`;
    pts.forEach((p) => { s += `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="4" fill="${sr.color}" stroke="${C.surface}" stroke-width="2"/>`; });
    /* selective direct labels: first, last and the peak only */
    const idx = sr.values.map((v, i) => [v, i]).filter((p) => p[0] != null);
    const peak = idx.reduce((a, b) => (b[0] > a[0] ? b : a));
    const first = idx[0][1], last = idx[idx.length - 1][1];
    [...new Set([first, last, peak[1]])].forEach((i) => {
      /* At the extremes the label would sit on the axis or run off the plot,
         so anchor it inward instead of centring it on the point. */
      const anchor = i === 0 ? 'start' : i === years.length - 1 ? 'end' : 'middle';
      const dx = i === 0 ? 6 : i === years.length - 1 ? -4 : 0;
      s += txt(x(i) + dx, y(sr.values[i]) - 12, num(sr.values[i], 2).replace(/0$/, '') + unit, { size: 11, fill: C.ink, weight: 600, anchor });
    });
  });
  years.forEach((yr, i) => { s += txt(x(i), H - 36, yr, { size: 11 }); });
  s += `<line x1="${L}" y1="${T + ph}" x2="${W - R}" y2="${T + ph}" stroke="${C.axis}" stroke-width="1"/>`;
  let lx = L;
  series.forEach((sr) => {
    s += `<line x1="${lx}" y1="${H - 12}" x2="${lx + 18}" y2="${H - 12}" stroke="${sr.color}" stroke-width="3" stroke-linecap="round"/>`;
    s += txt(lx + 24, H - 8, sr.name, { size: 11.5, anchor: 'start' });
    lx += 34 + sr.name.length * 6.3;
  });
  return s + close();
}

/* ---------- horizontal bars ---------- */
function bars(cfg) {
  /* `decimals` is not cosmetic: rounding 5.89 / 5.88 / 5.86 to one place
     prints three identical bars and makes the ranking look arbitrary. */
  const { title, desc, rows, unit = '', note, highlight, reference, decimals = 1 } = cfg;
  const W = 720, rowH = 30, T = 26, B = note ? 34 : 22, L = 208, R = 76;
  const H = T + rows.length * rowH + B;
  const pw = W - L - R;
  const max = Math.max(...rows.map((r) => r.value)) * 1.02;
  let s = open(W, H, title, desc);
  rows.forEach((r, i) => {
    const cy = T + i * rowH + rowH / 2;
    const bw = Math.max(2, (r.value / max) * pw);
    const isRef = reference && r.label === reference;
    const isHi = r.label === highlight;
    const fill = isRef ? C.muted : isHi ? C.navy : C.teal;
    s += txt(L - 12, cy + 4, r.label, { size: 12.5, anchor: 'end', fill: isRef ? C.muted : C.ink, weight: isRef || isHi ? 600 : 400 });
    s += `<rect x="${L}" y="${(cy - 9).toFixed(1)}" width="${bw.toFixed(1)}" height="18" rx="4" fill="${fill}"${isRef ? ' opacity="0.42"' : ''}/>`;
    /* A row may override the figure's precision — a published round thousand
       should read "20,000", not "20000.0", beside neighbours given to a
       decimal place. Thousands separators throughout. */
    const [whole, frac] = Number(r.value).toFixed(r.decimals ?? decimals).split('.');
    const shown = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (frac ? '.' + frac : '');
    s += txt(L + bw + 8, cy + 4, shown + unit + (r.mark || ''), { size: 12, anchor: 'start', fill: C.ink, weight: 600 });
  });
  s += `<line x1="${L}" y1="${T - 6}" x2="${L}" y2="${T + rows.length * rowH}" stroke="${C.axis}" stroke-width="1"/>`;
  if (note) s += txt(W - 8, H - 8, note, { size: 10.5, anchor: 'end' });
  return s + close();
}

/* ---------- dumbbell: before / after ---------- */
function dumbbell(cfg) {
  const { title, desc, rows, labels } = cfg;
  const W = 720, rowH = 34, T = 36, B = 38, L = 132, R = 118;
  const H = T + rows.length * rowH + B;
  const pw = W - L - R;
  const lo = Math.min(...rows.flatMap((r) => [r.a, r.b]), 0);
  const hi = Math.max(...rows.flatMap((r) => [r.a, r.b]));
  const x = (v) => L + ((v - lo) / (hi - lo)) * pw;
  let s = open(W, H, title, desc);
  s += `<line x1="${x(0).toFixed(1)}" y1="${T - 10}" x2="${x(0).toFixed(1)}" y2="${T + rows.length * rowH}" stroke="${C.axis}" stroke-width="1"/>`;
  s += txt(x(0), T - 16, '0', { size: 10.5 });
  rows.forEach((r, i) => {
    const cy = T + i * rowH + rowH / 2;
    s += txt(L - 14, cy + 4, r.label, { size: 12.5, anchor: 'end', fill: C.ink });
    s += `<line x1="${x(r.a).toFixed(1)}" y1="${cy}" x2="${x(r.b).toFixed(1)}" y2="${cy}" stroke="${C.grid}" stroke-width="3" stroke-linecap="round"/>`;
    s += `<circle cx="${x(r.b).toFixed(1)}" cy="${cy}" r="6" fill="${C.teal}" stroke="${C.surface}" stroke-width="2"/>`;
    s += `<circle cx="${x(r.a).toFixed(1)}" cy="${cy}" r="6" fill="${C.muted}" stroke="${C.surface}" stroke-width="2"/>`;
    const right = Math.max(x(r.a), x(r.b));
    s += txt(right + 12, cy + 4, `${r.b.toFixed(1)} ← ${r.a > 0 ? '+' : ''}${r.a.toFixed(1)}`, { size: 11, anchor: 'start', fill: C.ink, weight: 600 });
  });
  let lx = L;
  [[C.muted, labels[0]], [C.teal, labels[1]]].forEach((p) => {
    s += `<circle cx="${lx + 6}" cy="${H - 14}" r="5" fill="${p[0]}"/>`;
    s += txt(lx + 17, H - 10, p[1], { size: 11.5, anchor: 'start' });
    lx += 32 + p[1].length * 6.2;
  });
  return s + close();
}

/* ---------- heatmap (sequential, single hue) ---------- */
function heatmap(cfg) {
  const { title, desc, cols, rows, refRow } = cfg;
  const W = 720, cellH = 32, T = 58, L = 128, R = 12, B = 14;
  const H = T + rows.length * cellH + B;
  const cw = (W - L - R) / cols.length;
  const vals = rows.flatMap((r) => r.values);
  const lo = Math.min(...vals), hi = Math.max(...vals);
  const ramp = ['#E8F0F1', '#C6DCDF', '#9DC0C6', '#6E9FA8', '#417F8A', '#1F5F6B'];
  let s = open(W, H, title, desc);
  cols.forEach((c, j) => { s += txt(L + cw * (j + 0.5), T - 16, c, { size: 11, weight: 600, fill: C.ink }); });
  rows.forEach((r, i) => {
    const ty = T + i * cellH;
    const isRef = r.label === refRow;
    s += txt(L - 12, ty + cellH / 2 + 4, r.label, { size: 12.5, anchor: 'end', fill: isRef ? C.muted : C.ink, weight: isRef ? 600 : 400 });
    r.values.forEach((v, j) => {
      const t = (v - lo) / (hi - lo);
      const bg = ramp[Math.min(ramp.length - 1, Math.floor(t * ramp.length))];
      s += `<rect x="${(L + cw * j + 1).toFixed(1)}" y="${ty + 1}" width="${(cw - 2).toFixed(1)}" height="${cellH - 2}" rx="4" fill="${bg}"/>`;
      s += txt(L + cw * (j + 0.5), ty + cellH / 2 + 4, num(v), { size: 11.5, fill: t > 0.58 ? '#FFFFFF' : C.ink, weight: 600 });
    });
    if (isRef) s += `<rect x="${L}" y="${ty}" width="${(W - L - R).toFixed(1)}" height="${cellH}" rx="4" fill="none" stroke="${C.navy}" stroke-width="1.5" stroke-dasharray="4 3"/>`;
  });
  return s + close();
}

/* =================== the figures =================== */
const OUT = process.argv[2];
const YEARS = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];

const figures = {
  'r01-share': lines({
    title: 'حصة الشركات الصغيرة والمتوسطة من الائتمان، بمقامين، 2016-2023',
    desc: 'الحصة من ائتمان شركات القطاع الخاص تنحدر من 6.2٪ في 2017 إلى 3.0٪ في 2023، بعيدًا عن هدف 7٪.',
    years: YEARS,
    target: 7,
    targetLabel: 'هدف الاستراتيجية الوطنية الثالثة: 7٪',
    series: [
      { name: 'من ائتمان شركات القطاع الخاص', color: C.teal, values: [5.2, 6.2, 3.8, 4.6, 4.8, 4.0, 3.2, 3.0] },
      { name: 'من إجمالي الائتمان المحلي (حساب الباحث)', color: C.gold, values: [null, null, 1.45, 2.03, 2.16, 1.77, 1.49, 1.44] },
    ],
  }),
  'r01-applications': columns({
    title: 'قيمة طلبات الائتمان المقبولة، 2016-2023 (مليار ريال)',
    desc: 'انخفضت من ذروة 24.5 مليار ريال في 2018 إلى 9.4 مليارات في 2023.',
    years: YEARS,
    values: [12.7, 20.6, 24.5, 17.2, 15.8, 12.6, 9.3, 9.4],
  }),
  'r01-cagr': bars({
    title: 'النمو السنوي المركب في رصيد التمويل: المحقّق مقابل المطلوب لبلوغ هدف 2030',
    desc: 'المحقّق 4.3٪ سنويًا، والمطلوب بين 25.3٪ و33.2٪ بحسب مسار نمو الائتمان الكلي.',
    unit: '٪',
    rows: [
      { label: 'المحقّق 2016-2023', value: 4.3 },
      { label: 'المطلوب إن ثبت الائتمان المحلي', value: 25.3 },
      { label: 'المطلوب إن نما الائتمان 6.3٪', value: 33.2 },
    ],
  }),
  'r02-conditions': bars({
    title: 'ظروف إطار ريادة الأعمال في قطر، درجة 2025 على مقياس 1 إلى 9',
    desc: 'ارتفعت الظروف الاثنا عشر جميعها بين 2016 و2025؛ الرقم بين قوسين هو مقدار التغيّر.',
    decimals: 2,
    rows: [
      { label: 'البنية المادية والخدمات', value: 7.87, mark: '  (+1.42)' },
      { label: 'الأعراف الثقافية والاجتماعية', value: 7.17, mark: '  (+1.79)' },
      { label: 'الضرائب والبيروقراطية', value: 6.48, mark: '  (+1.75)' },
      { label: 'البنية التجارية والمهنية', value: 6.39, mark: '  (+1.26)' },
      { label: 'البرامج الحكومية', value: 6.0, mark: '  (+0.62)' },
      { label: 'الدعم والسياسات الحكومية', value: 5.89, mark: '  (+0.47)' },
      { label: 'التعليم الريادي بعد المدرسة', value: 5.88, mark: '  (+0.11)' },
      { label: 'التعليم الريادي المدرسي', value: 5.86, mark: '  (+1.36)' },
      { label: 'ديناميكية السوق الداخلي', value: 5.8, mark: '  (+1.38)' },
      { label: 'نقل البحث والتطوير', value: 5.51, mark: '  (+1.14)' },
      { label: 'تمويل رواد الأعمال', value: 5.35, mark: '  (+1.73)' },
      { label: 'انفتاح السوق الداخلي', value: 5.28, mark: '  (+1.35)' },
    ],
  }),
  'r03-arab': bars({
    title: 'رصيد تمويل المنشآت الصغيرة والمتوسطة إلى الناتج المحلي، الدول العربية المنشورة، 2021',
    desc: 'قطر عند 3.1٪ كحدّ أعلى مقدَّر من الباحث، دون الإمارات والأردن وفوق سلطنة عُمان.',
    unit: '٪',
    highlight: 'قطر',
    note: '★ قطر: حدّ أعلى مقدَّر من الباحث، غير منشور في المسح',
    rows: [
      { label: 'تونس', value: 17.9 }, { label: 'المغرب', value: 16.9 },
      { label: 'الإمارات', value: 5.8 }, { label: 'الأردن', value: 5.7 },
      { label: 'جزر القمر', value: 5.7 }, { label: 'لبنان', value: 4.8 },
      { label: 'قطر', value: 3.1, mark: ' ★' }, { label: 'سلطنة عُمان', value: 2.7 },
      { label: 'فلسطين', value: 2.5 }, { label: 'العراق', value: 1.3 },
    ],
  }),
  'r04-pillars': heatmap({
    title: 'ركائز مؤشر الحرية الاقتصادية في دول المجلس والمتوسط العالمي، إصدار 2026',
    desc: 'ركيزة حجم الحكومة أعلى بكثير من ركيزة سيادة القانون في كل دول المجلس عدا البحرين.',
    cols: ['سيادة القانون', 'حجم الحكومة', 'الكفاءة التنظيمية', 'انفتاح الأسواق', 'الدرجة الكلية'],
    refRow: 'المتوسط العالمي',
    rows: [
      { label: 'الإمارات', values: [54.2, 94.2, 76.3, 62.9, 71.9] },
      { label: 'قطر', values: [53.7, 92.1, 67.5, 67.3, 70.2] },
      { label: 'سلطنة عُمان', values: [49.7, 89.9, 64.9, 69.5, 68.5] },
      { label: 'البحرين', values: [45.6, 58.3, 73.4, 85.6, 65.7] },
      { label: 'السعودية', values: [47.4, 91.4, 64.7, 57.9, 65.4] },
      { label: 'الكويت', values: [44.4, 77.9, 58.4, 58.6, 59.9] },
      { label: 'المتوسط العالمي', values: [48.4, 70.5, 62.3, 57.3, 59.9] },
    ],
  }),
  'r04-gap': dumbbell({
    title: 'الفارق عن المتوسط العالمي قبل استبعاد ركيزة حجم الحكومة وبعده (نقطة)',
    desc: 'ينكمش فارق السعودية إلى 0.5 نقطة وينقلب فارق الكويت إلى سالب؛ البحرين وحدها يرتفع فارقها.',
    labels: ['الفارق الكلي', 'بعد استبعاد ركيزة حجم الحكومة'],
    rows: [
      { label: 'الإمارات', a: 12.4, b: 6.3 }, { label: 'قطر', a: 10.6, b: 5.1 },
      { label: 'سلطنة عُمان', a: 9.0, b: 4.0 }, { label: 'البحرين', a: 6.2, b: 9.2 },
      { label: 'السعودية', a: 5.8, b: 0.5 }, { label: 'الكويت', a: 0.3, b: -1.6 },
    ],
  }),
  'r04-law': bars({
    title: 'ركيزة سيادة القانون، إصدار 2026 (درجة من 100)',
    desc: 'دول المجلس الست جميعها في نطاق ست نقاط حول المتوسط العالمي البالغ 48.4.',
    reference: 'المتوسط العالمي',
    rows: [
      { label: 'الإمارات', value: 54.2 }, { label: 'قطر', value: 53.7 },
      { label: 'سلطنة عُمان', value: 49.7 }, { label: 'المتوسط العالمي', value: 48.4 },
      { label: 'السعودية', value: 47.4 }, { label: 'البحرين', value: 45.6 },
      { label: 'الكويت', value: 44.4 },
    ],
  }),
  'r05-nmoq-layers': bars({
    title: 'توزيع القيمة المضافة السنوية للمتحف الوطني على الطبقات الأربع (مليون ريال)',
    desc: 'الطبقتان السياحية والمباشرة متقاربتان وتحكمان النتيجة، والمستحثّة لا تتجاوز 7٪.',
    decimals: 1,
    rows: [
      { label: 'السياحية', value: 112.4, mark: '  (38.6٪)' },
      { label: 'المباشرة', value: 109.5, mark: '  (37.6٪)' },
      { label: 'غير المباشرة', value: 48.6, mark: '  (16.7٪)' },
      { label: 'المستحثّة', value: 20.7, mark: '  (7.1٪)' },
    ],
  }),
  /* Deliberately one linear scale. The four measured definitions collapsing to
     slivers beside the circulated figure IS the report's argument; a log axis
     would hide exactly what the reader is meant to see. */
  'r06-cci-definitions': bars({
    title: 'قيمة الإنتاج وفق خمسة تعريفات للصناعات الثقافية والإبداعية، 2020 (مليون ريال)',
    desc: 'بين أوسع تعريف رسمي (1,258.3) والرقم المتداول (20,000) فارق قدره 15.9 ضعفًا.',
    decimals: 1,
    highlight: 'د5 · التعريف المتداول',
    note: 'المقياس خطّي واحد: ضآلة الأشرطة الأربعة الأولى هي موضوع الشكل',
    rows: [
      { label: 'د5 · التعريف المتداول', value: 20000, decimals: 0 },
      { label: 'د4 · سقف الأكواد المقيسة', value: 1258.3 },
      { label: 'د3 · النواة + السمعبصري', value: 406.4 },
      { label: 'د2 · النواة الثقافية المقيسة', value: 325.9 },
      { label: 'د1 · النواة المتحفية', value: 272.9 },
    ],
  }),
};

fs.mkdirSync(OUT, { recursive: true });
for (const [name, svg] of Object.entries(figures)) {
  fs.writeFileSync(path.join(OUT, name + '.svg'), svg, 'utf8');
  console.log(name + '.svg  ' + svg.length + ' bytes');
}

/* Run:  node scripts/generate-report-charts.mjs public/images/reports
 *
 * Every value above is transcribed from the published PDF of its report and
 * nothing is interpolated: a series the source labels only at its endpoints
 * is not charted here, because filling the gap would invent numbers the
 * report never published. Edit the data in this file and re-run — never hand
 * edit the generated SVGs. */
