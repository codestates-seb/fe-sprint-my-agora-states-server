import React, { useEffect, useState } from 'react';
import AgoraList from './AgoraList';
import AgoraWrite from './AgoraWrite';
import './App.css';
function App() {
  const [data, setData] = useState([]);
  let indexx = 0;
  useEffect(() => {
    fetch(`http://localhost:3001/discussions`)
      .then((res) => res.json())
      .then((data) => {
        indexx = data.length;
        setData(data);
      });
  }, []);
  return (
    <div className='App'>
      <h1>Agora States</h1>
      <AgoraWrite index={indexx} setData={setData} />
      <AgoraList data={data} setData={setData} />
    </div>
  );
}

export default App;
