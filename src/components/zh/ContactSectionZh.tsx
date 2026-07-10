import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import MapComponent from '../MapComponent';
import OptimizedImage from '@/components/ui/optimized-image';

const ContactSectionZh = () => {
  const contactCards = [
    {
      icon: Phone,
      title: '电话 +7 495 240 91 99',
      href: 'tel:+74952409199',
      description: '用于商务沟通和项目协调的固定电话。'
    },
    {
      icon: Phone,
      title: '电话 +7 909 097 71 74',
      href: 'tel:+79090977174',
      description: '用于快速联系负责经理的手机号码。'
    },
    {
      icon: Mail,
      title: '邮箱 89090977174@mail.ru',
      href: 'mailto:89090977174@mail.ru',
      description: '适用于报价请求、技术资料和文件往来。'
    },
  ];

  const messengerCards = [
    {
      title: 'WhatsApp',
      href: 'https://wa.me/79090977174',
      image: '/lovable-uploads/0667cb35-cc3c-4070-b595-c9700d58f2d9.png',
      alt: 'WhatsApp二维码'
    },
    {
      title: 'WeChat',
      image: '/lovable-uploads/0172be64-08ae-4d0c-b070-7507bf1ca449.png',
      alt: 'WeChat二维码'
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">联系我们</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            准备讨论您的项目并找到最佳解决方案。
            从我们的专家那里获得专业咨询。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <Card className="card-industrial">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">直接联系方式</h3>
                <p className="text-muted-foreground">
                  请通过电话、邮箱或即时通讯工具联系我们；网站不提供表单，也不收集个人数据。
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactCards.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary"
                  >
                    <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <p className="text-base font-semibold text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="card-industrial">
              <div className="mb-4">
                <h4 className="font-bold text-foreground mb-2">通过即时通讯联系我们</h4>
                <p className="text-sm text-muted-foreground">可使用直接链接或扫描二维码。</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                {messengerCards.map((item) => {
                  const content = (
                    <>
                      <OptimizedImage
                        src={item.image}
                        alt={item.alt}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-2 rounded-lg"
                        aspectRatio="square"
                        loading="lazy"
                        sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                      />
                      <p className="text-xs font-semibold text-foreground">{item.title}</p>
                    </>
                  );

                  return item.href ? (
                    <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="text-center">
                      {content}
                    </a>
                  ) : (
                    <div key={item.title} className="text-center">
                      {content}
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 space-y-2 rounded-lg bg-muted/50 p-4">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">工作时间</p>
                    <p className="text-sm text-muted-foreground">周一至周五 8:00–18:00，周六 9:00–15:00</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  本网站仅提供信息展示，不收集访客个人数据。请使用以上联系方式进行沟通。
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: MapPin,
                  title: '地址',
                  details: ['109004，莫斯科，亚历山大·索尔仁尼琴街40号1栋'],
                  subtitle: '办公会面需提前电话预约'
                },
                {
                  icon: Clock,
                  title: '工作时间',
                  details: ['周一至周五 8:00–18:00', '周六 9:00–15:00'],
                  subtitle: '莫斯科时间'
                }
              ].map((info, index) => (
                <Card key={index} className="card-industrial">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{info.title}</h4>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className="text-xs text-accent mt-2">{info.subtitle}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="card-industrial bg-gradient-to-br from-primary/5 to-accent/5">
              <h4 className="font-bold text-foreground mb-4">沟通方式</h4>
              <div className="space-y-3">
                {[
                  '商务洽谈通过电话单独协调',
                  '技术需求通过邮箱和即时通讯工具接收',
                  '网站仅作为静态 B2B 企业名片使用',
                  '网页表单、统计分析和个人数据采集均已关闭'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="card-industrial">
              <MapComponent language="zh" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionZh;