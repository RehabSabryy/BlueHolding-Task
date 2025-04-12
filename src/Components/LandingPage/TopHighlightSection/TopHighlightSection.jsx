import { useState } from "react";


export default function TopHighlightSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="min-h-screen py-12 relative top-32">
      <div className="px-4 md:px-16 flex flex-col justify-center items-center">
      <h4 className="text-5xl font-semibold text-[#363636]">Top Highlights</h4>
      <p className="text-[#8D8D8D] mt-3 text-2xl text-center">
        See who’s setting the bar high with outstanding scores, lightning-fast completions, and unmatched efficiency
      </p>
      </div>
      <div className="ms-20">
        <button className="mt-10 p-4 bg-[#F3F3F3] text-[#0096D7] rounded-t-lg cursor-pointer">Higher Scores</button>
        <button className="p-4 cursor-pointer">Faster Completion</button>
        <button className="p-4 cursor-pointer">Minimum Attempts</button>
      </div>
      <div className="relative w-full bg-[#F3F3F3]">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow z-10 disabled:opacity-30"
          disabled={currentIndex === 0}
        >
        {'<'}
        </button>

        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 overflow-hidden"
            style={{
              transform: `translateX(-${(currentIndex * (100 / visibleCount))}%)`,
              width: `${(images.length / visibleCount) * 100}%`,
            }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="p-4 text-center"
              >
                <p className="w-9 h-9 flex justify-center items-center mx-auto mb-2 rounded-full border bg-orange-200 border-orange-500 p-2 text-orange-500 text-sm">
                  {index + 1}
                </p>
                <div className="w-[209px] h-[180px] mx-auto overflow-hidden rounded-md">
                  <img
                    src={img}
                    alt={`Highlight ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm">100 points</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow z-10 disabled:opacity-30"
          disabled={currentIndex + visibleCount >= images.length}
        >
        {'>'}
            </button>
      </div>
    </div>
  );
}
