const Slider = ({ min = "0", max = "5", defaultValue = "0", step = "1", onChange, range = [] }) => {
  return (
    <div>
      <input type="range" className="w-full" defaultValue={defaultValue} min={min} max={max} step={step} onChange={onChange} />
      <ul className="flex w-full justify-between px-[10px]">
        {range.map((r, index) => (
          <li key={index} className="relative flex justify-center">
            <span className="absolute">{r}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
