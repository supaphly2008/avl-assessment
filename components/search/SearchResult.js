import { useEffect, useState, useRef } from "react";
import { CompState } from "../search";
import ImageCard from "../common/ImageCard";
import Button from "../common/Button";

import api from "../../api";

const SearchResult = ({ setComponent, searchResult, setSearchResult, searchTerm, setSearchTerm, page, setPage, range }) => {
  const isInit = useRef(true);

  const onBackClick = () => {
    resetResult();
    setComponent(CompState.SEARCH);
  };

  const resetResult = () => {
    setSearchTerm("");
    setSearchResult([]);
    setPage(1);
  };

  const onMoreClick = async () => {
    // TODO: fix multiple click bug
    setPage(page + 1);
  };

  const isMoreButtonDisabled = searchResult.page === searchResult.totalPages;

  useEffect(async () => {
    if (isInit.current) {
      isInit.current = false;
      return;
    }
    const result = await api.getSearch(page, range, searchTerm);
    setSearchResult((prev) => ({ ...prev, page: result.data.page, data: [...prev.data, ...result.data.data] }));
  }, [page]);

  return (
    <div className="flex h-full flex-col">
      <div className="relative left-[-36.5px] mb-[24px] flex items-center sm:left-0">
        <img className="mr-[31.73px] cursor-pointer sm:mr-[19.88px]" src="/icons/left-arrow.png" alt="arrow back" onClick={onBackClick} />
        <div className="text-[24px]">Results</div>
      </div>
      <div className="flex flex-1 flex-wrap gap-[34px] overflow-auto">
        {searchResult?.data.map((result, index) => (
          <ImageCard key={`${index}_${result.id}`} title={result.name} username={result.username} src={result.avater} alt={result.name} />
        ))}
      </div>
      <Button isDisabled={isMoreButtonDisabled} className="mt-[39px]" label="more" onClick={onMoreClick} />
    </div>
  );
};

export default SearchResult;
