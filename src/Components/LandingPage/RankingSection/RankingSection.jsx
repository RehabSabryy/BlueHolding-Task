import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function RankingSection() {
  const router = useRouter();

  // Function to handle the navigation
  const handleNavigate = () => {
    router.push("/leaderboard");
  };

  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    button.style.setProperty("--x", `${x}%`);
    button.style.setProperty("--y", `${y}%`);
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;
    button.style.setProperty("--x", `50%`);
    button.style.setProperty("--y", `50%`);
  };
  return (
    <section id="ranking" className="bg-white min-h-screen flex justify-center items-center py-16 px-4 md:px-16 relative top-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl text-[#363636] font-semibold mb-4">
            See How You Rank!
          </h2>
          <p className="mb-6 text-[#8D8D8D] text-2xl w-3/4 text-center">
            Check out the full leaderboard and see where you stand. Compete with
            your peers to climb to the top.
          </p>
          <button
            ref={buttonRef}
            className="circle-gradient cursor-pointer rounded-full w-[240px] h-[240px] text-white flex flex-col items-center justify-center mx-auto"
            onClick={handleNavigate}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {" "}
            <img
              src="./Images/leaderBoard.svg"
              className="w-[39px]"
              alt="Leaderboard"
            />
            <div className="py-2 text-center cursor-pointer text-[20px]" onClick={handleNavigate}>
              <p>View Full</p>
              <p>Leaderboard</p>
            </div>
          </button>
        </div>

        <div className="rank-section-box p-6">
          {[...Array(6)].map((_, i) => {
            const rankColors = [
              "text-[#F9A845]",
              "text-[#5C5C5C]",
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
      </div>
    </section>
  );
}
