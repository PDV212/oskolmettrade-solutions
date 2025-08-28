import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Главная', href: '#home' },
    { name: 'О компании', href: '#directions' },
    { name: 'Оборудование', href: '#equipment' },
    { name: 'Сырье', href: '#materials' },
    { name: 'Печи', href: '#furnaces' },
    { name: 'Производство ВСЗ', href: '#manufacturing' },
    { name: 'Контакты', href: '#contacts' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href) as HTMLElement;
      if (element) {
        // Для кнопки "О компании" используем меньший отступ
        const headerHeight = href === '#directions' ? 80 : 100;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollToContacts = () => {
    const element = document.querySelector('#contacts') as HTMLElement;
    if (element) {
      const headerHeight = 64; // Height of fixed header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">ОМТ</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-foreground">ОСКОЛ-МЕТ-ТРЕЙД</h1>
              <p className="text-xs text-muted-foreground">Металлообработка • Металлургия • Производство</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-6 2xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="default" className="btn-industrial" onClick={scrollToContacts}>
              Оставить заявку
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsOpen(false);
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 py-2 px-2 text-left"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center space-x-2 text-sm mb-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+7 495 240 91 99</span>
              </div>
              <Button variant="default" className="btn-industrial w-full" onClick={scrollToContacts}>
                Оставить заявку
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;