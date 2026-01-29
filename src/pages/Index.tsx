import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import SolutionsSection from "@/components/SolutionsSection";
import SimulatorSection from "@/components/SimulatorSection";
import UseCasesSection from "@/components/UseCasesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background">
        <Header />
        <main role="main">
          <HeroSection />
          <BenefitsSection />
          <SolutionsSection />
          <SimulatorSection />
          <UseCasesSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
