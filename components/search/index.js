import { useState } from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";

export const CompState = {
  SEARCH: "search",
  SEARCH_RESULT: "search_result",
};

const SearchContainer = () => {
  const [component, setComponent] = useState(CompState.SEARCH_RESULT);

  const comp = () => {
    if (component === CompState.SEARCH) {
      return <Search setComponent={setComponent} />;
    }
    if (component === CompState.SEARCH_RESULT) {
      return <SearchResult setComponent={setComponent} />;
    }
  };

  return comp();
};

export default SearchContainer;
