import React, { useState, useEffect } from "react";
import MovieService from "../service/movies.service";
import SearchBar from "../components/SearchBar";
import MoviesList from "./MoviesList";
import SelectedMovie from "./SelectedMovie";
import "../App.css";

const MovieSelection = () => {
  const [searchBarInput, setSearchBarInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(undefined);

  const getAllMovies = () => {
    const service = new MovieService();
    service
      .getAllMovies()
      .then((response) => {
        setSearchResults(response.results);
      })
      .catch((err) => console.log(`error from App Component, ${err}`));
  };

  const handleSelectionClick = (movie) => {
    setSelectedMovie(movie);
  };

  const search = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
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

  useEffect(() => {
    getAllMovies();
  }, [setSearchResults]);

  return (
    <div className="App">
      <main className="main-container">
        <section className="section-left">
          <SearchBar
            search={search}
            searchBarInput={searchBarInput}
            setSearchBarInput={setSearchBarInput}
          />
          <MoviesList
            searchBarInput={searchBarInput}
            movies={searchResults}
            handleSelectionClick={handleSelectionClick}
          />
        </section>
        <section className="section-right">
          <SelectedMovie movie={selectedMovie} />
        </section>
      </main>
    </div>
  );
};

export default MovieSelection;
