import React from "react";
import "./App.css";

import Header from "./component/header/Header";
import Discussions from "./pages/discussions/Discussions";
import NewDiscussion from "./pages/newDiscussion/NewDiscussion";

function App() {
  return (
    <div className="App">
      <Header />
      <NewDiscussion />
      <Discussions />
    </div>
  );
}

export default App;
