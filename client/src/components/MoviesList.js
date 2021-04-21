import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SearchInput from "./SearchInput";
import NoMoviesFound from "./NoMoviesFound";
import SelectableMovieTitle from "./SelectableMovieTitle";

const MoviesList = ({ movies, handleSelectionClick, searchResults }) => {
  return (
    <div className="moviesList">
      <Container fluid className="scrollable-content">
        {movies && movies.length !== 0 ? (
          <Row>
            {movies.map((movie) => {
              return (
                <SelectableMovieTitle
                  movie={movie}
                  handleSelectionClick={handleSelectionClick}
                />
              );
            })}
          </Row>
        ) : (
          <Row>
            <NoMoviesFound />
          </Row>
        )}
      </Container>
    </div>
  );
};

export default MoviesList;
