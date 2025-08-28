import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Главная', href: '#home' },
    { name: 'О компании', href: '#about' },
    { name: 'Оборудование', href: '#equipment' },
    { name: 'Сырье', href: '#materials' },
    { name: 'Печи', href: '#furnaces' },
    { name: 'Производство ВСЗ', href: '#manufacturing' },
    { name: 'Контакты', href: '#contacts' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">ОМТ</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-foreground">ОСКОЛ-МЕТ-ТРЕЙД</h1>
              <p className="text-xs text-muted-foreground">Металлообработка • Металлургия • Производство</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">+7 (800) 123-45-67</span>
            </div>
            <Button variant="default" className="btn-industrial">
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
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 py-2 px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center space-x-2 text-sm mb-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+7 (800) 123-45-67</span>
              </div>
              <Button variant="default" className="btn-industrial w-full">
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