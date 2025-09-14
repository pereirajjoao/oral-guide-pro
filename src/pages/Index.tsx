import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { SchedulingSection } from "@/components/sections/SchedulingSection";
import { PreConsultationSection } from "@/components/sections/PreConsultationSection";
import { EducationalSection } from "@/components/sections/EducationalSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SchedulingSection />
        <PreConsultationSection />
        <EducationalSection />
        <TimelineSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
