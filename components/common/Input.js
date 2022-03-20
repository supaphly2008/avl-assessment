import { useState } from "react";

const Input = ({ placeholder = "", className = "", onChange, value = "" }) => {
  return (
    <input
      className={`${className} h-[60px] w-full rounded-[6px] bg-transparent 
    px-[18px] pt-[20px] pb-[19px] text-[14px] leading-[21px] 
    tracking-[0.25px] text-white outline outline-gray--scale 
    placeholder:text-gray focus:outline-orange`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
