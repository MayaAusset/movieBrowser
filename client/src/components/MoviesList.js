import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const MoviesList = ({ movies, handleSelectionClick }) => {
  return (
    <Container fluid>
      <Row>
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="movie-item">
              <button
                className="movie-link"
                onClick={() => {
                  handleSelectionClick(movie);
                  console.log(movie);
                }}
              >
                {movie.title}
              </button>
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default MoviesList;
