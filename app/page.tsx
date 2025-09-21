import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { HeroSection } from "@/components/blocks/hero-section-1";
import IntegrationsSection from "@/components/IntegrationsComponent";
import { ManagementComponent } from "@/components/ManagementComponent";
import PlugAndPlayComponent from "@/components/PlugandplayComponent";
import { ProblemSolution } from "@/components/ProblemSolution";
import SolutionsComponent from "@/components/SolutionsComponent";
import PricingSection4 from "@/components/ui/pricing-section-4";

export default function Home() {
  return (
    <div className="container mx-auto px-6">
      <HeroSection />
      <section className="space-y-12">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-center text-4xl font-bold text-blue-700">
              Проблемы которые мы решаем
            </h1>
            <ProblemSolution />
          </div>
          <div className="space-y-8">
            <h2 className="text-center text-4xl font-bold text-blue-700">
              Plug and Play
            </h2>
            <div className="mb-8 w-full">
              <FeaturesSectionWithHoverEffects />
            </div>
            <PlugAndPlayComponent />
            <SolutionsComponent />
            <IntegrationsSection />
            <ManagementComponent />
          </div>
        </div>
        <div className="mb-16 rounded-lg">
          <PricingSection4 />
          
        </div>
        
      </section>
    </div>
  );
}
