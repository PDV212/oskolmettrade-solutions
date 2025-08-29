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

const CompanyAdvantagesZh = () => {
  const advantages = [
    {
      icon: Award,
      title: '多年经验',
      description: '自1994年以来在冶金领域工作30年，自2015年以来设备供应',
      stat: '30年',
      gradient: 'from-primary/20 to-primary/5'
    },
    {
      icon: Globe,
      title: '国际供应',
      description: '供应超过2500台机床，地理范围覆盖独联体和远外国家',
      stat: '2500+台机床',
      gradient: 'from-accent/20 to-accent/5'
    },
    {
      icon: Shield,
      title: '全周期服务',
      description: '集团公司拥有自己的生产、贸易、物流和服务',
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
      title: '技术专长',
      description: '我们的技术专家是俄罗斯领先大学的副教授，在冶金机械工程领域具有最低"技术科学候选人"水平。',
      stat: '专家级',
      gradient: 'from-accent/15 to-primary/10'
    },
    {
      icon: Wrench,
      title: '综合解决方案',
      description: '从设备供应到机器人工作站设备',
      stat: '交钥匙',
      gradient: 'from-secondary/15 to-primary/10'
    }
  ];

  const achievements = [
    { number: '30+', label: '年经验' },
    { number: '2500+', label: '台机床供应' },
    { number: '4', label: '业务方向' },
    { number: '25', label: '年与东南亚合作' }
  ];

  return (
    <section id="advantages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
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