import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BusinessDirections from '@/components/BusinessDirections';
import CompanyAdvantages from '@/components/CompanyAdvantages';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CatalogNavigation from '@/components/CatalogNavigation';
import CTAButton from '@/components/CTAButton';
import SEOHead, { seoConfigs } from '@/components/SEOHead';
import StructuredData, { organizationSchema, breadcrumbSchema, faqSchema } from '@/components/StructuredData';
import Analytics from '@/components/Analytics';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead {...seoConfigs.ru.home} />
      <Analytics language="ru" />
      <StructuredData type="Organization" data={organizationSchema} />
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema('ru')} />
      <StructuredData type="FAQPage" data={faqSchema} />
      <Header language="ru" />
      <main itemScope itemType="https://schema.org/WebPage">
        <HeroSection />
        <CTAButton language="ru" variant="compact" className="py-8" />
        <BusinessDirections />
        <CTAButton language="ru" />
        <CatalogNavigation />
        <CTAButton language="ru" variant="compact" className="py-8" />
        <CompanyAdvantages />
        <CTAButton language="ru" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
