import Layout from "@/app/layout";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SolutionsSection from "@/components/SolutionsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import PromoSection from "@/components/PromoSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      {/* <StatsSection /> */}
      <SolutionsSection />
      <AboutSection />
      {/* <FAQSection /> */}
      {/* <PromoSection /> */}
    </main>
  );
}
