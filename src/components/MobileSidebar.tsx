import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Home, 
  Building, 
  Wrench, 
  Layers, 
  Flame, 
  Factory, 
  Phone, 
  Mail,
  Globe,
  X
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import LanguageSelector from './LanguageSelector';
import OptimizedImage from './ui/optimized-image';

interface MobileSidebarProps {
  language?: string;
}

const MobileSidebar = ({ language = 'ru' }: MobileSidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getNavItems = () => {
    if (language === 'en') {
      return [
        { name: 'Home', href: '#home', icon: Home },
        { name: 'About', href: '#directions', icon: Building },
        { name: 'Equipment', href: '#equipment', icon: Wrench },
        { name: 'Materials', href: '#materials', icon: Layers },
        { name: 'Furnaces', href: '#furnaces', icon: Flame },
        { name: 'VSZ Production', href: '#manufacturing', icon: Factory },
        { name: 'Contacts', href: '#contacts', icon: Phone }
      ];
    } else if (language === 'zh') {
      return [
        { name: '首页', href: '#home', icon: Home },
        { name: '关于我们', href: '#directions', icon: Building },
        { name: '设备', href: '#equipment', icon: Wrench },
        { name: '原材料', href: '#materials', icon: Layers },
        { name: '炉子', href: '#furnaces', icon: Flame },
        { name: 'VSZ生产', href: '#manufacturing', icon: Factory },
        { name: '联系方式', href: '#contacts', icon: Phone }
      ];
    }
    return [
      { name: 'Главная', href: '#home', icon: Home },
      { name: 'О компании', href: '#directions', icon: Building },
      { name: 'Оборудование', href: '#equipment', icon: Wrench },
      { name: 'Сырье', href: '#materials', icon: Layers },
      { name: 'Печи', href: '#furnaces', icon: Flame },
      { name: 'Производство ВСЗ', href: '#manufacturing', icon: Factory },
      { name: 'Контакты', href: '#contacts', icon: Phone }
    ];
  };

  const getLanguageRoutes = () => {
    return [
      { name: 'Русский', href: '/', icon: Globe, flag: '🇷🇺' },
      { name: 'English', href: '/en', icon: Globe, flag: '🇺🇸' },
      { name: '中文', href: '/zh', icon: Globe, flag: '🇨🇳' }
    ];
  };

  const navItems = getNavItems();
  const languageRoutes = getLanguageRoutes();

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href) as HTMLElement;
      if (element) {
        const headerHeight = href === '#directions' ? 60 : 100;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const isActiveSection = (href: string) => {
    // Simple check for current section - could be enhanced with intersection observer
    return false;
  };

  return (
    <Sidebar className="lg:hidden border-r border-border bg-background">
      <SidebarContent className="p-0">
        {/* Header with Logo */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <OptimizedImage
              src="/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png"
              alt="OMT Logo"
              className="w-10 h-10 rounded-lg"
              aspectRatio="square"
              loading="eager"
              sizes="40px"
            />
            <div>
              <h2 className="text-lg font-bold text-foreground">ОСКОЛ-МЕТ-ТРЕЙД</h2>
              <p className="text-xs text-muted-foreground">С 1994 года</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <SidebarGroup className="px-3 py-4">
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
            Навигация
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    onClick={() => scrollToSection(item.href)}
                    className={`
                      touch-button w-full h-12 px-3 py-2 rounded-lg transition-all duration-200
                      flex items-center space-x-3 text-left
                      ${isActiveSection(item.href) 
                        ? 'bg-primary text-primary-foreground font-medium' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }
                    `}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-base">{item.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Language Selection */}
        <SidebarGroup className="px-3 py-4 border-t border-border">
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
            Язык / Language
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {languageRoutes.map((route) => (
                <SidebarMenuItem key={route.name}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={route.href}
                      className={({ isActive }) => `
                        touch-button w-full h-12 px-3 py-2 rounded-lg transition-all duration-200
                        flex items-center space-x-3 text-left
                        ${isActive 
                          ? 'bg-primary text-primary-foreground font-medium' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        }
                      `}
                    >
                      <span className="text-lg flex-shrink-0">{route.flag}</span>
                      <span className="text-base">{route.name}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Contact Info */}
        <div className="mt-auto p-6 border-t border-border bg-muted/20">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <div className="text-sm">
                <div>+7 495 240 91 99</div>
                <div>+7 909 097 71 74</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span className="text-sm">89090977174@mail.ru</span>
            </div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default MobileSidebar;