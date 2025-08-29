import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import MapComponent from '../MapComponent';
import OptimizedImage from '@/components/ui/optimized-image';

const ContactSectionEn = () => {
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
New inquiry from OSKOL-MET-TRADE website

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Company: ${formData.company}
Area of Interest: ${formData.direction}
Message: ${formData.message}

Sent: ${new Date().toLocaleString('en-US')}
    `.trim();

    const mailtoLink = `mailto:89090977174@mail.ru?subject=New website inquiry&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+7 495 240 91 99', '+7 909 097 71 74'],
      subtitle: 'Call during business hours'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['89090977174@mail.ru'],
      subtitle: 'We respond within an hour'
    },
    {
      icon: MapPin,
      title: 'Offices',
      details: ['109004, Moscow,', 'Aleksandr Solzhenitsyn str., 40, building 1'],
      subtitle: 'Moscow'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon-Fri: 8:00 - 18:00', 'Sat: 9:00 - 15:00'],
      subtitle: 'Moscow time'
    }
  ];

  const businessDirections = [
    'Metalworking Equipment',
    'Metallurgical Raw Materials',
    'Metallurgical Furnaces',
    'VSZ Production',
    'Technical Consultation',
    'Other'
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
          {/* Left Column: Contact Form + QR Codes */}
          <div className="space-y-6">
            {/* Contact Form */}
            <Card className="card-industrial">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Submit Inquiry</h3>
                <p className="text-muted-foreground">
                  Fill out the form and we will contact you shortly
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First and Last Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone *
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
                      Email *
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
                      Company
                    </label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Company name"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Area of Interest *
                  </label>
                  <Select onValueChange={(value) => handleInputChange('direction', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select area" />
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
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Describe your needs or tasks..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="btn-industrial w-full">
                  <Send className="mr-2 w-5 h-5" />
                  Submit Inquiry
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By clicking the button, you agree to the privacy policy
                </p>
              </form>
            </Card>

            {/* QR Codes Block */}
            <Card className="card-industrial">
              <div className="mb-4">
                <h4 className="font-bold text-foreground mb-2">Contact us via messengers</h4>
                <p className="text-sm text-muted-foreground">Scan QR code for quick communication</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8">
                <div className="text-center">
                  <OptimizedImage
                    src="/lovable-uploads/783d99ba-632d-47a7-bc9d-d2c6653ee5cc.webp"
                    alt="Telegram QR code"
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
                    alt="WeChat QR code"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-2 rounded-lg"
                    aspectRatio="square"
                    loading="lazy"
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                  />
                  <p className="text-xs text-muted-foreground">WeChat</p>
                </div>
                <div className="text-center">
                  <OptimizedImage
                    src="/lovable-uploads/0667cb35-cc3c-4070-b595-c9700d58f2d9.webp"
                    alt="WhatsApp QR code"
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
              <h4 className="font-bold text-foreground mb-4">What you will get:</h4>
              <div className="space-y-3">
                {[
                  'Free expert consultation',
                  'Optimal equipment selection',
                  'Project cost calculation',
                  'Technical proposal'
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

export default ContactSectionEn;