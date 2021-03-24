import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SelectedMovie from "./SelectedMovie";

const MoviesList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState("undefined");
  console.log(selectedMovie)
  return (
    <Container fluid>
      <Row>
        <Col>
            <ListGroup>
          {movies.map((movie) => {
            return (
              <ListGroup.Item key={movie.id}>
                <Button variant="link" onClick={() => setSelectedMovie({movie})}>{movie.title}</Button>
              </ListGroup.Item>
            );
          })}
          </ListGroup>
        </Col>
        <Col>
            <SelectedMovie movie={selectedMovie.movie}/>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviesList;
