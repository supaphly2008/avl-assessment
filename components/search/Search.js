import { useState, useEffect } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import Slider from "../common/Slider";
import { CompState } from "./index";
import useDebounce from "../../hooks/useDebounce";

import { getSearch } from "../../api";

const inputRange = [3, 6, 9, 12, 15, 50];

const Search = ({ setComponent, setSearchResult, searchResult }) => {
  const [searchText, setSearchText] = useState("");
  const [range, setRange] = useState(inputRange[0]); // page size: ;
  const debouncedSearchTerm = useDebounce(searchText, 500);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isSearching, setIsSearching] = useState(false); // is searching (loading)

  useEffect(async () => {
    if (debouncedSearchTerm) {
      const result = await getSearch(1, range, debouncedSearchTerm);
      setSearchResult(result);
    } else {
      setSearchResult([]);
    }
  }, [debouncedSearchTerm, range]);

  // input range change
  const onRangeChange = (e) => {
    setRange(inputRange[e.target.value]);
  };

  const onSearchClick = async () => {
    setComponent(CompState.SEARCH_RESULT);
  };

  // input text change
  const onInputChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (searchResult.data?.total === 0 || !debouncedSearchTerm) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [searchResult]);

  return (
    <div className="relative h-full">
      <>
        <div className="mb-[20px] text-[24px]">Search</div>
        <Input placeholder="Keyword" value={searchText} onChange={onInputChange} />
      </>
      <hr className="my-[30px] text-gray" />
      <div>
        <div className="text-[24px]"># Of results per page</div>
        <div className="my-[20px] text-[48px] font-bold leading-[1]">
          {searchResult.data?.total || 0} <span className="text-[16px] font-normal tracking-[0.15px]">Results</span>
        </div>
        <Slider range={inputRange} onChange={onRangeChange} />
      </div>
      <hr className="mt-[30px] text-gray" />
      <Button isDisabled={buttonDisabled} className="absolute bottom-0" label="search" onClick={onSearchClick} />
    </div>
  );
};

export default Search;
