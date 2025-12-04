import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import RulesSection from "@/components/RulesSection";
import EligibilitySection from "@/components/EligibilitySection";
import PrizeSection from "@/components/PrizeSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";
import Squares from "@/components/Squares";

const Index = () => {
  return (
    <div className="min-h-screen ">
      <div className="fixed inset-0  ">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="green"
          hoverFillColor="#737373"
        />
      </div>
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
