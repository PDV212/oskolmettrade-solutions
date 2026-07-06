import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import MapComponent from './MapComponent';
import OptimizedImage from '@/components/ui/optimized-image';

const ContactSection = () => {
  const contactCards = [
    {
      icon: Phone,
      title: 'Телефон +7 495 240 91 99',
      href: 'tel:+74952409199',
      description: 'Основной городской номер для переговоров и согласования поставок.'
    },
    {
      icon: Phone,
      title: 'Телефон +7 909 097 71 74',
      href: 'tel:+79090977174',
      description: 'Мобильный контакт для оперативной связи с менеджером.'
    },
    {
      icon: Mail,
      title: 'Email 89090977174@mail.ru',
      href: 'mailto:89090977174@mail.ru',
      description: 'Для коммерческих запросов, спецификаций и обмена документами.'
    },
    {
      icon: MessageCircle,
      title: 'Telegram',
      href: 'https://t.me/имя_канала',
      description: 'Напишите напрямую в Telegram или отсканируйте QR-код ниже.'
    }
  ];

  const messengerCards = [
    {
      title: 'Telegram',
      href: 'https://t.me/имя_канала',
      image: '/lovable-uploads/783d99ba-632d-47a7-bc9d-d2c6653ee5cc.png',
      alt: 'QR-код Telegram'
    },
    {
      title: 'WhatsApp',
      href: 'https://wa.me/79090977174',
      image: '/lovable-uploads/0667cb35-cc3c-4070-b595-c9700d58f2d9.png',
      alt: 'QR-код WhatsApp'
    },
    {
      title: 'WeChat',
      image: '/lovable-uploads/0172be64-08ae-4d0c-b070-7507bf1ca449.png',
      alt: 'QR-код WeChat'
    }
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
          <div className="space-y-6">
            <Card className="card-industrial">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Контакты для связи</h3>
                <p className="text-muted-foreground">
                  Свяжитесь с нами по телефону, email или через мессенджеры — без форм и передачи персональных данных через сайт.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactCards.map((item) => (
                  <article key={item.title}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary"
                    >
                      <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <p className="text-base font-semibold text-foreground">{item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </a>
                  </article>
                ))}
              </div>
            </Card>

            <Card className="card-industrial">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-foreground mb-2">Свяжитесь с нами через мессенджеры</h4>
                <p className="text-base text-muted-foreground">Используйте прямые ссылки или отсканируйте QR-код.</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {messengerCards.map((item) => {
                  const content = (
                    <>
                      <OptimizedImage
                        src={item.image}
                        alt={item.alt}
                        className="qr-code-responsive mx-auto mb-3 rounded-lg shadow-sm"
                        aspectRatio="square"
                        loading="lazy"
                        sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                      />
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
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
                    <p className="font-semibold text-foreground">Режим работы</p>
                    <p className="text-sm text-muted-foreground">Пн–Пт 8:00–18:00, Сб 9:00–15:00</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Сайт носит информационный характер и не собирает персональные данные посетителей. Для связи используйте указанные выше контакты.
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: MapPin,
                  title: 'Адрес',
                  details: ['109004, г. Москва, ул. А. Солженицына, д. 40, стр. 1'],
                  subtitle: 'Офис и переговоры по предварительному согласованию'
                },
                {
                  icon: Clock,
                  title: 'Режим работы',
                  details: ['Пн–Пт 8:00–18:00', 'Сб 9:00–15:00'],
                  subtitle: 'Московское время'
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
              <h4 className="font-bold text-foreground mb-4">Формат взаимодействия</h4>
              <div className="space-y-3">
                {[
                  'Переговоры согласовываем индивидуально по телефону',
                  'Технические запросы принимаем по email и в мессенджерах',
                  'Сайт используется только как информационная B2B-визитка',
                  'Онлайн-формы, веб-аналитика и сбор персональных данных отключены'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="card-industrial">
              <MapComponent language="ru" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;