const SearchLoading = ({ count = 1 }) => {
  const Loading = () => {
    return (
      <div className="flex flex-col">
        <div className="h-[146px] w-[219px] animate-search-shine bg-loading" />
        <div className="mt-[12px] h-[10px] w-[50px] animate-search-shine bg-loading" />
        <div className="mt-[5px] h-[10px] w-[100px] animate-search-shine bg-loading" />
      </div>
    );
  };

  return (
    <div className="flex flex-wrap gap-[34px]">
      {[...Array(count)].map((_, index) => (
        <Loading key={index} />
      ))}
    </div>
  );
};

export default SearchLoading;
