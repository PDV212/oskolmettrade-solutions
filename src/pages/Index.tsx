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
import KeyFacts from '@/components/KeyFacts';
import SpeakableSchema from '@/components/SpeakableSchema';


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead {...seoConfigs.ru.home} />
      <StructuredData type="Organization" data={organizationSchema} />
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema('ru')} />
      <AISchemas />
      <SpeakableSchema
        url="https://www.xn-----llccbycikqb3afub.xn--p1ai/"
        name="ОСКОЛ-МЕТ-ТРЕЙД — Ключевые факты о компании"
        cssSelectors={['#key-facts', '#key-facts-heading']}
      />

      <Header language="ru" />
      <main id="main-content" itemScope itemType="https://schema.org/WebPage">
        <HeroSection />
        <AISummary language="ru" />
        <CTAButton language="ru" variant="compact" className="py-8" />
        <BusinessDirections />
        <CTAButton language="ru" />
        <CatalogNavigation />
        <CTAButton language="ru" variant="compact" className="py-8" />
        <CompanyAdvantages />
        <KeyFacts />
        <FAQSection language="ru" />
        <CTAButton language="ru" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
