import { useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton/PrimaryButton";
import RoomConfirmationPopup from "@/Components/RoomConfirmationPopup/RoomConfirmationPopup";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
export default function SecretsOfCompletion() {
  const [showPopup, setShowPopup] = useState(false);

  const games = [
    {
      title: "Climbing Everest",
      description: "Unlock the basics and step into the world of competition",
      image: "./Images/game-sample.svg",
      isLocked: false,
    },
    {
      title: "Museum Escape Room",
      description: "Unlock the basics and step into the world of competition",
      image: "./Images/game-sample.svg",
      isLocked: true,
    },
    {
      title: "Time Machine",
      description: "Unlock the basics and step into the world of competition",
      image: "./Images/game-sample.svg",
      isLocked: false,
    },
    {
      title: "Unsolved Case",
      description: "Unlock the basics and step into the world of competition",
      image: "./Images/game-sample.svg",
      isLocked: false,
    },
    {
      title: "Direct Quiz",
      description: "Unlock the basics and step into the world of competition",
      image: "./Images/game-sample.svg",
      isLocked: false,
    },
    {
      title: "Locked",
      description: "Unlock the basics and step into the world of competition",
      image: "./Images/game-sample.svg",
      isLocked: true,
    },
  ];

  return (
    <div
      id="secrets-of-completion"
      className="bg-[#FCFCFC] min-h-screen py-12 px-4 md:px-16 relative top-32"
    >
      <SectionTitle
        sectionH4="Unlock the Secrets of the Competition!"
        sectionParagraph="Each level is a new room in the escape challenge, filled with mysteries and puzzles from the Competition Guide. Answer the questions, solve the clues, and progress to the next stage. Are you ready to escape?"
      />
      <div className="grid grid-cols-12 gap-x-5 mt-10">
        {games.map((game, index) => (
          <div
            key={index}
            onClick={() => setShowPopup(true)}
            className="col-span-12 md:col-span-4 flex flex-col items-center"
          >
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
            {/* <PrimaryButton
                text={game.isLocked ? "Opens at 12/4" : "Start Game"}
                icon={game.isLocked ? "/Images/lock.svg" : "/Images/rocket.svg"}
                className={`relative bottom-40 ${
                  game.isLocked ? "opacity-50 text-[#D70000]" : ""
                }`}
                onClick={() => {
                  if (!game.isLocked) {
                    setShowPopup(true);
                  }
                }}
              /> */}
              {game.isLocked ? (
                  <PrimaryButton
                  text="Opens at 12/4"
                  icon="/Images/lock.svg"
                  className={`relative bottom-40 opacity-50 text-[#D70000]`}
                  disabled={true}
                />
              ) : ( 
                <PrimaryButton
                text= "Start Game"
                icon="/Images/rocket.svg"
                className={`relative bottom-40`}
                onClick={() => {
                    setShowPopup(true);
                }}
              />
              )
                }

          </div>
        ))}
        {showPopup &&  (
          <RoomConfirmationPopup onClose={() => setShowPopup(false)} />
        )}
      </div>
    </div>
  );
}
