import { CheckCircle } from 'lucide-react';

const facts = [
  'ОСКОЛ-МЕТ-ТРЕЙД работает с 1994 года — более 30 лет на рынке',
  'Поставлено более 2500 единиц оборудования из ЮВА',
  'Компания сотрудничает с 25+ заводами Азии',
  'Офис находится в г. Губкин, Белгородская область'
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
