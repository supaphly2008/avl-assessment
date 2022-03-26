const IconButton = ({ isActive, Icon, onClick, label, hasNotification = false, className = "" }) => {
  const active = isActive ? "text-[white]" : "text-[#8A8A8F]";

  return (
    <div className={`${className} relative inline-flex cursor-pointer flex-col items-center`} onClick={onClick}>
      {hasNotification && <div className="absolute right-0 top-[-6px] h-[7px] w-[7px] rounded-full bg-[#00D1FF]" />}
      <Icon isActive={isActive} />
      <div className={`${active} text-[12px]`}>{label}</div>
    </div>
  );
};

export default IconButton;
