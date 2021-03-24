import React from "react";

const MovieImage = ({poster}) => {
  return <div><img src={`https://image.tmdb.org/t/p/original/${poster}`} alt="" width="200px"/></div>
};

export default MovieImage;
