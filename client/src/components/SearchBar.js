import React, { useState, useEffect } from "react";
import MovieService from "../service/movies.service";
import SearchBarInput from "./SearchBarInput";
import SearchInputResult from "./SearchInputResult";

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
      <SearchBarInput search={search} searchBarInput={searchBarInput}/>
      <SearchInputResult searchBarInput={searchBarInput}/>
    </div>
  );
};

export default SearchBar;
