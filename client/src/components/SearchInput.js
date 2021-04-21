import React from "react";

const SearchInput = ({ input }) => {
  return (
    <div>
      {input.length === 0 ? (
        <p className="results-search-input">Movies currently shown in theatre</p>
      ) : (
        <p className="results-search-input">
          Search results for <em>"{input}"</em>
        </p>
      )}
    </div>
  );
};

export default SearchInput;
