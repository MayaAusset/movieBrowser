import React from "react";

const SearchBar = ({search, searchBarInput, setSearchBarInput}) => {
  return (
    <div>
      <form className="searchBar">
        <input
          type="text"
          placeholder="Search for a movie..."
          onChange={(e) => setSearchBarInput(e.target.value)}
          value={searchBarInput}
          onKeyPress={search}
          className="mr-sm-2"
        />
      </form>
    </div>
  );
};

export default SearchBar;
