import { ArrowRight, CheckCircle2, Factory, Wrench, Flame, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import OptimizedImage from '@/components/ui/optimized-image';
import equipmentImage from '@/assets/equipment-manufacturing.jpg';
const vszManufacturingImage = '/lovable-uploads/9037fa8f-e102-4232-a549-87fbfcd6bdd2.png';
const cncMachineImage = '/lovable-uploads/b5b9d48f-fa70-463f-b4c5-98e99b19fbaa.png';
import materialsImage from '@/assets/raw-materials.jpg';
const rawMaterialsImage = '/lovable-uploads/9676f778-2096-4758-bdfe-13e24c70089a.png';
import furnaceImage from '@/assets/metallurgy-furnace.jpg';
const heatingFurnacesImage = '/lovable-uploads/edf23884-f593-4722-b789-00f5ca57510a.png';

// New images for sections
const manipulatorsImage = '/lovable-uploads/761c2c04-8071-4122-94b3-bb0d459d2e87.png';
const rawMaterials3Image = '/lovable-uploads/a6f5d8cf-10e5-4159-9959-51419a44edc9.png';
const manipulators2Image = '/lovable-uploads/f95317f5-d336-41bd-bee8-c76ec0ea6a0e.png';
const equipmentLogoImage = '/lovable-uploads/6ec4623e-736f-469e-b1e3-ec6dbe88be82.png';
const rawMaterialsMainImage = '/lovable-uploads/raw-materials.png';

const BusinessDirections = () => {
  const directions = [
    {
      id: 'equipment',
      icon: Wrench,
      title: 'Металлообрабатывающее оборудование',
      subtitle: 'Опыт с 2015 года • ≈2 500 единиц — совокупный опыт команды',
      description: 'Поставка современного оборудования для машиностроительных и металлургических предприятий',
      image: null,
      features: [
        { 
          text: 'Основное оборудование',
          image: cncMachineImage
        },
        'Вертикальные и горизонтальные обрабатывающие центры с ЧПУ',
        'Токарные обрабатывающие центры с ЧПУ',
        'Шлифовальные станки с ЧПУ',
        'Гидравлические прессы',
        { 
          text: 'Роботизированные участки сварки и покраски — промышленные манипуляторы и роботы, обеспечивающие полную автоматизацию ключевых технологических операций — сварки и покраски металлоконструкций, при этом траектории движения сварочной и покрасочной головок рассчитываются искусственным интеллектом на основе AI+3D-анализа цифровых чертежей из Tekla Structures, с коррекцией по данным лазерных датчиков, определяющих фактические координаты, и с использованием сенсорных систем контроля качества.',
          image: manipulatorsImage
        },
        'Металлорежущие автоматизированные комплексы, оснащенные СЧПУ, с системами подачи заготовки и приема готового изделия',
        'Проектирование и изготовление станочных комплексов, оснащенных системой ЧПУ, для механической обработки в автоматическом и полуавтоматическом режиме',
        'Работаем с заказчиками до достижения оптимального результата'
      ],
      gradient: 'bg-gradient-to-br from-primary/20 to-primary/5',
      iconColor: 'text-primary'
    },
    {
      id: 'materials',
      title: 'Металлургическое сырье',
      subtitle: 'Отраслевой опыт команды с 1994 года',
      description: 'Поставка качественного металлургического сырья и материалов с легирующими элементами',
      image: null,
      features: [
        'Марганцевая и железная руда',
        'Бентонит высокого качества',
        { 
          text: 'Высококачественные металлургические материалы',
          image: rawMaterials3Image
        },
        'Феррохром FeCr различных марок',
        'Чугун никельсодержащий NPI',
        'Слябы из нержавеющей стали',
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
      title: 'Производственные возможности ВСЗ',
      subtitle: 'Воронежский станкостроительный завод — отдельное юридическое лицо',
      description: 'Производственные возможности Воронежского станкостроительного завода могут использоваться в совместных проектах. ООО «ОСКОЛ-МЕТ-ТРЕЙД» и ВСЗ являются отдельными юридическими лицами, связанными общим собственником.',
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
          
        {/* Direction Images Gallery */}
        <div className="flex justify-center items-center gap-4 mt-12 mb-8 px-4">
          <div className="w-[480px] h-[480px] flex items-center justify-center bg-muted/50 rounded-lg p-4 flex-shrink-0">
            <OptimizedImage 
              src={manipulators2Image} 
              alt="OSKOL" 
              className="w-[480px] h-[480px] opacity-80 hover:opacity-100 transition-opacity" 
              objectFit="contain"
              loading="lazy"
            />
          </div>
          <div className="w-[480px] h-[480px] flex items-center justify-center bg-muted/50 rounded-lg p-4 flex-shrink-0">
            <OptimizedImage 
              src={equipmentLogoImage} 
              alt="Equipment" 
              className="w-[480px] h-[480px] opacity-80 hover:opacity-100 transition-opacity" 
              objectFit="contain"
              loading="lazy"
            />
          </div>
          <div className="w-[480px] h-[480px] flex items-center justify-center bg-muted/50 rounded-lg p-4 flex-shrink-0">
            <OptimizedImage 
              src={rawMaterialsMainImage} 
              alt="Raw Materials" 
              className="w-[480px] h-[480px] opacity-80 hover:opacity-100 transition-opacity" 
              objectFit="contain"
              loading="lazy"
            />
          </div>
        </div>
        </div>

        {/* Directions Grid */}
        <div className="space-y-16">
          {directions.map((direction, index) => (
            <article 
              key={direction.id}
              id={direction.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              itemScope 
              itemType="https://schema.org/Service"
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-industrial-slide-up`}>
                <header className={`inline-flex items-center space-x-3 p-4 rounded-xl ${direction.gradient} mb-6`}>
                  {direction.icon && (
                    <direction.icon className={`w-8 h-8 ${direction.iconColor}`} />
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground" itemProp="name">{direction.title}</h3>
                    <p className="text-sm text-muted-foreground">{direction.subtitle}</p>
                  </div>
                </header>

                <p className="text-lg text-industrial mb-6" itemProp="description">{direction.description}</p>

                <section aria-label="Особенности" className="space-y-3 mb-8">
                  {direction.features.map((feature, featureIndex) => (
                    <div key={featureIndex}>
                      {typeof feature === 'object' ? (
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className={`w-5 h-5 ${direction.iconColor} mt-0.5 flex-shrink-0`} />
                            <span className="text-muted-foreground">{feature.text}</span>
                          </div>
                          <figure className="ml-8">
                            <div className="w-[480px] h-[480px] flex items-center justify-center bg-muted/50 rounded-lg p-4">
                              <OptimizedImage 
                                src={feature.image} 
                                alt={feature.text} 
                                className="w-[480px] h-[480px] opacity-90 hover:opacity-100 transition-opacity" 
                                objectFit="contain"
                                loading="lazy"
                              />
                            </div>
                            {feature.text && (
                              <figcaption className="sr-only">{feature.text}</figcaption>
                            )}
                          </figure>
                        </div>
                      ) : (
                        <div className="flex items-start space-x-3">
                          <CheckCircle2 className={`w-5 h-5 ${direction.iconColor} mt-0.5 flex-shrink-0`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </section>

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
                    Подробнее
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
                    Получить консультацию
                  </Button>
                </div>
              </div>

              {/* Image */}
              {direction.image && (
                <figure className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-industrial-fade-in`}>
                  <Card className="card-industrial overflow-hidden">
                    <div className="relative h-96">
                      <OptimizedImage
                        src={direction.image}
                        alt={direction.title}
                        className="w-full h-full"
                        objectFit={direction.id === 'equipment' || direction.id === 'materials' || direction.id === 'furnaces' || direction.id === 'manufacturing' ? 'contain' : 'cover'}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <figcaption className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center space-x-2 text-white">
                          {direction.icon && (
                            <direction.icon className="w-6 h-6" />
                          )}
                          <span className="font-semibold">{direction.title}</span>
                        </div>
                      </figcaption>
                    </div>
                  </Card>
                </figure>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessDirections;