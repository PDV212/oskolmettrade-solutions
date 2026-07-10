import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  language?: 'ru' | 'en' | 'zh';
  variant?: 'default' | 'compact';
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ language = 'ru', variant = 'default', className = '' }) => {
  const texts = {
    ru: {
      title: 'Получить коммерческое предложение',
      subtitle: 'Бесплатная консультация и расчёт стоимости',
      phone: '+7 909 097 71 74',
      note: 'Позвоните напрямую по указанному номеру'
    },
    en: {
      title: 'Get Commercial Proposal',
      subtitle: 'Free consultation and cost calculation',
      phone: '+7 909 097 71 74',
      note: 'Call us directly at the number above'
    },
    zh: {
      title: '获取商业报价',
      subtitle: '免费咨询和成本计算',
      phone: '+7 909 097 71 74',
      note: '请直接拨打上述号码'
    }
  };

  const content = texts[language];

  const handleClick = () => {
    window.location.href = `tel:${content.phone}`;
  };

  if (variant === 'compact') {
    return (
      <div className={`flex justify-center ${className}`}>
        <Button
          onClick={handleClick}
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 text-lg rounded-xl shadow-accent-glow hover:shadow-lg transition-all duration-300 animate-pulse hover:animate-none touch-button group"
          size="lg"
        >
          <Phone className="w-5 h-5 mr-2" />
          {content.title}
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    );
  }

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent p-8 rounded-2xl border border-accent/20 shadow-accent-glow">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {content.title}
          </h3>
          <p className="text-muted-foreground mb-6 text-lg">
            {content.subtitle}
          </p>
          <Button
            onClick={handleClick}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-6 text-xl rounded-xl shadow-accent-glow hover:shadow-lg transition-all duration-300 animate-pulse hover:animate-none touch-button group"
            size="lg"
          >
            <Phone className="w-6 h-6 mr-3" />
            {content.phone}
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="mt-4 text-sm text-muted-foreground">
            {content.note}
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTAButton };
export default CTAButton;