import Image from "next/image";

const PerformerCard = ({ image, points, containerStyles, textStyles, textColor }) => (
    <>
      <Image 
        src={image}
        alt="Performer"
        width={100}
        height={100}
        className={`absolute rounded-full object-cover object-top ${containerStyles}`}
        loading="lazy"
      />
      <div className={`absolute text-center ${textStyles} ${textColor}`}>
        <p className="text-xl md:text-2xl font-semibold">{points}</p>
        <p className="text-sm md:text-xl">Points</p>
      </div>
    </>
  );
  
export default PerformerCard;