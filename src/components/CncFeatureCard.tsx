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
  title: string;
  description: string;
  cta: string;
  alt: string;
}

const COPY: Record<Lang, Copy> = {
  ru: {
    eyebrow: 'Металлообрабатывающее оборудование',
    title: 'Станки с ЧПУ',
    description:
      'Подбор и организация поставки оборудования для обработки крупногабаритных металлических заготовок. Фотографии и описание портального станка BDMH3018, введённого в эксплуатацию в июне 2026 года.',
    cta: 'Смотреть станки и оборудование',
    alt: 'Портальный станок BDMH3018 в цехе заказчика — обработка крупногабаритной заготовки',
  },
  en: {
    eyebrow: 'Metalworking equipment',
    title: 'CNC Machines',
    description:
      'Selection and supply coordination for equipment used to machine large metal workpieces. View photographs and details of the BDMH3018 gantry machine commissioned in June 2026.',
    cta: 'View CNC machines',
    alt: 'BDMH3018 gantry CNC machine at a customer facility machining a large workpiece',
  },
  zh: {
    eyebrow: '金属加工设备',
    title: '数控机床',
    description:
      '面向大型金属工件加工设备的选型与供货协调。查看于2026年6月投入运行的BDMH3018龙门机床照片与说明。',
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
      aria-labelledby="cnc-feature-title"
      className="py-12 md:py-16 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <article className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="relative bg-black/5">
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
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              {copy.eyebrow}
            </p>
            <h2
              id="cnc-feature-title"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4"
            >
              {copy.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {copy.description}
            </p>
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
