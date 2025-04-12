import React from 'react';

export default function TopPerformersSections() {
  return (
    <section className="relative w-full min-h-screen flex items-end justify-center">
      <img
        src="./Images/home-bg.svg"
        className="absolute w-full object-cover z-0"
        alt="Home background"
      />

      <img
        src="./Images/home-overlay-bg.svg"
        className="absolute w-full img-overlay object-cover z-10 opacity-60"
        alt="Overlay"
      />

      <div className="flex flex-col">
        <div className="relative z-20 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            🏆 Top Performers
          </h1>
          <p className="text-white mb-6">Who's Leading the Way?</p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Start Game
          </button>
        </div>
        
        {/* Masked Image Container */}
        <div className="img-overlay-container w-full h-screen flex justify-center items-end relative right-10 bottom-10 z-30">
        <img src="/Images/3rd.svg" alt="3rd" />
  <img src="/Images/1st.svg" alt="1st"  />
  <img src="/Images/2nd.svg" alt="2nd"  />
</div>


      </div>
    </section>
  );
}