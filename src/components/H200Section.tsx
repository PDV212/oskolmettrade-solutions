import type { ContentLanguage } from '@/data/pageContent';
import { CheckCircle2 } from 'lucide-react';
import h200Photo1 from '@/assets/cases/h200-70l-c2-2025-photo-1.jpg';
import h200Photo2 from '@/assets/cases/h200-70l-c2-2025-photo-2.jpg';
import h200Photo3 from '@/assets/cases/h200-70l-c2-2025-photo-3.jpg';

const h200Photos = [h200Photo1, h200Photo2, h200Photo3];

type L = { ru: string; en: string; zh: string };

const t = {
  title: {
    ru: 'Тяжелый круглошлифовальный станок с ЧПУ H200-70L-C2',
    en: 'H200-70L-C2 heavy-duty CNC cylindrical grinding machine',
    zh: '重型数控外圆磨床 H200-70L-C2',
  } as L,
  status: {
    ru: 'Успешно введен в эксплуатацию в 2025 году',
    en: 'Successfully commissioned in 2025',
    zh: '2025 年成功投入使用',
  } as L,
  summary: {
    ru: 'В 2025 году ООО «ОСКОЛ-МЕТ-ТРЕЙД» выполнило комплексную поставку и ввод в эксплуатацию тяжелого круглошлифовального станка с ЧПУ H200-70L-C2. Проект включал доставку оборудования, шеф-монтаж, пусконаладочные работы, проверку рабочих систем и обучение персонала. После завершения комплекса работ станок передан в промышленную эксплуатацию.',
    en: 'In 2025, OSKOL-MET-TRADE LLC completed the turnkey supply and commissioning of the H200-70L-C2 heavy-duty CNC cylindrical grinding machine. The project covered delivery of the equipment, supervised installation, start-up and adjustment works, verification of operating systems and personnel training. Upon completion of the full scope of works, the machine was handed over for industrial operation.',
    zh: '2025 年，ОСКОЛ-МЕТ-ТРЕЙД 有限公司完成了 H200-70L-C2 重型数控外圆磨床的整体供货和投入使用。项目包括设备运输、安装监督、调试作业、运行系统检验以及人员培训。全部工作完成后，机床交付投入工业生产。',
  } as L,
  application: {
    ru: 'H200-70L-C2 предназначен для высокоточного наружного цилиндрического шлифования крупногабаритных деталей диаметром до 2 000 мм и длиной до 7 000 мм. Конструкция станка, мощный привод шлифовального круга, гидростатическая система и измерительное оснащение обеспечивают эффективную обработку тяжелых валов и других ответственных деталей.',
    en: 'The H200-70L-C2 is designed for high-precision external cylindrical grinding of large workpieces up to 2,000 mm in diameter and up to 7,000 mm in length. The machine structure, high-power grinding wheel drive, hydrostatic system and measuring equipment provide efficient machining of heavy rolls and other critical parts.',
    zh: 'H200-70L-C2 用于高精度外圆磨削直径达 2 000 mm、长度达 7 000 mm 的大型工件。机床结构、高功率砂轮驱动、静压系统和测量装置可高效加工重型轧辊及其他关键零部件。',
  } as L,
  photoAlt: {
    ru: 'Тяжелый круглошлифовальный станок с ЧПУ H200-70L-C2 на производственной площадке',
    en: 'H200-70L-C2 heavy-duty CNC cylindrical grinding machine at the production site',
    zh: '重型数控外圆磨床 H200-70L-C2 在生产现场',
  } as L,
  specHeading: {
    ru: 'Основные технические характеристики',
    en: 'Main technical specification',
    zh: '主要技术参数',
  } as L,
  configHeading: {
    ru: 'Комплектация оборудования',
    en: 'Equipment configuration',
    zh: '设备配置',
  } as L,
  worksHeading: {
    ru: 'Выполненные работы',
    en: 'Works performed',
    zh: '完成的工作',
  } as L,
  worksClosing: {
    ru: 'Комплекс работ завершен, оборудование введено в эксплуатацию и передано для выполнения производственных задач.',
    en: 'The full scope of works has been completed; the equipment has been commissioned and handed over for production duties.',
    zh: '全部工作已完成，设备已投入使用并交付执行生产任务。',
  } as L,
  cta: {
    ru: 'Обсудить проект',
    en: 'Discuss a project',
    zh: '洽谈项目',
  } as L,
  cncGroup: {
    ru: 'Система ЧПУ и измерение',
    en: 'CNC and measurement',
    zh: '数控与测量',
  } as L,
  stdGroup: {
    ru: 'Стандартное и технологическое оснащение',
    en: 'Standard and process equipment',
    zh: '标准及工艺配套',
  } as L,
  addGroup: {
    ru: 'Дополнительные системы',
    en: 'Additional systems',
    zh: '附加系统',
  } as L,
};

interface Row { k: L; v: L; }

const specRows: Row[] = [
  { k: { ru: 'Модель', en: 'Model', zh: '型号' },
    v: { ru: 'H200-70L-C2', en: 'H200-70L-C2', zh: 'H200-70L-C2' } },
  { k: { ru: 'Тип оборудования', en: 'Equipment type', zh: '设备类型' },
    v: { ru: 'Тяжелый круглошлифовальный станок с ЧПУ', en: 'Heavy-duty CNC cylindrical grinding machine', zh: '重型数控外圆磨床' } },
  { k: { ru: 'Расстояние между центрами', en: 'Distance between centers', zh: '两顶尖距离' },
    v: { ru: '7 000 мм', en: '7,000 mm', zh: '7 000 mm' } },
  { k: { ru: 'Диаметр обрабатываемой детали', en: 'Workpiece diameter', zh: '工件直径' },
    v: { ru: '600–2 000 мм', en: '600–2,000 mm', zh: '600–2 000 mm' } },
  { k: { ru: 'Наибольший диаметр над станиной', en: 'Maximum swing over bed', zh: '床身上最大回转直径' },
    v: { ru: '2 000 мм', en: '2,000 mm', zh: '2 000 mm' } },
  { k: { ru: 'Максимальный диаметр шлифования полным кругом', en: 'Maximum full-wheel grinding diameter', zh: '整砂轮最大磨削直径' },
    v: { ru: '2 000 мм', en: '2,000 mm', zh: '2 000 mm' } },
  { k: { ru: 'Размер шлифовального круга', en: 'Grinding wheel size', zh: '砂轮规格' },
    v: { ru: '910 × 80 × 304,8 мм', en: '910 × 80 × 304.8 mm', zh: '910 × 80 × 304.8 mm' } },
  { k: { ru: 'Частота вращения шлифовального круга', en: 'Grinding wheel speed', zh: '砂轮转速' },
    v: { ru: '300–1 000 об/мин', en: '300–1,000 rpm', zh: '300–1 000 r/min' } },
  { k: { ru: 'Скорость подачи по оси X', en: 'X-axis feed rate', zh: 'X 轴进给速度' },
    v: { ru: 'До 3 000 мм/мин', en: 'Up to 3,000 mm/min', zh: '最高 3 000 mm/min' } },
  { k: { ru: 'Скорость перемещения по оси Z', en: 'Z-axis traverse rate', zh: 'Z 轴移动速度' },
    v: { ru: '25–6 000 мм/мин', en: '25–6,000 mm/min', zh: '25–6 000 mm/min' } },
  { k: { ru: 'Дискретность подачи по оси X', en: 'X-axis feed resolution', zh: 'X 轴进给分辨率' },
    v: { ru: '0,001 мм/импульс', en: '0.001 mm/pulse', zh: '0.001 mm/脉冲' } },
  { k: { ru: 'Дискретность подачи по оси Z', en: 'Z-axis feed resolution', zh: 'Z 轴进给分辨率' },
    v: { ru: '0,001 мм/импульс', en: '0.001 mm/pulse', zh: '0.001 mm/脉冲' } },
  { k: { ru: 'Перемещение по оси Z', en: 'Z-axis travel', zh: 'Z 轴行程' },
    v: { ru: 'Расстояние между центрами + 8 дюймов', en: 'Distance between centers + 8 in', zh: '两顶尖距离 + 8 英寸' } },
  { k: { ru: 'Мощность привода шлифовального круга', en: 'Grinding wheel drive power', zh: '砂轮驱动功率' },
    v: { ru: '75 HP', en: '75 HP', zh: '75 HP' } },
  { k: { ru: 'Мощность привода передней бабки', en: 'Headstock drive power', zh: '主轴箱驱动功率' },
    v: { ru: '40 HP', en: '40 HP', zh: '40 HP' } },
  { k: { ru: 'Мощность привода поперечной подачи по оси X', en: 'X-axis cross-feed drive power', zh: 'X 轴横向进给驱动功率' },
    v: { ru: '3 кВт', en: '3 kW', zh: '3 kW' } },
  { k: { ru: 'Мощность привода продольного перемещения по оси Z', en: 'Z-axis longitudinal drive power', zh: 'Z 轴纵向驱动功率' },
    v: { ru: '4 кВт', en: '4 kW', zh: '4 kW' } },
  { k: { ru: 'Скорость перемещения задней бабки', en: 'Tailstock traverse speed', zh: '尾座移动速度' },
    v: { ru: '2 000 мм/мин', en: '2,000 mm/min', zh: '2 000 mm/min' } },
  { k: { ru: 'Тяжелые люнеты', en: 'Heavy-duty steady rests', zh: '重型中心架' },
    v: { ru: '2 шт., диапазон 500–800 мм', en: '2 pcs., range 500–800 mm', zh: '2 件，范围 500–800 mm' } },
  { k: { ru: 'Максимальная масса валка', en: 'Maximum roll mass', zh: '最大轧辊质量' },
    v: { ru: '62 т', en: '62 t', zh: '62 t' } },
  { k: { ru: 'Система смазки', en: 'Lubrication system', zh: '润滑系统' },
    v: { ru: 'Гидростатическая и динамическая', en: 'Hydrostatic and dynamic', zh: '静压与动压' } },
  { k: { ru: 'Электропитание', en: 'Power supply', zh: '电源' },
    v: { ru: '380 В, 50 Гц, 3 фазы', en: '380 V, 50 Hz, 3-phase', zh: '380 V, 50 Hz, 三相' } },
  { k: { ru: 'Рабочий температурный диапазон', en: 'Operating temperature range', zh: '工作温度范围' },
    v: { ru: 'От +2 до +45 °C', en: '+2 to +45 °C', zh: '+2 至 +45 °C' } },
];

const cncItems: L[] = [
  { ru: 'система ЧПУ', en: 'CNC control system', zh: '数控系统' },
  { ru: 'русскоязычный интерфейс ЧПУ', en: 'Russian-language CNC interface', zh: '俄语数控界面' },
  { ru: 'интерфейс Ethernet RJ45', en: 'Ethernet RJ45 interface', zh: 'Ethernet RJ45 接口' },
  { ru: 'линейная измерительная система FAGOR по оси X', en: 'FAGOR linear scale on the X axis', zh: 'X 轴 FAGOR 直线测量系统' },
  { ru: 'линейная измерительная система FAGOR по оси Z', en: 'FAGOR linear scale on the Z axis', zh: 'Z 轴 FAGOR 直线测量系统' },
  { ru: 'система автоматической балансировки SB1000', en: 'SB1000 automatic balancing system', zh: 'SB1000 自动平衡系统' },
  { ru: 'система контроля столкновений MARPOSS P3SE', en: 'MARPOSS P3SE collision-monitoring system', zh: 'MARPOSS P3SE 防撞监控系统' },
  { ru: 'контактный измерительный датчик MARPOSS T18 + E32R', en: 'MARPOSS T18 + E32R touch probe', zh: 'MARPOSS T18 + E32R 接触式测头' },
  { ru: 'система контроля ROLLMATE G3 с функциями ET, UT и SW', en: 'ROLLMATE G3 monitoring system with ET, UT and SW functions', zh: 'ROLLMATE G3 检测系统（ET、UT、SW 功能）' },
];

const stdItems: L[] = [
  { ru: 'устройство статической балансировки', en: 'static balancing device', zh: '静平衡装置' },
  { ru: 'центры PT#100 — 2 шт.', en: 'PT#100 centers — 2 pcs.', zh: 'PT#100 顶尖 — 2 件' },
  { ru: 'фильтрационная система MCJ240 + PFA240', en: 'MCJ240 + PFA240 filtration system', zh: 'MCJ240 + PFA240 过滤系统' },
  { ru: 'емкость системы фильтрации — 2 000 л', en: 'filtration tank capacity — 2,000 L', zh: '过滤系统容量 — 2 000 L' },
  { ru: 'съемник фланца шлифовального круга', en: 'grinding wheel flange puller', zh: '砂轮法兰拆卸器' },
  { ru: 'измерительный прибор', en: 'measuring instrument', zh: '测量仪器' },
  { ru: 'защитное ограждение', en: 'safety guard', zh: '安全防护罩' },
  { ru: 'телескопические защитные кожухи направляющих', en: 'telescopic guideway covers', zh: '导轨伸缩防护罩' },
  { ru: 'устройство правки шлифовального круга', en: 'grinding wheel dressing device', zh: '砂轮修整装置' },
  { ru: 'фланцы шлифовального круга — 3 шт.', en: 'grinding wheel flanges — 3 pcs.', zh: '砂轮法兰 — 3 件' },
  { ru: 'люнеты диапазоном 90–400 мм — 2 шт.', en: 'steady rests, 90–400 mm range — 2 pcs.', zh: '中心架 90–400 mm — 2 件' },
  { ru: 'тяжелые люнеты диапазоном 500–800 мм — 2 шт.', en: 'heavy-duty steady rests, 500–800 mm range — 2 pcs.', zh: '重型中心架 500–800 mm — 2 件' },
  { ru: 'комплект установочных опор и болтов', en: 'set of mounting supports and bolts', zh: '安装支座及螺栓组件' },
  { ru: 'комплект инструмента', en: 'tool kit', zh: '工具包' },
];

const addItems: L[] = [
  { ru: 'кондиционер электрошкафа для эксплуатации при температуре до +45 °C', en: 'electrical cabinet air conditioner for operation up to +45 °C', zh: '电气柜空调，可在最高 +45 °C 下运行' },
  { ru: 'система пылеудаления с двигателем 7,5 HP', en: 'dust extraction system with a 7.5 HP motor', zh: '带 7.5 HP 电机的除尘系统' },
  { ru: 'шлифовальный круг KINIK GC60 размером 910 × 80 × 304,8 мм', en: 'KINIK GC60 grinding wheel, 910 × 80 × 304.8 mm', zh: 'KINIK GC60 砂轮 910 × 80 × 304.8 mm' },
  { ru: 'дополнительный шлифовальный круг KINIK GC60', en: 'additional KINIK GC60 grinding wheel', zh: '附加 KINIK GC60 砂轮' },
];

const works: L[] = [
  { ru: 'организация доставки оборудования', en: 'organization of equipment delivery', zh: '组织设备运输' },
  { ru: 'разгрузка и установка станка', en: 'unloading and installation of the machine', zh: '机床卸货与安装' },
  { ru: 'шеф-монтаж', en: 'supervised installation', zh: '安装监督' },
  { ru: 'подключение и проверка рабочих систем', en: 'connection and verification of operating systems', zh: '运行系统连接与检验' },
  { ru: 'пусконаладочные работы', en: 'start-up and adjustment works', zh: '调试作业' },
  { ru: 'контроль геометрии и рабочих параметров', en: 'inspection of geometry and operating parameters', zh: '几何精度与运行参数检测' },
  { ru: 'проверка работы системы ЧПУ', en: 'CNC system operation check', zh: '数控系统运行检查' },
  { ru: 'ввод оборудования в эксплуатацию', en: 'commissioning of the equipment', zh: '设备投入使用' },
  { ru: 'обучение персонала', en: 'personnel training', zh: '人员培训' },
];

interface Props {
  lang: ContentLanguage;
  contactHref: string;
}

const ConfigList = ({ title, items, lang }: { title: string; items: L[]; lang: ContentLanguage }) => (
  <div className="rounded-lg border border-border bg-card p-5">
    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-3">{title}</h4>
    <ul className="space-y-2">
      {items.map((it) => (
        <li key={it.ru} className="flex items-start gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-primary" aria-hidden="true" />
          <span>{it[lang]}</span>
        </li>
      ))}
    </ul>
  </div>
);

const H200Section = ({ lang, contactHref }: Props) => (
  <section
    id="case-h200-70l-c2-2025"
    aria-labelledby="h200-heading"
    className="mb-12 scroll-mt-24"
    data-h200-section="true"
  >
    <div className="rounded-2xl border border-border bg-card/95 backdrop-blur-sm shadow-sm overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="bg-muted/40 p-4 flex flex-col gap-3">
          {h200Photos.map((src, i) => (
            <img
              key={src}
              src={src}
              width={1920}
              height={1440}
              alt={`${t.photoAlt[lang]} — ${i + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover rounded-md block"
            />
          ))}
        </div>
        <div className="p-6 md:p-10 flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4">
            <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
            {t.status[lang]}
          </span>
          <h2 id="h200-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t.title[lang]}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{t.summary[lang]}</p>
          <p className="text-muted-foreground leading-relaxed">{t.application[lang]}</p>
        </div>
      </div>
    </div>

    <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-10 mb-4">{t.specHeading[lang]}</h3>
    <div className="rounded-lg border border-border bg-card overflow-hidden mb-10" data-h200-spec="true">
      <dl className="divide-y divide-border">
        {specRows.map((row) => (
          <div
            key={row.k.ru}
            className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-1 sm:gap-6 px-4 md:px-6 py-3 odd:bg-muted/20"
          >
            <dt className="text-sm font-medium text-foreground">{row.k[lang]}</dt>
            <dd className="text-sm text-muted-foreground break-words">{row.v[lang]}</dd>
          </div>
        ))}
      </dl>
    </div>

    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">{t.configHeading[lang]}</h3>
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
      <ConfigList title={t.cncGroup[lang]} items={cncItems} lang={lang} />
      <ConfigList title={t.stdGroup[lang]} items={stdItems} lang={lang} />
      <ConfigList title={t.addGroup[lang]} items={addItems} lang={lang} />
    </div>

    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">{t.worksHeading[lang]}</h3>
    <div className="rounded-lg border border-border bg-card p-5 md:p-6 mb-4">
      <ul className="grid sm:grid-cols-2 gap-2">
        {works.map((w) => (
          <li key={w.ru} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-primary" aria-hidden="true" />
            <span>{w[lang]}</span>
          </li>
        ))}
      </ul>
    </div>
    <p className="text-foreground font-medium leading-relaxed mb-8">{t.worksClosing[lang]}</p>

    <a
      href={contactHref}
      className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-primary-foreground font-medium hover:opacity-90 transition"
    >
      {t.cta[lang]}
    </a>
  </section>
);

export default H200Section;
