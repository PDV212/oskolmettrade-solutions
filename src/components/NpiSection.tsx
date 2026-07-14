import type { ContentLanguage } from '@/data/pageContent';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import photo1 from '@/assets/cases/npi-2023-2024-photo-1.jpg';
import photo2 from '@/assets/cases/npi-2023-2024-photo-2.jpg';
import photo3 from '@/assets/cases/npi-2023-2024-photo-3.jpg';
import photo4 from '@/assets/cases/npi-2023-2024-photo-4.jpg';
import photo5 from '@/assets/cases/npi-2023-2024-photo-5.jpg';
import photo6 from '@/assets/cases/npi-2023-2024-photo-6.jpg';
import photo7 from '@/assets/cases/npi-2023-2024-photo-7.jpg';

type L = { ru: string; en: string; zh: string };

const photos: { src: string; w: number; h: number }[] = [
  { src: photo1, w: 1824, h: 1368 },
  { src: photo2, w: 1824, h: 1368 },
  { src: photo3, w: 1368, h: 1824 },
  { src: photo4, w: 1824, h: 1368 },
  { src: photo5, w: 1824, h: 1368 },
  { src: photo6, w: 1824, h: 1368 },
  { src: photo7, w: 1824, h: 1368 },
];

const t = {
  title: {
    ru: 'Регулярные поставки никелевого чугуна (NPI) 2023–2024',
    en: 'Regular nickel pig iron (NPI) supplies, 2023–2024',
    zh: '2023–2024 年镍生铁（NPI）常态化供货',
  } as L,
  status: {
    ru: 'Период регулярного исполнения контрактов: 2023–2024',
    en: 'Period of regular contract execution: 2023–2024',
    zh: '合同常规执行期间：2023–2024',
  } as L,
  summary: {
    ru: 'В 2023–2024 годах ООО «ОСКОЛ-МЕТ-ТРЕЙД» обеспечило регулярные поставки никелевого чугуна (Nickel Pig Iron, NPI) из Индонезии. Материал отгружался в биг-бегах морскими контейнерами в адрес российских металлургических предприятий.',
    en: 'In 2023–2024, OSKOL-MET-TRADE LLC provided regular supplies of nickel pig iron (NPI) from Indonesia. The material was shipped in big bags via sea containers to Russian metallurgical plants.',
    zh: '2023–2024 年，ОСКОЛ-МЕТ-ТРЕЙД 有限公司持续从印度尼西亚进口镍生铁（NPI）。物料以吨袋包装，由海运集装箱发往俄罗斯冶金企业。',
  } as L,
  application: {
    ru: 'Никелевый чугун применяется в металлургии в качестве сырья при выплавке нержавеющих сталей аустенитного класса, обеспечивая необходимое содержание никеля и снижая себестоимость шихты по сравнению с использованием чистого никеля.',
    en: 'Nickel pig iron is used in metallurgy as a feedstock for austenitic stainless steel production, providing the required nickel content and reducing charge cost compared with pure nickel.',
    zh: '镍生铁在冶金行业用于奥氏体不锈钢冶炼，为炉料提供所需的镍含量，相较于使用纯镍可显著降低成本。',
  } as L,
  photoAlt: {
    ru: 'Партия никелевого чугуна NPI на площадке отгрузки',
    en: 'Batch of nickel pig iron NPI at the shipping yard',
    zh: '装运场地上的镍生铁 NPI 批次',
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
    v: { ru: 'Никелевый чугун (Nickel Pig Iron, NPI)', en: 'Nickel Pig Iron (NPI)', zh: '镍生铁 (NPI)' } },
  { k: { ru: 'Страна происхождения', en: 'Country of origin', zh: '原产国' },
    v: { ru: 'Индонезия', en: 'Indonesia', zh: '印度尼西亚' } },
  { k: { ru: 'Fe (железо)', en: 'Fe (iron)', zh: 'Fe（铁）' },
    v: { ru: 'более 70,00 %', en: '> 70.00%', zh: '大于 70.00%' } },
  { k: { ru: 'C (углерод)', en: 'C (carbon)', zh: 'C（碳）' },
    v: { ru: 'не более 3,00 %', en: '3.00% max', zh: '不大于 3.00%' } },
  { k: { ru: 'Cr (хром)', en: 'Cr (chromium)', zh: 'Cr（铬）' },
    v: { ru: 'не более 0,50 %', en: '0.50% max', zh: '不大于 0.50%' } },
  { k: { ru: 'Si (кремний)', en: 'Si (silicon)', zh: 'Si（硅）' },
    v: { ru: 'не более 0,50 %', en: '0.50% max', zh: '不大于 0.50%' } },
  { k: { ru: 'Mn (марганец)', en: 'Mn (manganese)', zh: 'Mn（锰）' },
    v: { ru: 'не более 0,30 %', en: '0.30% max', zh: '不大于 0.30%' } },
  { k: { ru: 'P (фосфор)', en: 'P (phosphorus)', zh: 'P（磷）' },
    v: { ru: 'не более 0,030 %', en: '0.030% max', zh: '不大于 0.030%' } },
  { k: { ru: 'S (сера)', en: 'S (sulphur)', zh: 'S（硫）' },
    v: { ru: 'не более 0,40 %', en: '0.40% max', zh: '不大于 0.40%' } },
  { k: { ru: 'Cu (медь)', en: 'Cu (copper)', zh: 'Cu（铜）' },
    v: { ru: 'не более 0,20 %', en: '0.20% max', zh: '不大于 0.20%' } },
  { k: { ru: 'Pb (свинец)', en: 'Pb (lead)', zh: 'Pb（铅）' },
    v: { ru: 'не более 0,01 %', en: '0.01% max', zh: '不大于 0.01%' } },
  { k: { ru: 'Размер куска', en: 'Piece size', zh: '块度尺寸' },
    v: { ru: '540 × 230 × 90 мм', en: '540 × 230 × 90 mm', zh: '540 × 230 × 90 mm' } },
  { k: { ru: 'Вес куска', en: 'Piece weight', zh: '单块重量' },
    v: { ru: '≈ 40 кг/шт (±)', en: '≈ 40 kg/pc (±)', zh: '约 40 kg/块 (±)' } },
  { k: { ru: 'Упаковка', en: 'Packaging', zh: '包装' },
    v: { ru: 'Биг-беги', en: 'Big bags', zh: '吨袋' } },
  { k: { ru: 'Период поставок', en: 'Supply period', zh: '供货周期' },
    v: { ru: '2023–2024 годы, регулярные отгрузки', en: '2023–2024, regular shipments', zh: '2023–2024 年，常态化发货' } },
];

interface Props {
  lang: ContentLanguage;
  embedded?: boolean;
  hideHeader?: boolean;
}

const NpiSection = ({ lang, embedded, hideHeader }: Props) => {
  const Wrapper = embedded ? 'div' : 'section';

  return (
    <Wrapper
      id="case-npi-2023-2024"
      aria-labelledby={!hideHeader ? 'npi-heading' : undefined}
      className={cn(!embedded && 'py-12 md:py-16 scroll-mt-24')}
      data-npi-section="true"
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
                  id="npi-heading"
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
          data-npi-spec="true"
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

export default NpiSection;
