import { useRef, useEffect } from "react";

const Slider = ({ min = "0", max = "5", defaultValue = 0, step = "1", onChange, range = [] }) => {
  const inputRef = useRef(null);

  const onInput = () => {
    const min = inputRef.current.min;
    const max = inputRef.current.max;
    const val = inputRef.current.value;
    inputRef.current.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
  };

  useEffect(() => {
    onInput();
  }, []);

  return (
    <div className="h-[45px]">
      <input ref={inputRef} type="range" className="input-range" defaultValue={defaultValue} min={min} max={max} step={step} onInput={onInput} onChange={onChange} />
      <ul className="flex w-full justify-between px-[10px]">
        {range.map((r, index) => (
          <li key={index} className="relative flex justify-center">
            <span className="absolute text-[16px] text-gray--scale">{r}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
