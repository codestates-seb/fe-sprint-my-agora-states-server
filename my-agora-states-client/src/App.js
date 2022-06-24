import { useEffect, useState } from 'react';
import './App.css';

import Form from './component/InputArea';
import DiscussSect from './component/Discussion';

const FetchData = async (path = "", method = "GET", body = {}) => {
  const option = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...body
  }
  const serverReq = await fetch(`http://localhost:3003/discussions${path}`, option);
  console.log(serverReq.ok);

  return await serverReq.json();
}

const App = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({ author: "", title: "", bodyHTML: "" });
  const [reRender, setReRender] = useState("init");

  useEffect(() => {
    if (!reRender) return;

    if (reRender === "init") {
      (async () => {
        const serverData = await FetchData();
        setData(serverData.data); // {data: 데이터 배열, maxPage: 마지막 페이지}
        // setReRender(null);
      })()
    } else if (reRender === "newItem") {
      (async () => {
        const serverData = await FetchData("", "POST", { body: JSON.stringify(newItem) });
        setData(serverData.data); // {data: 데이터 배열, maxPage: 마지막 페이지}
        // setReRender(null);
        setNewItem({ author: "", title: "", bodyHTML: "" });
      })()
    }
  }, [reRender])


  return (
    <>
      <h1>My Agora States</h1>
      <section className="form__container">
        <Form newItem={newItem} setNewItem={setNewItem} setReRender={setReRender} />
      </section>

      <section className="discussion__wrapper">
        <DiscussSect data={data} />
      </section>
    </>
  );
}

export default App;
