export default function SecretsOfCompletion() {
  const games = [
    {
      title: "Museum Escape Room",
      description: "Unlock the basics and step into the world of competition",
      image: "./Images/game-sample.svg",
    },
    {
      title: "Museum Escape Room",
      description: "Unlock the basics and step into the world of competition",
      image: "./Images/game-sample.svg",
    },
    {
      title: "Museum Escape Room",
      description: "Unlock the basics and step into the world of competition",
      image: "./Images/game-sample.svg",
    },
    {
      title: "Museum Escape Room",
      description: "Unlock the basics and step into the world of competition",
      image: "./Images/game-sample.svg",
    },
    {
      title: "Museum Escape Room",
      description: "Unlock the basics and step into the world of competition",
      image: "./Images/game-sample.svg",
    },
    {
      title: "Museum Escape Room",
      description: "Unlock the basics and step into the world of competition",
      image: "./Images/game-sample.svg",
    },
  ];
  

  return (
    <div className='bg-[#FCFCFC] min-h-screen py-12 px-4 md:px-16 relative top-32'>
      <div className="flex flex-col justify-center items-center">
        <h4 className='text-4xl text-[#363636] font-semibold'>Unlock the Secrets of the Competition!</h4>
        <p className="text-[#8D8D8D] text-2xl text-center py-5">
          Each level is a new room in the escape challenge, filled with mysteries and puzzles from the Competition Guide. Answer the questions, solve the clues, and progress to the next stage. Are you ready to escape?
        </p>
      </div>

      <div className="grid grid-cols-12 gap-x-5 mt-10">
        {games.map((game, index) => (
          <div key={index} className="col-span-12 md:col-span-4 flex flex-col items-center">
            <img src={game.image} alt="" className="z-20" />
            <div className="relative bottom-30 w-[323px] h-[323px] bg-[#F3F3F3] p-4 rounded-full">
              <div className="mt-30 flex flex-col items-center flex-wrap">
                <p className="text-[#474747] font-semibold text-3xl text-center w-3/4">
                  {game.title}
                </p>
                <p className="text-[#8D8D8D] py-3 text-center w-3/4">
                  {game.description}
                </p>
              </div>
            </div>
            <button className="bg-white relative bottom-40 rounded shadow text-[#0096D7] flex items-center gap-2 px-7 py-2 hover:bg-[#F3F3F3] transition duration-300">
              <img src="/Images/rocket.svg" alt="" />
              Start Game
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
