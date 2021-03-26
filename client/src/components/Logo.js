import React from "react";
import LogoFleet from "../assets/logo-fleet-modified.png";

const Logo = () => {
  return (
    <div>
      <img
        className="app-logo"
        src={LogoFleet}
        alt="movieBrowser logo"
        width="80px"
      />
    </div>
  );
};

export default Logo;
