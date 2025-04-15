"use client";
import Header from "@/Components/Header/Header";
import RankingSection from "@/Components/LandingPage/RankingSection/RankingSection";
import SecretsOfCompletion from "@/Components/LandingPage/SecretsOfCompletion/SecretsOfCompletion";
import TopHighlightSection from "@/Components/LandingPage/TopHighlightSection/TopHighlightSection";
import FAQSection from "@/Components/LandingPage/FAQSection/FAQSection";
import HowToRankSection from "@/Components/LandingPage/HowToRankSection/HowToRankSection";
import TopPerformersSections from "@/Components/LandingPage/TopPerformersSection/TopPerformersSections";
import Head from 'next/head';

export default function Home() {

  return (
    <>
    <Head>
      <title>Your Awesome Product</title>
      <meta name="BlueHolding Gamified Landing Page" content="Landing Page for BlueHolding Gamified LMS Solution" />
    </Head>
    <div className="relative w-full font-[family-name:var(--font-inter)]">
      <Header />
      <TopPerformersSections/>
      <RankingSection/>
      <SecretsOfCompletion />
      <TopHighlightSection />
      <HowToRankSection />
      <FAQSection />
    </div>
    </>
  );
}
