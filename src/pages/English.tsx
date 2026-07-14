import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import HeroSectionEn from '@/components/en/HeroSectionEn';
import BusinessDirectionsEn from '@/components/en/BusinessDirectionsEn';
import CompanyAdvantagesEn from '@/components/en/CompanyAdvantagesEn';
import ContactSectionEn from '@/components/en/ContactSectionEn';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import CatalogNavigation from '@/components/CatalogNavigation';
import CncFeatureCard from '@/components/CncFeatureCard';
import CaseHighlights from '@/components/CaseHighlights';

import SEOHead, { seoConfigs } from '@/components/SEOHead';
import StructuredData, { organizationSchema, breadcrumbSchema, faqSchemaEn } from '@/components/StructuredData';
import AISummary from '@/components/AISummary';
import FAQSection from '@/components/FAQSection';
import AISchemas from '@/components/AISchemas';

const English = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <SEOHead {...seoConfigs.en.home} />
      <StructuredData type="Organization" data={organizationSchema} />
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema('en')} />
      <StructuredData type="FAQPage" data={faqSchemaEn} />
      <AISchemas />
      <Header language="en" />
      <Breadcrumbs language="en" />
      <main id="main-content" itemScope itemType="https://schema.org/WebPage">
        <HeroSectionEn />
        <AISummary language="en" />
        <CTAButton language="en" variant="compact" className="py-8" />
        <CncFeatureCard language="en" />
        <CaseHighlights language="en" />
        <BusinessDirectionsEn />
        <CTAButton language="en" />


        <CatalogNavigation language="en" />
        <CTAButton language="en" variant="compact" className="py-8" />
        <CompanyAdvantagesEn />
        <FAQSection language="en" />
        <CTAButton language="en" />
        <ContactSectionEn />
      </main>
      <Footer language="en" />
    </div>
  );
};


export default English;