import { Award, Shield, Wrench, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import OptimizedImage from '@/components/ui/optimized-image';

/** Mirrors CompanyAdvantages.tsx claim-safety policy (ZH). */
const CompanyAdvantagesZh = () => {
  const advantages = [
    {
      icon: Award,
      title: '创始人与团队的行业经验',
      description:
        '创始人的行业工作及团队经验积累始于 1994 年。该日期并非当前法人实体 OSKOL-MET-TRADE 有限责任公司的成立或经营起始日期。',
      stat: '始于 1994',
      gradient: 'from-primary/20 to-primary/5',
    },
    {
      icon: Shield,
      title: '三个业务方向',
      description:
        '在金属加工设备及机器人焊接/喷涂系统、工业炉、铁合金及冶金材料等方向开展联合项目。',
      stat: '3 个方向',
      gradient: 'from-secondary/20 to-secondary/5',
    },
    {
      icon: Wrench,
      title: '按项目合同工作',
      description:
        '配置、技术规格、交付周期、安装、保修及售后条款按每个具体项目在合同中约定。',
      stat: '按项目',
      gradient: 'from-secondary/15 to-primary/10',
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
            <div className="flex justify-center">
              <OptimizedImage
                src="/lovable-uploads/60e96441-47a3-42d5-9d37-25a8643700ee.png"
                alt="OSKOL-MET-TRADE — 图示"
                className="w-full max-w-[300px] h-auto"
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <div className="flex justify-center">
              <OptimizedImage
                src="/lovable-uploads/9fca8bba-f5fc-48ef-afd1-def786998cd2.png"
                alt="金属加工 — 图示"
                className="w-full max-w-[300px] h-auto"
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <div className="flex justify-center">
              <OptimizedImage
                src="/lovable-uploads/1a97cade-fd54-4fd9-a421-51a17f806ae7.png"
                alt="冶金 — 图示"
                className="w-full max-w-[300px] h-auto"
                objectFit="contain"
                loading="lazy"
              />
            </div>
          </div>
          <h2 className="heading-section mb-4">为什么选择我们</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            工业设备、冶金原材料供应及生产合作方向的 B2B 合作伙伴。各方向的具体条件按合同确定。
          </p>
        </div>

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
                <span className="font-medium">按合同确定</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyAdvantagesZh;
