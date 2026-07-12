import { CheckCircle } from 'lucide-react';

/**
 * Conservative, verified-only facts about ООО «ОСКОЛ-МЕТ-ТРЕЙД».
 * Unsupported marketing metrics (2 500 единиц, 25+ заводов,
 * «30+ лет на рынке» applied to the LLC) have been removed pending
 * approved public evidence. The 1994 date is retained only as
 * founder / team industry experience, not as an LLC operation date.
 */
const facts = [
  'Отраслевой опыт команды и основателя формируется с 1994 года — это не дата начала деятельности текущего юридического лица.',
  'ООО «ОСКОЛ-МЕТ-ТРЕЙД» — B2B-поставщик металлообрабатывающего оборудования, металлургического сырья и промышленных печей.',
  'Юридические реквизиты: ИНН 3127508337, ОГРН 1033108702868.',
  'Головной офис: 309181, Белгородская область, г. Губкин, ул. Мира, 20, оф. 312/1.',
];

const KeyFacts = () => {
  return (
    <section id="key-facts" aria-labelledby="key-facts-heading" className="py-12 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 p-6 md:p-8 shadow-industrial">
          <h2 id="key-facts-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Ключевые факты о компании
          </h2>
          <ul className="space-y-4">
            {facts.map((fact, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-foreground"
                data-fact-id={`fact-${i + 1}`}
              >
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-lg leading-relaxed">{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KeyFacts;
