const FollowsLoading = ({ className, count }) => {
  return (
    <div className={`${className} flex items-center`}>
      <div className="h-[40px] w-[40px] animate-shine rounded-[5px] bg-loading" />
      <div className="ml-[15px] flex flex-1 flex-col">
        <div className="mb-[10px] h-[10px] w-[50px] animate-shine bg-loading" />
        <div className="h-[10px] w-[100px] animate-shine bg-gray bg-loading" />
      </div>
      <div className="h-[29px] w-[60px] animate-shine rounded-[20px] bg-loading" />
    </div>
  );
};

export default FollowsLoading;
