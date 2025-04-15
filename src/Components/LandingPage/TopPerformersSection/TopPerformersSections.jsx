import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import dynamic from "next/dynamic";
import Image from "next/image";

const PerformerCard = dynamic(
  () => import("../../PerformerCard/PerformerCard"),
  {
    loading: () => <div>Loading...</div>,
    ssr: false,
  }
);
export default function TopPerformersSections() {
  const scrollToRanking = () => {
    const el = document.getElementById("secrets-of-completion");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full min-h-screen flex items-end justify-center relative top-0">
      <Image
        src="/Images/home-bg.svg"
        alt="Home background"
        layout="fill"
        objectFit="cover"
        quality={75}
        priority
        className="absolute z-0 top-0 h-[120vh]"
      />
      <Image
        src="/Images/home-overlay-bg.svg"
        alt="Overlay"
        layout="fill"
        objectFit="cover"
        quality={75}
        className="absolute z-10 opacity-50 top-0 h-[120vh]"
      />

      <div className="flex flex-col w-full">
        <div className="relative top-32 z-20 text-center">
          <h1 className="text-white text-2xl md:text-7xl font-bold mb-4 flex items-center justify-center gap-2 ">
            <Image
              src="/Images/test.webp"
              alt="Logo"
              width={80}
              height={80}
              className="w-10 md:w-20"
            />
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

        <div className="relative bottom z-30 w-full  flex justify-center items-end">
          <Image
            src="/Images/Ranking.svg"
            alt="Ranking podium"
            width={800}
            height={600}
            className="w-[40%] md:h-[calc(120vh-40vh)]"
            loading="lazy"
          />
          <div className=" h-[calc(120vh-20vh)]">
            {/* 1st */}
            <PerformerCard
              image="/Images/sample.jpeg"
              points={200}
              containerStyles="w-[7%] h-[14%]  top-[33.5%] left-[49.7%] transform -translate-x-1/2"
              textStyles="top-[64%] left-[49.5%] transform -translate-x-1/2"
              textColor="text-[#BE7926]"
            />
            {/* 2nd  */}
            <PerformerCard
              image="/Images/sample.jpeg"
              points={160}
              containerStyles="w-[5.8%] h-[11.8%] top-[39.4%] left-[59.77%]"
              textStyles="top-[65%] left-[60.5%]"
              textColor="text-[#747474]"
            />
            {/* 3rd */}
            <PerformerCard
              image="/Images/sample.jpeg"
              points={120}
              containerStyles="w-[5%] h-[10.8%]  top-[45.4%] left-[34.8%]"
              textStyles="top-[66%] left-[35%]"
              textColor="text-[#CC5F2E]"
            />
          </div>
        </div>
        <Image
          src="/Images/drawing.png"
          alt="Decoration"
          width={1920}
          height={200}
          className="absolute bottom-0 left-0 w-full z-50 pointer-events-none"
          loading="lazy"
        />
      </div>
    </section>
  );
}
