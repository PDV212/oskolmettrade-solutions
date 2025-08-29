import Header from '@/components/Header';
import HeroSectionZh from '@/components/zh/HeroSectionZh';
import BusinessDirectionsZh from '@/components/zh/BusinessDirectionsZh';
import CompanyAdvantagesZh from '@/components/zh/CompanyAdvantagesZh';
import ContactSectionZh from '@/components/zh/ContactSectionZh';
import Footer from '@/components/Footer';

const Chinese = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header language="zh" />
      <main>
        <HeroSectionZh />
        <BusinessDirectionsZh />
        <CompanyAdvantagesZh />
        <ContactSectionZh />
      </main>
      <Footer />
    </div>
  );
};

export default Chinese;