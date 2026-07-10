/**
 * Дополнительные JSON-LD схемы для AI/LLM-видимости:
 * WebSite, Service (по каждому направлению), ContactPoint, Person.
 * Рендерятся отдельными <script type="application/ld+json"> блоками.
 */

const BASE_URL = 'https://www.xn-----llccbycikqb3afub.xn--p1ai';

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ОСКОЛ-МЕТ-ТРЕЙД',
  url: BASE_URL,
  inLanguage: ['ru-RU', 'en-US', 'zh-CN'],
  publisher: { '@type': 'Organization', name: 'ООО ОСКОЛ-МЕТ-ТРЕЙД' },
};

const serviceSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Поставка металлообрабатывающего оборудования',
    serviceType: 'Поставка станков с ЧПУ и обрабатывающих центров',
    provider: { '@type': 'Organization', name: 'ООО ОСКОЛ-МЕТ-ТРЕЙД' },
    areaServed: ['RU', 'KZ', 'BY', 'CN', 'IN'],
    description:
      'Поставка станков с ЧПУ, обрабатывающих центров, токарных, фрезерных и шлифовальных станков, гидравлических прессов и роботизированных комплексов сварки и покраски.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Поставка металлургического сырья',
    serviceType: 'Поставка сырья для металлургии',
    provider: { '@type': 'Organization', name: 'ООО ОСКОЛ-МЕТ-ТРЕЙД' },
    areaServed: ['RU', 'KZ', 'BY', 'CN', 'IN'],
    description:
      'Марганцевая руда, феррохром, бентонит, никельсодержащий чугун и другие легирующие материалы.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Поставка металлургических печей',
    serviceType: 'Промышленные печи',
    provider: { '@type': 'Organization', name: 'ООО ОСКОЛ-МЕТ-ТРЕЙД' },
    areaServed: ['RU', 'KZ', 'BY', 'CN', 'IN'],
    description:
      'Вакуумно-дуговые, индукционные и газовые металлургические печи под задачи заказчика.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Инжиниринг, монтаж и сервисное обслуживание',
    serviceType: 'Engineering & Maintenance',
    provider: { '@type': 'Organization', name: 'ООО ОСКОЛ-МЕТ-ТРЕЙД' },
    areaServed: ['RU', 'KZ', 'BY', 'CN', 'IN'],
    description:
      'Проектирование, шеф-монтаж, пуско-наладка, гарантийное и постгарантийное обслуживание оборудования через аккредитованный сервис на Урале.',
  },
];

const contactPointSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPoint',
  telephone: '+7-909-097-71-74',
  contactType: 'sales',
  areaServed: ['RU', 'KZ', 'BY', 'CN', 'IN'],
  availableLanguage: ['Russian', 'English', 'Chinese'],
};

const json = (obj: unknown) => ({ __html: JSON.stringify(obj) });

const AISchemas = () => (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={json(websiteSchema)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={json(contactPointSchema)} />
    {serviceSchemas.map((s, i) => (
      <script
        key={i}
        type="application/ld+json"
        dangerouslySetInnerHTML={json(s)}
      />
    ))}
  </>
);

export default AISchemas;
