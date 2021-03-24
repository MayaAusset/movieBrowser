import React, { useEffect, useState } from "react";
import MovieService from "./service/movies.service";
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const getAllMovies = () => {
    const service = new MovieService();

    service
      .getAllMovies()
      .then((response) => {
        setMovies(response.results);
        console.log(`the response is ${response.results}`)
      })
      .catch((err) => console.log(`error from App Component, ${err}`))
  }
  useEffect(getAllMovies, []);
  console.log(`movies is ${movies}`)
  return (
    <div className="App">
      <h1>MovieBrowser</h1>
      {
        movies.map((movie) => {
          return (
            <h1>{movie.title}</h1>
          )
        })
      }
    </div>
  );
}

export default App;
