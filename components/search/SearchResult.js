import { useEffect } from "react";
import { CompState } from "../search";
import ImageCard from "../common/ImageCard";
import Button from "../common/Button";

import { getSearch } from "../../api";

const SearchResult = ({ setComponent, searchResult, setSearchResult, searchTerm, setSearchTerm, page, setPage, range }) => {
  const onBackClick = () => {
    setSearchTerm("");
    setSearchResult([]);
    setComponent(CompState.SEARCH);
  };

  const onMoreClick = async () => {
    setPage(page + 1);
  };

  useEffect(async () => {
    const result = await getSearch(page, range, searchTerm);
    console.log("result more", result);
  }, [page, searchResult]);

  return (
    <div className="flex h-full flex-col">
      <div className="relative left-[-36.5px] mb-[24px] flex items-center">
        <img className="mr-[31.73px] cursor-pointer" src="/icons/left-arrow.png" alt="arrow back" onClick={onBackClick} />
        <div className="text-[30px]">Results</div>
      </div>
      <div className="flex flex-wrap gap-[34px] overflow-auto">
        {searchResult.data.data.map((result) => (
          <ImageCard key={result.id} title={result.name} username={result.username} src={result.avater} alt={result.name} />
        ))}
      </div>
      <Button className="mt-[39px]" label="more" onClick={onMoreClick} />
    </div>
  );
};

export default SearchResult;
