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
import { EngineeringExpertiseSection } from '@/components/EngineeringExpertise';
import { engineeringExpertise as EE } from '@/data/engineeringExpertise';

const aboutSeo = {
  ru: {
    title: 'Инженерная экспертиза и сервисная команда | ОСКОЛ-МЕТ-ТРЕЙД',
    description:
      'Кургузов Сергей Анатольевич — кандидат технических наук, доцент по кафедре технологии машиностроения и технический директор ООО «ОСКОЛ-МЕТ-ТРЕЙД» по сопровождению и сервису оборудования.',
  },
  en: {
    title: 'Engineering Expertise and Service Team | OSKOL-MET-TRADE',
    description:
      'Sergey Anatolyevich Kurguzov is Candidate of Technical Sciences, Associate Professor in Mechanical Engineering Technology, and Technical Director for Equipment Support and Service at OSKOL-MET-TRADE.',
  },
  zh: {
    title: '工程专业能力与服务团队 | OSKOL-MET-TRADE',
    description:
      '谢尔盖·阿纳托利耶维奇·库尔古佐夫拥有技术科学副博士学位和机械制造工艺方向副教授学术职称，并担任公司的设备支持与服务技术总监。',
  },
} as const;

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

  const personId = 'https://www.xn-----llccbycikqb3afub.xn--p1ai/about#sergey-kurguzov';
  const orgId = 'https://www.xn-----llccbycikqb3afub.xn--p1ai/#organization';
  const orgName = {
    ru: 'ООО «ОСКОЛ-МЕТ-ТРЕЙД»',
    en: 'OSKOL-MET-TRADE LLC',
    zh: 'OSKOL-MET-TRADE 有限责任公司',
  }[lang];

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId,
    name: EE.expert.name[lang],
    alternateName: [
      'Sergey Anatolyevich Kurguzov',
      '谢尔盖·阿纳托利耶维奇·库尔古佐夫',
      'Кургузов Сергей Анатольевич',
    ],
    jobTitle: EE.expert.position[lang],
    worksFor: { '@type': 'Organization', '@id': orgId, name: orgName },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: EE.credentials[0].title[lang],
        credentialCategory: 'Academic degree',
        dateCreated: '1997',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: EE.credentials[1].title[lang],
        credentialCategory: 'Academic title',
        dateCreated: '2000',
      },
    ],
    knowsAbout: {
      ru: [
        'Технология машиностроения',
        'Металлообрабатывающее оборудование',
        'Станки с ЧПУ',
        'Шеф-монтаж',
        'Пусконаладочные работы',
        'Техническое сопровождение оборудования',
        'Сервис промышленного оборудования',
      ],
      en: [
        'Mechanical engineering technology',
        'Metalworking equipment',
        'CNC machines',
        'Installation supervision',
        'Commissioning',
        'Technical support of equipment',
        'Industrial equipment service',
      ],
      zh: [
        '机械制造工艺',
        '金属加工设备',
        '数控机床',
        '安装指导',
        '调试作业',
        '设备技术支持',
        '工业设备服务',
      ],
    }[lang],
  };

  const inLanguage = lang === 'ru' ? 'ru' : lang === 'en' ? 'en' : 'zh-Hans';
  const academicImageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: SITE_ORIGIN_URL + EE.academicDocument.src,
    caption: EE.academicDocument.caption[lang],
    inLanguage,
    representativeOfPage: false,
    creditText: 'ООО «ОСКОЛ-МЕТ-ТРЕЙД»',
  };
  const staffingImageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: SITE_ORIGIN_URL + EE.staffingDocument.src,
    caption: EE.staffingDocument.caption[lang],
    inLanguage,
    representativeOfPage: false,
    creditText: 'ООО «ОСКОЛ-МЕТ-ТРЕЙД»',
  };

  const keyFacts: { value: string; label: { ru: string; en: string; zh: string } }[] = [
    { value: '1994', label: { ru: 'Опыт в отрасли с', en: 'Industry experience since', zh: '行业经验起始年' } },
    { value: '4', label: { ru: 'Направления деятельности', en: 'Business directions', zh: '业务方向' } },
    { value: '3', label: { ru: 'Языка сайта', en: 'Website languages', zh: '网站语言' } },
    { value: 'B2B', label: { ru: 'Модель работы', en: 'Business model', zh: '商业模式' } },
  ];

  const workflow = {
    heading: {
      ru: 'Как мы работаем — от запроса до поставки',
      en: 'How we work — from request to delivery',
      zh: '工作流程 — 从询单到交付',
    },
    steps: [
      {
        ru: 'Заказчик передаёт техническое задание (ТЗ) или обращается за консультацией.',
        en: 'Customer submits technical requirements (TZ) or contacts us for consultation.',
        zh: '客户提交技术任务书（TZ）或联系我们进行咨询。',
      },
      {
        ru: 'Анализируем требования и подбираем подходящих производителей.',
        en: 'We analyse requirements and identify suitable manufacturers.',
        zh: '我们分析需求并筛选合适的生产商。',
      },
      {
        ru: 'Запрашиваем техническую документацию, образцы COA/MTC и цены.',
        en: 'We request technical documentation, COA/MTC samples and pricing.',
        zh: '我们索取技术文件、COA/MTC 样品与报价。',
      },
      {
        ru: 'Согласуются технические параметры, упаковка, загрузка и логистика.',
        en: 'Technical parameters, packaging, loading and logistics are agreed.',
        zh: '确认技术参数、包装、装载与物流。',
      },
      {
        ru: 'Готовится коммерческое предложение с полными условиями поставки.',
        en: 'Commercial proposal with full supply terms is prepared.',
        zh: '编制包含完整供货条款的商务报价。',
      },
      {
        ru: 'Подписывается контракт, инициируется производство и логистика.',
        en: 'Contract signed, production/logistics initiated.',
        zh: '签订合同，启动生产与物流。',
      },
      {
        ru: 'Поставка, передача документации, сопровождение после поставки.',
        en: 'Delivery, documentation handover, post-delivery support.',
        zh: '交付、文件移交及交付后支持。',
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

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

          <section aria-labelledby="key-facts-heading" className="mb-16">
            <h2 id="key-facts-heading" className="sr-only">
              {lang === 'ru' ? 'Ключевые факты' : lang === 'en' ? 'Key facts' : '关键信息'}
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              {keyFacts.map((f) => (
                <div
                  key={f.label.en}
                  className="flex-1 min-w-[160px] rounded-lg border border-border bg-card p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{f.value}</div>
                  <div className="text-sm text-muted-foreground">{f.label[lang]}</div>
                </div>
              ))}
            </div>
          </section>



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

          <section aria-labelledby="workflow-heading" className="mb-16">
            <h2 id="workflow-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              {workflow.heading[lang]}
            </h2>
            <ol className="relative border-l-2 border-border ml-4 space-y-8 list-none p-0">
              {workflow.steps.map((step, i) => (
                <li key={i} className="relative pl-8">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.05rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold border-4 border-background"
                  >
                    {i + 1}
                  </span>
                  <p className="text-base text-foreground leading-relaxed pt-1">
                    {step[lang]}
                  </p>
                </li>
              ))}
            </ol>
          </section>

        </article>


      </main>

      <Footer language={lang} />
    </div>
  );
};

export default About;
