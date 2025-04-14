"use client";
import Header from "@/Components/Header/Header";
import RankingSection from "@/Components/LandingPage/RankingSection/RankingSection";
import SecretsOfCompletion from "@/Components/LandingPage/SecretsOfCompletion/SecretsOfCompletion";
import TopHighlightSection from "@/Components/LandingPage/TopHighlightSection/TopHighlightSection";
import FAQSection from "@/Components/LandingPage/FAQSection/FAQSection";
import HowToRankSection from "@/Components/LandingPage/HowToRankSection/HowToRankSection";
import TopPerformersSections from "@/Components/LandingPage/TopPerformersSection/TopPerformersSections";

export default function Home() {

  return (
    <div className="relative w-full font-[family-name:var(--font-geist-sans)]">
      <Header />

      <TopPerformersSections/>

      {/* Ranking Section */}
      <RankingSection/>

      <SecretsOfCompletion />

      <TopHighlightSection />
      <HowToRankSection />
      {/* FAQ Section */}

      <FAQSection />
    </div>
  );
}
