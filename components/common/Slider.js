const Slider = ({ min = "0", max = "5", defaultValue = "0", step = "1", onChange, range = [] }) => {
  return (
    <div className="h-[45px]">
      <input type="range" className="slider-thumb h-1.5 w-full appearance-none rounded bg-slider--gradient outline-none" defaultValue={defaultValue} min={min} max={max} step={step} onChange={onChange} />
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
