const Button = ({ label, onClick, className = "", isUppercase = true }) => {
  const upperCase = isUppercase ? "uppercase" : "";
  const hoverClass = "hover:border hover:border-white hover:bg-transparent hover:text-white";
  const baseClass = "inline-block h-[40px] w-[335px] text-black cursor-pointer text-center leading-none px-[12px] py-[13px] rounded-[4px] bg-white text-[14px] font-bold duration-300";

  return (
    <div className={`${className} ${upperCase} ${hoverClass} ${baseClass}`} onClick={onClick}>
      {label}
    </div>
  );
};

export default Button;
