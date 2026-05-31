import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BusinessDirections from '@/components/BusinessDirections';
import CompanyAdvantages from '@/components/CompanyAdvantages';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CatalogNavigation from '@/components/CatalogNavigation';
import CTAButton from '@/components/CTAButton';
import SEOHead, { seoConfigs } from '@/components/SEOHead';
import StructuredData, { organizationSchema, breadcrumbSchema } from '@/components/StructuredData';
import AISummary from '@/components/AISummary';
import FAQSection from '@/components/FAQSection';
import AISchemas from '@/components/AISchemas';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead {...seoConfigs.ru.home} />
      <StructuredData type="Organization" data={organizationSchema} />
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema('ru')} />
      <AISchemas />
      <Header language="ru" />
      <main itemScope itemType="https://schema.org/WebPage">
        <HeroSection />
        <AISummary language="ru" />
        <CTAButton language="ru" variant="compact" className="py-8" />
        <BusinessDirections />
        <CTAButton language="ru" />
        <CatalogNavigation />
        <CTAButton language="ru" variant="compact" className="py-8" />
        <CompanyAdvantages />
        <FAQSection language="ru" />
        <CTAButton language="ru" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
