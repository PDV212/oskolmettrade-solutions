import { Cog, ShieldCheck, Truck, Wrench } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://oskolmettrade-solutions.lovable.app/" },
    { "@type": "ListItem", "position": 2, "name": "Оборудование", "item": "https://oskolmettrade-solutions.lovable.app/#equipment" },
    { "@type": "ListItem", "position": 3, "name": "Станки с ЧПУ", "item": "https://oskolmettrade-solutions.lovable.app/cnc-machines" }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Поставка станков с ЧПУ",
  "serviceType": "Поставка металлообрабатывающего оборудования",
  "areaServed": { "@type": "Country", "name": "Россия" },
  "provider": {
    "@type": "Organization",
    "name": "ОСКОЛ-МЕТ-ТРЕЙД",
    "url": "https://oskolmettrade-solutions.lovable.app",
    "foundingDate": "1994"
  },
  "description": "Поставка станков с ЧПУ из ЮВА с 1994 года: токарные, фрезерные, шлифовальные обрабатывающие центры с гарантией и сервисом."
};

const machineTypes = [
  'Токарные станки с ЧПУ',
  'Фрезерные обрабатывающие центры (3/4/5-осевые)',
  'Вертикальные обрабатывающие центры (VMC)',
  'Горизонтальные обрабатывающие центры (HMC)',
  'Шлифовальные станки с ЧПУ',
  'Электроэрозионные станки (EDM)',
  'Координатно-расточные станки',
  'Многозадачные токарно-фрезерные станки'
];

const techRows = [
  { model: 'CK6140', type: 'Токарный', accuracy: '±0,008 мм', application: 'Серийное производство валов' },
  { model: 'VMC-855', type: 'Вертикальный обр. центр', accuracy: '±0,005 мм', application: 'Корпусные детали' },
  { model: 'HMC-630', type: 'Горизонтальный обр. центр', accuracy: '±0,006 мм', application: 'Массивные узлы' },
  { model: 'MK1320', type: 'Шлифовальный', accuracy: '±0,002 мм', application: 'Прецизионная обработка' },
  { model: 'DK7745', type: 'Электроэрозионный', accuracy: '±0,003 мм', application: 'Сложные контуры и штампы' }
];

const advantages = [
  { icon: ShieldCheck, title: 'Гарантия 12–24 мес.', text: 'Постгарантийное обслуживание через аккредитованный сервис на Урале.' },
  { icon: Truck, title: 'Логистика «под ключ»', text: 'Доставка, таможенная очистка, монтаж и пусконаладка по всей РФ.' },
  { icon: Cog, title: 'Подбор по ТЗ', text: 'Инженеры подберут модель под технологию, материал и серийность.' },
  { icon: Wrench, title: 'Запчасти и обучение', text: 'Склад ЗИП в РФ и обучение операторов на площадке заказчика.' }
];

const comparisonRows = [
  { type: 'Токарные', accuracy: '±0,008 мм', application: 'Серийное производство валов, втулок, фланцев', price: 'Средний' },
  { type: 'Фрезерные', accuracy: '±0,005 мм', application: 'Корпусные детали, сложные 3D-контуры', price: 'Средний–высокий' },
  { type: 'Шлифовальные', accuracy: '±0,002 мм', application: 'Прецизионная отделка поверхностей', price: 'Высокий' },
  { type: 'Обрабатывающие центры', accuracy: '±0,005 мм', application: 'Универсальная обработка в одном зажиме', price: 'Высокий' }
];

const faqs = [
  { q: 'Какой срок поставки станка с ЧПУ?', a: 'Со склада в РФ — 2–4 недели. Под заказ из ЮВА — 8–14 недель, включая морскую логистику и таможенное оформление.' },
  { q: 'Предоставляете ли вы пусконаладку?', a: 'Да. В стоимость поставки включён монтаж, пусконаладка и обучение операторов на площадке заказчика.' },
  { q: 'Какая стойка ЧПУ устанавливается на станки?', a: 'По выбору заказчика: Siemens 828D/840D, Fanuc 0i-MF, Mitsubishi M80, а также аналоги отечественной локализации.' },
  { q: 'Возможен ли лизинг и рассрочка?', a: 'Да, работаем с лизинговыми компаниями и предлагаем рассрочку для постоянных клиентов на индивидуальных условиях.' }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

const CncMachines = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Станки с ЧПУ — поставка с 1994 года | ОСКОЛ-МЕТ-ТРЕЙД"
        description="Поставка станков с ЧПУ: токарные, фрезерные, шлифовальные обрабатывающие центры. 30+ лет опыта, 2500+ поставок, гарантия и сервис по всей России."
        keywords="станки с ЧПУ, токарные станки ЧПУ, фрезерные обрабатывающие центры, поставка станков, ОСКОЛ-МЕТ-ТРЕЙД"
        canonicalUrl="https://oskolmettrade-solutions.lovable.app/cnc-machines"
      />
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema} />
      <StructuredData type="Service" data={serviceSchema} />
      <StructuredData type="FAQPage" data={faqSchema} />

      <Header language="ru" />

      <main className="pt-20" itemScope itemType="https://schema.org/WebPage">
        <article className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="mb-10">
            <nav aria-label="breadcrumb" className="text-sm text-muted-foreground mb-4">
              <a href="/" className="hover:text-primary">Главная</a>
              <span className="mx-2">/</span>
              <a href="/#equipment" className="hover:text-primary">Оборудование</a>
              <span className="mx-2">/</span>
              <span className="text-foreground">Станки с ЧПУ</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Станки с ЧПУ — поставка с <time dateTime="1994">1994</time> года
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ООО «ОСКОЛ-МЕТ-ТРЕЙД» поставляет металлообрабатывающее оборудование с ЧПУ напрямую от
              ведущих производителей Юго-Восточной Азии. <strong>30+ лет опыта</strong> в металлургии и
              <strong> 2500+ поставок</strong> станков по России, Казахстану, Беларуси, Китаю и Индии.
              Каждое решение сопровождается монтажом, пусконаладкой и сервисной поддержкой.
            </p>
          </header>

          <section aria-labelledby="types-heading" className="mb-12">
            <h2 id="types-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-6">Типы оборудования</h2>
            <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-muted-foreground">
              {machineTypes.map(t => <li key={t}>{t}</li>)}
            </ul>
          </section>

          <section aria-labelledby="specs-heading" className="mb-12">
            <h2 id="specs-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-6">Технические характеристики</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left">
                <thead className="bg-muted">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Модель</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Тип</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Точность</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Применение</th>
                  </tr>
                </thead>
                <tbody>
                  {techRows.map(r => (
                    <tr key={r.model} className="border-t border-border">
                      <td className="px-4 py-3 font-medium">{r.model}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.type}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.accuracy}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.application}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="why-heading" className="mb-12">
            <h2 id="why-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-6">Почему мы</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {advantages.map(a => (
                <article key={a.title} className="rounded-lg border border-border bg-card p-5">
                  <a.icon className="w-8 h-8 text-primary mb-3" aria-hidden="true" />
                  <h3 className="font-semibold text-foreground mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="faq-heading" className="mb-8">
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-6">FAQ о станках ЧПУ</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details
                  key={f.q}
                  data-question-id={`cnc-faq-${i + 1}`}
                  className="group rounded-lg border border-border bg-card p-4"
                >
                  <summary className="cursor-pointer list-none flex justify-between items-center">
                    <h3 className="font-semibold text-foreground">{f.q}</h3>
                    <span className="ml-4 text-primary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default CncMachines;
