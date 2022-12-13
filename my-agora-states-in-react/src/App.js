import "./App.css";

import Form from "./Components/Form";
import Discussions from "./Components/Discussions";

import { getDiscussion } from "./api/getDiscussionApi";

import { useEffect, useState } from "react";

function App() {
  const [disList, setDisList] = useState([]);

  useEffect(() => {
    getDiscussion().then((result) => {
      setDisList(result);
    });
  }, []);

  return (
    <div className="App">
      <main>
        <h1>My Agora States</h1>
        <Form />
        <Discussions disList={disList} />
      </main>
    </div>
  );
}

export default App;
