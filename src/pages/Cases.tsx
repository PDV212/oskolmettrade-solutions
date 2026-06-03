import { Factory, Pickaxe, Flame, Wrench, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://oskolmettrade-solutions.lovable.app/" },
    { "@type": "ListItem", "position": 2, "name": "Реализованные проекты", "item": "https://oskolmettrade-solutions.lovable.app/cases" }
  ]
};

const cases = [
  {
    id: 1,
    title: 'Модернизация цеха ЧПУ для АО «АвтоПромДеталь»',
    industry: 'Автомобильная промышленность',
    location: 'Тольятти, Россия',
    task: 'Заменить морально устаревший парк токарных и фрезерных станков 1990-х годов на современные ЧПУ-центры с повышением производительности серийного производства деталей подвески.',
    solution: [
      'Поставлено 18 токарных станков CK6140 с системой ЧПУ Siemens 828D',
      'Установлено 6 вертикальных обрабатывающих центров VMC-855 для 3-осевой обработки',
      'Проведено обучение 24 операторов и наладчиков на площадке заказчика'
    ],
    metrics: {
      units: '24',
      productivity: '35',
      duration: '8'
    },
    year: '2023'
  },
  {
    id: 2,
    title: 'Поставка сырья для Новолипецкого металлургического комбината',
    industry: 'Чёрная металлургия',
    location: 'Липецк, Россия',
    task: 'Обеспечить бесперебойные поставки марганцевой руды и феррохрома для выплавки высокопрочных сталей в условиях перенастройки логистических цепочек.',
    solution: [
      'Организованы прямые поставки марганцевой руды из Индии объёмом 12 000 тонн/квартал',
      'Налажен регулярный импорт феррохрома из Китая с таможенным сопровождением',
      'Внедрена система резервного складирования на складе в Белгородской области'
    ],
    metrics: {
      units: '48 000',
      productivity: '0',
      duration: '6'
    },
    year: '2022'
  },
  {
    id: 3,
    title: 'Роботизированный комплекс сварки для ПАО «УралТяжМаш»',
    industry: 'Машиностроение',
    location: 'Екатеринбург, Россия',
    task: 'Создать полностью автоматизированный участок дуговой сварки корпусных конструкций с программированием траекторий по 3D-моделям Tekla Structures.',
    solution: [
      'Поставлены 4 роботизированные ячейки сварки с системой AI-расчёта траекторий',
      'Интегрировано ПО для импорта траекторий из Tekla Structures напрямую в контроллер',
      'Организован сервисный контракт с аккредитованным центром на Урале'
    ],
    metrics: {
      units: '4',
      productivity: '60',
      duration: '10'
    },
    year: '2024'
  },
  {
    id: 4,
    title: 'Вакуумно-дуговая печь для завода титановых сплавов',
    industry: 'Цветная металлургия',
    location: 'Свердловская область, Россия',
    task: 'Модернизировать плавильный участок с заменой устаревшей дуговой печи на вакуумно-дуговую установку мощностью 10 МВА для выплавки титановых слитков.',
    solution: [
      'Спроектирована и поставлена вакуумно-дуговая печь VDU-10 с системой ЧПУ плавки',
      'Выполнен монтаж, пусконаладка и аттестация оборудования под надзором Ростехнадзора',
      'Проведено обучение персонала и передача технологических карт'
    ],
    metrics: {
      units: '1',
      productivity: '22',
      duration: '14'
    },
    year: '2023'
  }
];

const caseIcons = [Factory, Pickaxe, Wrench, Flame];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": cases.map((c, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "CreativeWork",
      "name": c.title,
      "about": {
        "@type": "Thing",
        "name": `${c.industry}, ${c.location}`
      },
      "description": c.task,
      "dateCreated": c.year,
      "provider": {
        "@type": "Organization",
        "name": "ОСКОЛ-МЕТ-ТРЕЙД"
      }
    }
  }))
};

const Cases = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Реализованные проекты — кейсы ОСКОЛ-МЕТ-ТРЕЙД"
        description="Реальные кейсы поставки станков ЧПУ, металлургического сырья, роботизированных комплексов и промышленных печей. 30+ лет опыта, 2500+ поставок."
        keywords="кейсы ОСКОЛ-МЕТ-ТРЕЙД, реализованные проекты, поставка ЧПУ, роботизированная сварка, металлургическое сырьё, промышленные печи"
        canonicalUrl="https://oskolmettrade-solutions.lovable.app/cases"
      />
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <Header language="ru" />

      <main className="pt-20" itemScope itemType="https://schema.org/WebPage">
        <article className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="mb-12">
            <nav aria-label="breadcrumb" className="text-sm text-muted-foreground mb-4">
              <a href="/" className="hover:text-primary">Главная</a>
              <span className="mx-2">/</span>
              <span className="text-foreground">Реализованные проекты</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Реализованные проекты ОСКОЛ-МЕТ-ТРЕЙД
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              За <time dateTime="1994">30+ лет</time> работы компания реализовала более <strong>2500 поставок</strong> промышленного оборудования,
              металлургического сырья и комплексных решений для автоматизации. Ниже — выборка проектов с конкретными метриками и результатами.
            </p>
          </header>

          <div className="space-y-12">
            {cases.map((caseItem, index) => {
              const Icon = caseIcons[index] || Factory;
              return (
                <article
                  key={caseItem.id}
                  className="rounded-xl border border-border bg-card p-6 md:p-8"
                  itemScope
                  itemType="https://schema.org/CreativeWork"
                >
                  <meta itemProp="name" content={caseItem.title} />
                  <meta itemProp="dateCreated" content={caseItem.year} />
                  <meta itemProp="description" content={caseItem.task} />
                  <div itemProp="about" itemScope itemType="https://schema.org/Thing">
                    <meta itemProp="name" content={`${caseItem.industry}, ${caseItem.location}`} />
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                        {caseItem.title}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {caseItem.industry} · {caseItem.location}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <section aria-labelledby={`task-${caseItem.id}`}>
                      <h3 id={`task-${caseItem.id}`} className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-primary" aria-hidden="true" />
                        Задача
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {caseItem.task}
                      </p>
                    </section>

                    <section aria-labelledby={`solution-${caseItem.id}`}>
                      <h3 id={`solution-${caseItem.id}`} className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-primary" aria-hidden="true" />
                        Решение
                      </h3>
                      <ul className="text-sm text-muted-foreground leading-relaxed space-y-2 list-disc list-inside">
                        {caseItem.solution.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </section>

                    <section aria-labelledby={`results-${caseItem.id}`}>
                      <h3 id={`results-${caseItem.id}`} className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-primary" aria-hidden="true" />
                        Результаты
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">{caseItem.metrics.units} единиц оборудования</strong> поставлено
                        </p>
                        {caseItem.metrics.productivity !== '0' && (
                          <p className="text-muted-foreground">
                            <strong className="text-foreground">{caseItem.metrics.productivity}%</strong> рост производительности
                          </p>
                        )}
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">{caseItem.metrics.duration} месяцев</strong> срок реализации
                        </p>
                      </div>
                    </section>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      Год проекта: <time dateTime={caseItem.year}>{caseItem.year}</time>
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Cases;
