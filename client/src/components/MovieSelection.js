import React, { useState, useEffect } from "react";
import MovieService from "../service/movies.service";
import SearchBar from "../components/SearchBar";
import MoviesList from "./MoviesList";
import SelectedMovie from "./SelectedMovie";
import "../App.css";

const MovieSelection = () => {
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

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="App">
      <main className="main-container">
        <section className="section-left">
          <SearchBar setSearchResults={setSearchResults} />
          <MoviesList
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
