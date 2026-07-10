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
import { IndustryLeaderBadgeEn, ExperienceBadgeEn, TrustedBadgeEn, GrowthBadgeEn } from '@/components/ui/badge-premium';
import { trustSignals, isPubliclyVerified } from '@/data/companyRegistry';

const CompanyAdvantagesEn = () => {
  const showEquipmentDelivered = isPubliclyVerified(trustSignals.equipmentDelivered);
  const showAsianPartners = isPubliclyVerified(trustSignals.asianPartnerFactories);
  const advantages = [
    {
      icon: Award,
      title: 'Industry experience since 1994',
      description: 'The industry experience of the business founder and the team dates back to 1994; OSKOL-MET-TRADE LLC continues and develops this expertise.',
      stat: 'Team experience since 1994',
      gradient: 'from-primary/20 to-primary/5'
    },
    showEquipmentDelivered && {
      icon: Globe,
      title: 'Geography of international experience',
      description: 'The consolidated international experience of the team and the founder\u2019s companies covers Russia, Belarus, Kazakhstan, China, India, Indonesia, Israel, Italy, Malaysia and the Philippines.',
      stat: 'CIS, Asia, Middle East, Europe',
      gradient: 'from-accent/20 to-accent/5'
    },
    {
      icon: Shield,
      title: 'Full Service Cycle',
      description: 'Joint projects for equipment supply, raw materials, metallurgical furnaces and manufacturing cooperation with VSZ.',
      stat: '4 directions',
      gradient: 'from-secondary/20 to-secondary/5'
    },
    {
      icon: Clock,
      title: 'Warranty Service',
      description: 'Post-warranty service through accredited enterprise in the Urals',
      stat: '24/7 support',
      gradient: 'from-primary/15 to-accent/10'
    },
    {
      icon: Users,
      title: 'Technical Director',
      description: 'Technical Director \u2014 Sergey Anatolyevich Kurguzov, Candidate of Technical Sciences and Associate Professor in Manufacturing Engineering Technology.',
      stat: 'PhD, Associate Professor',
      gradient: 'from-accent/15 to-primary/10'
    },
    {
      icon: Wrench,
      title: 'Complex Solutions',
      description: 'From equipment supply to robotic section equipment',
      stat: 'Turnkey',
      gradient: 'from-secondary/15 to-primary/10'
    }
  ].filter(Boolean) as Array<{ icon: typeof Award; title: string; description: string; stat: string; gradient: string }>;

  const achievements = [
    { number: '1994', label: 'team experience since' },
    showEquipmentDelivered && { number: '\u22482,500', label: 'units \u2014 consolidated experience' },
    { number: '4', label: 'business areas' },
    showAsianPartners && { number: '25', label: 'years working with SEA' }
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
                alt="30 Years Experience" 
                className="w-full max-w-[300px] h-auto"
                objectFit="contain"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className="flex justify-center">
              <OptimizedImage 
                src="/lovable-uploads/9fca8bba-f5fc-48ef-afd1-def786998cd2.png" 
                alt="Industry Leader" 
                className="w-full max-w-[300px] h-auto"
                objectFit="contain"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className="flex justify-center">
              <OptimizedImage 
                src="/lovable-uploads/1a97cade-fd54-4fd9-a421-51a17f806ae7.png" 
                alt="Trusted Partner" 
                className="w-full max-w-[300px] h-auto"
                objectFit="contain"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </div>
          <h2 className="heading-section mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reliable partner with years of experience, own production 
            and full cycle of services for metallurgical enterprises
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
                <span className="font-medium">Proven by practice</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Quality Assurance Banner */}
        <div className="mt-16">
          <Card className="card-industrial bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20">
            <div className="text-center py-8">
              <div className="flex justify-center gap-3 mb-6">
                <GrowthBadgeEn size="lg" />
              </div>
              <div className="flex justify-center mb-4">
                <Star className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Quality and Reliability Guarantee
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                All equipment undergoes strict quality control, 
                technical support and warranty service are provided
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompanyAdvantagesEn;