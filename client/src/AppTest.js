import React, { useState, useEffect } from "react";
import MovieService from "./service/movies.service";
import "./App.css";
import MovieSelection from "./components/MovieSelection";

const AppTest = () => {
  const [movieList, setMovieList] = useState([]);

  const list = [
    { title: "Bla1" },
    { title: "bla2" },
    { title: "Bla3" },
    { title: "bla4" },
  ];

  useEffect(() => {
    //setMovieList(list);
    const service = new MovieService();
    service
        .getAllMovies()
        .then((response) => {
            setMovieList(response.results);
        })
        .catch((err) => console.log(`error from App Component, ${err}`));
  }, []);

  return (
    <div>
      <h1>Movie list</h1>
      {/* {movieList.map((movie) => {
        return <h1>{movie.title}</h1>;
      })} */}
      {console.log(movieList)}
      <MovieSelection movies={movieList} />
    </div>
  );
};

export default AppTest;
