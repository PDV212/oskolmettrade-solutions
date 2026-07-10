import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import SpeakableSchema from '@/components/SpeakableSchema';

import { Award, Building2, Globe, Users } from 'lucide-react';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://www.xn-----llccbycikqb3afub.xn--p1ai/" },
    { "@type": "ListItem", "position": 2, "name": "О компании", "item": "https://www.xn-----llccbycikqb3afub.xn--p1ai/about" }
  ]
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "О компании ОСКОЛ-МЕТ-ТРЕЙД",
  "description": "Отраслевой опыт команды и основателя — с 1994 года. Поставка металлообрабатывающего оборудования, металлургического сырья и промышленных печей.",
  "url": "https://www.xn-----llccbycikqb3afub.xn--p1ai/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "ОСКОЛ-МЕТ-ТРЕЙД",
    "alternateName": "ООО ОСКОЛ-МЕТ-ТРЕЙД",
    "description": "Поставка металлообрабатывающего оборудования и металлургического сырья",
    "url": "https://www.xn-----llccbycikqb3afub.xn--p1ai",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Мира, 20, оф. 312/1",
      "addressLocality": "Губкин",
      "addressRegion": "Белгородская область",
      "postalCode": "309181",
      "addressCountry": "RU"
    },
    "telephone": "+7-495-240-91-99",
    "email": "89090977174@mail.ru",
    "employee": [
      {
        "@type": "Person",
        "name": "Кургузов Сергей Анатольевич",
        "jobTitle": "Технический директор",
        "description": "Кандидат технических наук, доцент по технологии машиностроения.",
        "knowsAbout": ["Технология машиностроения", "Металлообработка"]
      }
    ]
  }
};

const teamMembers = [
  {
    initials: 'КС',
    name: 'Кургузов Сергей Анатольевич',
    title: 'Технический директор',
    credentials: 'Кандидат технических наук, доцент по технологии машиностроения',
    expertise: 'Единственный поимённо указанный технический эксперт на сайте.'
  }
];

const timelineEvents = [
  {
    year: '1994',
    dateTime: '1994',
    title: 'Начало отраслевого опыта основателя',
    description: 'Начинают работу первые компании основателя бизнеса в сфере металлургии и промышленного оборудования.'
  },
  {
    year: '2015',
    dateTime: '2015',
    title: 'Специализированные поставки оборудования',
    description: 'ООО «ОСКОЛ-МЕТ-ТРЕЙД» ведёт специализированную поставку станков с ЧПУ и обрабатывающих центров.'
  }
];

const metrics = [
  { value: '1994', label: 'опыт команды с', icon: Building2 },
  { value: '≈2 500', label: 'единиц — совокупный опыт', icon: Award },
  { value: '4', label: 'направления деятельности', icon: Globe },
  { value: '10', label: 'стран в географии опыта', icon: Users }
];

const partnerLogos = [
  'Производитель ЧПУ №1',
  'Производитель ЧПУ №2',
  'Металлургический комбинат',
  'Инженерный концерн',
  'Лизинговая компания',
  'Сервисный центр Урал'
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="О компании ОСКОЛ-МЕТ-ТРЕЙД — оборудование и сырьё для металлургии"
        description="ООО «ОСКОЛ-МЕТ-ТРЕЙД» — B2B-поставщик промышленного оборудования и сырья. Отраслевой опыт команды и основателя — с 1994 года."
        canonicalUrl="https://www.xn-----llccbycikqb3afub.xn--p1ai/about"
      />
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema} />
      <StructuredData type="AboutPage" data={aboutPageSchema} />
      <SpeakableSchema
        url="https://www.xn-----llccbycikqb3afub.xn--p1ai/about"
        name="ОСКОЛ-МЕТ-ТРЕЙД — Ключевые факты о компании"
        cssSelectors={['#metrics-heading', '#history-heading']}
      />


      <Header language="ru" />

      <main id="main-content" className="pt-20" itemScope itemType="https://schema.org/AboutPage">
        <article className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Hero */}
          <header className="mb-16">
            <nav aria-label="breadcrumb" className="text-sm text-muted-foreground mb-4">
              <a href="/" className="hover:text-primary">Главная</a>
              <span className="mx-2">/</span>
              <span className="text-foreground">О компании</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              О компании ОСКОЛ-МЕТ-ТРЕЙД
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Отраслевой опыт команды и основателя бизнеса формируется с <time dateTime="1994">1994 года</time>,
              когда начали работу первые компании основателя. ООО «ОСКОЛ-МЕТ-ТРЕЙД» продолжает и развивает
              этот опыт в сфере металлургии и промышленного оборудования.
            </p>
          </header>

          {/* History Timeline */}
          <section aria-labelledby="history-heading" className="mb-16">
            <h2 id="history-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Наша история
            </h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" aria-hidden="true" />
              <div className="space-y-10">
                {timelineEvents.map((event, index) => (
                  <div
                    key={event.year}
                    className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="md:w-1/2 flex items-start md:justify-end">
                      <div className={`bg-card rounded-lg border border-border p-5 max-w-md ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <time
                          dateTime={event.dateTime}
                          className="text-sm font-semibold text-primary uppercase tracking-wider"
                        >
                          {event.year}
                        </time>
                        <h3 className="text-lg font-bold text-foreground mt-1 mb-2">{event.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background md:-translate-x-1.5 mt-6" aria-hidden="true" />
                    <div className="md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team */}
          <section aria-labelledby="team-heading" className="mb-16">
            <h2 id="team-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Технический эксперт
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="rounded-lg border border-border bg-card p-5 flex flex-col"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <figure className="mb-4 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-xl font-bold text-primary border-2 border-border">
                      {member.initials}
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-foreground text-center" itemProp="name">
                      {member.name}
                    </figcaption>
                  </figure>
                  <h3 className="text-base font-semibold text-foreground text-center mb-2" itemProp="jobTitle">
                    {member.title}
                  </h3>
                  <p className="text-xs text-muted-foreground text-center mb-3 italic">
                    {member.credentials}
                  </p>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed flex-grow">
                    {member.expertise}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Metrics */}
          <section aria-labelledby="metrics-heading" className="mb-16">
            <h2 id="metrics-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Наши цифры
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-border bg-card p-6 text-center"
                >
                  <metric.icon className="w-8 h-8 text-primary mx-auto mb-3" aria-hidden="true" />
                  <div className="text-3xl font-bold text-foreground mb-1">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates & Partners */}
          <section aria-labelledby="partners-heading" className="mb-8">
            <h2 id="partners-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Сертификаты и партнёры
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {partnerLogos.map((partner) => (
                <figure
                  key={partner}
                  className="rounded-lg border border-border bg-card p-4 flex flex-col items-center justify-center min-h-[120px]"
                >
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-2">
                    <Building2 className="w-6 h-6 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <figcaption className="text-xs text-muted-foreground text-center leading-tight">
                    {partner}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default About;
