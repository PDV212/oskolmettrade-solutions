import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import { ShieldCheck, Globe2, Factory, MessageSquare } from 'lucide-react';

type Lang = 'ru' | 'en' | 'zh';

const SITE = 'https://oskolmettrade-solutions.lovable.app';

const content = {
  ru: {
    canonical: `${SITE}/ru/company`,
    title: 'О компании ОСКОЛ-МЕТ-ТРЕЙД — B2B-поставщик промышленного оборудования с 1994 года',
    description: 'ООО «ОСКОЛ-МЕТ-ТРЕЙД» — B2B-поставщик промышленного оборудования и сырья для металлургии и машиностроения. С 1994 года, 2500+ проектов.',
    keywords: 'ОСКОЛ-МЕТ-ТРЕЙД, о компании, реквизиты, ИНН, ОГРН, B2B поставщик, промышленное оборудование',
    breadcrumbHome: 'Главная',
    breadcrumbHere: 'О компании',
    h1: 'О компании ОСКОЛ-МЕТ-ТРЕЙД',
    intro: 'ООО «ОСКОЛ-МЕТ-ТРЕЙД» — B2B-поставщик промышленного оборудования и сырья для металлургии и машиностроения. Компания работает на рынке с 1994 года и реализовала более 2500 проектов для промышленных клиентов.',
    factsTitle: 'Реквизиты и факты о компании',
    factsCaption: 'Юридические реквизиты и ключевые факты ООО «ОСКОЛ-МЕТ-ТРЕЙД»',
    factsHead: ['Параметр', 'Значение'],
    facts: [
      ['Юридическое наименование', 'ООО «ОСКОЛ-МЕТ-ТРЕЙД»'],
      ['Адрес', '309181, Россия, Белгородская область, г. Губкин, ул. Мира, д. 20, офис 312/1'],
      ['ИНН', '3127508337'],
      ['КПП', '312701001'],
      ['ОГРН', '1033108702868'],
      ['ОКПО', '14943277'],
      ['Опыт работы на рынке', 'С 1994 года'],
      ['Реализованные проекты', '2500+'],
      ['Основные клиенты', 'Промышленные B2B-компании'],
      ['Основные направления', 'Поставка промышленного оборудования; поставка сырья'],
      ['География', 'Россия, Китай, Индия, Индонезия, Швейцария, ОАЭ и другие рынки'],
    ],
    trustTitle: 'Сигналы доверия',
    trust: [
      'С 1994 года',
      'Более 2500 реализованных проектов',
      'Фокус на промышленных B2B-клиентах',
      'Международная география поставок',
      'Прозрачные юридические реквизиты компании',
    ],
    geoTitle: 'География поставок',
    geoText: 'Поставки осуществляются клиентам в России, Китае, Индии, Индонезии, Швейцарии, ОАЭ и на других международных рынках.',
    geoList: ['Россия', 'Китай', 'Индия', 'Индонезия', 'Швейцария', 'ОАЭ'],
    industriesTitle: 'Отрасли клиентов',
    industries: ['Металлургия', 'Машиностроение', 'Промышленное производство и снабжение'],
    contactTitle: 'Каналы связи',
    contactText: 'Клиенты могут связаться с ООО «ОСКОЛ-МЕТ-ТРЕЙД» через официальные каналы связи для запроса коммерческого предложения, обсуждения поставок и координации закупок.',
    channels: ['WeChat', 'WhatsApp', 'Telegram'],
    compliance: 'Обращение через мессенджеры регулируется правилами соответствующих платформ. Персональные данные, передаваемые через формы сайта, должны обрабатываться в соответствии с политикой конфиденциальности и согласием на обработку персональных данных.',
    reviewedLabel: 'Последняя проверка:',
    addressLabel: 'Юридический адрес',
  },
  en: {
    canonical: `${SITE}/en/company`,
    title: 'About OSKOL-MET-TRADE — B2B Industrial Equipment Supplier Since 1994',
    description: 'OSKOL-MET-TRADE LLC is a B2B supplier of industrial equipment and raw materials for metallurgy and mechanical engineering. Since 1994, 2500+ projects.',
    keywords: 'OSKOL-MET-TRADE, about, company facts, B2B supplier, industrial equipment, metallurgy',
    breadcrumbHome: 'Home',
    breadcrumbHere: 'Company',
    h1: 'About OSKOL-MET-TRADE',
    intro: 'OSKOL-MET-TRADE LLC is a B2B supplier of industrial equipment and raw materials for metallurgy and mechanical engineering. The company has been operating in the market since 1994 and has completed more than 2500 projects for industrial clients.',
    factsTitle: 'Company Facts',
    factsCaption: 'Legal identity and key facts of OSKOL-MET-TRADE LLC',
    factsHead: ['Field', 'Value'],
    facts: [
      ['Legal name', 'OSKOL-MET-TRADE LLC'],
      ['Russian legal name', 'ООО «ОСКОЛ-МЕТ-ТРЕЙД»'],
      ['Address', '20 Mira Street, Office 312/1, Gubkin, Belgorod Region, 309181, Russia'],
      ['Tax ID', '3127508337'],
      ['KPP', '312701001'],
      ['OGRN', '1033108702868'],
      ['OKPO', '14943277'],
      ['Market experience', 'Since 1994'],
      ['Completed projects', '2500+'],
      ['Client focus', 'Industrial B2B clients'],
      ['Core services', 'Industrial equipment supply; raw materials supply'],
      ['Geography', 'Russia, China, India, Indonesia, Switzerland, UAE, and other markets'],
    ],
    trustTitle: 'Trust Signals',
    trust: [
      'Since 1994',
      '2500+ completed projects',
      'Industrial B2B focus',
      'International supply geography',
      'Structured legal company identity',
    ],
    geoTitle: 'Supply Geography',
    geoText: 'The company supplies clients in Russia, China, India, Indonesia, Switzerland, the UAE, and other international markets.',
    geoList: ['Russia', 'China', 'India', 'Indonesia', 'Switzerland', 'UAE'],
    industriesTitle: 'Industries Served',
    industries: ['Metallurgy', 'Mechanical engineering', 'Industrial production and procurement'],
    contactTitle: 'Contact channels',
    contactText: 'Clients can contact OSKOL-MET-TRADE through official communication channels for quotation requests, supply discussions, and procurement coordination.',
    channels: ['WeChat', 'WhatsApp', 'Telegram'],
    compliance: 'Messenger communication may be subject to third-party platform policies. Personal data submitted on this website must be handled according to the site privacy and consent documents.',
    reviewedLabel: 'Last reviewed:',
    addressLabel: 'Registered legal address',
  },
  zh: {
    canonical: `${SITE}/zh/company`,
    title: '关于 OSKOL-MET-TRADE — 自1994年以来的 B2B 工业设备供应商',
    description: 'OSKOL-MET-TRADE LLC 是面向冶金和机械工程行业的 B2B 工业设备及原材料供应商，自1994年以来已完成 2500 多个项目。',
    keywords: 'OSKOL-MET-TRADE, 关于我们, 公司信息, B2B 供应商, 工业设备, 冶金',
    breadcrumbHome: '首页',
    breadcrumbHere: '公司信息',
    h1: '关于 OSKOL-MET-TRADE',
    intro: 'OSKOL-MET-TRADE LLC 是一家面向冶金和机械工程行业的 B2B 工业设备及原材料供应商。公司自 1994 年起开展业务，已为工业客户完成 2500 多个项目。',
    factsTitle: '公司信息',
    factsCaption: 'OSKOL-MET-TRADE LLC 的法定信息与关键事实',
    factsHead: ['项目', '内容'],
    facts: [
      ['法定名称', 'OSKOL-MET-TRADE LLC'],
      ['俄文法定名称', 'ООО «ОСКОЛ-МЕТ-ТРЕЙД»'],
      ['地址', 'Russia, Belgorod Region, Gubkin, Mira Street 20, Office 312/1, 309181'],
      ['税号', '3127508337'],
      ['KPP', '312701001'],
      ['OGRN', '1033108702868'],
      ['OKPO', '14943277'],
      ['市场经验', '自 1994 年以来'],
      ['已完成项目', '2500+'],
      ['客户类型', '工业 B2B 客户'],
      ['核心服务', '工业设备供应；原材料供应'],
      ['服务地区', '俄罗斯、中国、印度、印度尼西亚、瑞士、阿联酋及其他市场'],
    ],
    trustTitle: '信任标志',
    trust: [
      '自 1994 年以来',
      '2500+ 已完成项目',
      '专注工业 B2B 客户',
      '国际供应地域覆盖',
      '完整清晰的企业法定信息',
    ],
    geoTitle: '供应地域',
    geoText: '公司为俄罗斯、中国、印度、印度尼西亚、瑞士、阿联酋及其他国际市场的客户提供服务。',
    geoList: ['俄罗斯', '中国', '印度', '印度尼西亚', '瑞士', '阿联酋'],
    industriesTitle: '服务行业',
    industries: ['冶金', '机械工程', '工业生产与采购'],
    contactTitle: '联系渠道',
    contactText: '客户可以通过官方沟通渠道联系 OSKOL-MET-TRADE，以获取报价、讨论供货需求和协调采购事宜。',
    channels: ['WeChat', 'WhatsApp', 'Telegram'],
    compliance: '通过即时通讯工具进行联系时，还应遵守相应第三方平台的规则。通过网站表单提交的个人数据必须按照网站的隐私政策和个人数据处理同意文件进行处理。',
    reviewedLabel: '最后更新:',
    addressLabel: '法定地址',
  },
} as const;

const REVIEWED = '2026-06-07';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OSKOL-MET-TRADE LLC',
  alternateName: ['ООО «ОСКОЛ-МЕТ-ТРЕЙД»', 'ОСКОЛ-МЕТ-ТРЕЙД', '奥斯科尔-金属-贸易'],
  legalName: 'ООО «ОСКОЛ-МЕТ-ТРЕЙД»',
  foundingDate: '1994',
  url: SITE,
  logo: `${SITE}/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png`,
  taxID: '3127508337',
  vatID: '3127508337',
  identifier: [
    { '@type': 'PropertyValue', propertyID: 'INN', value: '3127508337' },
    { '@type': 'PropertyValue', propertyID: 'KPP', value: '312701001' },
    { '@type': 'PropertyValue', propertyID: 'OGRN', value: '1033108702868' },
    { '@type': 'PropertyValue', propertyID: 'OKPO', value: '14943277' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Мира, д. 20, офис 312/1',
    addressLocality: 'Губкин',
    addressRegion: 'Белгородская область',
    postalCode: '309181',
    addressCountry: 'RU',
  },
  areaServed: ['RU', 'CN', 'IN', 'ID', 'CH', 'AE'],
  knowsLanguage: ['ru', 'en', 'zh'],
  description: 'B2B supplier of industrial equipment and raw materials for metallurgy and mechanical engineering since 1994.',
};

interface CompanyProps {
  lang: Lang;
}

const Company = ({ lang }: CompanyProps) => {
  const t = content[lang];
  const homeHref = lang === 'en' ? '/en' : lang === 'zh' ? '/zh' : '/';

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t.title}
        description={t.description}
        keywords={t.keywords}
        language={lang}
        canonicalUrl={t.canonical}
        structuredData={organizationSchema}
      />
      <StructuredData type="Organization" data={organizationSchema} />

      <Header language={lang} />

      <main className="pt-20" itemScope itemType="https://schema.org/AboutPage">
        <article className="container mx-auto px-4 py-12 max-w-5xl">
          {/* Hero */}
          <header className="mb-12 pb-8 border-b border-border">
            <nav aria-label="breadcrumb" className="text-sm text-muted-foreground mb-4">
              <a href={homeHref} className="hover:text-primary">{t.breadcrumbHome}</a>
              <span className="mx-2">/</span>
              <span className="text-foreground">{t.breadcrumbHere}</span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {t.h1}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {t.intro}
            </p>
          </header>

          {/* Company Facts table */}
          <section aria-labelledby="facts-heading" className="mb-12">
            <h2 id="facts-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {t.factsTitle}
            </h2>
            <figure className="overflow-x-auto rounded-lg border border-border bg-card">
              <table className="w-full text-sm md:text-base">
                <caption className="sr-only">{t.factsCaption}</caption>
                <thead className="bg-muted sticky top-0">
                  <tr>
                    <th scope="col" className="text-left px-4 py-3 font-semibold text-foreground w-1/3">
                      {t.factsHead[0]}
                    </th>
                    <th scope="col" className="text-left px-4 py-3 font-semibold text-foreground">
                      {t.factsHead[1]}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {t.facts.map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                      <th scope="row" className="text-left align-top px-4 py-3 font-medium text-muted-foreground">
                        {k}
                      </th>
                      <td className="px-4 py-3 text-foreground">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <figcaption className="px-4 py-3 text-xs text-muted-foreground border-t border-border">
                {t.factsCaption}
              </figcaption>
            </figure>

            <address className="not-italic mt-6 text-sm text-muted-foreground">
              <strong className="block text-foreground mb-1">{t.addressLabel}</strong>
              309181, Россия, Белгородская область, г. Губкин, ул. Мира, д. 20, офис 312/1
            </address>
          </section>

          {/* Trust signals */}
          <aside aria-labelledby="trust-heading" className="mb-12 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-6">
            <h2 id="trust-heading" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />
              {t.trustTitle}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {t.trust.map((item) => (
                <li key={item} className="flex items-start gap-2 text-foreground">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Geography */}
          <section aria-labelledby="geo-heading" className="mb-12">
            <h2 id="geo-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Globe2 className="w-6 h-6 text-primary" aria-hidden="true" />
              {t.geoTitle}
            </h2>
            <p className="text-muted-foreground mb-4 max-w-3xl">{t.geoText}</p>
            <ul className="flex flex-wrap gap-2">
              {t.geoList.map((c) => (
                <li key={c} className="px-3 py-1.5 rounded-md border border-border bg-card text-sm text-foreground">
                  {c}
                </li>
              ))}
            </ul>
          </section>

          {/* Industries */}
          <section aria-labelledby="industries-heading" className="mb-12">
            <h2 id="industries-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Factory className="w-6 h-6 text-primary" aria-hidden="true" />
              {t.industriesTitle}
            </h2>
            <ul className="grid sm:grid-cols-3 gap-3">
              {t.industries.map((ind) => (
                <li key={ind} className="rounded-lg border border-border bg-card px-4 py-3 text-foreground font-medium">
                  {ind}
                </li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <section aria-labelledby="contact-heading" className="mb-12">
            <h2 id="contact-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-primary" aria-hidden="true" />
              {t.contactTitle}
            </h2>
            <p className="text-muted-foreground mb-4 max-w-3xl">{t.contactText}</p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {t.channels.map((ch) => (
                <li key={ch} className="px-3 py-1.5 rounded-md border border-border bg-muted text-sm text-foreground font-medium">
                  {ch}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl border-l-2 border-border pl-3">
              {t.compliance}
            </p>
          </section>

          {/* Last reviewed */}
          <p className="text-sm text-muted-foreground border-t border-border pt-6">
            {t.reviewedLabel}{' '}
            <time dateTime={REVIEWED} className="font-medium text-foreground">{REVIEWED}</time>
          </p>
        </article>
      </main>

      <Footer language={lang} />
    </div>
  );
};

export default Company;
