import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import HeroSectionZh from '@/components/zh/HeroSectionZh';
import BusinessDirectionsZh from '@/components/zh/BusinessDirectionsZh';
import CompanyAdvantagesZh from '@/components/zh/CompanyAdvantagesZh';
import ContactSectionZh from '@/components/zh/ContactSectionZh';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import SEOHead, { seoConfigs } from '@/components/SEOHead';

const Chinese = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead {...seoConfigs.zh.home} />
      <Header language="zh" />
      <Breadcrumbs language="zh" />
      <main itemScope itemType="https://schema.org/WebPage">
        <HeroSectionZh />
        <CTAButton language="zh" variant="compact" className="py-8" />
        <BusinessDirectionsZh />
        <CTAButton language="zh" />
        <CompanyAdvantagesZh />
        <CTAButton language="zh" />
        <ContactSectionZh />
      </main>
      <Footer />
    </div>
  );
};

export default Chinese;