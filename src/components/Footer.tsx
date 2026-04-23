import { Phone, Mail, MapPin, ArrowUp, Factory, Wrench, Flame, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/optimized-image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'О компании', href: '#directions' },
    { name: 'Преимущества', href: '#advantages' },
    { name: 'Контакты', href: '#contacts' }
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
    <footer className="bg-gradient-hero text-white relative overflow-hidden" itemScope itemType="https://schema.org/Organization">
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
                <OptimizedImage
                  src="/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png"
                  alt="ОСКОЛ-МЕТ-ТРЕЙД Логотип"
                  className="w-12 h-12 rounded-xl"
                  aspectRatio="square"
                  loading="lazy"
                  sizes="48px"
                  itemProp="logo"
                />
                <div>
                  <h3 className="text-xl font-bold" itemProp="name">ОСКОЛ-МЕТ-ТРЕЙД</h3>
                  <p className="text-white/70 text-sm">С 1994 года</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed" itemProp="description">
                Надежный партнер в области поставки металлообрабатывающего оборудования, 
                металлургического сырья и собственного производства.
              </p>

              <div className="space-y-4" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-semibold" itemProp="telephone">+7 495 240 91 99</p>
                    <p className="text-white/70 text-sm" itemProp="telephone">+79090977174</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-semibold" itemProp="email">89090977174@mail.ru</p>
                  <p className="text-white/70 text-sm">Для коммерческих и технических запросов</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-semibold" itemProp="addressLocality">309181, Белгородская область, Губкин</p>
                    <p className="text-white/70 text-sm" itemProp="streetAddress">ул. Мира, 20, оф. 312/1</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-sm text-white/80">
                <p><span className="font-semibold">ИНН:</span> 3127508337</p>
                <p><span className="font-semibold">ОГРН:</span> 1033108702868</p>
                <p><span className="font-semibold">Год основания:</span> 1994</p>
              </div>
            </div>

            {/* Services with improved internal linking */}
            <div>
              <h4 className="text-lg font-bold mb-6">Наши направления</h4>
              <nav className="space-y-4" itemScope itemType="https://schema.org/SiteNavigationElement">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="flex items-center space-x-3 text-white/80 hover:text-accent transition-colors group"
                    itemProp="url"
                  >
                    <service.icon className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                    <span className="text-sm" itemProp="name">{service.name}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Links with breadcrumb navigation */}
            <div>
              <h4 className="text-lg font-bold mb-6">Полезные ссылки</h4>
              <nav className="space-y-3" itemScope itemType="https://schema.org/SiteNavigationElement">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-white/80 hover:text-accent transition-colors text-sm"
                    itemProp="url"
                  >
                    <span itemProp="name">{link.name}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-8">
                <h5 className="font-semibold mb-3">Режим работы:</h5>
                <div className="space-y-1 text-sm text-white/70" itemScope itemType="https://schema.org/OpeningHoursSpecification">
                  <p itemProp="dayOfWeek" content="Monday Tuesday Wednesday Thursday Friday">Пн-Пт: <span itemProp="opens" content="08:00">8:00</span> - <span itemProp="closes" content="18:00">18:00</span></p>
                  <p itemProp="dayOfWeek" content="Saturday">Сб: <span itemProp="opens" content="09:00">9:00</span> - <span itemProp="closes" content="15:00">15:00</span></p>
                  <p>Вс: выходной</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div>
              <h4 className="text-lg font-bold mb-6">Реквизиты</h4>
              <p className="text-white/80 mb-6 text-sm">
                ООО «ОСКОЛ-МЕТ-ТРЕЙД» — статичная информационная B2B-визитка без веб-форм и без сбора персональных данных.
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
                  Перейти к контактам
                </Button>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-xl border border-white/20">
                <h5 className="font-semibold mb-2">Юридические данные:</h5>
                <div className="space-y-1 text-sm text-white/80">
                  <p>• ООО «ОСКОЛ-МЕТ-ТРЕЙД»</p>
                  <p>• ИНН: 3127508337</p>
                  <p>• ОГРН: 1033108702868</p>
                  <p>• Юр. адрес: 309181, Белгородская область, Губкин, ул. Мира, 20, оф. 312/1</p>
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
                  <span>ИНН 3127508337</span>
                  <span>ОГРН 1033108702868</span>
                  <span>Год основания: 1994</span>
                </div>
              </div>

              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
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