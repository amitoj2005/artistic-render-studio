import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import GoalsSection from "@/components/GoalsSection";
import ScheduleSection from "@/components/ScheduleSection";
import ResourcesSection from "@/components/ResourcesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <GoalsSection />
      <ScheduleSection />
      <ResourcesSection />
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        UC Berkeley · CS 184 · Spring 2025
      </footer>
    </div>
  );
};

export default Index;
