import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import MapComponent from '../MapComponent';
import OptimizedImage from '@/components/ui/optimized-image';

const ContactSectionEn = () => {
  const contactCards = [
    {
      icon: Phone,
      title: 'Phone +7 495 240 91 99',
      href: 'tel:+74952409199',
      description: 'Main city line for business calls and project coordination.'
    },
    {
      icon: Phone,
      title: 'Phone +7 909 097 71 74',
      href: 'tel:+79090977174',
      description: 'Mobile contact for оперативной связи with a manager.'
    },
    {
      icon: Mail,
      title: 'Email 89090977174@mail.ru',
      href: 'mailto:89090977174@mail.ru',
      description: 'Use email for RFQs, specifications and document exchange.'
    },
  ];

  const messengerCards: Array<{
    title: string;
    href?: string;
    image: string;
    alt: string;
    description?: string;
  }> = [
    {
      title: 'Telegram',
      image: '/lovable-uploads/783d99ba-632d-47a7-bc9d-d2c6653ee5cc.png',
      alt: 'Telegram QR code for contacting OSKOL-MET-TRADE',
      description: 'Scan the QR code to contact us via Telegram.'
    },
    {
      title: 'WhatsApp',
      href: 'https://wa.me/79090977174',
      image: '/lovable-uploads/0667cb35-cc3c-4070-b595-c9700d58f2d9.png',
      alt: 'WhatsApp QR code'
    },
    {
      title: 'WeChat',
      image: '/lovable-uploads/0172be64-08ae-4d0c-b070-7507bf1ca449.png',
      alt: 'WeChat QR code'
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your project and find the optimal solution. 
            Get professional consultation from our experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <Card className="card-industrial">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Direct contacts</h3>
                <p className="text-muted-foreground">
                  Reach us by phone, email or messenger — no web forms and no personal data collection on the website.
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
                <h4 className="font-bold text-foreground mb-2">Contact us via messengers</h4>
                <p className="text-sm text-muted-foreground">Use direct links or scan the QR code.</p>
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
                      {item.description && (
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                      )}
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
                    <p className="font-semibold text-foreground">Working hours</p>
                    <p className="text-sm text-muted-foreground">Mon–Fri 8:00–18:00, Sat 9:00–15:00</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  This website is for informational purposes only and does not collect visitors’ personal data. Please use the contacts above for communication.
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  When following links to WhatsApp, WeChat, email or Yandex Maps, the respective external service rules apply.
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: MapPin,
                  title: 'Addresses',
                  details: [
                    'Moscow office (for commercial projects): 109004, Moscow, Aleksandra Solzhenitsyna Street, 40 building 1',
                    'Registered legal address: 20 Mira Street, office 312/1, Gubkin, Belgorod Region, 309181, Russia'
                  ],
                  subtitle: 'Office meetings by prior phone arrangement'
                },
                {
                  icon: Clock,
                  title: 'Working hours',
                  details: ['Mon–Fri 8:00–18:00', 'Sat 9:00–15:00'],
                  subtitle: 'Moscow time'
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
              <h4 className="font-bold text-foreground mb-4">How communication works</h4>
              <div className="space-y-3">
                {[
                  'Business calls are scheduled individually by phone',
                  'Technical requests are accepted by email and messengers',
                  'The website functions as a static B2B company card only',
                  'Web forms, analytics and personal data collection are disabled'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="card-industrial">
              <MapComponent language="en" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionEn;