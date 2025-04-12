"use client";
import Header from "@/Components/Header/Header";
import HowToRankSection from "@/Components/LandingPage/HowToRankSection/HowToRankSection";
import TopHighlightSection from "@/Components/LandingPage/TopHighlightSection/TopHighlightSection";

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Header />
      <div className="relative top-32">
        <div>
          <h4 className="text-4xl font-semibold text-[#363636]">
            See Where You Stand!
          </h4>
          <p className="mb-6 text-[#8D8D8D] text-2xl w-3/4 text-center">
            Explore the rankings, track your progress, and challenge yourself to
            climb higher!
          </p>
        </div>
        <div className="rank-section-box p-6 mb-5">
          {[...Array(12)].map((_, i) => {
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
                    className="h-[52px] w-[52px] object-cover rounded-full"
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
      </div>

      <TopHighlightSection />
      <HowToRankSection />
      <hr />
    </div>
  );
}
