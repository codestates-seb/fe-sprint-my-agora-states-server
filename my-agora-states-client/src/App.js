import "./App.css";
import { useEffect, useState } from "react";
import Main from "./pages/MainPage";
import axios from "axios";

function App() {
  const [discussion, setDiscussion] = useState([]);
  const domain = "http://localhost:3001";
  const getDiscussion = () => {
    return axios
      .get(domain + "/discussions")
      .then((res) => {
        return res.data; // axios는 .json()을 사용하지 않음.
      })
      .then((data) => {
        setDiscussion(data);
      });
  };

  useEffect(() => {
    getDiscussion();
  }, []);
  return (
    <div className="App">
      <Main discussion={discussion} />
    </div>
  );
}

export default App;
