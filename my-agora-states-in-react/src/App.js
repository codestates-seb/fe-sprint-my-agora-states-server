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

  console.log(disList);

  return (
    <div className="App">
      <main>
        <h1>My Agora States</h1>
        <Form disList={disList} setDisList={setDisList} />
        <Discussions disList={disList} />
      </main>
    </div>
  );
}

export default App;
