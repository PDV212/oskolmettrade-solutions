import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import LanguageSelector from './LanguageSelector';
import OptimizedImage from '@/components/ui/optimized-image';
import useResponsiveImage from '@/hooks/useResponsiveImage';
import MobileSidebar from './MobileSidebar';

interface HeaderProps {
  language?: string;
}

const Header = ({ language = 'ru' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const logoSrc = "/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png";
  const logoConfig = useResponsiveImage(logoSrc);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavItems = () => {
    if (language === 'en') {
      return [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#directions' },
        { name: 'Equipment', href: '#equipment' },
        { name: 'Materials', href: '#materials' },
        { name: 'Furnaces', href: '#furnaces' },
        { name: 'VSZ Production', href: '#manufacturing' },
        { name: 'Contacts', href: '#contacts' }
      ];
    } else if (language === 'zh') {
      return [
        { name: '首页', href: '#home' },
        { name: '关于我们', href: '#directions' },
        { name: '设备', href: '#equipment' },
        { name: '原材料', href: '#materials' },
        { name: '炉子', href: '#furnaces' },
        { name: 'VSZ生产', href: '#manufacturing' },
        { name: '联系方式', href: '#contacts' }
      ];
    }
    return [
      { name: 'Главная', href: '#home' },
      { name: 'О компании', href: '#directions' },
      { name: 'Оборудование', href: '#equipment' },
      { name: 'Сырье', href: '#materials' },
      { name: 'Печи', href: '#furnaces' },
      { name: 'Производство ВСЗ', href: '#manufacturing' },
      { name: 'Контакты', href: '#contacts' }
    ];
  };

  const navItems = getNavItems();

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href) as HTMLElement;
      if (element) {
        // Для кнопки "О компании" используем меньший отступ, чтобы контент был ниже
        const headerHeight = href === '#directions' ? 60 : 100;
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
    <SidebarProvider>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/98 backdrop-blur-md border-b border-border shadow-lg' 
          : 'bg-background/95 backdrop-blur-sm border-b border-border'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Sidebar Trigger */}
            <div className="lg:hidden">
              <SidebarTrigger className="touch-target p-2 rounded-md hover:bg-muted transition-colors">
                <Menu className="w-6 h-6" />
              </SidebarTrigger>
            </div>

            {/* Logo */}
            <div className="flex items-center space-x-2">
              <OptimizedImage
                src={logoSrc}
                alt="OMT Logo" 
                className={logoConfig.className}
                priority={true}
                loading="eager"
                sizes={logoConfig.sizes}
                aspectRatio="square"
              />
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
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium touch-target"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Language Selector */}
            <div className="hidden md:flex items-center space-x-4">
              <LanguageSelector />
            </div>

            {/* Mobile Language Selector */}
            <div className="lg:hidden">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <MobileSidebar language={language} />
    </SidebarProvider>
  );
};

export default Header;