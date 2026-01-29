import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import SolutionsSection from "@/components/SolutionsSection";
import SimulatorSection from "@/components/SimulatorSection";
import UseCasesSection from "@/components/UseCasesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { DottedSurface } from "@/components/ui/dotted-surface";

const Index = () => {
  return (
    <>
      <SEOHead />
      <div className="relative min-h-screen bg-background overflow-x-hidden">
        {/* Three.js Background Effect */}
        <DottedSurface className="opacity-40" />

        <Header />
        <main role="main" className="relative z-10">
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
