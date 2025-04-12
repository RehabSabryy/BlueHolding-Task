import { useRouter } from 'next/navigation';

export default function RankingSection() {
    const router = useRouter();

    // Function to handle the navigation
    const handleNavigate = () => {
      router.push('/leaderboard'); 
    };

  return (
    <section id="ranking" className="bg-white min-h-screen flex justify-center items-center py-16 px-4 md:px-16 relative top-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl text-[#363636] font-semibold mb-4">See How You Rank!</h2>
          <p className="mb-6 text-[#8D8D8D] text-2xl w-3/4 text-center">
            Check out the full leaderboard and see where you stand. Compete with your peers to climb to the top.
          </p>
          <div className="circle-gradient rounded-full w-[240px] h-[240px] text-white flex flex-col items-center justify-center mx-auto">
            <img
              src="./Images/leaderBoard.svg"
              className="w-[39px]"
              alt="Leaderboard"
            />
            <div className="py-2 text-center" onClick={handleNavigate}>
              <p>View Full</p>
              <p>Leaderboard</p>
            </div>
          </div>
        </div>

        <div className="rank-section-box p-6">
          {[...Array(6)].map((_, i) => {
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
              <div key={i} className="flex justify-between w-full items-center gap-2 my-5">
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
    </section>
  );
}
