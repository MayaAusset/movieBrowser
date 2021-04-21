import React, { useState, useEffect } from "react";
import MovieService from "../service/movies.service";
import SearchInput from "./SearchInput";

const SearchBar = ({ setSearchResults }) => {
  const [searchBarInput, setSearchBarInput] = useState("");

  const search = (event) => {
    event.preventDefault();
    setSearchBarInput(event.target.value);
  };

  useEffect(() => {
    if (searchBarInput === "") {
      setSearchResults("");
    }

    const service = new MovieService();
    service
      .getMovie(searchBarInput)
      .then((response) => {
        setSearchResults(response.results);
      })
      .catch((error) => console.log(`Error from SearchBar.js : ${error}`));
  }, [searchBarInput]);

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
      <SearchInput searchBarInput={searchBarInput}/>
    </div>
  );
};

export default SearchBar;
