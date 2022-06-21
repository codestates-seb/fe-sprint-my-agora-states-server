import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.css';
import DiscussionAdd from './section/discussionAdd';
import DiscussionList from './section/discussionList';



const App = () => {

  const [discussion, setDiscussion] = useState([]);


  useEffect(()=>{
    const url = 'http://localhost:3001/discussions';
    fetch(url)
      .then((res) => res.json())
      .then((res)=>{
        setDiscussion(res)
      }) 
  }, []);



  return (
    <BrowserRouter>
      <div className="App">
        <h1>MY AGORA STATES</h1>
          <DiscussionAdd discussion={discussion} setDiscussion={setDiscussion}/>
          <DiscussionList discussion={discussion}/>
    </div>
    </BrowserRouter>

  );
}

export default App;
