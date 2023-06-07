import React, { useState } from "react";
import "./App.css";

import Header from "./component/header/Header";
import Discussions from "./pages/discussions/Discussions";
import NewDiscussion from "./pages/newDiscussion/NewDiscussion";

function App() {
  const [newDiscussion, setNewDiscussion] = useState({});

  return (
    <div className="App">
      <Header />
      {/* 상태 끌어올리기와 구조(App 부모 - 나머지가 자식과 형제) */}
      <NewDiscussion setNewDiscussion={setNewDiscussion} />
      <Discussions newDiscussion={newDiscussion} />
    </div>
  );
}

export default App;
