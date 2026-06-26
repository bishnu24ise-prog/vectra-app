import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/features/FeaturesSection";
import PricingSection from "@/components/pricing/PricingSection";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 flex flex-col gap-24 md:gap-32 pb-24 md:pb-32">
        <Hero />
        <FeaturesSection />
        <PricingSection />
        <SocialProof />
      </main>
      <Footer />
    </>
  );
}
