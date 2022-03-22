const Button = ({ label, onClick, className = "", isUppercase = true, isDisabled = false }) => {
  const upperCase = isUppercase ? "uppercase" : "";
  const hoverClass = isDisabled ? "disabled:cursor-not-allowed opacity-20" : "hover:border hover:border-white hover:bg-transparent hover:text-white";
  const baseClass = "inline-block h-[40px] w-[335px] text-black cursor-pointer text-center leading-none px-[12px] py-[13px] rounded-[4px] bg-white text-[14px] font-bold duration-300";

  return (
    <button className={`${className} ${upperCase} ${baseClass} ${hoverClass}`} disabled={isDisabled} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
