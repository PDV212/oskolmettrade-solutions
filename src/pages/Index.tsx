import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BusinessDirections from '@/components/BusinessDirections';
import CompanyAdvantages from '@/components/CompanyAdvantages';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CatalogNavigation from '@/components/CatalogNavigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header language="ru" />
      <main>
        <HeroSection />
        <BusinessDirections />
        <CatalogNavigation />
        <CompanyAdvantages />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
