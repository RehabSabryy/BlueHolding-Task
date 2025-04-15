import { useState } from "react";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function TopHighlightSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("higherScores");

  const images = Array(10).fill("/Images/sample.jpeg");
  const visibleCount = 6;

  const nextSlide = () => {
    if (currentIndex + visibleCount < images.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <section id="top-highlights" className="min-h-screen py-12 relative top-32">
      <SectionTitle
        sectionH4=" Top Highlights"
        sectionParagraph="See who’s setting the bar high with outstanding scores, lightning-fast
          completions, and unmatched efficiency"
      />
      <div className="ms-20 flex mt-10">
        <button
          onClick={() => handleTabChange("higherScores")}
          className={`p-4 rounded-t-lg cursor-pointer transition-all duration-300 ${
            activeTab === "higherScores"
              ? "bg-[#F3F3F3] text-gray-500"
              : " bg-white text-[#0096D7]"
          }`}
        >
          Higher Scores
        </button>
        <button
          onClick={() => handleTabChange("fasterCompletion")}
          className={`p-4 rounded-t-lg cursor-pointer transition-all duration-300 ${
            activeTab === "fasterCompletion"
              ? "bg-[#F3F3F3] text-gray-500"
              : " bg-white text-[#0096D7]"
          }`}
        >
          Faster Completion
        </button>
        <button
          onClick={() => handleTabChange("minimumAttempts")}
          className={`p-4 rounded-t-lg cursor-pointer transition-all duration-300 ${
            activeTab === "minimumAttempts"
              ? "bg-[#F3F3F3] text-gray-500"
              : " bg-white text-[#0096D7]"
          }`}
        >
          Minimum Attempts
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="relative w-full bg-[#F3F3F3]"
        >
          <button
            onClick={prevSlide}
            className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-[#E3E3E3] hover:bg-white py-2 px-3 cursor-pointer rounded-xl shadow z-10 disabled:opacity-30"
            disabled={currentIndex === 0}
          >
            <span className="text-[#B7B7B7] font-bold">{"<"}</span>
          </button>

          <div className="overflow-hidden mx-20">
            <div
              className="flex gap-4 transition-transform duration-300 overflow-hidden"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                width: `${(images.length / visibleCount) * 100}%`,
              }}
            >
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-4 py-7 text-center"
              >
              <p
                className={`w-9 h-9 flex justify-center items-center mx-auto mb-2 rounded-full border p-2 font-semibold
                  ${
                    index === 0
                      ? "bg-[#FCD196] border-[#E0C117] text-[#E0C117]"
                      : index === 1
                      ? "bg-[#C8C8C8] border-[#ACACAC] text-[#9a9a9a]"
                      : index === 2
                      ? "bg-[#F7C0A5] border-[#CD7F32] text-[#CD7F32]"
                      : "bg-[#999999] text-[#434343] border-[#434343]"
                  }
                  `}
              >
              {index + 1}
            </p>
                <div className="w-[209px] h-[180px] mx-auto overflow-hidden rounded-md">
                <Image
                    src={img}
                    alt={`Highlight ${index + 1}`}
                    width={209}
                    height={180}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="mt-2 text-[#696969]">100 points</p>
              </motion.div>
            ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-[#E3E3E3] hover:bg-white py-2 px-3 cursor-pointer rounded-xl shadow z-10 disabled:opacity-30"
            disabled={currentIndex + visibleCount >= images.length}
          >
            <span className="text-[#B7B7B7] font-bold">{">"}</span>
          </button>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
