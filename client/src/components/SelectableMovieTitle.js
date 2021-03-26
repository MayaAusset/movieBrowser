import React from "react";
import { motion } from "framer-motion";

const SelectableMovieTitle = ({ movie, handleSelectionClick }) => {
  return (
    <div className="movie-item">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        key={movie.id}
      >
        <div key={movie.id}>
          <button
            className="movie-link"
            onClick={() => {
              handleSelectionClick(movie);
            }}
          >
            {movie.title}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SelectableMovieTitle;
