import type { ContentLanguage } from '@/data/pageContent';
import h200Asset from '@/assets/cases/h200-70l-c2-2025.png.asset.json';

type L = { ru: string; en: string; zh: string };

const t = {
  h2: {
    ru: 'Поставка и ввод в эксплуатацию тяжелого круглошлифовального станка с ЧПУ H200-70L-C2 — 2025 год',
    en: 'Supply and commissioning of the H200-70L-C2 heavy-duty CNC cylindrical grinding machine — 2025',
    zh: '重型数控外圆磨床 H200-70L-C2 的供货与投入使用 — 2025 年',
  } as L,
  shortDesc: {
    ru: 'В 2025 году организована поставка и выполнен ввод в промышленную эксплуатацию тяжелого круглошлифовального станка с ЧПУ модели H200-70L-C2. Клиент и место установки не раскрываются в соответствии с условиями о конфиденциальности.',
    en: 'In 2025, the supply and industrial commissioning of the H200-70L-C2 heavy-duty CNC cylindrical grinding machine were carried out. The customer and installation site are not disclosed under the applicable confidentiality terms.',
    zh: '2025 年，完成了 H200-70L-C2 重型数控外圆磨床的供货及工业投运。根据保密条款，不披露客户及安装地点。',
  } as L,
  photoHeading: {
    ru: 'Фотография станка на площадке заказчика',
    en: 'Photograph of the machine at the customer site',
    zh: '客户现场机床照片',
  } as L,
  photoAlt: {
    ru: 'Тяжелый круглошлифовальный станок с ЧПУ H200-70L-C2 на производственной площадке',
    en: 'H200-70L-C2 heavy-duty CNC cylindrical grinding machine at the production site',
    zh: '重型数控外圆磨床 H200-70L-C2 在生产现场',
  } as L,
  photoCap: {
    ru: 'Тяжелый круглошлифовальный станок с ЧПУ H200-70L-C2. Введен в эксплуатацию в 2025 году. Клиент и место установки не раскрываются.',
    en: 'H200-70L-C2 heavy-duty CNC cylindrical grinding machine. Commissioned in 2025. Customer and site are not disclosed.',
    zh: '重型数控外圆磨床 H200-70L-C2。2025 年投入使用。客户与地点不予披露。',
  } as L,
  specHeading: {
    ru: 'Технические характеристики',
    en: 'Technical specification',
    zh: '技术参数',
  } as L,
  accuracyNoteHeading: {
    ru: 'Пояснение к значениям точности',
    en: 'Note on accuracy values',
    zh: '关于精度数值的说明',
  } as L,
  accuracyNote: {
    ru: 'Значение 0,001 мм/импульс относится к дискретности подачи по управляемым осям и не является подтвержденной измеренной точностью обработки. Допуски приведены как проектные (спецификация и план приемо-сдаточных испытаний). Незаполненные поля протоколов испытаний не публикуются как подтвержденные результаты.',
    en: 'The value 0.001 mm/pulse refers to the feed increment on the controlled axes and is not a confirmed measured machining accuracy. The tolerances listed are project values (specification and acceptance-test plan). Blank fields in test protocols are not published as confirmed results.',
    zh: '数值 0.001 mm/脉冲 为受控轴的进给分辨率，并非经过测量确认的加工精度。所列公差为项目值（规格书及验收测试计划）。测试记录中的空白栏不作为已确认结果发布。',
  } as L,
  commissioningHeading: {
    ru: 'Статус',
    en: 'Status',
    zh: '状态',
  } as L,
  commissioning: {
    ru: 'Введен в эксплуатацию в 2025 году.',
    en: 'Commissioned in 2025.',
    zh: '2025 年投入使用。',
  } as L,
  cta: {
    ru: 'Обсудить проект',
    en: 'Discuss a project',
    zh: '洽谈项目',
  } as L,
};

interface Row { k: L; v: L; }
interface Group { title: L; rows: Row[]; }

const specGroups: Group[] = [
  {
    title: { ru: 'Общая конфигурация', en: 'General configuration', zh: '总体配置' },
    rows: [
      { k: { ru: 'Модель', en: 'Model', zh: '型号' },
        v: { ru: 'H200-70L-C2', en: 'H200-70L-C2', zh: 'H200-70L-C2' } },
      { k: { ru: 'Тип', en: 'Type', zh: '类型' },
        v: {
          ru: 'Тяжелый круглошлифовальный станок с ЧПУ',
          en: 'Heavy-duty CNC cylindrical grinding machine',
          zh: '重型数控外圆磨床',
        } },
      { k: { ru: 'Год ввода в эксплуатацию', en: 'Year commissioned', zh: '投入使用年份' },
        v: { ru: '2025', en: '2025', zh: '2025' } },
    ],
  },
  {
    title: { ru: 'Управление и подача', en: 'Control and feed', zh: '控制与进给' },
    rows: [
      { k: {
          ru: 'Дискретность подачи (программная)',
          en: 'Feed increment (programmable)',
          zh: '进给分辨率（可编程）',
        },
        v: {
          ru: '0,001 мм/импульс (дискретность подачи, не подтвержденная точность обработки)',
          en: '0.001 mm/pulse (feed increment, not a confirmed machining accuracy)',
          zh: '0.001 mm/脉冲（进给分辨率，非经确认的加工精度）',
        } },
    ],
  },
  {
    title: { ru: 'Допуски (проектные / по плану испытаний)', en: 'Tolerances (project / test-plan)', zh: '公差（项目/测试计划值）' },
    rows: [
      { k: { ru: 'Результаты приемо-сдаточных испытаний', en: 'Acceptance-test results', zh: '验收测试结果' },
        v: {
          ru: 'Не публикуются: поля протоколов не заполнены — подтвержденные измеренные значения точности обработки не приводятся.',
          en: 'Not published: protocol fields are blank — no confirmed measured machining-accuracy values are reported.',
          zh: '不予发布：测试记录字段为空白 — 不提供经确认的加工精度实测值。',
        } },
    ],
  },
  {
    title: { ru: 'Конфиденциальность', en: 'Confidentiality', zh: '保密' },
    rows: [
      { k: { ru: 'Заказчик', en: 'Customer', zh: '客户' },
        v: { ru: 'Не раскрывается', en: 'Not disclosed', zh: '不予披露' } },
      { k: { ru: 'Место установки', en: 'Installation site', zh: '安装地点' },
        v: { ru: 'Не раскрывается', en: 'Not disclosed', zh: '不予披露' } },
      { k: { ru: 'Коммерческие условия', en: 'Commercial terms', zh: '商务条款' },
        v: {
          ru: 'Не публикуются',
          en: 'Not published',
          zh: '不予发布',
        } },
    ],
  },
];

interface Props {
  lang: ContentLanguage;
  contactHref: string;
}

const H200Section = ({ lang, contactHref }: Props) => (
  <section
    id="case-h200-70l-c2-2025"
    aria-labelledby="h200-heading"
    className="mb-12 scroll-mt-24"
    data-h200-section="true"
  >
    <h2
      id="h200-heading"
      className="text-2xl md:text-3xl font-bold text-foreground mb-4"
    >
      {t.h2[lang]}
    </h2>

    <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl">
      {t.shortDesc[lang]}
    </p>

    <h3 className="text-xl font-semibold text-foreground mb-4">{t.photoHeading[lang]}</h3>
    <figure
      className="mb-8 rounded-lg overflow-hidden border border-border bg-muted/40 max-w-3xl mx-auto"
      data-h200-photo="true"
    >
      <div className="w-full bg-muted/40 flex items-center justify-center">
        <img
          src={h200Asset.url}
          width={1299}
          height={1732}
          alt={t.photoAlt[lang]}
          loading="lazy"
          decoding="async"
          className="w-full h-auto max-h-[80vh] object-contain block"
        />
      </div>
      <figcaption className="p-3 text-sm text-muted-foreground bg-card">
        {t.photoCap[lang]}
      </figcaption>
    </figure>

    <h3 className="text-xl font-semibold text-foreground mb-4">{t.specHeading[lang]}</h3>
    <div className="rounded-lg border border-border bg-card overflow-hidden mb-6" data-h200-spec="true">
      {specGroups.map((grp) => (
        <div key={grp.title.ru} className="border-b border-border last:border-b-0">
          <h4 className="font-semibold text-foreground text-sm px-4 py-2 bg-muted/40 uppercase tracking-wide">
            {grp.title[lang]}
          </h4>
          <dl className="divide-y divide-border">
            {grp.rows.map((row) => (
              <div
                key={row.k.ru}
                className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-1 sm:gap-4 px-4 py-3"
              >
                <dt className="text-sm font-medium text-foreground">{row.k[lang]}</dt>
                <dd className="text-sm text-muted-foreground break-words">{row.v[lang]}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>

    <h3 className="text-xl font-semibold text-foreground mb-3">{t.accuracyNoteHeading[lang]}</h3>
    <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl italic">
      {t.accuracyNote[lang]}
    </p>

    <h3 className="text-xl font-semibold text-foreground mb-3">{t.commissioningHeading[lang]}</h3>
    <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">
      {t.commissioning[lang]}
    </p>

    <a
      href={contactHref}
      className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-primary-foreground font-medium hover:opacity-90 transition"
    >
      {t.cta[lang]}
    </a>
  </section>
);

export default H200Section;
