import React from "react";
import { Link } from "react-router-dom";
import "./style/Navbar.css";
import logo from "./agora1.png";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="navigation">Home About MyPage</div>
      <div className="banner">
        <img src={logo} />
      </div>
    </section>
  );
};

export default Navbar;
