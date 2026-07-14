import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { cncRouteFor, type Lang } from '@/lib/globalUi';
import { cn } from '@/lib/utils';
import type { ContentLanguage } from '@/data/pageContent';
import h200Asset from '@/assets/cases/h200-70l-c2-2025-photo-1.jpg';
import bdmhAsset from '@/assets/cases/bdmh3018-gantry-2026.jpg';
import hcFeCrAsset from '@/assets/cases/hc-fecr-2023-2024-photo-1.jpg';
import npiAsset from '@/assets/cases/npi-2023-2024-photo-1.jpg';
import HcFeCrSection from '@/components/HcFeCrSection';
import NpiSection from '@/components/NpiSection';

type L = { ru: string; en: string; zh: string };

const COPY = {
  sectionTitle: {
    ru: 'Реализованные проекты',
    en: 'Delivered projects',
    zh: '已交付项目',
  } as L,
  sectionLead: {
    ru: 'Оборудование, поставленное и введенное в эксплуатацию на предприятиях заказчиков.',
    en: 'Equipment supplied and commissioned at customer facilities.',
    zh: '已在客户现场供货并投入使用的设备。',
  } as L,
  yearLabel: {
    ru: 'Год ввода в эксплуатацию',
    en: 'Year commissioned',
    zh: '投入使用年份',
  } as L,
  viewCase: {
    ru: 'Подробнее о проекте',
    en: 'View project details',
    zh: '查看项目详情',
  } as L,
  collapseCase: {
    ru: 'Свернуть',
    en: 'Collapse',
    zh: '收起',
  } as L,
  cases: [
    {
      key: 'bdmh3018',
      anchor: 'bdmh3018-heading',
      year: '2026',
      title: {
        ru: 'Высокоскоростной портальный фрезерно-сверлильный станок с ЧПУ BDMH3018',
        en: 'BDMH3018 high-speed CNC gantry milling-and-drilling machine',
        zh: 'BDMH3018 高速数控龙门铣钻机床',
      } as L,
      alt: {
        ru: 'Портальный станок BDMH3018 в цехе заказчика',
        en: 'BDMH3018 gantry machine at the customer facility',
        zh: 'BDMH3018 龙门机床在客户车间',
      } as L,
    },
    {
      key: 'h200',
      anchor: 'case-h200-70l-c2-2025',
      year: '2025',
      title: {
        ru: 'Тяжелый круглошлифовальный станок с ЧПУ H200-70L-C2',
        en: 'H200-70L-C2 heavy-duty CNC cylindrical grinding machine',
        zh: '重型数控外圆磨床 H200-70L-C2',
      } as L,
      alt: {
        ru: 'Тяжелый круглошлифовальный станок с ЧПУ H200-70L-C2 на производственной площадке',
        en: 'H200-70L-C2 heavy-duty CNC cylindrical grinding machine at the production site',
        zh: '重型数控外圆磨床 H200-70L-C2 在生产现场',
      } as L,
    },
    {
      key: 'hc-fecr',
      anchor: 'case-hc-fecr-2023-2024',
      year: '2023–2024',
      periodLabel: {
        ru: 'Период регулярного исполнения контрактов: 2023–2024',
        en: 'Period of regular contract execution: 2023–2024',
        zh: '合同常规执行期间：2023–2024',
      } as L,
      title: {
        ru: 'Регулярные поставки ферросплавов (HC FeCr) 2023–2024',
        en: 'Regular ferroalloy supplies (HC FeCr), 2023–2024',
        zh: '2023–2024 年铁合金（HC FeCr）常态化供货',
      } as L,
      alt: {
        ru: 'Партия высокоуглеродистого феррохрома HC FeCr в биг-бегах на терминале отгрузки',
        en: 'Batch of high-carbon ferrochrome HC FeCr in big bags at the shipping terminal',
        zh: '装运码头上的高碳铬铁 HC FeCr 吨袋批次',
      } as L,
    },
    {
      key: 'npi',
      anchor: 'case-npi-2023-2024',
      year: '2023–2024',
      periodLabel: {
        ru: 'Период регулярного исполнения контрактов: 2023–2024',
        en: 'Period of regular contract execution: 2023–2024',
        zh: '合同常规执行期间：2023–2024',
      } as L,
      title: {
        ru: 'Регулярные поставки никелевого чугуна (NPI) 2023–2024',
        en: 'Regular nickel pig iron (NPI) supplies, 2023–2024',
        zh: '2023–2024 年镍生铁（NPI）常态化供货',
      } as L,
      alt: {
        ru: 'Партия никелевого чугуна NPI на площадке отгрузки',
        en: 'Batch of nickel pig iron NPI at the shipping yard',
        zh: '装运场地上的镍生铁 NPI 批次',
      } as L,
    },
  ] as const,
};

interface Props {
  language?: Lang;
}

const CaseHighlights = ({ language = 'ru' }: Props) => {
  const base = cncRouteFor(language);
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  return (
    <section
      id="delivered-cases"
      aria-labelledby="delivered-cases-title"
      className="py-12 md:py-16 scroll-mt-24"
      data-case-highlights="true"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-8 md:mb-10">
          <h2
            id="delivered-cases-title"
            className="text-2xl md:text-3xl font-bold text-foreground mb-3"
          >
            {COPY.sectionTitle[language]}
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            {COPY.sectionLead[language]}
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {COPY.cases.map((c) => {
            const isFerro = c.key === 'hc-fecr' || c.key === 'npi';
            const isExpanded = expandedKey === c.key;
            const label = isFerro
              ? c.periodLabel[language]
              : `${COPY.yearLabel[language]}: ${c.year}`;

            const img =
              c.key === 'h200'
                ? h200Asset
                : c.key === 'bdmh3018'
                ? bdmhAsset
                : c.key === 'hc-fecr'
                ? hcFeCrAsset
                : npiAsset;

            return (
              <article
                key={c.key}
                className={cn(
                  'rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col',
                  isExpanded && 'md:col-span-2'
                )}
                data-case-key={c.key}
              >
                <div className="w-full bg-muted/40 flex items-center justify-center aspect-[4/3]">
                  <img
                    src={img}
                    width={1920}
                    height={1440}
                    alt={c.alt[language]}
                    loading="lazy"
                    decoding="async"
                    className="max-w-full max-h-full w-full h-full object-cover block"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {label}
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground leading-snug">
                    {c.title[language]}
                  </h3>
                  <div className="mt-auto">
                    {isFerro ? (
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedKey(isExpanded ? null : c.key)
                        }
                        aria-expanded={isExpanded}
                        aria-controls={`case-${c.key}-details`}
                        className="inline-flex items-center text-primary font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                      >
                        {isExpanded
                          ? COPY.collapseCase[language]
                          : COPY.viewCase[language]}
                        <ChevronDown
                          className={cn(
                            'ml-2 w-4 h-4 transition-transform',
                            isExpanded && 'rotate-180'
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    ) : (
                      <Link
                        to={`${base}#${c.anchor}`}
                        className="inline-flex items-center text-primary font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                        aria-label={`${COPY.viewCase[language]}: ${c.title[language]}`}
                      >
                        {COPY.viewCase[language]}
                        <ArrowRight
                          className="ml-2 w-4 h-4"
                          aria-hidden="true"
                        />
                      </Link>
                    )}
                  </div>
                </div>

                {isFerro && isExpanded && (
                  <div
                    id={`case-${c.key}-details`}
                    className="border-t border-border"
                  >
                    {c.key === 'hc-fecr' ? (
                      <HcFeCrSection
                        lang={language as ContentLanguage}
                        embedded
                        hideHeader
                      />
                    ) : (
                      <NpiSection
                        lang={language as ContentLanguage}
                        embedded
                        hideHeader
                      />
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseHighlights;
