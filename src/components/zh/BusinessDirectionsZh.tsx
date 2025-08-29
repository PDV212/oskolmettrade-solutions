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

// New images for sections
const manipulatorsImage = '/lovable-uploads/761c2c04-8071-4122-94b3-bb0d459d2e87.png';
const rawMaterials3Image = '/lovable-uploads/a6f5d8cf-10e5-4159-9959-51419a44edc9.png';
const manipulators2Image = '/lovable-uploads/f95317f5-d336-41bd-bee8-c76ec0ea6a0e.png';
const equipmentLogoImage = '/lovable-uploads/6ec4623e-736f-469e-b1e3-ec6dbe88be82.png';
const rawMaterialsMainImage = '/lovable-uploads/raw-materials.png';

const BusinessDirectionsZh = () => {
  const directions = [
    {
      id: 'equipment',
      icon: Wrench,
      title: '金属加工设备',
      subtitle: '自2015年经验 • 超过2500台机床供应',
      description: '为机械工程和冶金企业供应现代化设备',
      image: null,
      features: [
        { 
          text: '主要设备',
          image: cncMachineImage
        },
        '立式和卧式数控加工中心',
        '数控车削中心',
        '数控磨床',
        '液压机',
        { 
          text: '机器人焊接和喷漆工作站 - 工业机械手和机器人，实现关键技术操作的完全自动化 — 金属结构的焊接和喷漆 — 使用与数字图纸和传感器质量控制系统集成的机械手',
          image: manipulatorsImage
        },
        '配备数控系统的金属切削自动化综合设备，带有工件进料和成品接收系统',
        '设计和制造配备数控系统的机床综合设备，用于自动和半自动机械加工',
        '我们与客户合作直到达到最佳效果'
      ],
      gradient: 'bg-gradient-to-br from-primary/20 to-primary/5',
      iconColor: 'text-primary'
    },
    {
      id: 'materials',
      title: '冶金原材料',
      subtitle: '自1994年经验 • 与东南亚制造商合作25年',
      description: '供应高质量的冶金原材料和含合金元素的材料',
      image: null,
      features: [
        '锰矿和铁矿石',
        '高质量膨润土',
        { 
          text: '高质量冶金材料',
          image: rawMaterials3Image
        },
        '各种等级铬铁FeCr',
        '含镍生铁NPI',
        '不锈钢板坯',
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
      title: '冶金炉',
      subtitle: '现代加热和熔炼技术',
      description: '为冶金工业设计和供应炉设备',
      image: heatingFurnacesImage,
      features: [
        '真空电弧炉（0.5-50吨）',
        '感应加热炉（高达150吨）',
        '燃气加热炉（高达250吨）',
        '自动控制系统',
        '集成到生产线'
      ],
      gradient: 'bg-gradient-to-br from-secondary/20 to-secondary/5',
      iconColor: 'text-secondary'
    },
    {
      id: 'manufacturing',
      icon: Building2,
      title: 'VSZ生产',
      subtitle: '沃罗涅日机床厂',
      description: '为石油天然气、核能和其他行业自有金属加工生产',
      image: vszManufacturingImage,
      features: [
        '铣削和车削加工',
        '塔式车床作业',
        '磨削和齿轮加工',
        '所有类型的热处理',
        '按客户文档制造'
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
          <h2 className="heading-section mb-4">我们的业务方向</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            为冶金和机械工程企业提供综合解决方案。
            集团公司提供从设计到售后服务的全周期服务。
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
                    了解更多
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
                    获取咨询
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

export default BusinessDirectionsZh;