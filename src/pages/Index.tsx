import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import TechnologiesSection from "@/components/TechnologiesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSectionAlternative from "@/components/ContactSectionAlternative";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <TechnologiesSection />
        <BenefitsSection />
        <ContactSectionAlternative />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
