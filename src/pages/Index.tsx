import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TournamentCards from "@/components/TournamentCards";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Header />
      <HeroSection />
      <TournamentCards />
    </div>
  );
};

export default Index;
