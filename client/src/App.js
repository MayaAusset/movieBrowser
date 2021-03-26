import React from "react";
import MovieSelection from "./components/MovieSelection";
import Logo from "./assets/logo-fleet-modified.png";
import "./App.css";

function App() {
  return (
    <div>
      <img
        className="app-logo"
        src={Logo}
        alt="movieBrowser logo"
        width="80px"
      />
      <div className="App">
        <MovieSelection />
      </div>
    </div>
  );
}

export default App;
