import React from "react";
import Card from "react-bootstrap/Card";
import MovieImage from "./MovieImage";
import Rating from "./Rating";

const SelectedMovie = ({ movie }) => {
  return (
    <Card style={{ width: "23rem" }}>
      {typeof movie != "undefined" ? (
        <Card.Body>
          <MovieImage poster={movie.poster_path} />
          <Card.Title>{movie.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {movie.release_date}
          </Card.Subtitle>
          <Card.Subtitle>
            <Rating>{movie.vote_average}</Rating>
          </Card.Subtitle>
          <Card.Text>{movie.overview}</Card.Text>
        </Card.Body>
      ) : (
        <Card.Body>
          <img src="not-selected.png" alt="no selected movie" width="200px" />
          <Card.Title>No Movie Selected yet ! </Card.Title>
        </Card.Body>
      )}
    </Card>
  );
};

export default SelectedMovie;
