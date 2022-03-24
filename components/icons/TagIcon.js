const TagIcon = ({ isActive, className = "" }) => {
  return (
    // <svg className="text-red-500 h-8 w-8" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke={isActive ? "#ffffff" : "#5d5d5d"} fill="none" strokeLinecap="round" strokeLinejoin="round">
    //   <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="12 4 4 8 12 12 20 8 12 4" /> <polyline points="4 12 12 16 20 12" /> <polyline points="4 16 12 20 20 16" />
    // </svg>
    <svg className={`${className} text-red-500 h-8 w-8`} viewBox="0 0 24 24" fill="none" stroke={isActive ? "#ffffff" : "#8A8A8F"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /> <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
};

export default TagIcon;
