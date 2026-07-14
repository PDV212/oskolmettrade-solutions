import type { ContentLanguage } from '@/data/pageContent';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import photo1 from '@/assets/cases/hc-fecr-2023-2024-photo-1.jpg';
import photo2 from '@/assets/cases/hc-fecr-2023-2024-photo-2.jpg';
import photo3 from '@/assets/cases/hc-fecr-2023-2024-photo-3.jpg';
import photo4 from '@/assets/cases/hc-fecr-2023-2024-photo-4.jpg';

type L = { ru: string; en: string; zh: string };

const photos: { src: string; w: number; h: number }[] = [
  { src: photo1, w: 1824, h: 1368 },
  { src: photo2, w: 1440, h: 1920 },
  { src: photo3, w: 1920, h: 1440 },
  { src: photo4, w: 1920, h: 1440 },
];

const t = {
  title: {
    ru: 'Регулярные поставки ферросплавов (HC FeCr) 2023–2024',
    en: 'Regular ferroalloy supplies (HC FeCr), 2023–2024',
    zh: '2023–2024 年铁合金（HC FeCr）常态化供货',
  } as L,
  status: {
    ru: 'Регулярные поставки выполнены в 2023–2024 годах',
    en: 'Regular supplies delivered in 2023–2024',
    zh: '2023–2024 年已完成常态化供货',
  } as L,
  summary: {
    ru: 'В 2023–2024 годах ООО «ОСКОЛ-МЕТ-ТРЕЙД» обеспечило регулярные поставки высокоуглеродистого феррохрома (HC FeCr) из Индии. Материал поставлялся в биг-бегах по 1 тонне и отгружался морскими контейнерами в адрес металлургических предприятий.',
    en: 'In 2023–2024, OSKOL-MET-TRADE LLC ensured regular supplies of high-carbon ferrochrome (HC FeCr) from India. The material was shipped in 1-tonne big bags and dispatched in sea containers to metallurgical plants.',
    zh: '2023–2024 年，ОСКОЛ-МЕТ-ТРЕЙД 有限公司持续从印度进口高碳铬铁（HC FeCr）。物料以每袋 1 吨的吨袋包装，由海运集装箱发往冶金企业。',
  } as L,
  application: {
    ru: 'Высокоуглеродистый феррохром применяется в металлургии в качестве легирующей добавки при выплавке нержавеющих и конструкционных марок сталей, а также специальных сплавов, повышая прочность, износостойкость и коррозионную устойчивость готового проката.',
    en: 'High-carbon ferrochrome is used in metallurgy as an alloying additive in the production of stainless and structural steel grades, as well as special alloys, improving the strength, wear resistance and corrosion resistance of the finished rolled product.',
    zh: '高碳铬铁作为合金添加剂用于不锈钢、结构钢及特种合金冶炼，可提高成品钢材的强度、耐磨性和耐蚀性。',
  } as L,
  photoAlt: {
    ru: 'Партия высокоуглеродистого феррохрома HC FeCr в биг-бегах на терминале отгрузки',
    en: 'Batch of high-carbon ferrochrome HC FeCr in big bags at the shipping terminal',
    zh: '装运码头上的高碳铬铁 HC FeCr 吨袋批次',
  } as L,
  specHeading: {
    ru: 'Спецификация материала',
    en: 'Material specification',
    zh: '物料规格',
  } as L,
};

interface Row { k: L; v: L; }

const specRows: Row[] = [
  { k: { ru: 'Наименование', en: 'Product', zh: '产品名称' },
    v: { ru: 'Высокоуглеродистый феррохром (HC FeCr)', en: 'High-carbon ferrochrome (HC FeCr)', zh: '高碳铬铁 (HC FeCr)' } },
  { k: { ru: 'Страна происхождения', en: 'Country of origin', zh: '原产国' },
    v: { ru: 'Индия', en: 'India', zh: '印度' } },
  { k: { ru: 'Базовое содержание хрома', en: 'Base chromium content', zh: '基准铬含量' },
    v: { ru: '55 %', en: '55%', zh: '55%' } },
  { k: { ru: 'Cr', en: 'Cr', zh: 'Cr' },
    v: { ru: 'не менее 55 %', en: '55% min', zh: '不小于 55%' } },
  { k: { ru: 'C (углерод)', en: 'C (carbon)', zh: 'C（碳）' },
    v: { ru: 'не более 8,5 %', en: '8.5% max', zh: '不大于 8.5%' } },
  { k: { ru: 'Si (кремний)', en: 'Si (silicon)', zh: 'Si（硅）' },
    v: { ru: 'не более 4 %', en: '4% max', zh: '不大于 4%' } },
  { k: { ru: 'P (фосфор)', en: 'P (phosphorus)', zh: 'P（磷）' },
    v: { ru: 'не более 0,05 %', en: '0.05% max', zh: '不大于 0.05%' } },
  { k: { ru: 'S (сера)', en: 'S (sulphur)', zh: 'S（硫）' },
    v: { ru: 'не более 0,07 %', en: '0.07% max', zh: '不大于 0.07%' } },
  { k: { ru: 'Фракция', en: 'Size', zh: '粒度' },
    v: { ru: '3–50 мм (chips), не менее 90 %', en: '3–50 mm chips, 90% min', zh: '3–50 mm 碎块，不小于 90%' } },
  { k: { ru: 'Упаковка', en: 'Packaging', zh: '包装' },
    v: { ru: 'Биг-беги по 1 тонне', en: '1-tonne big bags', zh: '1 吨吨袋' } },
  { k: { ru: 'Период поставок', en: 'Supply period', zh: '供货周期' },
    v: { ru: '2023–2024 годы, регулярные отгрузки', en: '2023–2024, regular shipments', zh: '2023–2024 年，常态化发货' } },
];

interface Props {
  lang: ContentLanguage;
  embedded?: boolean;
  hideHeader?: boolean;
}

const HcFeCrSection = ({ lang, embedded, hideHeader }: Props) => {
  const Wrapper = embedded ? 'div' : 'section';

  return (
    <Wrapper
      id="case-hc-fecr-2023-2024"
      aria-labelledby={!hideHeader ? 'hc-fecr-heading' : undefined}
      className={cn(!embedded && 'py-12 md:py-16 scroll-mt-24')}
      data-hc-fecr-section="true"
    >
      <div className={cn(!embedded && 'container mx-auto px-4')}>
        <div
          className={cn(
            'grid lg:grid-cols-2 gap-0',
            !embedded &&
              'rounded-2xl border border-border bg-card/95 backdrop-blur-sm shadow-sm overflow-hidden'
          )}
        >
          <div className="bg-muted/40 p-4 grid grid-cols-2 gap-3 content-start">
            {photos.map((p, i) => (
              <img
                key={p.src}
                src={p.src}
                width={p.w}
                height={p.h}
                alt={`${t.photoAlt[lang]} — ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-md block aspect-[4/3]"
              />
            ))}
          </div>
          <div className="p-6 md:p-10 flex flex-col justify-center">
            {!hideHeader && (
              <>
                <span className="inline-flex items-center gap-2 self-start rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                  {t.status[lang]}
                </span>
                <h2
                  id="hc-fecr-heading"
                  className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                >
                  {t.title[lang]}
                </h2>
              </>
            )}
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.summary[lang]}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.application[lang]}
            </p>
          </div>
        </div>

        <h3
          className={cn(
            'text-xl md:text-2xl font-semibold text-foreground mb-4',
            embedded ? 'mt-6' : 'mt-10'
          )}
        >
          {t.specHeading[lang]}
        </h3>
        <div
          className="rounded-lg border border-border bg-card overflow-hidden"
          data-hc-fecr-spec="true"
        >
          <dl className="divide-y divide-border">
            {specRows.map((row) => (
              <div
                key={row.k.ru}
                className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-1 sm:gap-6 px-4 md:px-6 py-3 odd:bg-muted/20"
              >
                <dt className="text-sm font-medium text-foreground">
                  {row.k[lang]}
                </dt>
                <dd className="text-sm text-muted-foreground break-words">
                  {row.v[lang]}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Wrapper>
  );
};

export default HcFeCrSection;
