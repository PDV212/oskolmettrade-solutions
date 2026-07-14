import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import SpeakableSchema from '@/components/SpeakableSchema';
import { Award, Building2, Globe, Users } from 'lucide-react';
import {
  aboutContent,
  uiStrings,
  homePathFor,
  SITE_ORIGIN_URL,
  type ContentLanguage,
} from '@/data/pageContent';

const iconMap = {
  building: Building2,
  award: Award,
  globe: Globe,
  users: Users,
} as const;

interface AboutProps {
  lang?: ContentLanguage;
}

const pathFor = (lang: ContentLanguage) =>
  lang === 'ru' ? '/about' : lang === 'en' ? '/en/about' : '/zh/about';

const About = ({ lang = 'ru' }: AboutProps) => {
  const path = pathFor(lang);
  const canonical = SITE_ORIGIN_URL + path;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: uiStrings.home[lang], item: SITE_ORIGIN_URL + homePathFor(lang) },
      { '@type': 'ListItem', position: 2, name: uiStrings.about[lang], item: canonical },
    ],
  };

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: aboutContent.meta.title[lang],
    description: aboutContent.meta.description[lang],
    url: canonical,
    inLanguage: lang === 'ru' ? 'ru' : lang === 'en' ? 'en' : 'zh-Hans',
    mainEntity: {
      '@type': 'Organization',
      name: 'ОСКОЛ-МЕТ-ТРЕЙД',
      alternateName: 'ООО ОСКОЛ-МЕТ-ТРЕЙД',
      url: SITE_ORIGIN_URL,
    },
  };

  return (
    <div className="min-h-screen bg-transparent">
      <SEOHead
        title={aboutContent.meta.title[lang]}
        description={aboutContent.meta.description[lang]}
        language={lang}
        path={path}
        hreflangGroup="about"
      />
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema} />
      <StructuredData type="AboutPage" data={aboutPageSchema} />
      <SpeakableSchema
        url={canonical}
        name={aboutContent.hero.h1[lang]}
        cssSelectors={['#metrics-heading', '#history-heading']}
      />

      <Header language={lang} />

      <main id="main-content" className="pt-20" itemScope itemType="https://schema.org/AboutPage">
        <article className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="mb-16">
            <nav aria-label={uiStrings.breadcrumb[lang]} className="text-sm text-muted-foreground mb-4">
              <a href={homePathFor(lang)} className="hover:text-primary">{uiStrings.home[lang]}</a>
              <span className="mx-2">/</span>
              <span className="text-foreground">{uiStrings.about[lang]}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {aboutContent.hero.h1[lang]}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {aboutContent.hero.intro[lang]}
            </p>
          </header>

          <section aria-labelledby="history-heading" className="mb-16">
            <h2 id="history-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              {aboutContent.sections.history[lang]}
            </h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" aria-hidden="true" />
              <div className="space-y-10">
                {aboutContent.timeline.map((event, index) => (
                  <div
                    key={event.year}
                    className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="md:w-1/2 flex items-start md:justify-end">
                      <div
                        className={`bg-card rounded-lg border border-border p-5 max-w-md ${
                          index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                        }`}
                      >
                        <time
                          dateTime={event.dateTime}
                          className="text-sm font-semibold text-primary uppercase tracking-wider"
                        >
                          {event.year}
                        </time>
                        <h3 className="text-lg font-bold text-foreground mt-1 mb-2">{event.title[lang]}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{event.description[lang]}</p>
                      </div>
                    </div>
                    <div
                      className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background md:-translate-x-1.5 mt-6"
                      aria-hidden="true"
                    />
                    <div className="md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="team-heading" className="mb-16">
            <h2 id="team-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              {aboutContent.sections.team[lang]}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutContent.team.map((member) => (
                <article
                  key={member.name.ru}
                  className="rounded-lg border border-border bg-card p-5 flex flex-col"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <figure className="mb-4 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-xl font-bold text-primary border-2 border-border">
                      {member.initials}
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-foreground text-center" itemProp="name">
                      {member.name[lang]}
                    </figcaption>
                  </figure>
                  <h3 className="text-base font-semibold text-foreground text-center mb-2" itemProp="jobTitle">
                    {member.title[lang]}
                  </h3>
                  <p className="text-xs text-muted-foreground text-center mb-3 italic">
                    {member.credentials[lang]}
                  </p>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed flex-grow">
                    {member.expertise[lang]}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="metrics-heading" className="mb-16">
            <h2 id="metrics-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              {aboutContent.sections.metrics[lang]}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {aboutContent.metrics.map((metric) => {
                const Icon = iconMap[metric.iconKey];
                return (
                  <div key={metric.label.ru} className="rounded-lg border border-border bg-card p-6 text-center">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" aria-hidden="true" />
                    <div className="text-3xl font-bold text-foreground mb-1">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label[lang]}</div>
                  </div>
                );
              })}
            </div>
          </section>

        </article>

      </main>

      <Footer language={lang} />
    </div>
  );
};

export default About;
