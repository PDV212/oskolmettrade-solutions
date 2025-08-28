import { Phone, Mail, MapPin, ArrowUp, Factory, Wrench, Flame, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'О компании', href: '#about' },
    { name: 'Наши проекты', href: '#projects' },
    { name: 'Сертификаты', href: '#certificates' },
    { name: 'Карьера', href: '#career' }
  ];

  const services = [
    { 
      name: 'Металлообрабатывающее оборудование', 
      href: '#equipment',
      icon: Wrench
    },
    { 
      name: 'Металлургическое сырье', 
      href: '#materials',
      icon: Factory
    },
    { 
      name: 'Металлургические печи', 
      href: '#furnaces',
      icon: Flame
    },
    { 
      name: 'Производство ВСЗ', 
      href: '#manufacturing',
      icon: Building2
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-gear-rotate"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-white rounded-full animate-gear-rotate"></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 border border-white rounded-full animate-gear-rotate"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ОМТ</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">ОСКОЛ-МЕТ-ТРЕЙД</h3>
                  <p className="text-white/70 text-sm">С 1994 года</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                Надежный партнер в области поставки металлообрабатывающего оборудования, 
                металлургического сырья и собственного производства.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-semibold">+7 495 240 91 99</p>
                    <p className="text-white/70 text-sm">+79090977174</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-semibold">89090977174@mail.ru</p>
                    <p className="text-white/70 text-sm">Ответим в течение часа</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-semibold">109004, г. Москва</p>
                    <p className="text-white/70 text-sm">ул. Александра Солженицына, д. 40, стр. 1</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Наши направления</h4>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="flex items-center space-x-3 text-white/80 hover:text-accent transition-colors group"
                  >
                    <service.icon className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                    <span className="text-sm">{service.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Полезные ссылки</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <h5 className="font-semibold mb-3">Режим работы:</h5>
                <div className="space-y-1 text-sm text-white/70">
                  <p>Пн-Пт: 8:00 - 18:00</p>
                  <p>Сб: 9:00 - 15:00</p>
                  <p>Вс: выходной</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div>
              <h4 className="text-lg font-bold mb-6">Начать сотрудничество</h4>
              <p className="text-white/80 mb-6 text-sm">
                Получите бесплатную консультацию и коммерческое предложение 
                от наших экспертов уже сегодня.
              </p>

              <div className="space-y-4">
                <Button 
                  className="w-full bg-accent hover:bg-accent-muted text-white font-semibold"
                  onClick={() => {
                    const element = document.querySelector('#contacts');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Получить консультацию
                </Button>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-xl border border-white/20">
                <h5 className="font-semibold mb-2">Ключевые преимущества:</h5>
                <div className="space-y-1 text-sm text-white/80">
                  <p>• 30+ лет опыта работы</p>
                  <p>• 2500+ поставленных станков</p>
                  <p>• Собственное производство</p>
                  <p>• Полный цикл услуг</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-white/70 text-sm">
                  © {currentYear} ООО "ОСКОЛ-МЕТ-ТРЕЙД". Все права защищены.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-xs text-white/60">
                  <a href="#privacy" className="hover:text-accent transition-colors">
                    Политика конфиденциальности
                  </a>
                  <a href="#terms" className="hover:text-accent transition-colors">
                    Условия использования
                  </a>
                  <a href="#sitemap" className="hover:text-accent transition-colors">
                    Карта сайта
                  </a>
                </div>
              </div>

              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Наверх
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;