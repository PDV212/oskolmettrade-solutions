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

const CompanyAdvantagesEn = () => {
  const advantages = [
    {
      icon: Award,
      title: 'Years of Experience',
      description: '30 years of work in metallurgy since 1994 and equipment supply since 2015',
      stat: '30 years',
      gradient: 'from-primary/20 to-primary/5'
    },
    {
      icon: Globe,
      title: 'International Deliveries',
      description: 'More than 2500 machines delivered, geography covers CIS and foreign countries',
      stat: '2500+ machines',
      gradient: 'from-accent/20 to-accent/5'
    },
    {
      icon: Shield,
      title: 'Full Service Cycle',
      description: 'Group of companies with own production, trading, logistics and service',
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
      title: 'Technical Expertise',
      description: 'Our technical experts are associate professors of leading Russian universities with a minimum level of "Candidate of Technical Sciences" in the field of metallurgical engineering.',
      stat: 'Expert level',
      gradient: 'from-accent/15 to-primary/10'
    },
    {
      icon: Wrench,
      title: 'Complex Solutions',
      description: 'From equipment supply to robotic section equipment',
      stat: 'Turnkey',
      gradient: 'from-secondary/15 to-primary/10'
    }
  ];

  const achievements = [
    { number: '30+', label: 'years of experience' },
    { number: '2500+', label: 'machines delivered' },
    { number: '4', label: 'business areas' },
    { number: '25', label: 'years working with SEA' }
  ];

  return (
    <section id="advantages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
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