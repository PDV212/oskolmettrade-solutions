
import { ArrowRight, Factory, Wrench, Flame, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/optimized-image';
import { IndustryLeaderBadge, ExperienceBadge, TrustedBadge, GrowthBadge } from '@/components/ui/badge-premium';
import useResponsiveImage from '@/hooks/useResponsiveImage';
import ResponsiveWrapper from '@/components/ui/responsive-wrapper';
import { useIsMobile } from '@/hooks/use-mobile';
import heroImage from '@/assets/hero-industrial.jpg';

const HeroSection = () => {
  const heroImageConfig = useResponsiveImage(heroImage);
  const isMobile = useIsMobile();
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
      <div className="absolute inset-0">
        <OptimizedImage
          src={heroImage}
          alt="Промышленное производство ОСКОЛ-МЕТ-ТРЕЙД"
          className="w-full h-full"
          objectFit="cover"
          priority={true}
          loading="eager"
          sizes="100vw"
          width={isMobile ? 768 : 1920}
          height={isMobile ? 1024 : 1080}
          quality={isMobile ? 75 : 85}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>

      {/* Content */}
      <ResponsiveWrapper
        className="relative z-10 container mx-auto px-4 py-20"
        mobileClassName="px-4 py-16"
        desktopClassName="px-6 py-20"
      >
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 animate-industrial-slide-up">
            {/* Premium Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <ExperienceBadge size="lg" animation="float" />
              <IndustryLeaderBadge size="lg" animation="glow" />
            </div>
            
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 md:mb-6" style={{ WebkitTextFillColor: 'white', backgroundClip: 'unset', WebkitBackgroundClip: 'unset' }}>
                ОСКОЛ-МЕТ-ТРЕЙД
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium mb-3 md:mb-4">
                Надежные решения для металлургии и машиностроения
              </p>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Поставка оборудования, металлургического сырья и производство с 1994 года. 
                Группа компаний с полным циклом услуг: от проектирования до сервисного обслуживания.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button 
                className="btn-industrial bg-primary hover:bg-primary-hover text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
                onClick={() => {
                  const element = document.querySelector('#contacts');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Подобрать оборудование
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
              </Button>
              <Button 
                variant="outline" 
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg text-primary border-white/30 hover:bg-white/20 bg-white/90 w-full sm:w-auto"
                onClick={() => {
                  const element = document.querySelector('#directions');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Наши возможности
              </Button>
            </div>

            {/* Enhanced Stats with Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent">30+</div>
                <div className="text-white/70 text-xs sm:text-sm">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent">2500+</div>
                <div className="text-white/70 text-xs sm:text-sm">станков поставлено</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent">4</div>
                <div className="text-white/70 text-xs sm:text-sm">направления</div>
              </div>
              <div className="text-center col-span-2 sm:col-span-2 lg:col-span-1 flex justify-center">
                <TrustedBadge size="sm" variant="glass" />
              </div>
            </div>
          </div>
        </div>

        {/* Business Directions - Mobile and Desktop versions */}
        {!isMobile ? (
          <div className="absolute bottom-0 right-0 w-80 animate-industrial-fade-in hidden lg:block z-20">
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Направления деятельности</h3>
              <div className="space-y-3">
                {businessDirections.map((direction, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex-shrink-0">
                      <direction.icon className={`w-6 h-6 ${direction.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">{direction.title}</h4>
                      <p className="text-white/80 text-xs">{direction.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 lg:hidden">
            <h3 className="text-lg font-bold text-white mb-4 text-center">Направления деятельности</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {businessDirections.map((direction, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-white/15 backdrop-blur-md border border-white/20"
                >
                  <div className="flex-shrink-0">
                    <direction.icon className={`w-5 h-5 ${direction.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">{direction.title}</h4>
                    <p className="text-white/80 text-xs">{direction.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ResponsiveWrapper>

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
