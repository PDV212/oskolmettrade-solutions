import { ArrowRight, CheckCircle2, Factory, Wrench, Flame, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import equipmentImage from '@/assets/equipment-manufacturing.jpg';
const vszManufacturingImage = '/lovable-uploads/9037fa8f-e102-4232-a549-87fbfcd6bdd2.png';
const cncMachineImage = '/lovable-uploads/b5b9d48f-fa70-463f-b4c5-98e99b19fbaa.png';
import materialsImage from '@/assets/raw-materials.jpg';
const rawMaterialsImage = '/lovable-uploads/9676f778-2096-4758-bdfe-13e24c70089a.png';
import furnaceImage from '@/assets/metallurgy-furnace.jpg';
const heatingFurnacesImage = '/lovable-uploads/edf23884-f593-4722-b789-00f5ca57510a.png';

const BusinessDirections = () => {
  const directions = [
    {
      id: 'equipment',
      icon: Wrench,
      title: 'Металлообрабатывающее оборудование',
      subtitle: 'Опыт с 2015 года • Более 2500 станков поставлено',
      description: 'Поставка современного оборудования для машиностроительных и металлургических предприятий',
      image: cncMachineImage,
      features: [
        'Вертикальные и горизонтальные обрабатывающие центры с ЧПУ',
        'Токарные обрабатывающие центры с ЧПУ',
        'Шлифовальные станки с ЧПУ',
        'Гидравлические прессы',
        'Роботизированные участки сварки и покраски'
      ],
      gradient: 'bg-gradient-to-br from-primary/20 to-primary/5',
      iconColor: 'text-primary'
    },
    {
      id: 'materials',
      title: 'Металлургическое сырье',
      subtitle: 'Опыт с 1994 года • 25 лет работы с производителями ЮВА',
      description: 'Поставка качественного металлургического сырья и материалов с легирующими элементами',
      image: rawMaterialsImage,
      features: [
        'Марганцевая и железная руда',
        'Бентонит высокого качества',
        'Феррохром FeCr различных марок',
        'Чугун никельсодержащий NPI',
        'Слябы из нержавеющей стали'
      ],
      gradient: 'bg-gradient-to-br from-accent/20 to-accent/5',
      iconColor: 'text-accent'
    },
    {
      id: 'furnaces',
      icon: Flame,
      title: 'Металлургические печи',
      subtitle: 'Современные технологии нагрева и плавки',
      description: 'Проектирование и поставка печного оборудования для металлургической промышленности',
      image: heatingFurnacesImage,
      features: [
        'Вакуумно-дуговые печи (0,5-50 тонн)',
        'Печи индукционного нагрева (до 150 тонн)',
        'Печи газового нагрева (до 250 тонн)',
        'Системы автоматического контроля',
        'Интеграция в производственные линии'
      ],
      gradient: 'bg-gradient-to-br from-secondary/20 to-secondary/5',
      iconColor: 'text-secondary'
    },
    {
      id: 'manufacturing',
      icon: Building2,
      title: 'Производство ВСЗ',
      subtitle: 'Воронежский Станкостроительный Завод',
      description: 'Собственное производство металлообработки для нефтегазовой, атомной и других отраслей',
      image: vszManufacturingImage,
      features: [
        'Фрезерная и токарная обработка',
        'Токарно-карусельные работы',
        'Шлифовальные работы и зуборезка',
        'Все виды термообработки',
        'Изготовление по документации заказчика'
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
          <h2 className="heading-section mb-4">Наши направления деятельности</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Комплексные решения для металлургических и машиностроительных предприятий. 
            Группа компаний с полным циклом услуг от проектирования до сервисного обслуживания.
          </p>
        </div>

        {/* Directions Grid */}
        <div className="space-y-16">
          {directions.map((direction, index) => (
            <div 
              key={direction.id}
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
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle2 className={`w-5 h-5 ${direction.iconColor} mt-0.5 flex-shrink-0`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-industrial">
                    Подробнее
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="btn-steel">
                    Получить консультацию
                  </Button>
                </div>
              </div>

              {/* Image */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessDirections;