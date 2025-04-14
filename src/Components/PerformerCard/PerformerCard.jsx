const PerformerCard = ({ image, points, containerStyles, textStyles, textColor }) => (
    <>
      <img
        src={image}
        alt="Performer"
        className={`absolute rounded-full object-cover ${containerStyles}`}
        loading="lazy"
      />
      <div className={`absolute text-center ${textStyles} ${textColor}`}>
        <p className="text-xl md:text-3xl font-semibold">{points}</p>
        <p className="text-sm md:text-2xl">Points</p>
      </div>
    </>
  );
  
export default PerformerCard;