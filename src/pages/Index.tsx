import GridBackground from "@/components/GridBackground";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import RulesSection from "@/components/RulesSection";
import EligibilitySection from "@/components/EligibilitySection";
import PrizeSection from "@/components/PrizeSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <GridBackground />
      <main>
        <HeroSection />
        <OverviewSection />
        <RulesSection />
        <EligibilitySection />
        <PrizeSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
