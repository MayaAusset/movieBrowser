import React from "react";

const MoviesList = ({ movies }) => {
  return (
    <div>
      <h1>Movies List</h1>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default MoviesList;
