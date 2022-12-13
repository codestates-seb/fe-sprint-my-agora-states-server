import React, { useEffect, useState } from "react";
import "./Main.scss";
import Loader from "react-loaders";
import List from "../List/List";
import Banner from "../Banner/Banner";
const Main = () => {
  return (
    <>
      {/* <Loader type="pacman" /> */}

      <div className="container">
        <Banner />
        <List />
      </div>
    </>
  );
};

export default Main;
