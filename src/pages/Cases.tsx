import { Factory, Pickaxe, Flame, Wrench, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import {
  casesContent,
  uiStrings,
  homePathFor,
  SITE_ORIGIN_URL,
  type ContentLanguage,
} from '@/data/pageContent';

const iconMap = {
  factory: Factory,
  pickaxe: Pickaxe,
  wrench: Wrench,
  flame: Flame,
} as const;

interface CasesProps {
  lang?: ContentLanguage;
}

const pathFor = (lang: ContentLanguage) =>
  lang === 'ru' ? '/cases' : lang === 'en' ? '/en/cases' : '/zh/cases';

const Cases = ({ lang = 'ru' }: CasesProps) => {
  const path = pathFor(lang);
  const canonical = SITE_ORIGIN_URL + path;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: uiStrings.home[lang], item: SITE_ORIGIN_URL + homePathFor(lang) },
      { '@type': 'ListItem', position: 2, name: uiStrings.cases[lang], item: canonical },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: casesContent.cases.map((c, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: c.title[lang],
        about: { '@type': 'Thing', name: `${c.industry[lang]}, ${c.location[lang]}` },
        description: c.task[lang],
        dateCreated: c.year,
        provider: { '@type': 'Organization', name: 'ОСКОЛ-МЕТ-ТРЕЙД' },
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={casesContent.meta.title[lang]}
        description={casesContent.meta.description[lang]}
        language={lang}
        path={path}
        hreflangGroup="cases"
      />
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <Header language={lang} />

      <main id="main-content" className="pt-20" itemScope itemType="https://schema.org/WebPage">
        <article className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="mb-12">
            <nav aria-label={uiStrings.breadcrumb[lang]} className="text-sm text-muted-foreground mb-4">
              <a href={homePathFor(lang)} className="hover:text-primary">{uiStrings.home[lang]}</a>
              <span className="mx-2">/</span>
              <span className="text-foreground">{uiStrings.cases[lang]}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {casesContent.hero.h1[lang]}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {casesContent.hero.intro[lang]}
            </p>
          </header>

          <div className="space-y-12">
            {casesContent.cases.map((caseItem) => {
              const Icon = iconMap[caseItem.iconKey];
              return (
                <article
                  key={caseItem.id}
                  className="rounded-xl border border-border bg-card p-6 md:p-8"
                  itemScope
                  itemType="https://schema.org/CreativeWork"
                >
                  <meta itemProp="name" content={caseItem.title[lang]} />
                  <meta itemProp="dateCreated" content={caseItem.year} />
                  <meta itemProp="description" content={caseItem.task[lang]} />
                  <div itemProp="about" itemScope itemType="https://schema.org/Thing">
                    <meta itemProp="name" content={`${caseItem.industry[lang]}, ${caseItem.location[lang]}`} />
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                        {caseItem.title[lang]}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {caseItem.industry[lang]} · {caseItem.location[lang]}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <section aria-labelledby={`task-${caseItem.id}`}>
                      <h3
                        id={`task-${caseItem.id}`}
                        className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2"
                      >
                        <ArrowRight className="w-4 h-4 text-primary" aria-hidden="true" />
                        {uiStrings.task[lang]}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{caseItem.task[lang]}</p>
                    </section>

                    <section aria-labelledby={`solution-${caseItem.id}`}>
                      <h3
                        id={`solution-${caseItem.id}`}
                        className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2"
                      >
                        <ArrowRight className="w-4 h-4 text-primary" aria-hidden="true" />
                        {uiStrings.solution[lang]}
                      </h3>
                      <ul className="text-sm text-muted-foreground leading-relaxed space-y-2 list-disc list-inside">
                        {caseItem.solution[lang].map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </section>

                    <section aria-labelledby={`results-${caseItem.id}`}>
                      <h3
                        id={`results-${caseItem.id}`}
                        className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2"
                      >
                        <ArrowRight className="w-4 h-4 text-primary" aria-hidden="true" />
                        {uiStrings.results[lang]}
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">
                            {caseItem.metrics.units} {uiStrings.unitsSuffix[lang]}
                          </strong>{' '}
                          {uiStrings.supplied[lang]}
                        </p>
                        {caseItem.metrics.productivity !== '0' && (
                          <p className="text-muted-foreground">
                            <strong className="text-foreground">{caseItem.metrics.productivity}%</strong>{' '}
                            {uiStrings.productivityGain[lang]}
                          </p>
                        )}
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">
                            {caseItem.metrics.duration} {uiStrings.durationMonths[lang]}
                          </strong>
                        </p>
                      </div>
                    </section>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {uiStrings.yearOfProject[lang]}:{' '}
                      <time dateTime={caseItem.year}>{caseItem.year}</time>
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </article>
      </main>

      <Footer language={lang} />
    </div>
  );
};

export default Cases;
