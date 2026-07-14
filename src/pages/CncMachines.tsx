import { Cog, ShieldCheck, Truck, Wrench } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import Bdmh3018Section from '@/components/Bdmh3018Section';
import H200Section from '@/components/H200Section';
import {
  cncContent,
  uiStrings,
  homePathFor,
  SITE_ORIGIN_URL,
  type ContentLanguage,
} from '@/data/pageContent';

const iconMap = {
  shield: ShieldCheck,
  truck: Truck,
  cog: Cog,
  wrench: Wrench,
} as const;

interface CncMachinesProps {
  lang?: ContentLanguage;
}

const pathFor = (lang: ContentLanguage) =>
  lang === 'ru' ? '/cnc-machines' : lang === 'en' ? '/en/cnc-machines' : '/zh/cnc-machines';

const equipmentAnchorFor = (lang: ContentLanguage) => `${homePathFor(lang)}#equipment`;

type LT = { ru: string; en: string; zh: string };

const machineTypesTable = {
  caption: {
    ru: 'Типы станков с ЧПУ — руководство по применению',
    en: 'CNC machine types — application guide',
    zh: '数控机床类型 — 应用指南',
  } as LT,
  headers: [
    { ru: 'Тип станка', en: 'Machine type', zh: '机床类型' },
    { ru: 'Типовая операция', en: 'Typical operation', zh: '典型工序' },
    { ru: 'Оси', en: 'Axes', zh: '轴数' },
    { ru: 'Лучше всего подходит для', en: 'Best for', zh: '最适合' },
  ] as LT[],
  rows: [
    {
      type: { ru: 'Токарный станок с ЧПУ', en: 'CNC Turning (Lathe)', zh: '数控车床' },
      op: { ru: 'Наружная / внутренняя цилиндрическая обработка', en: 'External/internal cylindrical machining', zh: '外圆 / 内孔车削' },
      axes: '2–4',
      best: { ru: 'Валы, кольца, фланцы', en: 'Shafts, rings, flanges', zh: '轴、环、法兰' },
    },
    {
      type: { ru: 'Вертикальный обрабатывающий центр (VMC)', en: 'Vertical Machining Center (VMC)', zh: '立式加工中心（VMC）' },
      op: { ru: 'Фрезерование, сверление, нарезание резьбы', en: 'Milling, drilling, tapping', zh: '铣削、钻孔、攻丝' },
      axes: '3–5',
      best: { ru: 'Призматические детали, штампы', en: 'Prismatic parts, dies', zh: '棱柱形零件、模具' },
    },
    {
      type: { ru: 'Горизонтальный обрабатывающий центр (HMC)', en: 'Horizontal Machining Center (HMC)', zh: '卧式加工中心（HMC）' },
      op: { ru: 'Многосторонняя фрезеровка', en: 'Multi-face milling', zh: '多面铣削' },
      axes: '4–5',
      best: { ru: 'Крупные сложные детали, серийное производство', en: 'Large complex parts, batch production', zh: '大型复杂零件、批量生产' },
    },
    {
      type: { ru: 'Шлифовальный станок с ЧПУ', en: 'CNC Grinding', zh: '数控磨床' },
      op: { ru: 'Плоское / круглое шлифование', en: 'Surface/cylindrical grinding', zh: '平面 / 外圆磨削' },
      axes: '2–4',
      best: { ru: 'Финишная точность, закалённые детали', en: 'Precision finishing, hardened parts', zh: '精密精加工、淬硬件' },
    },
    {
      type: { ru: 'Электроэрозионный станок (EDM)', en: 'EDM (Electrical Discharge)', zh: '电火花加工（EDM）' },
      op: { ru: 'Искровая резка / прошивка', en: 'Spark erosion cutting/sinking', zh: '电火花切割 / 成型' },
      axes: '2–5',
      best: { ru: 'Закалённая сталь, сложные профили', en: 'Hardened steel, complex profiles', zh: '淬硬钢、复杂型面' },
    },
    {
      type: { ru: 'Токарно-фрезерный (Turn-Mill)', en: 'Turn-Mill', zh: '车铣复合' },
      op: { ru: 'Комбинированное точение и фрезеровка', en: 'Combined turning + milling', zh: '车削 + 铣削复合' },
      axes: '5–7',
      best: { ru: 'Сложные тела вращения за одну установку', en: 'Complex rotational parts in one setup', zh: '复杂回转零件一次装夹完成' },
    },
    {
      type: { ru: 'Координатно-расточной станок', en: 'Jig Boring', zh: '坐标镗床' },
      op: { ru: 'Прецизионное растачивание отверстий', en: 'High-precision hole boring', zh: '高精度孔镗削' },
      axes: '3–4',
      best: { ru: 'Оснастка, пресс-формы, прецизионные сборки', en: 'Fixtures, molds, precision assemblies', zh: '夹具、模具、精密装配' },
    },
  ],
};

const sectionLabels = {
  types: { ru: 'Типы станков с ЧПУ', en: 'CNC machine types', zh: '数控机床类型' } as LT,
};



const CncMachines = ({ lang = 'ru' }: CncMachinesProps) => {
  const path = pathFor(lang);
  const canonical = SITE_ORIGIN_URL + path;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: uiStrings.home[lang], item: SITE_ORIGIN_URL + homePathFor(lang) },
      {
        '@type': 'ListItem',
        position: 2,
        name: uiStrings.equipment[lang],
        item: SITE_ORIGIN_URL + equipmentAnchorFor(lang),
      },
      { '@type': 'ListItem', position: 3, name: uiStrings.cnc[lang], item: canonical },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: cncContent.hero.h1[lang],
    serviceType: uiStrings.cnc[lang],
    areaServed: { '@type': 'Country', name: lang === 'ru' ? 'Россия' : lang === 'en' ? 'Russia' : '俄罗斯' },
    provider: { '@type': 'Organization', name: 'ОСКОЛ-МЕТ-ТРЕЙД', url: SITE_ORIGIN_URL },
    description: cncContent.meta.description[lang],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: sectionLabels.types[lang],
      itemListElement: machineTypesTable.rows.map((r) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: r.type[lang],
          description: `${r.op[lang]} — ${r.best[lang]} (${r.axes} axes)`,
        },
      })),
    },
  };


  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cncContent.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q[lang],
      acceptedAnswer: { '@type': 'Answer', text: f.a[lang] },
    })),
  };

  return (
    <div className="min-h-screen bg-transparent">
      <SEOHead
        title={cncContent.meta.title[lang]}
        description={cncContent.meta.description[lang]}
        language={lang}
        path={path}
        hreflangGroup="cncMachines"
      />
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema} />
      <StructuredData type="Service" data={serviceSchema} />
      <StructuredData type="FAQPage" data={faqSchema} />

      <Header language={lang} />

      <main id="main-content" className="pt-20" itemScope itemType="https://schema.org/WebPage">
        <article className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="mb-10">
            <nav aria-label={uiStrings.breadcrumb[lang]} className="text-sm text-muted-foreground mb-4">
              <a href={homePathFor(lang)} className="hover:text-primary">{uiStrings.home[lang]}</a>
              <span className="mx-2">/</span>
              <a href={equipmentAnchorFor(lang)} className="hover:text-primary">{uiStrings.equipment[lang]}</a>
              <span className="mx-2">/</span>
              <span className="text-foreground">{uiStrings.cnc[lang]}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {cncContent.hero.h1[lang]}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {cncContent.hero.intro[lang]}
            </p>
          </header>

          <Bdmh3018Section lang={lang} contactHref={`${homePathFor(lang)}#contacts`} />

          <H200Section lang={lang} contactHref={`${homePathFor(lang)}#contacts`} />

          <section aria-labelledby="types-heading" className="mb-12">
            <h2 id="types-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {cncContent.sections.types[lang]}
            </h2>
            <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-muted-foreground mb-6">
              {cncContent.machineTypes.map((t) => (
                <li key={t.ru}>{t[lang]}</li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground italic leading-relaxed max-w-3xl">
              {cncContent.categoriesNote[lang]}
            </p>
          </section>


          <section aria-labelledby="why-heading" className="mb-12">
            <h2 id="why-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {cncContent.sections.why[lang]}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cncContent.advantages.map((a) => {
                const Icon = iconMap[a.iconKey];
                return (
                  <article key={a.title.ru} className="rounded-lg border border-border bg-card p-5">
                    <Icon className="w-8 h-8 text-primary mb-3" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground mb-2">{a.title[lang]}</h3>
                    <p className="text-sm text-muted-foreground">{a.text[lang]}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section aria-labelledby="machine-types-heading" className="mb-12">
            <h2 id="machine-types-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {sectionLabels.types[lang]}
            </h2>
            <div className="overflow-x-auto rounded-lg border border-border bg-card">
              <table className="w-full text-sm text-left">
                <caption className="sr-only">{machineTypesTable.caption[lang]}</caption>
                <thead className="bg-muted/50">
                  <tr>
                    {machineTypesTable.headers.map((h) => (
                      <th key={h.en} scope="col" className="px-4 py-3 font-semibold text-foreground">
                        {h[lang]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {machineTypesTable.rows.map((r, i) => (
                    <tr key={r.type.en} className={i % 2 === 0 ? 'bg-transparent' : 'bg-muted/30'}>
                      <th scope="row" className="px-4 py-3 font-semibold text-foreground align-top">
                        {r.type[lang]}
                      </th>
                      <td className="px-4 py-3 text-muted-foreground align-top">{r.op[lang]}</td>
                      <td className="px-4 py-3 text-muted-foreground align-top">{r.axes}</td>
                      <td className="px-4 py-3 text-muted-foreground align-top">{r.best[lang]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="faq-heading" className="mb-8">

            <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {cncContent.sections.faq[lang]}
            </h2>
            <div className="space-y-3">
              {cncContent.faqs.map((f, i) => (
                <details
                  key={f.q.ru}
                  data-question-id={`cnc-faq-${i + 1}`}
                  className="group rounded-lg border border-border bg-card p-4"
                >
                  <summary className="cursor-pointer list-none flex justify-between items-center">
                    <h3 className="font-semibold text-foreground">{f.q[lang]}</h3>
                    <span className="ml-4 text-primary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground">{f.a[lang]}</p>
                </details>
              ))}
            </div>
          </section>
        </article>
      </main>

      <Footer language={lang} />
    </div>
  );
};

export default CncMachines;
