import axios from "axios";

class MovieService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true,
    });
  }
  getAllMovies = () => {
    return this.service.get(`api/movies`).then((res) => res.data);
  }
  getMovie = (searchBarInput) => {
    return this.service.get(`api/movies/${searchBarInput}`).then((res) => res.data);
  };
}

export default MovieService;