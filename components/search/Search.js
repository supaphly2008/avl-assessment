import { useState, useEffect, useRef } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import Slider from "../common/Slider";
import { CompState } from "./index";
import useDebounce from "../../hooks/useDebounce";

import api from "../../api";

const inputRange = [3, 6, 9, 12, 15, 50];

const Search = ({ setComponent, setSearchResult, searchResult, range, setRange, searchTerm, setSearchTerm }) => {
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const defaultSliderValue = useRef(2);

  useEffect(() => {
    setRange(inputRange[defaultSliderValue.current]);
  }, []);

  useEffect(async () => {
    if (debouncedSearchTerm) {
      const result = await api.getSearch(1, range, debouncedSearchTerm);
      setSearchResult(result.data);
    } else {
      setSearchResult(null);
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
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchResult?.total === 0 || !debouncedSearchTerm) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [searchResult]);

  return (
    <div className="relative h-full">
      <>
        <div className="mb-[20px] text-[24px]">Search</div>
        <Input placeholder="Keyword" value={searchTerm} onChange={onInputChange} />
      </>
      <hr className="my-[30px] text-gray" />
      <div>
        <div className="text-[24px]"># Of results per page</div>
        <div className="my-[20px] text-[48px] font-bold leading-[1]">
          {searchResult?.total || 0} <span className="text-[16px] font-normal tracking-[0.15px]">Results</span>
        </div>
        <Slider range={inputRange} defaultValue={defaultSliderValue.current} onChange={onRangeChange} />
      </div>
      <hr className="mt-[30px] text-gray" />
      <Button isDisabled={buttonDisabled} className="absolute bottom-0" label="search" onClick={onSearchClick} />
    </div>
  );
};

export default Search;
