import { CompState } from "../search";
import ImageCard from "../common/ImageCard";
import Button from "../common/Button";

const SearchResult = ({ setComponent }) => {
  const onBackClick = () => {
    setComponent(CompState.SEARCH);
  };

  const onMoreClick = () => {
    console.log("more");
  };

  return (
    <div className="flex h-full flex-col">
      <div className="relative left-[-36.5px] mb-[24px] flex items-center">
        <img className="mr-[31.73px] cursor-pointer" src="/icons/left-arrow.png" alt="arrow back" onClick={onBackClick} />
        <div className="text-[30px]">Results</div>
      </div>
      <div className="flex flex-wrap gap-[34px] overflow-auto">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
      <Button className="mt-[39px]" label="more" onClick={onMoreClick} />
    </div>
  );
};

export default SearchResult;
