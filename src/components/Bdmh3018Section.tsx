import type { ContentLanguage } from '@/data/pageContent';

// Eagerly import every generated variant so Vite hashes/emits them and SSR
// references match client bundle URLs.
const variantUrls = import.meta.glob('@/assets/bdmh3018/*.{avif,webp,jpg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

type Fmt = 'avif' | 'webp' | 'jpg';

interface ImageMeta {
  widths: readonly number[];
  intrinsic: { w: number; h: number };
}

const IMAGES: Record<string, ImageMeta> = {
  'bdmh3018-machining':          { widths: [640, 1024, 1600], intrinsic: { w: 1600, h: 1200 } },
  'bdmh3018-workshop-view':      { widths: [640, 1024, 1600], intrinsic: { w: 1600, h: 1200 } },
  'bdmh3018-side-view':          { widths: [640, 1024, 1600], intrinsic: { w: 1600, h: 1200 } },
  'bdmh3018-gantry-overview':    { widths: [640, 1024, 1600], intrinsic: { w: 1600, h: 1200 } },
  'bdmh3018-machined-workpiece': { widths: [640, 1024, 1440], intrinsic: { w: 1440, h: 1920 } },
};

function urlFor(name: string, w: number, fmt: Fmt): string {
  const suffix = `/bdmh3018/${name}-${w}.${fmt}`;
  const key = Object.keys(variantUrls).find((k) => k.endsWith(suffix));
  if (!key) throw new Error(`missing bdmh3018 asset: ${suffix}`);
  return variantUrls[key];
}

function srcset(name: string, fmt: Fmt): string {
  return IMAGES[name].widths.map((w) => `${urlFor(name, w, fmt)} ${w}w`).join(', ');
}

type ImageName = keyof typeof IMAGES & string;

interface FigureProps {
  name: ImageName;
  alt: string;
  caption: string;
}

const Figure = ({ name, alt, caption }: FigureProps) => {
  const dims = IMAGES[name].intrinsic;
  return (
    <figure className="rounded-lg overflow-hidden border border-border bg-muted/30 flex flex-col">
      <div className="w-full bg-muted/40 flex items-center justify-center">
        <picture>
          <source type="image/avif" srcSet={srcset(name, 'avif')} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px" />
          <source type="image/webp" srcSet={srcset(name, 'webp')} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px" />
          <img
            src={urlFor(name, 1024, 'jpg')}
            srcSet={srcset(name, 'jpg')}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
            width={dims.w}
            height={dims.h}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain block"
          />
        </picture>
      </div>
      <figcaption className="p-3 text-sm text-muted-foreground bg-card">{caption}</figcaption>
    </figure>
  );
};

// Owner-approved specification block (values verified for the delivered
// BDMH3018 configuration; wording matches the approved technical source).
type L = { ru: string; en: string; zh: string };

const t = {
  h2: {
    ru: 'Высокоскоростной портальный фрезерно-сверлильный станок с ЧПУ BDMH3018',
    en: 'High-speed BDMH3018 CNC gantry milling-and-drilling machine',
    zh: 'BDMH3018 高速数控龙门铣钻机床',
  } as L,
  shortDesc: {
    ru: 'BDMH3018 — высокоскоростной портальный фрезерно-сверлильный станок с ЧПУ для высокоточной обработки крупногабаритных балок, рам, плит и других металлических конструкций. Станок выполняет обработку в пяти плоскостях, оснащён тремя шпиндельными узлами и имеет 12 подвижных координат: X, X2, Y, Y2, Y3, W, W2, Z, Z2, Z3, V1 и V2.',
    en: 'BDMH3018 is a high-speed CNC gantry milling-and-drilling machine for high-precision machining of large beams, frames, plates and other metal structures. It machines in five planes, carries three spindle units and has 12 moving coordinates: X, X2, Y, Y2, Y3, W, W2, Z, Z2, Z3, V1 and V2.',
    zh: 'BDMH3018 是一台高速数控龙门铣钻机床，用于对大型梁、框架、板材及其他金属结构件进行高精度加工。可在五个加工面上作业，配备三个主轴单元，共 12 个运动坐标：X、X2、Y、Y2、Y3、W、W2、Z、Z2、Z3、V1 和 V2。',
  } as L,
  galleryHeading: {
    ru: 'Фотографии оборудования',
    en: 'Equipment photographs',
    zh: '设备照片',
  } as L,
  videoHeading: {
    ru: 'Видео работы оборудования',
    en: 'Equipment operation video',
    zh: '设备运行视频',
  } as L,
  videoCaption: {
    ru: 'Работа станка BDMH3018 на производственной площадке (июнь 2026).',
    en: 'BDMH3018 machine in operation at the production facility (June 2026).',
    zh: 'BDMH3018 机床在生产现场运行（2026 年 6 月）。',
  } as L,
  fullDescHeading: {
    ru: 'Полное техническое описание',
    en: 'Full technical description',
    zh: '完整技术说明',
  } as L,
  fullDesc: {
    ru: 'BDMH3018 — высокоскоростной портальный фрезерно-сверлильный станок с ЧПУ, построенный по схеме с подвижным порталом. Компоновка предназначена для обработки крупногабаритных металлических изделий — балок, рам, плит и подобных сварно-механических конструкций. Оборудование выполняет фрезерные и сверлильные операции в пяти плоскостях заготовки за одну установку, что сокращает число переустановок и повышает точность взаимного расположения обработанных поверхностей. Три шпиндельных узла (SP1 — верхний, SP2 — левый, SP3 — правый) и 12 подвижных координат (X, X2, Y, Y2, Y3, W, W2, Z, Z2, Z3, V1, V2) под управлением системы ЧПУ обеспечивают многокоординатную обработку. X и X2 образуют синхронизированную продольную пару портала, W и W2 — соответствующую пару поперечных перемещений. Станок питается от сети 380 В / 50 Гц с установленной мощностью до 200 кВ·А. В июне 2026 года оборудование введено в промышленную эксплуатацию на производстве заказчика.',
    en: 'BDMH3018 is a high-speed CNC gantry milling-and-drilling machine built around a moving-gantry portal. The layout is intended for machining large metal products — beams, frames, plates and similar welded-mechanical structures. The machine performs milling and drilling operations in five planes of the workpiece in a single setup, reducing the number of repositionings and improving the mutual accuracy of machined surfaces. Three spindle units (SP1 — upper, SP2 — left, SP3 — right) and 12 moving coordinates (X, X2, Y, Y2, Y3, W, W2, Z, Z2, Z3, V1, V2) under CNC control enable multi-coordinate machining. X and X2 form the synchronized longitudinal portal pair, W and W2 form the corresponding synchronized cross-travel pair. The machine is supplied from a 380 V / 50 Hz network with an installed capacity of up to 200 kVA. It was commissioned for industrial operation at the customer\u2019s production facility in June 2026.',
    zh: 'BDMH3018 是一台高速数控龙门铣钻机床，采用移动式龙门结构。该布局用于加工大型金属产品——梁、框架、板材及类似的焊接机械结构件。设备在一次装夹下可对工件的五个加工面进行铣削和钻孔，减少重复装夹次数，提高各加工面之间的相互精度。三个主轴单元（SP1 — 上主轴，SP2 — 左主轴，SP3 — 右主轴）与 12 个运动坐标（X、X2、Y、Y2、Y3、W、W2、Z、Z2、Z3、V1、V2）在数控系统控制下实现多坐标加工。X 与 X2 构成龙门的同步纵向对，W 与 W2 构成对应的同步横向对。设备电源为 380 V / 50 Hz，装机容量最高 200 kVA。2026 年 6 月，该设备在客户生产现场投入工业运行。',
  } as L,
  specHeading: {
    ru: 'Технические характеристики',
    en: 'Technical specification',
    zh: '技术参数',
  } as L,
  coordHeading: {
    ru: 'Координаты и шпиндельные узлы',
    en: 'Coordinates and spindle units',
    zh: '坐标与主轴单元',
  } as L,
  coordText: {
    ru: 'Станок имеет 12 подвижных координат: X, X2, Y, Y2, Y3, W, W2, Z, Z2, Z3, V1 и V2. X и X2 — синхронизированная продольная пара портала. W и W2 — соответствующая синхронизированная пара. Три шпиндельных узла: SP1 (верхний) использует свою верхнюю группу координат; SP2 (левый) использует левую группу координат; SP3 (правый) использует правую группу координат. Такая конфигурация обеспечивает обработку в пяти плоскостях заготовки без её переустановки.',
    en: 'The machine has 12 moving coordinates: X, X2, Y, Y2, Y3, W, W2, Z, Z2, Z3, V1 and V2. X and X2 form the synchronized longitudinal portal pair. W and W2 form the corresponding synchronized pair. Three spindle units are provided: SP1 (upper) uses its upper coordinate group; SP2 (left) uses the left coordinate group; SP3 (right) uses the right coordinate group. This configuration enables machining in five planes of the workpiece without repositioning it.',
    zh: '本机床共有 12 个运动坐标：X、X2、Y、Y2、Y3、W、W2、Z、Z2、Z3、V1 和 V2。X 与 X2 为龙门的同步纵向对，W 与 W2 为对应的同步坐标对。设有三个主轴单元：SP1（上主轴）使用其上部坐标组；SP2（左主轴）使用左侧坐标组；SP3（右主轴）使用右侧坐标组。该配置可在无需重复装夹的情况下加工工件的五个面。',
  } as L,
  resultsHeading: {
    ru: 'Результаты обработки',
    en: 'Machining results',
    zh: '加工成果',
  } as L,
  resultsText: {
    ru: 'Пример крупногабаритной металлической детали после фрезерной и сверлильной обработки на оборудовании BDMH3018.',
    en: 'Example of a large metal part after milling and drilling on the BDMH3018 machine.',
    zh: 'BDMH3018 机床铣削和钻孔加工后的大型金属零件示例。',
  } as L,
  commissioningHeading: {
    ru: 'Ввод в эксплуатацию',
    en: 'Commissioning',
    zh: '投入使用',
  } as L,
  commissioning: {
    ru: 'В июне 2026 года станок BDMH3018 успешно введён в промышленную эксплуатацию на производстве заказчика. В ходе пусконаладочных работ выполнены настройка оборудования, проверка работы координатных и шпиндельных узлов и тестовая обработка крупногабаритных металлических конструкций.',
    en: 'In June 2026 the BDMH3018 machine was successfully commissioned for industrial operation at the customer\u2019s production facility. During commissioning, the equipment was set up, the coordinate and spindle units were checked and test machining of large metal structures was performed.',
    zh: '2026 年 6 月，BDMH3018 机床在客户生产现场成功投入工业运行。在调试过程中，完成了设备的调整、各坐标与主轴单元的功能检查，以及大型金属结构件的试加工。',
  } as L,
  cta: {
    ru: 'Обсудить проект',
    en: 'Discuss a project',
    zh: '洽谈项目',
  } as L,

  // Equipment gallery — four owner-approved originals, machine first.
  gallery: [
    {
      name: 'bdmh3018-machining',
      alt: {
        ru: 'Портальный станок BDMH3018 обрабатывает длинную металлическую заготовку',
        en: 'BDMH3018 gantry machine machining a long metal workpiece',
        zh: 'BDMH3018 龙门机床正在加工长条形金属工件',
      } as L,
      cap: {
        ru: 'Станок BDMH3018 в работе на производственной площадке.',
        en: 'BDMH3018 machine in operation on the shop floor.',
        zh: 'BDMH3018 机床在车间运行。',
      } as L,
    },
    {
      name: 'bdmh3018-workshop-view',
      alt: {
        ru: 'Общий вид портального станка BDMH3018 в цехе заказчика',
        en: 'General view of the BDMH3018 gantry machine in the customer workshop',
        zh: 'BDMH3018 龙门机床在客户车间的整体视图',
      } as L,
      cap: {
        ru: 'Общий вид оборудования BDMH3018 в цехе заказчика.',
        en: 'General view of the BDMH3018 equipment in the customer workshop.',
        zh: 'BDMH3018 设备在客户车间的整体视图。',
      } as L,
    },
    {
      name: 'bdmh3018-side-view',
      alt: {
        ru: 'Портальный станок BDMH3018, вид сбоку',
        en: 'BDMH3018 gantry machine, side view',
        zh: 'BDMH3018 龙门机床侧视图',
      } as L,
      cap: {
        ru: 'Станок BDMH3018, вид сбоку.',
        en: 'BDMH3018 machine, side view.',
        zh: 'BDMH3018 机床侧视图。',
      } as L,
    },
    {
      name: 'bdmh3018-gantry-overview',
      alt: {
        ru: 'Портальный станок BDMH3018 над двумя рабочими зонами',
        en: 'BDMH3018 gantry machine above two working zones',
        zh: 'BDMH3018 龙门机床跨越两个工作区',
      } as L,
      cap: {
        ru: 'Портал BDMH3018 над двумя рабочими зонами.',
        en: 'The BDMH3018 gantry above two working zones.',
        zh: 'BDMH3018 龙门跨越两个工作区。',
      } as L,
    },
  ] as const,

  workpiece: {
    name: 'bdmh3018-machined-workpiece' as const,
    alt: {
      ru: 'Крупногабаритная металлическая деталь с фрезерованной поверхностью и отверстиями после обработки на BDMH3018',
      en: 'Large metal part with a milled surface and drilled holes after machining on the BDMH3018',
      zh: 'BDMH3018 加工后的带铣削表面和钻孔的大型金属零件',
    } as L,
    cap: {
      ru: 'Крупногабаритная металлическая деталь после фрезерной и сверлильной обработки на BDMH3018.',
      en: 'Large metal part after milling and drilling on the BDMH3018.',
      zh: 'BDMH3018 铣削和钻孔加工后的大型金属零件。',
    } as L,
  },
};

// Specification rows — grouped for readability, presented as a stacked
// definition list on mobile and a two-column layout on wider viewports.
// All numeric values are owner-approved for the delivered BDMH3018.
interface Row { k: L; v: L; }
interface Group { title: L; rows: Row[]; }

const specGroups: Group[] = [
  {
    title: { ru: 'Общая конфигурация', en: 'General configuration', zh: '总体配置' },
    rows: [
      { k: { ru: 'Модель', en: 'Model', zh: '型号' },
        v: { ru: 'BDMH3018', en: 'BDMH3018', zh: 'BDMH3018' } },
      { k: { ru: 'Тип', en: 'Type', zh: '类型' },
        v: { ru: 'Высокоскоростной портальный фрезерно-сверлильный станок с ЧПУ',
             en: 'High-speed CNC gantry milling-and-drilling machine',
             zh: '高速数控龙门铣钻机床' } },
      { k: { ru: 'Компоновка', en: 'Layout', zh: '结构' },
        v: { ru: 'Подвижный портал', en: 'Moving gantry', zh: '移动式龙门' } },
    ],
  },
  {
    title: { ru: 'Рабочие ходы', en: 'Working travels', zh: '工作行程' },
    rows: [
      { k: { ru: 'Ход X', en: 'X travel', zh: 'X 行程' },
        v: { ru: 'до 14 000 мм', en: 'up to 14,000 mm', zh: '最高 14,000 mm' } },
      { k: { ru: 'Ходы Y / Y2 / Y3', en: 'Y / Y2 / Y3 travels', zh: 'Y / Y2 / Y3 行程' },
        v: { ru: 'по документации поставки', en: 'per supply documentation', zh: '以供货文件为准' } },
      { k: { ru: 'Ходы W / W2', en: 'W / W2 travels', zh: 'W / W2 行程' },
        v: { ru: 'по документации поставки', en: 'per supply documentation', zh: '以供货文件为准' } },
      { k: { ru: 'Ходы Z / Z2 / Z3', en: 'Z / Z2 / Z3 travels', zh: 'Z / Z2 / Z3 行程' },
        v: { ru: 'по документации поставки', en: 'per supply documentation', zh: '以供货文件为准' } },
      { k: { ru: 'Ходы V1 / V2', en: 'V1 / V2 travels', zh: 'V1 / V2 行程' },
        v: { ru: 'по документации поставки', en: 'per supply documentation', zh: '以供货文件为准' } },
    ],
  },
  {
    title: { ru: 'Координатная система', en: 'Coordinate system', zh: '坐标系统' },
    rows: [
      { k: { ru: 'Число подвижных координат', en: 'Moving coordinates', zh: '运动坐标数' },
        v: { ru: '12', en: '12', zh: '12' } },
      { k: { ru: 'Обозначения', en: 'Designations', zh: '坐标名称' },
        v: { ru: 'X, X2, Y, Y2, Y3, W, W2, Z, Z2, Z3, V1, V2',
             en: 'X, X2, Y, Y2, Y3, W, W2, Z, Z2, Z3, V1, V2',
             zh: 'X、X2、Y、Y2、Y3、W、W2、Z、Z2、Z3、V1、V2' } },
      { k: { ru: 'Число обрабатываемых плоскостей', en: 'Machining planes', zh: '加工面数' },
        v: { ru: '5', en: '5', zh: '5' } },
    ],
  },
  {
    title: { ru: 'Шпиндельные узлы', en: 'Spindle units', zh: '主轴单元' },
    rows: [
      { k: { ru: 'Количество шпиндельных узлов', en: 'Number of spindle units', zh: '主轴单元数量' },
        v: { ru: '3 (SP1 верхний, SP2 левый, SP3 правый)',
             en: '3 (SP1 upper, SP2 left, SP3 right)',
             zh: '3 个（SP1 上主轴，SP2 左主轴，SP3 右主轴）' } },
      { k: { ru: 'Мощность шпинделя', en: 'Spindle power', zh: '主轴功率' },
        v: { ru: 'до 45 кВт', en: 'up to 45 kW', zh: '最高 45 kW' } },
      { k: { ru: 'Частота вращения шпинделя', en: 'Spindle speed', zh: '主轴转速' },
        v: { ru: 'до 5 000 об/мин', en: 'up to 5,000 rpm', zh: '最高 5,000 rpm' } },
    ],
  },
  {
    title: { ru: 'Инструментальный интерфейс', en: 'Tool interface', zh: '刀具接口' },
    rows: [
      { k: { ru: 'Интерфейс шпинделя', en: 'Spindle interface', zh: '主轴接口' },
        v: { ru: 'HSK-A100', en: 'HSK-A100', zh: 'HSK-A100' } },
    ],
  },
  {
    title: { ru: 'Точность', en: 'Accuracy', zh: '精度' },
    rows: [
      { k: { ru: 'Точность позиционирования', en: 'Positioning accuracy', zh: '定位精度' },
        v: { ru: 'по документации поставки', en: 'per supply documentation', zh: '以供货文件为准' } },
    ],
  },
  {
    title: { ru: 'Электропитание', en: 'Electrical requirements', zh: '电源要求' },
    rows: [
      { k: { ru: 'Напряжение сети', en: 'Supply voltage', zh: '供电电压' },
        v: { ru: '380 В', en: '380 V', zh: '380 V' } },
      { k: { ru: 'Частота сети', en: 'Supply frequency', zh: '供电频率' },
        v: { ru: '50 Гц', en: '50 Hz', zh: '50 Hz' } },
      { k: { ru: 'Установленная мощность', en: 'Installed capacity', zh: '装机容量' },
        v: { ru: 'до 200 кВ·А', en: 'up to 200 kVA', zh: '最高 200 kVA' } },
    ],
  },
  {
    title: { ru: 'Возможности обработки', en: 'Machining capability', zh: '加工能力' },
    rows: [
      { k: { ru: 'Операции', en: 'Operations', zh: '加工操作' },
        v: { ru: 'Фрезерование, сверление',
             en: 'Milling, drilling',
             zh: '铣削、钻孔' } },
      { k: { ru: 'Обрабатываемые изделия', en: 'Workpieces', zh: '加工工件' },
        v: { ru: 'Балки, рамы, плиты и другие крупногабаритные металлические конструкции',
             en: 'Beams, frames, plates and other large metal structures',
             zh: '梁、框架、板材及其他大型金属结构件' } },
    ],
  },
  {
    title: { ru: 'Статус ввода в эксплуатацию', en: 'Commissioning status', zh: '投入使用状态' },
    rows: [
      { k: { ru: 'Ввод в эксплуатацию', en: 'Commissioning', zh: '投入使用' },
        v: { ru: 'Июнь 2026 г. — введён в промышленную эксплуатацию',
             en: 'June 2026 — commissioned for industrial operation',
             zh: '2026 年 6 月 — 投入工业运行' } },
    ],
  },
];

const VIDEO_SRC = '/media/bdmh3018/bdmh3018-commissioning.mp4';
const VIDEO_POSTER = '/media/bdmh3018/bdmh3018-commissioning-poster.jpg';

interface Props {
  lang: ContentLanguage;
  contactHref: string;
}

const Bdmh3018Section = ({ lang, contactHref }: Props) => (
  <section aria-labelledby="bdmh3018-heading" className="mb-12" data-bdmh3018-section="true">
    <h2
      id="bdmh3018-heading"
      className="text-2xl md:text-3xl font-bold text-foreground mb-4"
    >
      {t.h2[lang]}
    </h2>

    {/* 1. Short technical description */}
    <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl" data-bdmh3018-short="true">
      {t.shortDesc[lang]}
    </p>

    {/* 2. Equipment-photo gallery (four originals, machine first) */}
    <h3 className="text-xl font-semibold text-foreground mb-4">{t.galleryHeading[lang]}</h3>
    <div
      className="grid sm:grid-cols-2 gap-4 mb-8"
      data-bdmh3018-equipment-gallery="true"
    >
      {t.gallery.map((g) => (
        <Figure key={g.name} name={g.name} alt={g.alt[lang]} caption={g.cap[lang]} />
      ))}
    </div>

    {/* 3. Original video */}
    <h3 className="text-xl font-semibold text-foreground mb-4">{t.videoHeading[lang]}</h3>
    <figure className="mb-8 rounded-lg overflow-hidden border border-border bg-black" data-bdmh3018-video="true">
      <video
        controls
        playsInline
        preload="metadata"
        poster={VIDEO_POSTER}
        aria-label={t.videoCaption[lang]}
        className="w-full h-auto block"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <figcaption className="p-3 text-sm text-muted-foreground bg-card">{t.videoCaption[lang]}</figcaption>
    </figure>

    {/* 4. Full technical description */}
    <h3 className="text-xl font-semibold text-foreground mb-3">{t.fullDescHeading[lang]}</h3>
    <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl whitespace-pre-line">
      {t.fullDesc[lang]}
    </p>

    {/* 5. Full specification table */}
    <h3 className="text-xl font-semibold text-foreground mb-4">{t.specHeading[lang]}</h3>
    <div className="rounded-lg border border-border bg-card overflow-hidden mb-8" data-bdmh3018-spec="true">
      {specGroups.map((grp) => (
        <div key={grp.title.ru} className="border-b border-border last:border-b-0">
          <h4 className="font-semibold text-foreground text-sm px-4 py-2 bg-muted/40 uppercase tracking-wide">
            {grp.title[lang]}
          </h4>
          <dl className="divide-y divide-border">
            {grp.rows.map((row) => (
              <div key={row.k.ru} className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-1 sm:gap-4 px-4 py-3">
                <dt className="text-sm font-medium text-foreground">{row.k[lang]}</dt>
                <dd className="text-sm text-muted-foreground break-words">{row.v[lang]}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>

    {/* 6. Coordinate and spindle explanation */}
    <h3 className="text-xl font-semibold text-foreground mb-3">{t.coordHeading[lang]}</h3>
    <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl">{t.coordText[lang]}</p>

    {/* 7. Machining-result subsection */}
    <h3 className="text-xl font-semibold text-foreground mb-3">{t.resultsHeading[lang]}</h3>
    <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">{t.resultsText[lang]}</p>
    <div className="mb-8 max-w-2xl" data-bdmh3018-workpiece="true">
      <Figure name={t.workpiece.name} alt={t.workpiece.alt[lang]} caption={t.workpiece.cap[lang]} />
    </div>

    {/* 8. Commissioning */}
    <h3 className="text-xl font-semibold text-foreground mb-3">{t.commissioningHeading[lang]}</h3>
    <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">{t.commissioning[lang]}</p>

    {/* 9. CTA */}
    <a
      href={contactHref}
      className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-primary-foreground font-medium hover:opacity-90 transition"
    >
      {t.cta[lang]}
    </a>
  </section>
);

export default Bdmh3018Section;
