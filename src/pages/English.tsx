import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import HeroSectionEn from '@/components/en/HeroSectionEn';
import BusinessDirectionsEn from '@/components/en/BusinessDirectionsEn';
import CompanyAdvantagesEn from '@/components/en/CompanyAdvantagesEn';
import ContactSectionEn from '@/components/en/ContactSectionEn';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import SEOHead, { seoConfigs } from '@/components/SEOHead';

const English = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead {...seoConfigs.en.home} />
      <Header language="en" />
      <Breadcrumbs language="en" />
      <main itemScope itemType="https://schema.org/WebPage">
        <HeroSectionEn />
        <CTAButton language="en" variant="compact" className="py-8" />
        <BusinessDirectionsEn />
        <CTAButton language="en" />
        <CompanyAdvantagesEn />
        <CTAButton language="en" />
        <ContactSectionEn />
      </main>
      <Footer />
    </div>
  );
};

export default English;