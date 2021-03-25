import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { motion } from "framer-motion";

const MoviesList = ({ movies, handleSelectionClick }) => {
  return (
    <Container fluid className="scrollable-content">
      {movies.length !== 0 ? (
        <Row>
          {movies.map((movie) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                key={movie.id}
                className="movie-item"
              >
                <div key={movie.id} >
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
              </motion.div>
            );
          })}
        </Row>
      ) : (
        <Row>
          <div className="movie-item">
            <div className="movie-item">
              <button className="movie-link">Movie 1</button>
            </div>
            <div className="movie-item">
              <button className="movie-link">Movie 2</button>
            </div>
            <div className="movie-item">
              <button className="movie-link">Movie 3</button>
            </div>
          </div>
        </Row>
      )}
    </Container>
  );
};

export default MoviesList;
