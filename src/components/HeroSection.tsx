import { ArrowRight, Factory, Wrench, Flame, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-industrial.jpg';

const HeroSection = () => {
  const businessDirections = [
    {
      icon: Wrench,
      title: 'Металлообрабатывающее оборудование',
      description: 'Станки с ЧПУ, роботизированные комплексы',
      color: 'text-primary'
    },
    {
      icon: Factory,
      title: 'Металлургическое сырье',
      description: 'Руды, ферросплавы, легирующие материалы',
      color: 'text-accent'
    },
    {
      icon: Flame,
      title: 'Металлургические печи',
      description: 'Вакуумные, индукционные, газовые печи',
      color: 'text-secondary'
    },
    {
      icon: Building2,
      title: 'Производство ВСЗ',
      description: 'Металлообработка, изготовление деталей',
      color: 'text-primary'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 animate-industrial-slide-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
                С 1994 года на рынке
              </span>
              <h1 className="heading-hero text-primary mb-6">
                ОСКОЛ-МЕТ-ТРЕЙД
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-4">
                Надежные решения для металлургии и машиностроения
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Поставка оборудования, металлургического сырья и производство с 1994 года. 
                Группа компаний с полным циклом услуг: от проектирования до сервисного обслуживания.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="btn-industrial bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg">
                Подобрать оборудование
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="px-8 py-4 text-lg text-white border-white/30 hover:bg-white/10">
                Наши возможности
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">30+</div>
                <div className="text-white/70 text-sm">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">2500+</div>
                <div className="text-white/70 text-sm">станков поставлено</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">4</div>
                <div className="text-white/70 text-sm">направления</div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Directions - Positioned in bottom right */}
        <div className="absolute bottom-8 right-8 w-80 animate-industrial-fade-in hidden lg:block">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Направления деятельности</h3>
            <div className="space-y-3">
              {businessDirections.map((direction, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <direction.icon className={`w-6 h-6 ${direction.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">{direction.title}</h4>
                    <p className="text-white/70 text-xs">{direction.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;