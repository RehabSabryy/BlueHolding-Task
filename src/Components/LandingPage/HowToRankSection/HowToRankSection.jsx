import Image from "next/image"

export default function HowToRankSection() {
  const cards = [
    {
      src: "/Images/score.png",
      alt: "Score Big",
      title: "Score Big",
      description:
        "Your score is the primary factor in ranking. Answer correctly to earn points, and aim for perfection to stay ahead",
    },
    {
      src: "/Images/trial.png",
      alt: "Fewer Trials",
      title: "Fewer Trials",
      description:
        "Efficiency matters! The fewer attempts you need to complete a level, the better your ranking will be",
    },
    {
      src: "/Images/clock.png",
      alt: "Beat the Clock",
      title: "Beat the Clock",
      description:
        "Speed is key! Complete the challenges faster to climb the leaderboard and secure your spot at the top",
    },
  ];

  return (
    <section id="how-to-rank" className='bg-[#000E22] min-h-screen relative top-32 text-center py-12 px-4 md:px-16'>
      <div className="text-white">
        <h4 className='text-4xl font-semibold'>How to Rank</h4>
        <p className="mt-3 text-2xl">Master the Game: Understand What It Takes to Climb the Leaderboard!</p>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="gradient-border flex flex-col justify-center items-center gap-4 my-8 p-5"
          >
            <Image
              src={card.src}
              alt={card.alt}
              width={100}
              height={100}
              priority={index === 0} 
            />
            <h5 className="text-[#007AAD] text-3xl font-semibold">
              {card.title}
            </h5>
            <p className="text-2xl text-[#9A9A9A]">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
