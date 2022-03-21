import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import Slider from "../common/Slider";
import { CompState } from "./index";

import { getSearch } from "../../api";

const inputRange = [3, 6, 9, 12, 15, 50];

const Search = ({ setComponent }) => {
  const [searchText, setSearchText] = useState("");
  const [range, setRange] = useState(0);
  const [searchResult, setSearchResult] = useState([]);

  const onRangeChange = (e) => {
    setRange(inputRange[e.target.value]);
  };

  const onSearchClick = async () => {
    console.log("click", range);
    // setComponent(CompState.SEARCH_RESULT);
    const result = await getSearch();
    setSearchResult(result);
    console.log("result", result.data);
    console.log("total", result.data.total);
  };

  return (
    <div className="relative h-full">
      <>
        <div className="mb-[20px] text-[24px]">Search</div>
        <Input placeholder="Keyword" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      </>
      <hr className="my-[30px] text-gray" />
      <div>
        <div className="text-[24px]"># Of results per page</div>
        <div className="my-[20px] text-[48px] font-bold leading-[1]">
          {searchResult.data?.total} <span className="text-[16px] font-normal tracking-[0.15px]">Results</span>
        </div>
        <Slider range={inputRange} onChange={onRangeChange} />
      </div>
      <hr className="mt-[30px] text-gray" />
      <Button className="absolute bottom-0" label="search" onClick={onSearchClick} />
    </div>
  );
};

export default Search;
