import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import PerformerCard from "../../PerformerCard/PerformerCard";

export default function TopPerformersSections() {
  const scrollToRanking = () => {
    const el = document.getElementById("secrets-of-completion");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="w-full min-h-screen flex items-end justify-center relative top-0">
      <img
        src="./Images/home-bg.svg"
        className="absolute w-full object-cover z-0 top-0"
        alt="Home background"
      />
      <img
        src="./Images/home-overlay-bg.svg"
        className="absolute w-full img-overlay object-cover z-10 opacity-60 top-0"
        alt="Overlay"
      />

      <div className="flex flex-col w-full">
        <div className="relative top-32 z-20 text-center">
          <h1 className="text-white text-2xl md:text-7xl font-bold mb-4 flex items-center justify-center gap-2 ">
            <img src="/Images/test.webp" alt="" className="w-10 md:w-20" />
            Top Performers
          </h1>
          <p className="text-white mb-6 text-xl md:text-4xl">
            Who's Leading the Way?
          </p>
          <div className="flex justify-center items-center">
            <PrimaryButton
              text="Start Game"
              icon="/Images/rocket.svg"
              onClick={scrollToRanking}
            />
          </div>
        </div>

        <div className="relative z-30 w-full h-[calc(100vh-150px)] flex justify-center items-end">
          <img src="/Images/Ranking.svg" className="w-[700px] mask-wrapper" />
          {/* 1st */}
          <PerformerCard
            image="/Images/sample.jpeg"
            points={200}
            containerStyles="w-[90px] h-[90px] md:w-[122px] md:h-[119px] top-[22%] left-189 transform -translate-x-1/2"
            textStyles="top-[66%] left-[49.5%] transform -translate-x-1/2"
            textColor="text-[#BE7926]"
          />
          {/* 2nd  */}
          <PerformerCard
            image="/Images/sample.jpeg"
            points={160}
            containerStyles="w-[75px] h-[75px] md:w-[101px] md:h-[97px] top-[31%] left-[61.2%]"
            textStyles="top-[67%] left-[62.5%]"
            textColor="text-[#747474]"
          />
          {/* 3rd */}
          <PerformerCard
            image="/Images/sample.jpeg"
            points={120}
            containerStyles="w-[70px] h-[70px] md:w-[89px] md:h-[87px] top-[40%] left-[32.5%]"
            textStyles="top-[70%] left-[33%]"
            textColor="text-[#CC5F2E]"
          />
        </div>
        <img
          src="./Images/drawing.svg"
          alt=""
          className="absolute bottom-0 left-0 w-full z-50 pointer-events-none"
        />
      </div>
    </section>
  );
}
