import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const MoviesList = ({ movies, handleSelectionClick }) => {
  const [selectedMovie, setSelectedMovie] = useState("undefined");

  //console.log(`selectedMovie  from MovieLIST is ${selectedMovie.title}`);
  //console.log(`handleSelectionClick is ${handleSelectionClick}`);

  return (
    <Container fluid>
      <Row>
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <Button
                variant="link"
                onClick={() => {
                  setSelectedMovie({ movie });
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
