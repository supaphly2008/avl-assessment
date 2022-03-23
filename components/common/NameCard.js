import ButtonRound from "../common/ButtonRound";

const NameCard = ({ className = "", src = "", alt = "", isOutline = true, buttonText = "Follow", name = "Fullname", username = "@username", onClick }) => {
  return (
    <div className={`${className} flex items-center`}>
      <img className="h-[40px] w-[40px] rounded-[5px] border border-white--darker" src={src} alt={alt} />
      <div className="ml-[15px] flex flex-1 flex-col">
        <div>{name}</div>
        <div className="text-[14px] text-[#8d8d8d]">{username}</div>
      </div>
      <ButtonRound isOutline={isOutline} label={buttonText} onClick={onClick} />
    </div>
  );
};

export default NameCard;
