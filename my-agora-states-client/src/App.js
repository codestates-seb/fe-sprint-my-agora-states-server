import { useEffect, useState } from 'react';
import './App.css';

import Form from './component/InputArea';
import DiscussSect from './component/Discussion';



const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  console.log("useEffect"); // 왜 두번 실행?
    (async () => {
      const serverReq = await fetch('http://localhost:3003/discussions');
      const option = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: "test",
          author: "fff"
        })
      }
      /* const serverReq = await fetch('http://localhost:3001/discussions', option); */
      const serverData = await serverReq.json();  // {data: 데이터 배열, maxPage: 마지막 페이지}

      setData(serverData.data);
      setIsLoading(false);
    })();

    return () => setIsLoading(true);
  }, [])

  return (
    <>
      <h1>My Agora States</h1>
      <section className="form__container">
        <Form />
      </section>

      <section className="discussion__wrapper">
        <DiscussSect data={data} />
      </section>
    </>
  );
}

export default App;
