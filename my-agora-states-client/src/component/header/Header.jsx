import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div id="Header">
      <div className="header">
        <div className="header_logo--wrapper">
          <img
            src="/images/hitmontop.gif"
            alt="hitmontop_gif"
            className="hitmontop"
          />
          <h1 className="logo">My Agora States</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
