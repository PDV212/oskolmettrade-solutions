import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cncRouteFor, type Lang } from '@/lib/globalUi';

// Reuse the approved BDMH3018 responsive derivatives already emitted for
// /cnc-machines. Importing via the same glob shape keeps Vite hashing and
// asset placement consistent across pages.
const variantUrls = import.meta.glob(
  '@/assets/bdmh3018/bdmh3018-machining-*.{avif,webp,jpg}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>;

const url = (w: number, fmt: 'avif' | 'webp' | 'jpg'): string => {
  const suffix = `/bdmh3018/bdmh3018-machining-${w}.${fmt}`;
  const key = Object.keys(variantUrls).find((k) => k.endsWith(suffix));
  if (!key) throw new Error(`missing bdmh3018-machining asset ${suffix}`);
  return variantUrls[key];
};

const srcset = (fmt: 'avif' | 'webp' | 'jpg') =>
  [640, 1024, 1600].map((w) => `${url(w, fmt)} ${w}w`).join(', ');

interface Copy {
  eyebrow: string;
  supporting: string;
  title: string;
  description: string;
  categoriesLabel: string;
  categories: string[];
  cta: string;
  alt: string;
}


const COPY: Record<Lang, Copy> = {
  ru: {
    eyebrow: 'Металлообрабатывающее оборудование',
    supporting: 'Подбор и организация поставки оборудования по техническому заданию заказчика',
    title: 'Станки с ЧПУ',

    description:
      'Подбор и организация поставки металлообрабатывающего оборудования с ЧПУ для машиностроительных и металлургических предприятий. Конфигурация, производитель, автоматизация и состав проекта определяются по техническому заданию и фиксируются в коммерческом предложении и договоре.',
    categoriesLabel: 'Основные категории оборудования',
    categories: [
      'Вертикальные и горизонтальные обрабатывающие центры с ЧПУ',
      'Токарные обрабатывающие центры с ЧПУ',
      'Шлифовальные станки с ЧПУ',
      'Гидравлические прессы',
      'Роботизированные системы сварки и покраски — по проекту',
      'Автоматизированные металлорежущие комплексы — по техническому заданию',
    ],
    cta: 'Смотреть станки и оборудование',
    alt: 'Портальный станок BDMH3018 в цехе заказчика — обработка крупногабаритной заготовки',
  },
  en: {
    eyebrow: 'Metalworking equipment',
    supporting: 'Selection and supply coordination of equipment based on the customer’s technical requirements',
    title: 'CNC Machines',

    description:
      'Selection and supply coordination of CNC metalworking equipment for mechanical engineering and metallurgical enterprises. The configuration, manufacturer, automation scope and project composition are determined from the technical requirements and specified in the commercial proposal and contract.',
    categoriesLabel: 'Main equipment categories',
    categories: [
      'Vertical and horizontal CNC machining centers',
      'CNC turning centers',
      'CNC grinding machines',
      'Hydraulic presses',
      'Robotic welding and painting systems — per project',
      'Automated metal-cutting systems — subject to technical requirements',
    ],
    cta: 'View CNC machines',
    alt: 'BDMH3018 gantry CNC machine at a customer facility machining a large workpiece',
  },
  zh: {
    eyebrow: '金属加工设备',
    supporting: '根据客户技术要求进行设备选型与供货组织',
    title: '数控机床',

    description:
      '为机械制造和冶金企业提供数控金属加工设备的选型及供货协调服务。设备配置、制造商、自动化范围及项目组成根据技术要求确定，并在商务报价和合同中明确。',
    categoriesLabel: '主要设备类别',
    categories: [
      '立式与卧式数控加工中心',
      '数控车削中心',
      '数控磨床',
      '液压机',
      '机器人焊接与喷涂系统 — 按项目协商',
      '带上料与成品接收系统的自动化金属切削生产线 — 依据技术要求',
    ],
    cta: '查看数控机床',
    alt: 'BDMH3018 龙门数控机床在客户车间加工大型工件',
  },
};

interface Props {
  language?: Lang;
}

const CncFeatureCard = ({ language = 'ru' }: Props) => {
  const copy = COPY[language];
  const href = cncRouteFor(language);

  return (
    <section
      id="equipment"
      aria-labelledby="equipment-parent-title"
      className="py-12 md:py-16 bg-muted/30 scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-8 md:mb-10">
          <h2
            id="equipment-parent-title"
            className="text-2xl md:text-4xl font-bold text-foreground mb-3"
          >
            {copy.eyebrow}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            {copy.supporting}
          </p>
        </header>
        <article className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="relative bg-black/5 aspect-[4/3] md:aspect-auto">
            <picture>
              <source type="image/avif" srcSet={srcset('avif')} sizes="(max-width: 768px) 100vw, 50vw" />
              <source type="image/webp" srcSet={srcset('webp')} sizes="(max-width: 768px) 100vw, 50vw" />
              <img
                src={url(1024, 'jpg')}
                srcSet={srcset('jpg')}
                sizes="(max-width: 768px) 100vw, 50vw"
                width={1600}
                height={1200}
                alt={copy.alt}
                loading="lazy"
                decoding="async"
                className="block w-full h-full object-cover"
              />
            </picture>
          </div>
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-primary mb-2">
              {copy.eyebrow}
            </p>
            <h3
              id="cnc-feature-title"
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
            >
              {copy.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {copy.description}
            </p>

            <p className="text-sm font-semibold text-foreground mb-2">
              {copy.categoriesLabel}
            </p>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 mb-6">
              {copy.categories.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <div>
              <Button
                asChild
                size="lg"
                className="w-full md:w-auto focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Link to={href} aria-label={copy.cta}>
                  {copy.cta}
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CncFeatureCard;
