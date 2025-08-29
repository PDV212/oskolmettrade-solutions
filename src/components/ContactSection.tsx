import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { TouchSelect, TouchSelectContent, TouchSelectItem, TouchSelectTrigger, TouchSelectValue } from '@/components/ui/touch-optimized-select';
import MapComponent from './MapComponent';
import OptimizedImage from '@/components/ui/optimized-image';

const ContactSection = () => {
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
Новая заявка с сайта ОСКОЛ-МЕТ-ТРЕЙД

Имя: ${formData.name}
Телефон: ${formData.phone}
Email: ${formData.email}
Компания: ${formData.company}
Направление интереса: ${formData.direction}
Сообщение: ${formData.message}

Дата отправки: ${new Date().toLocaleString('ru-RU')}
    `.trim();

    const mailtoLink = `mailto:89090977174@mail.ru?subject=Новая заявка с сайта&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      details: ['+7 495 240 91 99', '+7 909 097 71 74'],
      subtitle: 'Звоните в рабочее время'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['89090977174@mail.ru'],
      subtitle: 'Ответим в течение часа'
    },
    {
      icon: MapPin,
      title: 'Офисы',
      details: ['109004, г. Москва,', 'ул. А. Солженицына, д. 40, стр. 1'],
      subtitle: 'Москва'
    },
    {
      icon: Clock,
      title: 'Режим работы',
      details: ['Пн-Пт: 8:00 - 18:00', 'Сб: 9:00 - 15:00'],
      subtitle: 'Московское время'
    }
  ];

  const businessDirections = [
    'Металлообрабатывающее оборудование',
    'Металлургическое сырье',
    'Металлургические печи',
    'Производство ВСЗ',
    'Техническая консультация',
    'Другое'
  ];

  return (
    <section id="contacts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">Свяжитесь с нами</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Готовы обсудить ваш проект и подобрать оптимальное решение. 
            Получите профессиональную консультацию от наших экспертов.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Contact Form + QR Codes */}
          <div className="space-y-6">
            {/* Contact Form */}
            <Card className="card-industrial">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Оставить заявку</h3>
                <p className="text-muted-foreground">
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mobile-form-spacing">
                <div className="grid gap-6 md:gap-4 md:grid-cols-2">
                  <div>
                    <label className="touch-label block text-foreground">
                      Имя и фамилия *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Введите ваше имя"
                      required
                      className="touch-input touch-focus w-full"
                    />
                  </div>
                  <div>
                    <label className="touch-label block text-foreground">
                      Телефон *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="touch-input touch-focus w-full"
                      inputMode="tel"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:gap-4 md:grid-cols-2">
                  <div>
                    <label className="touch-label block text-foreground">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="touch-input touch-focus w-full"
                      inputMode="email"
                    />
                  </div>
                  <div>
                    <label className="touch-label block text-foreground">
                      Компания
                    </label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Название компании"
                      className="touch-input touch-focus w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="touch-label block text-foreground">
                    Направление интереса *
                  </label>
                  <TouchSelect onValueChange={(value) => handleInputChange('direction', value)}>
                    <TouchSelectTrigger className="touch-focus">
                      <TouchSelectValue placeholder="Выберите направление" />
                    </TouchSelectTrigger>
                    <TouchSelectContent>
                      {businessDirections.map((direction, index) => (
                        <TouchSelectItem key={index} value={direction}>
                          {direction}
                        </TouchSelectItem>
                      ))}
                    </TouchSelectContent>
                  </TouchSelect>
                </div>

                <div>
                  <label className="touch-label block text-foreground">
                    Сообщение
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Опишите ваши потребности или задачи..."
                    rows={4}
                    className="touch-textarea touch-focus w-full resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-industrial touch-button haptic-light w-full"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Отправить заявку
                </Button>

                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>

            {/* QR Codes Block */}
            <Card className="card-industrial">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-foreground mb-2">Свяжитесь с нами через мессенджеры</h4>
                <p className="text-base text-muted-foreground">Сканируйте QR-код для быстрой связи</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
                <div className="text-center touch-target">
                  <OptimizedImage
                    src="/lovable-uploads/783d99ba-632d-47a7-bc9d-d2c6653ee5cc.png"
                    alt="Telegram QR код"
                    className="qr-code-responsive mx-auto mb-3 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    aspectRatio="square"
                    loading="lazy"
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                  />
                  <p className="text-sm font-medium text-muted-foreground">Telegram</p>
                </div>
                <div className="text-center touch-target">
                  <OptimizedImage
                    src="/lovable-uploads/0172be64-08ae-4d0c-b070-7507bf1ca449.png"
                    alt="WeChat QR код"
                    className="qr-code-responsive mx-auto mb-3 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    aspectRatio="square"
                    loading="lazy"
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                  />
                  <p className="text-sm font-medium text-muted-foreground">WeChat</p>
                </div>
                <div className="text-center touch-target">
                  <OptimizedImage
                    src="/lovable-uploads/0667cb35-cc3c-4070-b595-c9700d58f2d9.png"
                    alt="WhatsApp QR код"
                    className="qr-code-responsive mx-auto mb-3 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    aspectRatio="square"
                    loading="lazy"
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                  />
                  <p className="text-sm font-medium text-muted-foreground">WhatsApp</p>
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
              <h4 className="font-bold text-foreground mb-4">Что вы получите:</h4>
              <div className="space-y-3">
                {[
                  'Бесплатную консультацию эксперта',
                  'Подбор оптимального оборудования',
                  'Расчет стоимости проекта',
                  'Техническое предложение'
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

export default ContactSection;