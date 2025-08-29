import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import MapComponent from '../MapComponent';
import OptimizedImage from '@/components/ui/optimized-image';

const ContactSectionZh = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    direction: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
奥斯科尔-金属-贸易网站新咨询

姓名: ${formData.name}
电话: ${formData.phone}
邮箱: ${formData.email}
公司: ${formData.company}
兴趣方向: ${formData.direction}
留言: ${formData.message}

发送时间: ${new Date().toLocaleString('zh-CN')}
    `.trim();

    const mailtoLink = `mailto:89090977174@mail.ru?subject=网站新咨询&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: '电话',
      details: ['+7 495 240 91 99', '+7 909 097 71 74'],
      subtitle: '工作时间内致电'
    },
    {
      icon: Mail,
      title: '邮箱',
      details: ['89090977174@mail.ru'],
      subtitle: '一小时内回复'
    },
    {
      icon: MapPin,
      title: '办公室',
      details: ['109004，莫斯科', '亚历山大·索尔仁尼琴街40号1栋'],
      subtitle: '莫斯科'
    },
    {
      icon: Clock,
      title: '工作时间',
      details: ['周一-周五：8:00 - 18:00', '周六：9:00 - 15:00'],
      subtitle: '莫斯科时间'
    }
  ];

  const businessDirections = [
    '金属加工设备',
    '冶金原材料',
    '冶金炉',
    'VSZ生产',
    '技术咨询',
    '其他'
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
          {/* Left Column: Contact Form + QR Codes */}
          <div className="space-y-6">
            {/* Contact Form */}
            <Card className="card-industrial">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">提交咨询</h3>
                <p className="text-muted-foreground">
                  填写表格，我们将很快与您联系
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      姓名 *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="输入您的姓名"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      电话 *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      邮箱 *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      公司
                    </label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="公司名称"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    兴趣方向 *
                  </label>
                  <Select onValueChange={(value) => handleInputChange('direction', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="选择方向" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessDirections.map((direction, index) => (
                        <SelectItem key={index} value={direction}>
                          {direction}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    留言
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="描述您的需求或任务..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="btn-industrial w-full">
                  <Send className="mr-2 w-5 h-5" />
                  提交咨询
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  点击按钮即表示您同意隐私政策
                </p>
              </form>
            </Card>

            {/* QR Codes Block */}
            <Card className="card-industrial">
              <div className="mb-4">
                <h4 className="font-bold text-foreground mb-2">通过即时通讯联系我们</h4>
                <p className="text-sm text-muted-foreground">扫描二维码快速沟通</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8">
                <div className="text-center">
                  <OptimizedImage
                    src="/lovable-uploads/783d99ba-632d-47a7-bc9d-d2c6653ee5cc.webp"
                    alt="Telegram二维码"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-2 rounded-lg"
                    aspectRatio="square"
                    loading="lazy"
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                  />
                  <p className="text-xs text-muted-foreground">Telegram</p>
                </div>
                <div className="text-center">
                  <OptimizedImage
                    src="/lovable-uploads/0172be64-08ae-4d0c-b070-7507bf1ca449.webp"
                    alt="微信二维码"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-2 rounded-lg"
                    aspectRatio="square"
                    loading="lazy"
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                  />
                  <p className="text-xs text-muted-foreground">微信</p>
                </div>
                <div className="text-center">
                  <OptimizedImage
                    src="/lovable-uploads/0667cb35-cc3c-4070-b595-c9700d58f2d9.webp"
                    alt="WhatsApp二维码"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-2 rounded-lg"
                    aspectRatio="square"
                    loading="lazy"
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                  />
                  <p className="text-xs text-muted-foreground">WhatsApp</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Contact Information + Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
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

            {/* Quick Benefits */}
            <Card className="card-industrial bg-gradient-to-br from-primary/5 to-accent/5">
              <h4 className="font-bold text-foreground mb-4">您将获得：</h4>
              <div className="space-y-3">
                {[
                  '免费专家咨询',
                  '最佳设备选择',
                  '项目成本计算',
                  '技术方案'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Interactive Map */}
            <Card className="card-industrial">
              <MapComponent />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionZh;