import React from "react";
import magnifyingGlass from "../assets/magnifying-glass.png";
import deleteCross from "../assets/delete-cross.png";

const SearchBarInput = ({ search, searchBarInput, deleteInputHandler }) => {
  return (
    <div className="searchBar">
      <div>
        <img
          src={magnifyingGlass}
          width="20px"
          alt="search bar's magnigying glass"
          className="magnifying-glass"
        />
        <input
          type="text"
          placeholder="Search for a movie..."
          onChange={search}
          value={searchBarInput}
          className="mr-sm-2"
        />
        <button type="button" onClick={() => deleteInputHandler()}>
          <img src={deleteCross} width="10" alt="delete input button" />
        </button>
      </div>
    </div>
  );
};

export default SearchBarInput;
