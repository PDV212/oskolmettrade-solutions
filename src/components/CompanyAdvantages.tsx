import { 
  Award, 
  Globe, 
  Shield, 
  Clock, 
  Users, 
  Wrench,
  CheckCircle2,
  Star
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import OptimizedImage from '@/components/ui/optimized-image';
import { IndustryLeaderBadge, ExperienceBadge, TrustedBadge, GrowthBadge } from '@/components/ui/badge-premium';

const CompanyAdvantages = () => {
  const advantages = [
    {
      icon: Award,
      title: 'Многолетний опыт',
      description: '30 лет работы в металлургии с 1994 года и поставки оборудования с 2015 года',
      stat: '30 лет',
      gradient: 'from-primary/20 to-primary/5'
    },
    {
      icon: Globe,
      title: 'Международные поставки',
      description: 'Более 2500 станков поставлено, география охватывает страны СНГ и дальнего зарубежья',
      stat: '2500+ станков',
      gradient: 'from-accent/20 to-accent/5'
    },
    {
      icon: Shield,
      title: 'Полный цикл услуг',
      description: 'Группа компаний с собственным производством, торговлей, логистикой и сервисом',
      stat: '4 направления',
      gradient: 'from-secondary/20 to-secondary/5'
    },
    {
      icon: Clock,
      title: 'Гарантийное обслуживание',
      description: 'Постгарантийное обслуживание через аккредитованное предприятие на Урале',
      stat: '24/7 поддержка',
      gradient: 'from-primary/15 to-accent/10'
    },
    {
      icon: Users,
      title: 'Техническая экспертиза',
      description: 'Наши технические эксперты — доценты ведущих университетов России с минимальным уровнем «кандидат технических наук» в области металлургического машиностроения.',
      stat: 'Экспертный уровень',
      gradient: 'from-accent/15 to-primary/10'
    },
    {
      icon: Wrench,
      title: 'Комплексные решения',
      description: 'От поставки оборудования до оснащения роботизированными участками',
      stat: 'Под ключ',
      gradient: 'from-secondary/15 to-primary/10'
    }
  ];

  const achievements = [
    { number: '30+', label: 'лет опыта работы' },
    { number: '2500+', label: 'станков поставлено' },
    { number: '4', label: 'направления деятельности' },
    { number: '25', label: 'лет работы с ЮВА' }
  ];

  return (
    <section id="advantages" className="py-20 bg-background" itemScope itemType="https://schema.org/Organization">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
            <div className="flex justify-center">
              <OptimizedImage 
                src="/lovable-uploads/60e96441-47a3-42d5-9d37-25a8643700ee.png" 
                alt="30 лет опыта ОСКОЛ-МЕТ-ТРЕЙД" 
                className="w-full max-w-[300px] h-auto"
                objectFit="contain"
                loading="lazy"
                itemProp="image"
              />
            </div>
            <div className="flex justify-center">
              <OptimizedImage 
                src="/lovable-uploads/9fca8bba-f5fc-48ef-afd1-def786998cd2.png" 
                alt="Лидер отрасли металлообработки" 
                className="w-full max-w-[300px] h-auto"
                objectFit="contain"
                loading="lazy"
                itemProp="image"
              />
            </div>
            <div className="flex justify-center">
              <OptimizedImage 
                src="/lovable-uploads/1a97cade-fd54-4fd9-a421-51a17f806ae7.png" 
                alt="Надежный партнер в металлургии" 
                className="w-full max-w-[300px] h-auto"
                objectFit="contain"
                loading="lazy"
                itemProp="image"
              />
            </div>
          </div>
          <h2 className="heading-section mb-4" itemProp="name">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" itemProp="description">
            Надежный партнер с многолетним опытом, собственным производством 
            и полным циклом услуг для металлургических предприятий
          </p>
        </div>

        {/* Key Numbers */}
        <section aria-label="Ключевые показатели компании" className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center animate-industrial-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {achievement.number}
              </div>
              <div className="text-muted-foreground">{achievement.label}</div>
            </div>
          ))}
        </section>

        {/* Advantages Grid */}
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
                  <span className="font-medium">Подтверждено практикой</span>
                </div>
              </Card>
            </article>
          ))}
        </div>

        {/* Quality Assurance Banner */}
        <div className="mt-16">
          <Card className="card-industrial bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20">
            <div className="text-center py-8">
              <div className="flex justify-center gap-3 mb-6">
                <GrowthBadge size="lg" />
              </div>
              <div className="flex justify-center mb-4">
                <Star className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Гарантия качества и надежности
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Все оборудование проходит строгий контроль качества, 
                предоставляется техническая поддержка и гарантийное обслуживание
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompanyAdvantages;