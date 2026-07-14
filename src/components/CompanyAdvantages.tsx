import { Award, Shield, Wrench, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import OptimizedImage from '@/components/ui/optimized-image';

/**
 * Claim-safety policy applied:
 *  - Removed IndustryLeader / Experience / Growth badges and any
 *    "30+ years", "≈2,500 units", "25+ Asian factories" claims.
 *  - Removed unverified expert academic degrees.
 *  - Removed "accredited service / 24/7 support" claim.
 *  - Removed "quality guarantee" banner overclaim.
 *  - "1994" appears only as founder/team industry-experience wording.
 */
const CompanyAdvantages = () => {
  const advantages = [
    {
      icon: Award,
      title: 'Отраслевой опыт основателя и команды',
      description:
        'Отраслевая работа основателя и накопление опыта команды начались в 1994 году. Эта дата не является датой начала деятельности текущего юридического лица ООО «ОСКОЛ-МЕТ-ТРЕЙД».',
      stat: 'с 1994 года',
      gradient: 'from-primary/20 to-primary/5',
    },
    {
      icon: Shield,
      title: 'Три направления деятельности',
      description:
        'Совместные проекты в области поставок металлообрабатывающего оборудования и роботизированных комплексов, металлургических печей, а также ферросплавов и материалов для металлургии.',
      stat: '3 направления',
      gradient: 'from-secondary/20 to-secondary/5',
    },
    {
      icon: Wrench,
      title: 'Работа по договору под проект',
      description:
        'Комплектация, характеристики, сроки, условия монтажа, гарантии и сервисного обслуживания определяются по каждому конкретному проекту в договоре.',
      stat: 'Под проект',
      gradient: 'from-secondary/15 to-primary/10',
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-background" itemScope itemType="https://schema.org/Organization">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
            <div className="flex justify-center">
              <OptimizedImage
                src="/lovable-uploads/60e96441-47a3-42d5-9d37-25a8643700ee.png"
                alt="ОСКОЛ-МЕТ-ТРЕЙД — иллюстрация"
                className="w-full max-w-[300px] h-auto"
                objectFit="contain"
                loading="lazy"
                itemProp="image"
              />
            </div>
            <div className="flex justify-center">
              <OptimizedImage
                src="/lovable-uploads/9fca8bba-f5fc-48ef-afd1-def786998cd2.png"
                alt="Металлообработка — иллюстрация"
                className="w-full max-w-[300px] h-auto"
                objectFit="contain"
                loading="lazy"
                itemProp="image"
              />
            </div>
            <div className="flex justify-center">
              <OptimizedImage
                src="/lovable-uploads/1a97cade-fd54-4fd9-a421-51a17f806ae7.png"
                alt="Металлургия — иллюстрация"
                className="w-full max-w-[300px] h-auto"
                objectFit="contain"
                loading="lazy"
                itemProp="image"
              />
            </div>
          </div>
          <h2 className="heading-section mb-4" itemProp="name">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" itemProp="description">
            B2B-партнёр в поставках металлообрабатывающего оборудования и роботизированных комплексов,
            металлургических печей, ферросплавов и материалов для металлургии. Конкретные условия по каждому направлению фиксируются в договоре.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <article key={index} style={{ animationDelay: `${index * 0.1}s` }} className="animate-industrial-slide-up">
              <Card className="card-industrial h-full">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${advantage.gradient} mb-6`}>
                  <advantage.icon className="w-8 h-8 text-primary" />
                </div>
                <header className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">{advantage.title}</h3>
                    <span className="text-sm font-semibold text-accent">{advantage.stat}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </header>
                <div className="flex items-center space-x-2 text-sm text-primary">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-medium">Фиксируется в договоре</span>
                </div>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyAdvantages;
