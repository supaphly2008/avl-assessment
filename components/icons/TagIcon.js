const TagIcon = ({ isActive }) => {
  return (
    <svg className="text-red-500 h-8 w-8" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke={isActive ? "#ffffff" : "#5d5d5d"} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="12 4 4 8 12 12 20 8 12 4" /> <polyline points="4 12 12 16 20 12" /> <polyline points="4 16 12 20 20 16" />
    </svg>
  );
};

export default TagIcon;
