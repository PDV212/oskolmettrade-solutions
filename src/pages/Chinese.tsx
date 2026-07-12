import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import HeroSectionZh from '@/components/zh/HeroSectionZh';
import BusinessDirectionsZh from '@/components/zh/BusinessDirectionsZh';
import CompanyAdvantagesZh from '@/components/zh/CompanyAdvantagesZh';
import ContactSectionZh from '@/components/zh/ContactSectionZh';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import CatalogNavigation from '@/components/CatalogNavigation';
import SEOHead, { seoConfigs } from '@/components/SEOHead';
import StructuredData, { organizationSchema, breadcrumbSchema, faqSchemaZh } from '@/components/StructuredData';
import AISummary from '@/components/AISummary';
import FAQSection from '@/components/FAQSection';
import AISchemas from '@/components/AISchemas';

const Chinese = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead {...seoConfigs.zh.home} />
      <StructuredData type="Organization" data={organizationSchema} />
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema('zh')} />
      <StructuredData type="FAQPage" data={faqSchemaZh} />
      <AISchemas />
      <Header language="zh" />
      <Breadcrumbs language="zh" />
      <main id="main-content" itemScope itemType="https://schema.org/WebPage">
        <HeroSectionZh />
        <AISummary language="zh" />
        <CTAButton language="zh" variant="compact" className="py-8" />
        <BusinessDirectionsZh />
        <CTAButton language="zh" />
        <CatalogNavigation language="zh" />
        <CTAButton language="zh" variant="compact" className="py-8" />
        <CompanyAdvantagesZh />
        <FAQSection language="zh" />
        <CTAButton language="zh" />
        <ContactSectionZh />
      </main>
      <Footer language="zh" />
    </div>
  );
};


export default Chinese;