const TagsLoading = ({ count = 1, className = "" }) => {
  const Loading = () => {
    return (
      <div className="flex flex-col">
        <div className="h-[150px] w-full animate-search-shine rounded-[10px] bg-loading" />
        <div className="mt-[10px]">
          <div className="mb-[10px] h-[10px] w-[150px] animate-search-shine bg-loading" />
          <div className="h-[10px] w-[100px] animate-search-shine bg-loading" />
        </div>
      </div>
    );
  };

  return (
    <div className={`${className} grid grid-cols-tag gap-x-[24px] gap-y-[36px]`}>
      {[...Array(count)].map((_, index) => (
        <Loading key={index} />
      ))}
    </div>
  );
};

export default TagsLoading;
