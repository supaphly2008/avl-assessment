import { useState } from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";

export const CompState = {
  SEARCH: "search",
  SEARCH_RESULT: "search_result",
};

const SearchContainer = () => {
  const [component, setComponent] = useState(CompState.SEARCH);
  const [searchResult, setSearchResult] = useState(null);
  const [page, setPage] = useState(1);
  const [range, setRange] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const comp = (Props) => {
    if (component === CompState.SEARCH) {
      return <Search {...Props} />;
    }
    if (component === CompState.SEARCH_RESULT) {
      return <SearchResult {...Props} />;
    }
  };

  return comp({
    setComponent,
    component,
    searchResult,
    setSearchResult,
    page,
    setPage,
    range,
    setRange,
    searchTerm,
    setSearchTerm,
  });
};

export default SearchContainer;
