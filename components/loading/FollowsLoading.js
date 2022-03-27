const FollowsLoading = ({ className = "", count = 1 }) => {
  const Loading = () => {
    return (
      <div className="mb-[21px] flex items-center">
        <div className="h-[40px] w-[40px] animate-shine rounded-[5px] bg-loading" />
        <div className="ml-[15px] flex flex-1 flex-col">
          <div className="mb-[10px] h-[10px] w-[50px] animate-shine bg-loading" />
          <div className="h-[10px] w-[100px] animate-shine bg-gray bg-loading" />
        </div>
        <div className="h-[29px] w-[60px] animate-shine rounded-[20px] bg-loading" />
      </div>
    );
  };

  return (
    <div className={`${className} flex flex-col`}>
      {[...Array(count)].map((_, index) => (
        <Loading key={index} />
      ))}
    </div>
  );
};

export default FollowsLoading;
