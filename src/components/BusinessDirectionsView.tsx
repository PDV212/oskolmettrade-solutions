import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import OptimizedImage from '@/components/ui/optimized-image';
import {
  businessDirections,
  businessDirectionsIntro,
  type Lang,
} from '@/data/businessDirections';

interface Props {
  language: Lang;
}

const ui = {
  ru: { learnMore: 'Подробнее', consultation: 'Получить консультацию', featuresLabel: 'Особенности' },
  en: { learnMore: 'Learn more', consultation: 'Get a consultation', featuresLabel: 'Features' },
  zh: { learnMore: '了解更多', consultation: '获取咨询', featuresLabel: '特点' },
} as const;

const scrollToContacts = () => {
  const el = document.querySelector('#contacts');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const BusinessDirectionsView = ({ language }: Props) => {
  const t = ui[language];
  const intro = businessDirectionsIntro;

  return (
    <section id="directions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">{intro.heading[language]}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {intro.lead[language]}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-12 mb-8 px-4">
            {intro.gallery.map((g) => (
              <div
                key={g.src}
                className="w-[480px] h-[480px] max-w-full flex items-center justify-center bg-muted/50 rounded-lg p-4 flex-shrink-0"
              >
                <OptimizedImage
                  src={g.src}
                  alt={g.alt}
                  className="w-[480px] h-[480px] max-w-full opacity-80 hover:opacity-100 transition-opacity"
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {businessDirections.map((direction, index) => {
            const Icon = direction.icon;
            return (
              <article
                key={direction.id}
                id={direction.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                itemScope
                itemType="https://schema.org/Service"
              >
                <div
                  className={`${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  } animate-industrial-slide-up`}
                >
                  <header
                    className={`inline-flex items-center space-x-3 p-4 rounded-xl ${direction.gradient} mb-6`}
                  >
                    <Icon className={`w-8 h-8 ${direction.iconColor}`} />
                    <div>
                      <h3 className="text-2xl font-bold text-foreground" itemProp="name">
                        {direction.title[language]}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {direction.subtitle[language]}
                      </p>
                    </div>
                  </header>

                  <p className="text-lg text-industrial mb-6" itemProp="description">
                    {direction.description[language]}
                  </p>

                  <section aria-label={t.featuresLabel} className="space-y-3 mb-8">
                    {direction.features.map((feature) => (
                      <div key={feature.id}>
                        <div className="flex items-start space-x-3">
                          <CheckCircle2
                            className={`w-5 h-5 ${direction.iconColor} mt-0.5 flex-shrink-0`}
                            aria-hidden="true"
                          />
                          <span className="text-muted-foreground">
                            {feature.label[language]}
                          </span>
                        </div>
                        {feature.image && (
                          <figure className="ml-8 mt-3">
                            <div className="w-[480px] h-[480px] max-w-full flex items-center justify-center bg-muted/50 rounded-lg p-4">
                              <OptimizedImage
                                src={feature.image}
                                alt={feature.label[language]}
                                className="w-[480px] h-[480px] max-w-full opacity-90 hover:opacity-100 transition-opacity"
                                objectFit="contain"
                                loading="lazy"
                              />
                            </div>
                            <figcaption className="sr-only">
                              {feature.label[language]}
                            </figcaption>
                          </figure>
                        )}
                      </div>
                    ))}
                  </section>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {direction.actionType === 'external-link' && direction.externalUrl ? (
                      <a
                        href={direction.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-industrial inline-flex items-center justify-center"
                      >
                        {direction.externalLabel?.[language] ?? t.learnMore}
                        <ExternalLink className="ml-2 w-4 h-4" aria-hidden="true" />
                      </a>
                    ) : (
                      <Button
                        className="btn-industrial"
                        onClick={scrollToContacts}
                        type="button"
                      >
                        {t.learnMore}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    )}
                    <Button
                      className="btn-steel"
                      onClick={scrollToContacts}
                      type="button"
                    >
                      {t.consultation}
                    </Button>
                  </div>
                </div>

                {direction.image && (
                  <figure
                    className={`${
                      index % 2 === 1 ? 'lg:col-start-1' : ''
                    } animate-industrial-fade-in`}
                  >
                    <Card className="card-industrial overflow-hidden">
                      <div className="relative h-96">
                        <OptimizedImage
                          src={direction.image}
                          alt={direction.title[language]}
                          className="w-full h-full"
                          objectFit="contain"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <figcaption className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center space-x-2 text-white">
                            <Icon className="w-6 h-6" aria-hidden="true" />
                            <span className="font-semibold">
                              {direction.title[language]}
                            </span>
                          </div>
                        </figcaption>
                      </div>
                    </Card>
                  </figure>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessDirectionsView;
