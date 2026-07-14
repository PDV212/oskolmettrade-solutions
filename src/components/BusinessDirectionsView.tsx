import { ArrowRight, ExternalLink } from 'lucide-react';
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
  ru: { learnMore: 'Подробнее', consultation: 'Получить консультацию' },
  en: { learnMore: 'Learn more', consultation: 'Get a consultation' },
  zh: { learnMore: '了解更多', consultation: '获取咨询' },
} as const;

const scrollToContacts = () => {
  const el = document.querySelector('#contacts');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const BusinessDirectionsView = ({ language }: Props) => {
  const t = ui[language];
  const intro = businessDirectionsIntro;

  return (
    <section id="directions" className="py-16 md:py-20 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="heading-section mb-4">{intro.heading[language]}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {intro.lead[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {businessDirections.map((direction) => {
            const Icon = direction.icon;
            const isExternal =
              direction.actionType === 'external-link' && direction.externalUrl;
            return (
              <Card
                key={direction.id}
                id={direction.id}
                className="flex flex-col overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow scroll-mt-24"
                itemScope
                itemType="https://schema.org/Service"
              >
                {direction.image && (
                  <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                    <OptimizedImage
                      src={direction.image}
                      alt={direction.title[language]}
                      className="w-full h-full"
                      objectFit="cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-6">
                  <div className={`inline-flex items-center gap-2 mb-3 ${direction.iconColor}`}>
                    <Icon className="w-6 h-6" aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {direction.subtitle[language]}
                    </span>
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold text-foreground mb-3"
                    itemProp="name"
                  >
                    {direction.title[language]}
                  </h3>
                  <p
                    className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1"
                    itemProp="description"
                  >
                    {direction.description[language]}
                  </p>
                  <div className="mt-auto">
                    {isExternal ? (
                      <a
                        href={direction.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-semibold"
                      >
                        {direction.externalLabel?.[language] ?? t.learnMore}
                        <ExternalLink className="ml-2 w-4 h-4" aria-hidden="true" />
                      </a>
                    ) : (
                      <Button
                        onClick={scrollToContacts}
                        className="w-full"
                        type="button"
                      >
                        {t.consultation}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessDirectionsView;
