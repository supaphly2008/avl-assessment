const ButtonRound = ({ label, onClick, className = "", isOutline = false }) => {
  const baseClass = "inline-block min-w-[60px] cursor-pointer rounded-[20px] text-[12px] font-[600] leading-[13px]";
  const outline = isOutline ? "py-[7px] px-[9px] border border-white bg-transparent text-white hover:bg-white hover:text-black" : "px-[10px] py-[8px] bg-white text-black hover:px-[9px] hover:py-[7px] hover:border hover:border-white hover:bg-transparent hover:text-white";

  return (
    <div className={`${className} ${baseClass} ${outline}`} onClick={onClick}>
      {label}
    </div>
  );
};

export default ButtonRound;
