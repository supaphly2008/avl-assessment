const IconButton = ({ isActive, Icon, onClick, label }) => {
  const active = isActive ? "text-[white]" : "text-[#5d5d5d]";

  return (
    <div className="inline-flex cursor-pointer flex-col items-center" onClick={onClick}>
      <Icon isActive={isActive} />
      <div className={`${active} text-[12px]`}>{label}</div>
    </div>
  );
};

export default IconButton;
