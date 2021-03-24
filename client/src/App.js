import React, { useState, useEffect } from "react";
import MovieService from "./service/movies.service";
import MovieSelection from "./components/MovieSelection";
import Container from "react-bootstrap/Container";
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
  }, []);

  return (
    <div className="App">
      <Container fluid>
        <h1>MovieBrowser App</h1>
        <MovieSelection movies={movies} />
      </Container>
    </div>
  );
}

export default App;
