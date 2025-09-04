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

const Chinese = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead {...seoConfigs.zh.home} />
      <StructuredData type="Organization" data={organizationSchema} />
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema('zh')} />
      <StructuredData type="FAQPage" data={faqSchemaZh} />
      <Header language="zh" />
      <Breadcrumbs language="zh" />
      <main itemScope itemType="https://schema.org/WebPage">
        <HeroSectionZh />
        <CTAButton language="zh" variant="compact" className="py-8" />
        <BusinessDirectionsZh />
        <CTAButton language="zh" />
        <CatalogNavigation />
        <CTAButton language="zh" variant="compact" className="py-8" />
        <CompanyAdvantagesZh />
        <CTAButton language="zh" />
        <ContactSectionZh />
      </main>
      <Footer />
    </div>
  );
};

export default Chinese;