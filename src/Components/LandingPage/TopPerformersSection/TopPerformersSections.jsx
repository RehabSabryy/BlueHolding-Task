import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import PerformerCard from "../../PerformerCard/PerformerCard";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TopPerformersSections() {
  const scrollToRanking = () => {
    const el = document.getElementById("secrets-of-completion");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section className="w-full min-h-screen flex items-end justify-center relative top-0 overflow-hidden">
      <Image
        src="/Images/home-bg.svg"
        className="absolute w-full object-cover z-0 top-0 h-[120vh]"
        alt="Home background"
        fill
        priority
        />
        <motion.img
          src="./Images/home-overlay-bg.svg"
          className="absolute w-full img-overlay object-cover z-10 opacity-50 top-0 h-[120vh]"
          alt="Overlay"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />

      <div className="flex flex-col w-full h-full">
        <div className="relative top-0 md:top-24 mt-10 z-20 text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-2 md:mb-4 flex items-center justify-center gap-2">
            <img src="/Images/test.webp" alt="" className="w-10 md:w-20" />
            Top Performers
          </h1>
          <p className="text-white mb-4 md:mb-6 text-lg md:text-3xl">
            Who's Leading the Way?
          </p>
          <div className="flex justify-center items-center mb-20">
            <PrimaryButton
              text="Start Game"
              icon="/Images/rocket.svg"
              onClick={scrollToRanking}
            />
          </div>
        </div>

        <div className="relative z-30 w-full flex justify-center items-end md:mt-0">
          <div className="relative w-full max-w-2xl">
            <img 
              src="/Images/Ranking.svg" 
              className="w-[80%] max-w-[500px] md:max-w-none mx-auto h-auto md:h-[calc(100vh-150px)] object-contain" 
              alt="Ranking"
            />
            
            <div className="absolute inset-0">
              {/* 1st place */}
              <PerformerCard
                image="/Images/sample.jpeg"
                points={200}
                containerStyles="w-[10%] sm:w-[13.5%] h-[18%] sm:h-[16%] top-[5%] sm:top-[20%] left-[49.5%] transform -translate-x-1/2"
                textStyles="top-[52.5%] left-[49.5%] transform -translate-x-1/2"
                textColor="text-[#BE7926]"
              />
              
              {/* 2nd place */}
              <PerformerCard
                image="/Images/sample.jpeg"
                points={160}
                containerStyles="w-[10%] sm:w-[11%] h-[18%] sm:h-[13%] top-[14%] sm:top-[27.2%] left-[70.5%] sm:left-[69.8%]"
                textStyles="top-[58%] sm:top-[55%] left-[71%] sm:left-[71%]"
                textColor="text-[#747474]"
              />
              
              {/* 3rd place */}
              <PerformerCard
                image="/Images/sample.jpeg"
                points={120}
                containerStyles="w-[10%] sm:w-[10%] h-[17%] sm:h-[11.5%] top-[24.3%] sm:top-[34%] left-[19.7%] sm:left-[19.7%]"
                textStyles="top-[56.6%] left-[19.9%]"
                textColor="text-[#CC5F2E]"
              />
            </div>
          </div>
        </div>
        
        {/* Bottom curve */}
        <img
          src="./Images/drawing.png"
          alt=""
          className="absolute bottom-0 left-0 w-full z-50 pointer-events-none"
        />
      </div>
    </section>
  );
}