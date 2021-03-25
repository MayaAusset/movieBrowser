import React, { useState, useEffect } from "react";
import MovieService from "./service/movies.service";
import MovieSelection from "./components/MovieSelection";
import Logo from "./assets/logo-fleet-modified.png";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const getAllMovies = () => {
    const service = new MovieService();

    service
      .getAllMovies()
      .then((response) => {
        setMovies(response.results);
      })
      .catch((err) => console.log(`error from App Component, ${err}`));
  };

  useEffect(() => {
    getAllMovies();
  }, [setMovies]);

  return (
    <div>
      <img
        className="app-logo"
        src={Logo}
        alt="movieBrowser logo"
        width="100px"
      />
      <div className="App">
        <MovieSelection movies={movies} />
      </div>
    </div>
  );
}

export default App;
