import Header from '@/components/Header';
import HeroSectionEn from '@/components/en/HeroSectionEn';
import BusinessDirectionsEn from '@/components/en/BusinessDirectionsEn';
import CompanyAdvantagesEn from '@/components/en/CompanyAdvantagesEn';
import ContactSectionEn from '@/components/en/ContactSectionEn';
import Footer from '@/components/Footer';

const English = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header language="en" />
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