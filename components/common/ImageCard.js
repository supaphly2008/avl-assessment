const ImageCard = ({ title = "title", username = "username", src = "", alt = "" }) => {
  return (
    <div>
      <img className="max-h-[335px] min-h-[146px] w-full" src={src} alt={alt} />
      <div className="mt-[12px] text-[14.9px]">{title}</div>
      <div className="text-[11.17px] text-gray--lighter">{username}</div>
    </div>
  );
};

export default ImageCard;
