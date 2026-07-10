import { 
  Award, 
  Globe, 
  Shield, 
  Clock, 
  Users, 
  Wrench,
  CheckCircle2,
  Star
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import OptimizedImage from '@/components/ui/optimized-image';
import { IndustryLeaderBadgeZh, ExperienceBadgeZh, TrustedBadgeZh, GrowthBadgeZh } from '@/components/ui/badge-premium';
import { trustSignals, isPubliclyVerified } from '@/data/companyRegistry';

const CompanyAdvantagesZh = () => {
  const showEquipmentDelivered = isPubliclyVerified(trustSignals.equipmentDelivered);
  const showAsianPartners = isPubliclyVerified(trustSignals.asianPartnerFactories);
  const advantages = [
    {
      icon: Award,
      title: '行业经验始于1994年',
      description: '公司创始人及团队在冶金和工业设备领域的经验可追溯至1994年；OSKOL-MET-TRADE有限责任公司延续并发展了这些行业经验。',
      stat: '团队经验始于1994年',
      gradient: 'from-primary/20 to-primary/5'
    },
    showEquipmentDelivered && {
      icon: Globe,
      title: '国际业务经验覆盖地区',
      description: '团队与创始人所创办企业的累计国际经验涵盖俄罗斯、白俄罗斯、哈萨克斯坦、中国、印度、印度尼西亚、以色列、意大利、马来西亚和菲律宾。',
      stat: '独联体、亚洲、中东、欧洲',
      gradient: 'from-accent/20 to-accent/5'
    },
    {
      icon: Shield,
      title: '全周期服务',
      description: '在设备供应、原材料、冶金炉及与VSZ的生产合作等方面开展联合项目。',
      stat: '4个方向',
      gradient: 'from-secondary/20 to-secondary/5'
    },
    {
      icon: Clock,
      title: '保修服务',
      description: '通过乌拉尔地区认证企业提供保修后服务',
      stat: '24/7支持',
      gradient: 'from-primary/15 to-accent/10'
    },
    {
      icon: Users,
      title: '技术总监',
      description: '技术总监：谢尔盖·阿纳托利耶维奇·库尔古佐夫，技术科学副博士，机械制造工艺学副教授。',
      stat: '副博士，副教授',
      gradient: 'from-accent/15 to-primary/10'
    },
    {
      icon: Wrench,
      title: '综合解决方案',
      description: '从设备供应到机器人工作站设备',
      stat: '交钥匙',
      gradient: 'from-secondary/15 to-primary/10'
    }
  ].filter(Boolean) as Array<{ icon: typeof Award; title: string; description: string; stat: string; gradient: string }>;

  const achievements = [
    { number: '1994', label: '团队经验始于' },
    showEquipmentDelivered && { number: '约2,500', label: '台 — 累计项目经验' },
    { number: '4', label: '业务方向' },
    showAsianPartners && { number: '25', label: '年与东南亚合作' }
  ].filter(Boolean) as Array<{ number: string; label: string }>;

  return (
    <section id="advantages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
            <div className="flex justify-center">
              <OptimizedImage 
                src="/lovable-uploads/60e96441-47a3-42d5-9d37-25a8643700ee.png" 
                alt="30年经验" 
                className="w-full max-w-[300px] h-auto"
                objectFit="contain"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className="flex justify-center">
              <OptimizedImage 
                src="/lovable-uploads/9fca8bba-f5fc-48ef-afd1-def786998cd2.png" 
                alt="行业领导者" 
                className="w-full max-w-[300px] h-auto"
                objectFit="contain"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className="flex justify-center">
              <OptimizedImage 
                src="/lovable-uploads/1a97cade-fd54-4fd9-a421-51a17f806ae7.png" 
                alt="可靠合作伙伴" 
                className="w-full max-w-[300px] h-auto"
                objectFit="contain"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </div>
          <h2 className="heading-section mb-4">为什么选择我们</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            拥有多年经验、自有生产和冶金企业全周期服务的可靠合作伙伴
          </p>
        </div>

        {/* Key Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center animate-industrial-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {achievement.number}
              </div>
              <div className="text-muted-foreground">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card 
              key={index}
              className="card-industrial animate-industrial-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${advantage.gradient} mb-6`}>
                <advantage.icon className="w-8 h-8 text-primary" />
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">{advantage.title}</h3>
                  <span className="text-sm font-semibold text-accent">{advantage.stat}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>

              <div className="flex items-center space-x-2 text-sm text-primary">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-medium">实践证明</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Quality Assurance Banner */}
        <div className="mt-16">
          <Card className="card-industrial bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20">
            <div className="text-center py-8">
              <div className="flex justify-center gap-3 mb-6">
                <GrowthBadgeZh size="lg" />
              </div>
              <div className="flex justify-center mb-4">
                <Star className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                质量和可靠性保证
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                所有设备都经过严格的质量控制，
                提供技术支持和保修服务
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompanyAdvantagesZh;