import React, { useState, useEffect } from "react";
import FormControl from "react-bootstrap/FormControl";
import MovieService from "../service/movies.service";
import MoviesList from "./MoviesList";
//import SelectedMovie from "./SelectedMovie";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../App.css";

const MovieSelection = ({ movies }) => {
  //const moviez = [...movies];
  const [searchBarInput, setSearchBarInput] = useState("");
  const [searchResults, setSearchResults] = useState(movies);
  //const [selectedMovie, setSelectedMovie] = useState("undefined");

  /* useEffect(
    () => {
      setSearchResults(movies)
    }, []
  )
  useEffect(
    () => {
      console.log(movies)
    }, [movies]
  ) */

  console.log(`movies from Movie selection ${movies}`);
  console.log(`searchResults from Movie selection ${searchResults}`);
  const search = (event) => {
    if (event.key === "Enter") {
      const service = new MovieService();

      service
        .getMovie(searchBarInput)
        .then((response) => {
          setSearchBarInput("");
          setSearchResults(response.results);
        })
        .catch((error) =>
          console.log(`error from MovieSelection Component: ${error}`)
        );
    }
  };
  
  return (
    <Container fluid className="main-container">
      <Row>
        <FormControl
          type="text"
          placeholder="Search for a movie..."
          onChange={(e) => setSearchBarInput(e.target.value)}
          value={searchBarInput}
          onKeyPress={search}
          className="mr-sm-2"
        />
        <MoviesList movies={searchResults} />
      </Row>
      <Row>{/* <SelectedMovie movie={} /> */}</Row>
    </Container>
  );
};

export default MovieSelection;
