import React from "react";
import MovieImage from "./MovieImage";
import Rating from "./Rating";
import NoImage from "../assets/no-image.png";

const SelectedMovie = ({ movie }) => {
  return (
    <div>
      {typeof movie != "undefined" ? (
        <section className="selected-movie ">
          <div className="selected-movie-up">
            <div className="up-img">
              <MovieImage poster={movie.poster_path} />
            </div>
            <div className="up-infos">
              <h1>{movie.title}</h1>
              <h5 className="text-muted">{movie.release_date.slice(0, 4)}</h5>
              <Rating>{movie.vote_average}</Rating>
            </div>
          </div>
          <div className="selected-movie-down scrollable-content-2">
            <p>{movie.overview}</p>
          </div>
        </section>
      ) : (
        <section>
          <h4>No Movie Selected yet ! </h4>
          <img
            src={NoImage}
            alt="Icon made by Freepik from www.flaticon.com"
            width="200px"
          />
          <p>
            Type in a movie's name in the search bar and click on the title to
            display its informations
          </p>
        </section>
      )}
    </div>
  );
};

export default SelectedMovie;
