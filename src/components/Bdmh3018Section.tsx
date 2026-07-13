import type { ContentLanguage } from '@/data/pageContent';

// Eagerly import every generated variant as a URL string so Vite hashes the
// files, emits them into the client build (and, per vite.config.ts, into the
// SSR build under the same /assets/images/ path) and lets the SSR HTML
// reference the same URLs that the client shipped.
const variantUrls = import.meta.glob('@/assets/bdmh3018/*.{avif,webp,jpg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

type Fmt = 'avif' | 'webp' | 'jpg';

// Per-image metadata: actual generated widths (descriptors match real pixel
// widths of the encoded files) plus intrinsic aspect ratio of the largest
// derivative. Widths must equal the decoded pixel width of each file — a
// dist-time validator enforces this.
interface ImageMeta {
  widths: readonly number[];
  intrinsic: { w: number; h: number };
}

const IMAGES: Record<string, ImageMeta> = {
  'bdmh3018-machining': { widths: [640, 1024, 1600], intrinsic: { w: 1600, h: 1178 } },
  'bdmh3018-machined-workpiece': { widths: [640, 1024, 1200], intrinsic: { w: 1200, h: 1550 } },
  'bdmh3018-side-view': { widths: [640, 1024, 1280], intrinsic: { w: 1280, h: 1300 } },
  'bdmh3018-gantry-overview': { widths: [640, 1024, 1600], intrinsic: { w: 1600, h: 1183 } },
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

interface FigureProps {
  name: keyof typeof IMAGES;
  alt: string;
  caption: string;
}

const Figure = ({ name, alt, caption }: FigureProps) => {
  const dims = IMAGES[name].intrinsic;
  return (
    <figure className="rounded-lg overflow-hidden border border-border bg-card">
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
          className="w-full h-auto block bg-muted"
        />
      </picture>
      <figcaption className="p-3 text-sm text-muted-foreground">{caption}</figcaption>
    </figure>
  );
};

const t = {
  h2: {
    ru: 'BDMH3018 — портальный фрезерно-сверлильный станок с ЧПУ',
    en: 'BDMH3018 — CNC gantry milling-and-drilling machine',
    zh: 'BDMH3018 — 数控龙门铣钻机床',
  },
  intro: {
    ru: 'BDMH3018 — крупногабаритный портальный фрезерно-сверлильный комплекс с ЧПУ, предназначенный для обработки балок, рам, плит и других металлических заготовок. Компоновка с подвижным порталом и несколькими шпиндельными узлами позволяет выполнять обработку в пяти доступных плоскостях и сокращать число переустановок заготовки.',
    en: 'BDMH3018 is a large CNC gantry milling-and-drilling machine designed for machining beams, frames, plates and other metal workpieces. The moving-gantry layout with several spindle units enables machining across five accessible planes and reduces the number of workpiece repositionings.',
    zh: 'BDMH3018 为大型数控龙门铣钻加工设备，适用于加工梁、框架、板材及其他金属工件。移动式龙门结构配合多个主轴单元，可在五个可达加工面上进行加工，减少工件重新装夹次数。',
  },
  planesTitle: {
    ru: 'Многокоординатная обработка',
    en: 'Multi-coordinate machining',
    zh: '多坐标加工',
  },
  planesText: {
    ru: 'Многокоординатная обработка крупногабаритных металлических заготовок в пяти плоскостях без неоднократной переустановки заготовки.',
    en: 'Multi-coordinate machining of large metal workpieces across five accessible planes, reducing repeated workpiece repositioning.',
    zh: '在五个可达加工面上对大型金属工件进行多坐标加工，减少重复装夹次数。（此处所述“五个可达加工面”指工件在一次装夹下可被加工到的五个面，不等同于五轴联动。）',
  },
  configTitle: {
    ru: 'Ключевая конфигурация',
    en: 'Key configuration',
    zh: '主要配置',
  },
  // Only facts traceable to the owner-supplied text description are listed here.
  // Numeric travels/spindle power/accuracy/electrical values are intentionally
  // omitted until they can be mapped to a source document that applies to the
  // exact delivered configuration.
  configRows: [
    {
      k: { ru: 'Модель', en: 'Model', zh: '型号' },
      v: { ru: 'BDMH3018', en: 'BDMH3018', zh: 'BDMH3018' },
    },
    {
      k: { ru: 'Тип', en: 'Type', zh: '类型' },
      v: {
        ru: 'Портальный фрезерно-сверлильный станок с ЧПУ',
        en: 'CNC gantry milling-and-drilling machine',
        zh: '数控龙门铣钻机床',
      },
    },
    {
      k: { ru: 'Компоновка', en: 'Layout', zh: '结构' },
      v: {
        ru: 'Подвижный портал; несколько шпиндельных узлов',
        en: 'Moving gantry; multiple spindle units',
        zh: '移动式龙门；多主轴单元',
      },
    },
    {
      k: { ru: 'Обрабатываемые плоскости', en: 'Accessible machining planes', zh: '可达加工面' },
      v: {
        ru: 'До пяти доступных плоскостей заготовки',
        en: 'Up to five accessible workpiece planes',
        zh: '最多五个可达加工面',
      },
    },
    {
      k: { ru: 'Назначение', en: 'Application', zh: '用途' },
      v: {
        ru: 'Обработка крупногабаритных металлических заготовок (балки, рамы, плиты)',
        en: 'Machining of large metal workpieces (beams, frames, plates)',
        zh: '加工大型金属工件（梁、框架、板材）',
      },
    },
  ] as const,
  configNote: {
    ru: 'Точные значения ходов, мощности, скорости шпинделя, точности позиционирования и параметров электропитания зависят от исполнения и подтверждаются документацией к конкретной поставке.',
    en: 'Exact travel ranges, spindle power and speed, positioning accuracy and electrical parameters depend on the configuration and are confirmed by the documentation for the specific supply.',
    zh: '各轴行程、主轴功率与转速、定位精度及电源参数取决于具体配置，并以该次供货的技术文件为准。',
  },
  commissioning: {
    ru: 'В июне 2026 года станок BDMH3018 введён в промышленную эксплуатацию на производстве заказчика. На странице представлены фотографии оборудования и обработанной заготовки. Наименование заказчика и производственная площадка не раскрываются.',
    en: 'The BDMH3018 machine was commissioned at a customer’s production facility in June 2026. The photographs show the equipment and a machined workpiece. The customer and facility are not identified.',
    zh: 'BDMH3018 机床于 2026 年 6 月在客户生产现场投入使用。本页图片仅展示设备及加工后的金属工件。客户名称及生产现场不予披露。',
  },
  cta: {
    ru: 'Обсудить проект',
    en: 'Discuss a project',
    zh: '洽谈项目',
  },
  gallery: [
    {
      name: 'bdmh3018-machining',
      alt: {
        ru: 'Портальный станок BDMH3018 обрабатывает длинную металлическую заготовку',
        en: 'BDMH3018 gantry machine machining a long metal workpiece',
        zh: 'BDMH3018 龙门机床正在加工长条形金属工件',
      },
      cap: {
        ru: 'Портальный станок BDMH3018 обрабатывает крупногабаритную металлическую заготовку.',
        en: 'The BDMH3018 gantry machine machining a large metal workpiece.',
        zh: 'BDMH3018 龙门机床加工大型金属工件。',
      },
    },
    {
      name: 'bdmh3018-machined-workpiece',
      alt: {
        ru: 'Металлическая заготовка с фрезерованной поверхностью и отверстиями',
        en: 'Metal workpiece with a milled surface and drilled holes',
        zh: '带铣削表面和钻孔的金属工件',
      },
      cap: {
        ru: 'Поверхность крупногабаритной металлической заготовки после фрезерной обработки.',
        en: 'Surface of a large metal workpiece after milling.',
        zh: '大型金属工件铣削加工后的表面。',
      },
    },
    {
      name: 'bdmh3018-side-view',
      alt: {
        ru: 'Портальный станок BDMH3018, вид сбоку',
        en: 'BDMH3018 gantry machine, side view',
        zh: 'BDMH3018 龙门机床侧视图',
      },
      cap: {
        ru: 'Портальный фрезерно-сверлильный станок BDMH3018, вид сбоку.',
        en: 'BDMH3018 gantry milling-and-drilling machine, side view.',
        zh: 'BDMH3018 数控龙门铣钻机床侧视图。',
      },
    },
    {
      name: 'bdmh3018-gantry-overview',
      alt: {
        ru: 'Портальный станок BDMH3018 над двумя рабочими зонами',
        en: 'BDMH3018 gantry machine above two working zones',
        zh: 'BDMH3018 龙门机床跨越两个工作区',
      },
      cap: {
        ru: 'Портальный станок BDMH3018 над двумя рабочими зонами.',
        en: 'The BDMH3018 gantry machine above two working zones.',
        zh: 'BDMH3018 龙门机床跨越两个工作区。',
      },
    },
  ] as const,
};

interface Props {
  lang: ContentLanguage;
  contactHref: string;
}

const Bdmh3018Section = ({ lang, contactHref }: Props) => (
  <section aria-labelledby="bdmh3018-heading" className="mb-12">
    <h2
      id="bdmh3018-heading"
      className="text-2xl md:text-3xl font-bold text-foreground mb-4"
    >
      {t.h2[lang]}
    </h2>
    <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">{t.intro[lang]}</p>

    <div className="grid sm:grid-cols-2 gap-4 mb-8">
      {t.gallery.map((g) => (
        <Figure key={g.name} name={g.name} alt={g.alt[lang]} caption={g.cap[lang]} />
      ))}
    </div>

    <div className="rounded-lg border border-border bg-card p-5 mb-6">
      <h3 className="font-semibold text-foreground mb-2">{t.planesTitle[lang]}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{t.planesText[lang]}</p>
    </div>

    <div className="rounded-lg border border-border bg-card overflow-hidden mb-6">
      <h3 className="font-semibold text-foreground p-4 border-b border-border">
        {t.configTitle[lang]}
      </h3>
      <dl className="divide-y divide-border">
        {t.configRows.map((row) => (
          <div key={row.k.ru} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 p-4">
            <dt className="text-sm font-medium text-foreground">{row.k[lang]}</dt>
            <dd className="text-sm text-muted-foreground sm:col-span-2">{row.v[lang]}</dd>
          </div>
        ))}
      </dl>
      <p className="text-xs text-muted-foreground italic px-4 py-3 border-t border-border">
        {t.configNote[lang]}
      </p>
    </div>

    <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-4xl">
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

export default Bdmh3018Section;
