import React from "react";

const SearchInput = ({ searchBarInput }) => {
  return (
    <div className="results-search-input">
      {searchBarInput.length > 0 ? (
        <p>
          Search results for <em className="searched-title">"{searchBarInput}"</em>
        </p>
      ) : (
        <p>Movies currently shown in theatre</p>
      )}
    </div>
  );
};

export default SearchInput;
