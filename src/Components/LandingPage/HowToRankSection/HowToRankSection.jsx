
export default function HowToRankSection() {
  return (
    <section id="how-to-rank" className='bg-[#000E22] min-h-screen relative top-32 text-center py-12 px-4 md:px-16'>
      <div className="text-white">
        <h4 className='text-4xl font-semibold'>How to Rank</h4>
        <p className="mt-3 text-2xl">Master the Game: Understand What It Takes to Climb the Leaderboard!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="gradient-border flex flex-col justify-center items-center gap-4 my-8 p-5">
          <img src="/Images/score.png" alt="Score Big" />
          <h5 className="text-[#007AAD] text-3xl font-semibold">Score Big</h5>
          <p className="text-2xl text-[#9A9A9A]">Your score is the primary factor in ranking. Answer correctly to earn points, and aim for perfection to stay ahead</p>
        </div>
        <div className="gradient-border flex flex-col justify-center items-center gap-4 my-8 p-5">
          <img src="/Images/trial.png" alt="Fewer Trials" />
          <h5 className="text-[#007AAD] text-3xl font-semibold">Fewer Trials</h5>
          <p className="text-2xl text-[#9A9A9A]" >Efficiency matters! The fewer attempts you need to complete a level, the better your ranking will be</p>
        </div>
        <div className="gradient-border flex flex-col justify-center items-center gap-4 my-8 p-5">
          <img src="/Images/clock.png" alt="Beat the Clock" />
          <h5 className="text-[#007AAD] text-3xl font-semibold">Beat the Clock</h5>
          <p className="text-2xl text-[#9A9A9A]">Speed is key! Complete the challenges faster to climb the leaderboard and secure your spot at the top</p>
        </div>
      </div>
    </section>
  )
}
