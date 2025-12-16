import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import SolutionsSection from "@/components/SolutionsSection";
import UseCasesSection from "@/components/UseCasesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <SolutionsSection />
        <UseCasesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
