import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import HeroSectionEn from '@/components/en/HeroSectionEn';
import BusinessDirectionsEn from '@/components/en/BusinessDirectionsEn';
import CompanyAdvantagesEn from '@/components/en/CompanyAdvantagesEn';
import ContactSectionEn from '@/components/en/ContactSectionEn';
import Footer from '@/components/Footer';

const English = () => {
  return (
    <div className="min-h-screen bg-background w-full">
      <Header language="en" />
      <Breadcrumbs language="en" />
      <main>
        <HeroSectionEn />
        <BusinessDirectionsEn />
        <CompanyAdvantagesEn />
        <ContactSectionEn />
      </main>
      <Footer />
    </div>
  );
};

export default English;