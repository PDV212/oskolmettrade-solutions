import { ArrowRight, CheckCircle2, Factory, Wrench, Flame, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import equipmentImage from '@/assets/equipment-manufacturing.webp';
const vszManufacturingImage = '/lovable-uploads/9037fa8f-e102-4232-a549-87fbfcd6bdd2.webp';
const cncMachineImage = '/lovable-uploads/b5b9d48f-fa70-463f-b4c5-98e99b19fbaa.webp';
import materialsImage from '@/assets/raw-materials.webp';
const rawMaterialsImage = '/lovable-uploads/9676f778-2096-4758-bdfe-13e24c70089a.webp';
import furnaceImage from '@/assets/metallurgy-furnace.webp';
const heatingFurnacesImage = '/lovable-uploads/edf23884-f593-4722-b789-00f5ca57510a.webp';

// New images for sections
const manipulatorsImage = '/lovable-uploads/761c2c04-8071-4122-94b3-bb0d459d2e87.webp';
const rawMaterials3Image = '/lovable-uploads/a6f5d8cf-10e5-4159-9959-51419a44edc9.webp';
const manipulators2Image = '/lovable-uploads/f95317f5-d336-41bd-bee8-c76ec0ea6a0e.webp';
const equipmentLogoImage = '/lovable-uploads/6ec4623e-736f-469e-b1e3-ec6dbe88be82.webp';
const rawMaterialsMainImage = '/lovable-uploads/raw-materials.webp';

const BusinessDirectionsEn = () => {
  const directions = [
    {
      id: 'equipment',
      icon: Wrench,
      title: 'Metalworking Equipment',
      subtitle: 'Experience since 2015 • More than 2500 machines delivered',
      description: 'Supply of modern equipment for mechanical engineering and metallurgical enterprises',
      image: null,
      features: [
        { 
          text: 'Main Equipment',
          image: cncMachineImage
        },
        'Vertical and horizontal CNC machining centers',
        'CNC turning centers',
        'CNC grinding machines',
        'Hydraulic presses',
        { 
          text: 'Robotic welding and painting sections - industrial manipulators and robots providing complete automation of key technological operations — welding and painting of metal structures — using manipulators integrated with digital drawings and sensor quality control systems',
          image: manipulatorsImage
        },
        'Metal-cutting automated complexes equipped with CNC, with workpiece feeding and finished product receiving systems',
        'Design and manufacturing of machine tool complexes equipped with CNC systems for automatic and semi-automatic machining',
        'We work with customers until achieving optimal results'
      ],
      gradient: 'bg-gradient-to-br from-primary/20 to-primary/5',
      iconColor: 'text-primary'
    },
    {
      id: 'materials',
      title: 'Metallurgical Raw Materials',
      subtitle: 'Experience since 1994 • 25 years of work with Southeast Asian manufacturers',
      description: 'Supply of quality metallurgical raw materials and materials with alloying elements',
      image: null,
      features: [
        'Manganese and iron ore',
        'High-quality bentonite',
        { 
          text: 'High-quality metallurgical materials',
          image: rawMaterials3Image
        },
        'Ferrochrome FeCr of various grades',
        'Nickel-containing pig iron NPI',
        'Stainless steel slabs',
        { 
          text: '',
          image: rawMaterialsImage
        }
      ],
      gradient: 'bg-gradient-to-br from-accent/20 to-accent/5',
      iconColor: 'text-accent'
    },
    {
      id: 'furnaces',
      icon: Flame,
      title: 'Metallurgical Furnaces',
      subtitle: 'Modern heating and melting technologies',
      description: 'Design and supply of furnace equipment for the metallurgical industry',
      image: heatingFurnacesImage,
      features: [
        'Vacuum arc furnaces (0.5-50 tons)',
        'Induction heating furnaces (up to 150 tons)',
        'Gas heating furnaces (up to 250 tons)',
        'Automatic control systems',
        'Integration into production lines'
      ],
      gradient: 'bg-gradient-to-br from-secondary/20 to-secondary/5',
      iconColor: 'text-secondary'
    },
    {
      id: 'manufacturing',
      icon: Building2,
      title: 'VSZ Production',
      subtitle: 'Voronezh Machine Tool Plant',
      description: 'Own metalworking production for oil and gas, nuclear and other industries',
      image: vszManufacturingImage,
      features: [
        'Milling and turning',
        'Turret lathe work',
        'Grinding and gear cutting',
        'All types of heat treatment',
        'Manufacturing according to customer documentation'
      ],
      gradient: 'bg-gradient-to-br from-primary/15 to-accent/10',
      iconColor: 'text-primary'
    }
  ];

  return (
    <section id="directions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">Our Business Areas</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for metallurgical and mechanical engineering enterprises. 
            Group of companies with a full cycle of services from design to service maintenance.
          </p>
          
        {/* Direction Images Gallery */}
        <div className="flex justify-center items-center gap-4 mt-12 mb-8 px-4">
          <div className="w-[480px] h-[480px] flex items-center justify-center bg-muted/50 rounded-lg p-4 flex-shrink-0">
            <img src={manipulators2Image} alt="OSKOL" className="w-[480px] h-[480px] object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <div className="w-[480px] h-[480px] flex items-center justify-center bg-muted/50 rounded-lg p-4 flex-shrink-0">
            <img src={equipmentLogoImage} alt="Equipment" className="w-[480px] h-[480px] object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <div className="w-[480px] h-[480px] flex items-center justify-center bg-muted/50 rounded-lg p-4 flex-shrink-0">
            <img src={rawMaterialsMainImage} alt="Raw Materials" className="w-[480px] h-[480px] object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
        </div>

        {/* Directions Grid */}
        <div className="space-y-16">
          {directions.map((direction, index) => (
            <div 
              key={direction.id}
              id={direction.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-industrial-slide-up`}>
                <div className={`inline-flex items-center space-x-3 p-4 rounded-xl ${direction.gradient} mb-6`}>
                  {direction.icon && (
                    <direction.icon className={`w-8 h-8 ${direction.iconColor}`} />
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{direction.title}</h3>
                    <p className="text-sm text-muted-foreground">{direction.subtitle}</p>
                  </div>
                </div>

                <p className="text-lg text-industrial mb-6">{direction.description}</p>

                <div className="space-y-3 mb-8">
                  {direction.features.map((feature, featureIndex) => (
                    <div key={featureIndex}>
                      {typeof feature === 'object' ? (
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className={`w-5 h-5 ${direction.iconColor} mt-0.5 flex-shrink-0`} />
                            <span className="text-muted-foreground">{feature.text}</span>
                          </div>
                          <div className="ml-8">
                            <div className="w-[480px] h-[480px] flex items-center justify-center bg-muted/50 rounded-lg p-4">
                              <img src={feature.image} alt={feature.text} className="w-[480px] h-[480px] object-contain opacity-90 hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start space-x-3">
                          <CheckCircle2 className={`w-5 h-5 ${direction.iconColor} mt-0.5 flex-shrink-0`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="btn-industrial"
                    onClick={() => {
                      if (direction.id === 'manufacturing') {
                        window.open('https://stankozavod.com/', '_blank');
                      } else {
                        const element = document.querySelector('#contacts');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button 
                    className="btn-steel"
                    onClick={() => {
                      const element = document.querySelector('#contacts');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Get Consultation
                  </Button>
                </div>
              </div>

              {/* Image */}
              {direction.image && (
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-industrial-fade-in`}>
                  <Card className="card-industrial overflow-hidden">
                    <div 
                      className={`${direction.id === 'equipment' || direction.id === 'materials' || direction.id === 'furnaces' || direction.id === 'manufacturing' ? 'h-96 bg-contain bg-center bg-no-repeat' : 'h-80 bg-cover bg-center'} relative`}
                      style={{ backgroundImage: `url(${direction.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center space-x-2 text-white">
                          {direction.icon && (
                            <direction.icon className="w-6 h-6" />
                          )}
                          <span className="font-semibold">{direction.title}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessDirectionsEn;