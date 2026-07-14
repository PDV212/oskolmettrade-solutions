import { Award, Shield, Wrench, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import OptimizedImage from '@/components/ui/optimized-image';

/** Mirrors CompanyAdvantages.tsx claim-safety policy (RU). */
const CompanyAdvantagesEn = () => {
  const advantages = [
    {
      icon: Award,
      title: "Founder's and team industry experience",
      description:
        "The founder's industry work and the team's accumulated experience date from 1994. This is not the start date of the current legal entity, OSKOL-MET-TRADE LLC.",
      stat: 'since 1994',
      gradient: 'from-primary/20 to-primary/5',
    },
    {
      icon: Shield,
      title: 'Three business areas',
      description:
        'Joint projects covering metalworking equipment and robotic complexes, industrial furnaces, and ferroalloys and materials for metallurgy.',
      stat: '3 areas',
      gradient: 'from-secondary/20 to-secondary/5',
    },
    {
      icon: Wrench,
      title: 'Per-project contract work',
      description:
        'Configuration, specifications, lead times, installation, warranty and after-sales terms are agreed for each individual project in the contract.',
      stat: 'Per project',
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
                alt="OSKOL-MET-TRADE — illustration"
                className="w-full max-w-[300px] h-auto"
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <div className="flex justify-center">
              <OptimizedImage
                src="/lovable-uploads/9fca8bba-f5fc-48ef-afd1-def786998cd2.png"
                alt="Metalworking — illustration"
                className="w-full max-w-[300px] h-auto"
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <div className="flex justify-center">
              <OptimizedImage
                src="/lovable-uploads/1a97cade-fd54-4fd9-a421-51a17f806ae7.png"
                alt="Metallurgy — illustration"
                className="w-full max-w-[300px] h-auto"
                objectFit="contain"
                loading="lazy"
              />
            </div>
          </div>
          <h2 className="heading-section mb-4">Why choose us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            B2B partner for metalworking equipment, robotic welding and painting complexes, industrial
            furnaces, ferroalloys and materials for metallurgy. Specific conditions for each area are fixed in the contract.
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
                <span className="font-medium">Fixed in contract</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyAdvantagesEn;
