const Button = ({ label, isWhite = false, onClick, className, isSmall = true }) => {
  const small = isSmall ? "py-[8px] px-[16px]" : "py-[15px] px-[40px]";
  const whiteBg = isWhite ? "bg-white text-primary-blue hover:bg-primary-blue hover:text-white" : "bg-primary-blue text-white hover:bg-white hover:text-primary-blue";
  return (
    <div className={`${small} ${className} inline-block cursor-pointer rounded-[30px] border-[2px] border-white transition duration-300 ${whiteBg}`} onClick={onClick}>
      {label}
    </div>
  );
};

export default Button;
