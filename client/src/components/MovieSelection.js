import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import MovieService from "../service/movies.service";
import MoviesList from "./MoviesList";

const MovieSelection = ({ movies }) => {
  const [searchBarInput, setSearchBarInput] = useState("");
  const [searchResults, setSearchResults] = useState(movies);

  const search = (event) => {
    if (event.key === "Enter") {
      const service = new MovieService();

      service
        .getMovie(searchBarInput)
        .then((response) => {
          //console.log(`response.results is ${response.results}`)
          setSearchBarInput("");
          setSearchResults(response.results);
        })
        .catch((error) =>
          console.log(`error from MovieSelection Component: ${error}`)
        );
    }
  };
  return (
    <div>
      <FormControl
        type="text"
        placeholder="Search for a movie..."
        onChange={(e) => setSearchBarInput(e.target.value)}
        value={searchBarInput}
        onKeyPress={search}
        className="mr-sm-2"
      />
      <MoviesList movies={searchResults} />
    </div>
  );
};

export default MovieSelection;
