import React from "react";

import "./Search.css";

const Search = () => {
  return (
    <div className="SearchContainer">
      <input
        className="SearchBox"
        placeholder="Search for job title or company name"
      />
      <button className="SearchButton">Filter results</button>
    </div>
  );
};

export default Search;
