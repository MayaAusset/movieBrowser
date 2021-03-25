import React, { useState, useEffect } from "react";
import MovieService from "./service/movies.service";
import MovieSelection from "./components/MovieSelection";
import Logo from "./assets/logo-fleet-modified.png";
import "./App.css";
//import TestComponent from "./components/TestComponent";

function App() {
  const [movies, setMovies] = useState([{ title: "from useState", key: 1 }]);
  const [pages, setPages] = useState(1);

  const getAllMovies = () => {
    const service = new MovieService();

    service
      .getAllMovies()
      .then((response) => {
        //console.log(`movies BEFORE IS ${movies.length}`);
        setMovies(response.results);
        //console.log(`movies inside AFTER ${movies.length}`);
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
        width="80px"
      />
      <div className="App">
        <MovieSelection movies={movies} />
        {/* <TestComponent movies={movies}/> */}
      </div>
    </div>
  );
}

export default App;
