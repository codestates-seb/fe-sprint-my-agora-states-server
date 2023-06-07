import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h2>AGORA STATES</h2>
      </Link>
    </header>
  );
};

export default Header;
