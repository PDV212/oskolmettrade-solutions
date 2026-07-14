import { ClipboardList, Factory, FileCheck2, Handshake, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import {
  uiStrings,
  homePathFor,
  SITE_ORIGIN_URL,
  type ContentLanguage,
  type LocalizedText,
} from '@/data/pageContent';
import { GLOBAL_UI, ferroalloysRouteFor } from '@/lib/globalUi';

interface FerroalloysProps {
  lang?: ContentLanguage;
}

/* ---------------- Content ---------------- */

const meta = {
  title: {
    ru: 'Ферросплавы и материалы для металлургии — ОСКОЛ-МЕТ-ТРЕЙД',
    en: 'Ferroalloys and Materials for Metallurgy — OSKOL-MET-TRADE',
    zh: '铁合金与冶金材料 — OSKOL-MET-TRADE',
  } as LocalizedText,
  description: {
    ru: 'Поставка ферросплавов (FeSiMn, FeSi65/75, FeV80, FeMn78, FeCr, FeTi, FeMo), кальций-силиконовой порошковой проволоки и графитированных электродов. Документы COA/MTC по каждой партии.',
    en: 'Supply of ferroalloys (FeSiMn, FeSi65/75, FeV80, FeMn78, FeCr, FeTi, FeMo), calcium-silicon cored wire and graphitized electrodes. COA/MTC documents provided per batch.',
    zh: '供应铁合金（FeSiMn、FeSi65/75、FeV80、FeMn78、FeCr、FeTi、FeMo）、钙硅包芯线及石墨电极。每批次提供 COA/MTC 文件。',
  } as LocalizedText,
};

const h1: LocalizedText = {
  ru: 'Ферросплавы и материалы для металлургии',
  en: 'Ferroalloys and materials for metallurgy',
  zh: '铁合金与冶金材料',
};

const speakable: LocalizedText = {
  ru: 'ООО «ОСКОЛ-МЕТ-ТРЕЙД» подбирает и организует поставки ферросплавов и материалов для металлургии напрямую от производителей и проверенных экспортёров. Каждая партия сопровождается документами COA/MTC.',
  en: 'OSKOL-MET-TRADE LLC sources and coordinates supply of ferroalloys and metallurgical materials directly from manufacturers and verified exporters. All supplies include COA/MTC documentation.',
  zh: 'OSKOL-MET-TRADE 有限责任公司直接从制造商和经核实的出口商采购并组织铁合金与冶金材料的供应。每批交付均附有 COA/MTC 文件。',
};

const tableCaption: LocalizedText = {
  ru: 'Марки ферросплавов — номенклатура поставки',
  en: 'Ferroalloy grades — supply range',
  zh: '铁合金牌号 — 供货范围',
};

const tableHeaders: LocalizedText[] = [
  { ru: 'Марка', en: 'Grade', zh: '牌号' },
  { ru: 'Содержание Si / металла (типовое)', en: 'Silicon / metal content (typical)', zh: '硅/金属含量（典型）' },
  { ru: 'Основное применение', en: 'Primary application', zh: '主要用途' },
  { ru: 'Тип производства', en: 'Production type', zh: '生产类型' },
];

interface Row { grade: string; content: LocalizedText; application: LocalizedText; production: LocalizedText }

const rows: Row[] = [
  {
    grade: 'FeSiMn 6516/6517/6518',
    content: { ru: 'Si 14–17%, Mn 60–68%', en: 'Si 14–17%, Mn 60–68%', zh: 'Si 14–17%，Mn 60–68%' },
    application: { ru: 'Раскисление и легирование стали', en: 'Steel deoxidation + alloying', zh: '钢的脱氧与合金化' },
    production: { ru: 'Сталеплавильное производство', en: 'Steelmaking', zh: '炼钢' },
  },
  {
    grade: 'FeSi65',
    content: { ru: 'Si ~65%', en: 'Si ~65%', zh: 'Si ~65%' },
    application: { ru: 'Раскисление', en: 'Deoxidation', zh: '脱氧' },
    production: { ru: 'Сталеплавильное / литейное', en: 'Steelmaking / foundry', zh: '炼钢 / 铸造' },
  },
  {
    grade: 'FeSi75',
    content: { ru: 'Si ~75%', en: 'Si ~75%', zh: 'Si ~75%' },
    application: { ru: 'Высокоэффективное раскисление', en: 'High-efficiency deoxidation', zh: '高效脱氧' },
    production: { ru: 'Сталеплавильное производство', en: 'Steelmaking', zh: '炼钢' },
  },
  {
    grade: 'FeV80',
    content: { ru: 'V ~80%', en: 'V ~80%', zh: 'V ~80%' },
    application: { ru: 'Легирование ванадием', en: 'Vanadium alloying', zh: '钒合金化' },
    production: { ru: 'Специальные стали', en: 'Special steels', zh: '特殊钢' },
  },
  {
    grade: 'FeMn78',
    content: { ru: 'Mn ~78%', en: 'Mn ~78%', zh: 'Mn ~78%' },
    application: { ru: 'Легирование марганцем', en: 'Manganese alloying', zh: '锰合金化' },
    production: { ru: 'Сталеплавильное производство', en: 'Steelmaking', zh: '炼钢' },
  },
  {
    grade: 'HC / LC / MC FeCr',
    content: { ru: 'Cr 60–70%', en: 'Cr 60–70%', zh: 'Cr 60–70%' },
    application: { ru: 'Легирование хромом', en: 'Chrome alloying', zh: '铬合金化' },
    production: { ru: 'Нержавеющая / инструментальная сталь', en: 'Stainless / tool steel', zh: '不锈钢 / 工具钢' },
  },
  {
    grade: 'FeTi30 / FeTi70',
    content: { ru: 'Ti 30% или 70%', en: 'Ti 30% or 70%', zh: 'Ti 30% 或 70%' },
    application: { ru: 'Легирование титаном', en: 'Titanium alloying', zh: '钛合金化' },
    production: { ru: 'Сталеплавильное производство', en: 'Steelmaking', zh: '炼钢' },
  },
  {
    grade: 'FeMo',
    content: { ru: 'Mo ~60%', en: 'Mo ~60%', zh: 'Mo ~60%' },
    application: { ru: 'Легирование молибденом', en: 'Molybdenum alloying', zh: '钼合金化' },
    production: { ru: 'Легированные стали', en: 'Alloy steels', zh: '合金钢' },
  },
  {
    grade: 'CaSi ПП Ø14 мм / CaSi cored wire Ø14 mm',
    content: { ru: 'Ca + Si', en: 'Ca + Si', zh: 'Ca + Si' },
    application: { ru: 'Обработка стали в ковше', en: 'Ladle treatment', zh: '钢包处理' },
    production: { ru: 'Внепечная обработка', en: 'Secondary metallurgy', zh: '炉外精炼' },
  },
  {
    grade: 'Графитированные электроды / Graphitized electrodes',
    content: { ru: 'C ~99%', en: 'C ~99%', zh: 'C ~99%' },
    application: { ru: 'Электрод дуговой печи', en: 'Arc furnace electrode', zh: '电弧炉电极' },
    production: { ru: 'ДСП / АКП', en: 'EAF / ladle furnace', zh: '电弧炉 / 钢包炉' },
  },
];

/* ---------------- How-we-work steps ---------------- */

interface Step { icon: typeof ClipboardList; title: LocalizedText; text: LocalizedText }
const steps: Step[] = [
  {
    icon: ClipboardList,
    title: {
      ru: 'Технические требования',
      en: 'Technical requirements',
      zh: '技术要求',
    },
    text: {
      ru: 'Заказчик передаёт спецификацию, либо мы помогаем сформировать запрос.',
      en: 'Customer submits specification or we help form the request.',
      zh: '客户提交规格说明，或我们协助形成询单。',
    },
  },
  {
    icon: Factory,
    title: {
      ru: 'Подбор производителя',
      en: 'Manufacturer selection',
      zh: '厂商选择',
    },
    text: {
      ru: 'Подбираем и оцениваем производителей, запрашиваем COA/MTC и образцы.',
      en: 'We identify and evaluate producers, request COA/MTC samples.',
      zh: '我们识别并评估生产商，索取 COA/MTC 与样品。',
    },
  },
  {
    icon: FileCheck2,
    title: {
      ru: 'Согласование параметров',
      en: 'Parameters agreement',
      zh: '参数确认',
    },
    text: {
      ru: 'Подтверждаются технические характеристики, упаковка и порядок загрузки контейнера.',
      en: 'Technical specs, packaging, container loading confirmed.',
      zh: '确认技术规格、包装及装箱方式。',
    },
  },
  {
    icon: Handshake,
    title: {
      ru: 'Коммерческое предложение',
      en: 'Commercial proposal',
      zh: '商务报价',
    },
    text: {
      ru: 'Рассчитываем ориентировочную логистику и передаём полные условия поставки.',
      en: 'Indicative logistics calculated, full supply terms provided.',
      zh: '计算参考物流并提供完整的供货条款。',
    },
  },
  {
    icon: Send,
    title: {
      ru: 'Пробная поставка или контракт',
      en: 'Trial shipment or contract',
      zh: '试单或合同',
    },
    text: {
      ru: 'Поставка выполняется на согласованных коммерческих условиях.',
      en: 'Delivery proceeds under agreed commercial terms.',
      zh: '按约定的商务条件执行交付。',
    },
  },
];

/* ---------------- FAQ ---------------- */

interface FaqItem { q: LocalizedText; a: LocalizedText }
const faqs: FaqItem[] = [
  {
    q: {
      ru: 'Какие документы подтверждают качество ферросплавов?',
      en: 'What documents confirm ferroalloy quality?',
      zh: '哪些文件用于确认铁合金的质量？',
    },
    a: {
      ru: 'ОСКОЛ-МЕТ-ТРЕЙД запрашивает у производителя по каждой партии сертификат анализа (COA) и заводской сертификат качества (MTC), подтверждающие химический состав и физические параметры.',
      en: 'OSKOL-MET-TRADE requests COA (Certificate of Analysis) and MTC (Mill Test Certificate) from the manufacturer for each batch, confirming chemical composition and physical parameters.',
      zh: 'OSKOL-MET-TRADE 对每批次向生产商索取分析证书（COA）和工厂质量证书（MTC），以确认化学成分与物理参数。',
    },
  },
  {
    q: {
      ru: 'Какой используется базис поставки (Инкотермс)?',
      en: 'What delivery basis (Incoterms) do you use?',
      zh: '使用哪种交货条件（Incoterms）？',
    },
    a: {
      ru: 'Базис поставки (DAP, CIF, FOB или иные условия Инкотермс) согласуется индивидуально и указывается в коммерческом предложении и контракте.',
      en: 'Delivery basis (DAP, CIF, FOB or other Incoterms) is agreed individually and specified in the commercial proposal and contract.',
      zh: '交货条件（DAP、CIF、FOB 或其他 Incoterms）按项目单独商定，并在报价与合同中列明。',
    },
  },
  {
    q: {
      ru: 'Какой минимальный объём заказа?',
      en: 'What is the minimum order volume?',
      zh: '最低起订量是多少？',
    },
    a: {
      ru: 'Минимальный объём зависит от конкретного продукта, производителя и условий логистики и подтверждается в коммерческом предложении.',
      en: 'Minimum order volume depends on the specific product, manufacturer and logistics conditions, and is confirmed in the commercial proposal.',
      zh: '最低起订量取决于具体产品、生产商与物流条件，并在报价中确认。',
    },
  },
  {
    q: {
      ru: 'В чём разница между FeSi65 и FeSi75?',
      en: 'What is the difference between FeSi65 and FeSi75?',
      zh: 'FeSi65 与 FeSi75 有何区别？',
    },
    a: {
      ru: 'FeSi75 содержит около 75% кремния против 65% у FeSi65, что обеспечивает более высокую эффективность раскисления на единицу массы.',
      en: 'FeSi75 contains approximately 75% silicon versus 65% in FeSi65, providing higher deoxidation efficiency per unit weight in steelmaking applications.',
      zh: 'FeSi75 的硅含量约为 75%，而 FeSi65 约为 65%，在炼钢中单位重量的脱氧效率更高。',
    },
  },
  {
    q: {
      ru: 'Возможна ли поставка по индивидуальной спецификации заказчика?',
      en: 'Can you supply to customer-specific specifications?',
      zh: '是否可按客户特定规格供货？',
    },
    a: {
      ru: 'Да. Мы подбираем ферросплавы и специальные материалы под химические и физические параметры заказчика с подтверждением через документы COA/MTC.',
      en: 'Yes. We source ferroalloys and special materials to customer-defined chemical and physical specifications, confirmed through COA/MTC documentation.',
      zh: '可以。我们按客户设定的化学与物理规格采购铁合金与特种材料，并通过 COA/MTC 文件确认。',
    },
  },
  {
    q: {
      ru: 'Поставляете ли материалы для литейных производств?',
      en: 'Do you supply for foundry production?',
      zh: '是否为铸造生产供货？',
    },
    a: {
      ru: 'Да. Наша номенклатура охватывает материалы для сталеплавильного, литейного и ферросплавного производства.',
      en: 'Yes. Our supply range covers materials for steelmaking, foundry and ferroalloy production processes.',
      zh: '可以。我们的供货范围涵盖炼钢、铸造与铁合金生产工艺所需的材料。',
    },
  },
];

/* ---------------- Glossary ---------------- */

interface GlossaryItem { term: LocalizedText; def: LocalizedText }
const glossary: GlossaryItem[] = [
  {
    term: { ru: 'COA — Certificate of Analysis', en: 'COA — Certificate of Analysis', zh: 'COA — 分析证书' },
    def: {
      ru: 'Документ, подтверждающий химический состав каждой поставленной партии.',
      en: 'Document confirming chemical composition of each delivered batch.',
      zh: '确认每批交付材料化学成分的文件。',
    },
  },
  {
    term: { ru: 'MTC — Mill Test Certificate', en: 'MTC — Mill Test Certificate', zh: 'MTC — 工厂质量证书' },
    def: {
      ru: 'Заводской сертификат качества производителя, подтверждающий параметры продукции.',
      en: 'Manufacturer quality certificate confirming product parameters.',
      zh: '生产商出具的质量证书，用于确认产品参数。',
    },
  },
  {
    term: { ru: 'Внепечная обработка стали', en: 'Ladle metallurgy', zh: '炉外精炼' },
    def: {
      ru: 'Процесс вторичного рафинирования стали в ковше после первичной плавки.',
      en: 'Secondary steel refining process in the ladle after primary melting.',
      zh: '初炼后在钢包中进行的二次精炼工艺。',
    },
  },
  {
    term: { ru: 'Раскислитель', en: 'Deoxidizer', zh: '脱氧剂' },
    def: {
      ru: 'Материал, вводимый в расплав для удаления растворённого кислорода.',
      en: 'Material added to molten steel to remove dissolved oxygen.',
      zh: '加入钢液中以去除溶解氧的材料。',
    },
  },
  {
    term: { ru: 'Порошковая проволока (cored wire)', en: 'Cored wire', zh: '包芯线' },
    def: {
      ru: 'Стальная оболочка с наполнителем из сплавного порошка, вводимая в ковш для точного легирования.',
      en: 'Steel-sheathed wire filled with alloy powder, injected into the ladle for precise alloying.',
      zh: '钢皮包裹合金粉末的丝线，注入钢包以进行精确合金化。',
    },
  },
];

/* ---------------- Section labels ---------------- */

const L = {
  process: { ru: 'Как мы работаем', en: 'How we work', zh: '我们如何工作' } as LocalizedText,
  faq: { ru: 'Вопросы и ответы', en: 'FAQ', zh: '常见问题' } as LocalizedText,
  glossary: { ru: 'Глоссарий', en: 'Glossary', zh: '术语表' } as LocalizedText,
  range: { ru: 'Номенклатура', en: 'Supply range', zh: '供货范围' } as LocalizedText,
  ferroalloys: { ru: 'Ферросплавы', en: 'Ferroalloys', zh: '铁合金' } as LocalizedText,
};

/* ---------------- Component ---------------- */

const Ferroalloys = ({ lang = 'ru' }: FerroalloysProps) => {
  const ui = GLOBAL_UI[lang];
  const path = ferroalloysRouteFor(lang);
  const canonical = SITE_ORIGIN_URL + path;
  const home = homePathFor(lang);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: uiStrings.home[lang], item: SITE_ORIGIN_URL + home },
      { '@type': 'ListItem', position: 2, name: ui.directions, item: SITE_ORIGIN_URL + home + '#directions' },
      { '@type': 'ListItem', position: 3, name: L.ferroalloys[lang], item: canonical },
    ],
  };

  const serviceSchema = {
    name: h1[lang],
    serviceType: L.ferroalloys[lang],
    areaServed: { '@type': 'Country', name: lang === 'ru' ? 'Россия' : lang === 'en' ? 'Russia' : '俄罗斯' },
    provider: { '@type': 'Organization', name: 'ОСКОЛ-МЕТ-ТРЕЙД', url: SITE_ORIGIN_URL },
    description: speakable[lang],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: L.range[lang],
      itemListElement: rows.map((r) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: r.grade,
          description: `${r.content[lang]} — ${r.application[lang]}`,
        },
      })),
    },
  };

  const faqSchema = {
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q[lang],
      acceptedAnswer: { '@type': 'Answer', text: f.a[lang] },
    })),
  };

  return (
    <div className="min-h-screen bg-transparent">
      <SEOHead
        title={meta.title[lang]}
        description={meta.description[lang]}
        language={lang}
        path={path}
        hreflangGroup="ferroalloys"
      />
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema} />
      <StructuredData type="Service" data={serviceSchema} />
      <StructuredData type="FAQPage" data={faqSchema} />

      <Header language={lang} />

      <main id="main-content" className="pt-20" itemScope itemType="https://schema.org/WebPage">
        <article
          className="container mx-auto px-4 py-12 max-w-6xl"
          itemScope
          itemType="https://schema.org/Service"
        >
          <meta itemProp="serviceType" content={L.ferroalloys[lang]} />

          <header className="mb-10">
            <nav aria-label={uiStrings.breadcrumb[lang]} className="text-sm text-muted-foreground mb-4">
              <a href={home} className="hover:text-primary">{uiStrings.home[lang]}</a>
              <span className="mx-2">/</span>
              <a href={home + '#directions'} className="hover:text-primary">{ui.directions}</a>
              <span className="mx-2">/</span>
              <span className="text-foreground">{L.ferroalloys[lang]}</span>
            </nav>
            <h1 itemProp="name" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {h1[lang]}
            </h1>
            <p itemProp="description" className="speakable-summary text-lg text-muted-foreground leading-relaxed max-w-4xl">
              {speakable[lang]}
            </p>
          </header>

          {/* Grade table */}
          <section aria-labelledby="range-heading" className="mb-12">
            <h2 id="range-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {L.range[lang]}
            </h2>
            <div className="overflow-x-auto rounded-lg border border-border bg-card">
              <table className="w-full text-sm text-left">
                <caption className="sr-only">{tableCaption[lang]}</caption>
                <thead className="bg-muted/50">
                  <tr>
                    {tableHeaders.map((h) => (
                      <th key={h.en} scope="col" className="px-4 py-3 font-semibold text-foreground">
                        {h[lang]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr
                      key={r.grade}
                      className={i % 2 === 0 ? 'bg-transparent' : 'bg-muted/30'}
                    >
                      <th scope="row" className="px-4 py-3 font-semibold text-foreground align-top">
                        {r.grade}
                      </th>
                      <td className="px-4 py-3 text-muted-foreground align-top">{r.content[lang]}</td>
                      <td className="px-4 py-3 text-muted-foreground align-top">{r.application[lang]}</td>
                      <td className="px-4 py-3 text-muted-foreground align-top">{r.production[lang]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Process */}
          <section aria-labelledby="process-heading" className="mb-12">
            <h2 id="process-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {L.process[lang]}
            </h2>
            <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 list-none p-0">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li key={s.title.en} className="rounded-lg border border-border bg-card p-5">
                    <figure className="m-0">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <span className="text-sm font-semibold text-primary">
                          {(lang === 'zh' ? '第 ' : lang === 'ru' ? 'Шаг ' : 'Step ') + (i + 1)}
                        </span>
                      </div>
                      <figcaption>
                        <h3 className="font-semibold text-foreground mb-2">{s.title[lang]}</h3>
                        <p className="text-sm text-muted-foreground">{s.text[lang]}</p>
                      </figcaption>
                    </figure>
                  </li>
                );
              })}
            </ol>
          </section>

          {/* FAQ */}
          <section aria-label={L.faq[lang]} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {L.faq[lang]}
            </h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details
                  key={f.q.en}
                  data-question-id={`ferroalloys-faq-${i + 1}`}
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

          {/* Glossary */}
          <aside aria-label={L.glossary[lang]} className="mb-4 rounded-lg border border-border bg-card p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">{L.glossary[lang]}</h2>
            <dl className="grid gap-4 md:grid-cols-2">
              {glossary.map((g) => (
                <div key={g.term.en}>
                  <dt className="font-semibold text-foreground">{g.term[lang]}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{g.def[lang]}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </article>
      </main>

      <Footer language={lang} />
    </div>
  );
};

export default Ferroalloys;
