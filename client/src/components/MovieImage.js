import React from "react";
import NoPicture from "../assets/no-picture.png";

const MovieImage = ({ poster }) => {
  return (
    <div>
      {poster != null ? (
        <img
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          alt="poster"
        />
      ) : (
        <img
          src={NoPicture}
          alt="Icon made by Freepik from www.flaticon.com"
          width="100px"
        />
      )}
    </div>
  );
};

export default MovieImage;
