"use client";
import Header from "@/Components/Header/Header";
import HowToRankSection from "@/Components/LandingPage/HowToRankSection/HowToRankSection";
import TopHighlightSection from "@/Components/LandingPage/TopHighlightSection/TopHighlightSection";
import Link from "next/link";
import Head from "next/head";

export default function LeaderboardPage() {
  return (
    <>
    
      <Head>
        <title>Your Awesome Product</title>
        <meta name="BlueHolding Gamified LMS Solution Leaderboard" content="Full leaderboard for BlueHolding Gamified LMS Solution" />
      </Head>
    <div id="full-leaderboard-page" className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="bg-leaderboard w-full flex flex-col items-center justify-center">
      <Header />
      <section id="full-leaderboard-section" className="relative top-32">
        <div className="flex md:flex-row flex-col items-center mt-10 mb-5">
          <Link href="/" className="text-[#0096D7] text-lg font-semibold relative md:left-[-150px] left-0">
           {"< "}Back to home
          </Link>
          <h4 className="text-4xl font-semibold text-[#363636] relative md:left-[100px] left:0">
            See Where You Stand!
          </h4>
        </div>
          <p className="mb-6 text-[#8D8D8D] text-2xl text-center w-3/4 mx-auto">
            Explore the rankings, track your progress, and challenge yourself to
            climb higher!
          </p>
        <div className="rank-section-box p-6 mb-5 z-20 bg-white">
          {[...Array(17)].map((_, i) => {
            const rankColors = [
              "text-[#F9A845]",
              "text-[#C0C0C0]",
              "text-[#CD7F32]",
              "text-[#000000]",
              "text-[#000000]",
              "text-[#000000]",
            ];
            const pointsColors = [
              "text-[#007AAD]",
              "text-[#007AAD]",
              "text-[#007AAD]",
              "text-[#000000]",
              "text-[#000000]",
              "text-[#000000]",
            ];

            return (
              <div
                key={i}
                className="flex justify-between w-full items-center gap-2 my-5"
              >
                <div className="flex items-center gap-3">
                  <p className={`text-xl ${rankColors[i]}`}>{i + 1}</p>
                  <img
                    src="./Images/sample.jpeg"
                    alt="Sample"
                    className="h-[52px] w-[52px] object-cover object-top rounded-full"
                  />
                  <p className="text-lg font-medium">Brooklyn Simmons</p>
                </div>
                <div className={`text-center ${rankColors[i]}`}>
                  <p className="text-lg font-semibold">120</p>
                  <p className={`text-sm ${pointsColors[i]}`}>Points</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
      <div className="w-full">
      <TopHighlightSection />
      </div>
  <HowToRankSection />
    </div>
    </>
  );
}
