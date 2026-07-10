import { ArrowRight, Factory, Wrench, Flame, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/optimized-image';
import { IndustryLeaderBadgeZh, ExperienceBadgeZh, TrustedBadgeZh } from '@/components/ui/badge-premium';
import heroImage from '@/assets/hero-industrial.jpg';
import { trustSignals, isPubliclyVerified } from '@/data/companyRegistry';

const HeroSectionZh = () => {
  const showEquipmentDelivered = isPubliclyVerified(trustSignals.equipmentDelivered);
  const businessDirections = [
    {
      icon: Wrench,
      title: '金属加工设备',
      description: '数控机床，机器人系统',
      color: 'text-primary'
    },
    {
      icon: Factory,
      title: '冶金原材料',
      description: '矿石，铁合金，合金材料',
      color: 'text-accent'
    },
    {
      icon: Flame,
      title: '冶金炉',
      description: '真空炉，感应炉，燃气炉',
      color: 'text-secondary'
    },
    {
      icon: Building2,
      title: 'VSZ生产',
      description: '金属加工，零件制造',
      color: 'text-primary'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={heroImage}
          alt="奥斯科尔-金属-贸易工业生产"
          className="w-full h-full"
          objectFit="cover"
          priority={true}
          loading="eager"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 animate-industrial-slide-up">
            {/* Premium Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <ExperienceBadgeZh size="lg" animation="float" />
              <IndustryLeaderBadgeZh size="lg" animation="glow" />
            </div>
            
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6" style={{ WebkitTextFillColor: 'white', backgroundClip: 'unset', WebkitBackgroundClip: 'unset' }}>
                奥斯科尔-金属-贸易
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-4">
                冶金与机械工程的可靠解决方案
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                公司创始人及团队在冶金和工业设备领域的经验可追溯至1994年，当时创始人创建的首批企业开始运营。OSKOL-MET-TRADE有限责任公司延续并发展了这些行业经验。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="btn-industrial bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg"
                onClick={() => {
                  const element = document.querySelector('#contacts');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                选择设备
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-4 text-lg text-primary border-white/30 hover:bg-white/20 bg-white/90"
                onClick={() => {
                  const element = document.querySelector('#directions');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                我们的能力
              </Button>
            </div>

            {/* Enhanced Stats with Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">30+</div>
                <div className="text-white/70 text-sm">团队经验始于1994年</div>
              </div>
              {showEquipmentDelivered && (
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-accent">约2,500</div>
                  <div className="text-white/70 text-sm">台 — 累计项目经验</div>
                </div>
              )}
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">4</div>
                <div className="text-white/70 text-sm">业务方向</div>
              </div>
              <div className="text-center sm:col-span-2 lg:col-span-1">
                <TrustedBadgeZh size="sm" variant="glass" />
              </div>
            </div>
          </div>
        </div>

        {/* Business Directions - Positioned absolutely within hero section */}
        <div className="absolute bottom-0 right-0 w-80 animate-industrial-fade-in hidden lg:block z-20">
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4">业务方向</h3>
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

export default HeroSectionZh;