import React from "react";
import "./App.css";
import Discussions from "./pages/discussions/Discussions";
import Header from "./component/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Discussions />
    </div>
  );
}

export default App;
