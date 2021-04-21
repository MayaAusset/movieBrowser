import React from "react";

const SearchBarInput = ({search, searchBarInput}) => {
  return (
    <div>
      <form className="searchBar">
        <input
          type="text"
          placeholder="Search for a movie..."
          onChange={search}
          value={searchBarInput}
          className="mr-sm-2"
        />
      </form>
    </div>
  );
};

export default SearchBarInput;
