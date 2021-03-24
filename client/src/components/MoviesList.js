import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const MoviesList = ({ movies, handleSelectionClick }) => {
  return (
    <Container fluid>
      <Row>
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <Button
                variant="link"
                onClick={() => {
                  handleSelectionClick(movie);
                  console.log(movie)
                }}
              >
                {movie.title}
              </Button>
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default MoviesList;
