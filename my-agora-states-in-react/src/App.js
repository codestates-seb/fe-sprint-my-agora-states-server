import React from "react";
import "./App.css";
import { useEffect, useState } from "react";

import Form from "./Components/Form";
import Discussions from "./Components/Discussions";
import Paging from "./Components/Paging";

import { getDiscussion } from "./api/getDiscussionApi";

function App() {
  const [disList, setDisList] = useState([]);
  const [fullList, setFullList] = useState([]);
  const [page, setPage] = useState("1");

  console.log(page);

  useEffect(() => {
    getDiscussion().then((result) => {
      setFullList(result);
      let pagingArray = result.slice((page - 1) * 10, page * 10);
      setDisList(pagingArray);
    });
  }, [page]);

  return (
    <div className="App">
      <main>
        <h1>My Agora States</h1>
        <Form disList={disList} setDisList={setDisList} />
        <Discussions disList={disList} />
        <Paging page={page} setPage={setPage} fullList={fullList} />
      </main>
    </div>
  );
}

export default App;
