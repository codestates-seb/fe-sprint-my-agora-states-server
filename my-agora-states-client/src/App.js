import { useState, useEffect } from "react";
import "./App.css";
import DiscussionSearch from "./DiscussionSearch";

function App() {
  const [list, setList] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/discussions")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        setOriginalList(data);
        console.log(data);
      });
  }, []);

  const discussionList = () => {
    return list.map((item) => (
      <div key={item.id} className="discussion-item">
        <img src={item.avatarUrl} className="discussion-avatar" alt=""></img>
        <h3 className="discussion-title">{item.title}</h3>
        <p className="discussion-info">
          {item.author} / {item.createdAt}
        </p>
      </div>
    ));
  };

  return (
    <div>
      <h1>My Agora States</h1>
      <DiscussionSearch data={originalList} setList={setList} />
      <div>{discussionList()}</div>
    </div>
  );
}

export default App;
