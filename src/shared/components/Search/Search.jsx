import React from "react";

import Button from "../Button";
import "./Search.css";

const Search = () => {
  return (
    <div className="SearchContainer">
      <input
        className="SearchBox"
        placeholder="Search for job title or company name"
      />
      <Button>Filter results</Button>
    </div>
  );
};

export default Search;
