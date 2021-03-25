import React, { useState } from "react";
import MovieService from "../service/movies.service";
import MoviesList from "./MoviesList";
import SelectedMovie from "./SelectedMovie";
import "../App.css";

const MovieSelection = ({ movies }) => {
  const [searchBarInput, setSearchBarInput] = useState("");
  const [searchResults, setSearchResults] = useState(movies);
  const [selectedMovie, setSelectedMovie] = useState(undefined);

  const handleSelectionClick = (movie) => {
    setSelectedMovie(movie);
  };

  const search = (event) => {
    if (event.key === "Enter") {
      const service = new MovieService();

      service
        .getMovie(searchBarInput)
        .then((response) => {
          setSearchBarInput("");
          setSearchResults(response.results);
        })
        .catch((error) =>
          console.log(`error from MovieSelection Component: ${error}`)
        );
    }
  };

  return (
    <main className="main-container">
      <section className="section-left">
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
        <div className="moviesList">
          <MoviesList
            movies={searchResults}
            handleSelectionClick={handleSelectionClick}
          />
        </div>
      </section>
      <section className="section-right">
        <SelectedMovie movie={selectedMovie} />
      </section>
    </main>
  );
};

export default MovieSelection;
