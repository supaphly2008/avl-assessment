const Tag = ({ className = "", tagText = "", title = "", desc = "" }) => {
  const tag = tagText && <div className="w-fit max-w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-[8px] border-[4px] border-white px-[7px] py-[14px]">{tagText}</div>;

  return (
    <div className={`${className} w-[150px]`}>
      <div className="flex h-[150px] flex-col justify-end rounded-[10px] bg-[#262626] px-[10px] py-[14px]">{tag}</div>
      <div className="mt-[10px]">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[14.9px]">{title}</div>
        <div className="text-[11.175px] text-gray--lighter">{desc}</div>
      </div>
    </div>
  );
};

export default Tag;
