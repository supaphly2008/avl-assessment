import { CompState } from "../search";

const SearchResult = ({ setComponent }) => {
  const onBackClick = () => {
    setComponent(CompState.SEARCH);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="mb-[24px] flex items-center">
        <img className="mr-[31.73px] cursor-pointer" src="/icons/left-arrow.png" alt="arrow back" onClick={onBackClick} />
        <div className="text-[30px]">Results</div>
      </div>
      <div className="flex-1 bg-gray">images</div>
    </div>
  );
};

export default SearchResult;
