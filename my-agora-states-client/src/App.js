import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

const DiscussionsRender = ({ NoticeList = [] }) => {
  return NoticeList.map((el) => (
    <li className="discussion" key={el.id}>
      <h2 className="discussion-id">{el.author}</h2>
      <a onClick={() => window.open("", "_blank").document.write(el.bodyHTML)}>
        <span className="discussion-title">{el.title}</span>
      </a>
    </li>
  ));
};

const LoadingIndicator = () => {
  return <span>로딩중임다!</span>;
};

function App() {
  const [Id, setId] = useState("");
  const [Title, setTitle] = useState("");
  const [Story, setStory] = useState("");
  const [NoticeList, setNoticeList] = useState([]);
  const [isLoding, setisLoding] = useState(false);
  const [isUpdate, setisUpdate] = useState(false);
  const [NewNotice, setNewNotice] = useState({});
  const [key, setkey] = useState(46);

  useEffect(() => {
    if (isUpdate === false) {
      setisLoding(true);
      axios
        .get("http://localhost:4000/discussions")
        .then((el) => {
          setNoticeList(el.data);
          setisLoding(false);
        })
        .catch((error) => console.log(`${error} 최초 호출 실패`));
    }
  }, []);

  useEffect(() => {
    if (isUpdate === true) {
      setisLoding(true);
      axios
        .put("http://localhost:4000/discussions", {
          ...NewNotice,
        })
        .then((el) => {
          setNoticeList(el.data);
          console.log(NoticeList);
          setisLoding(false);
          setId("");
          setTitle("");
          setStory("");
          setisUpdate(false);
        })
        .catch((error) => console.log(`${error} 업데이트 실패`));
    }
  }, [isUpdate]);

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleStory = (e) => {
    setStory(e.target.value);
  };

  const addNoticeEvent = (e) => {
    if (Id.length >= 3 && Title.length >= 3 && Story.length >= 3) {
      setNewNotice({
        id: key,
        author: Id,
        title: Title,
        bodyHTML: Story,
        createdAt: new Date().toLocaleString(),
      });
      setisUpdate(true);
      setkey(key + 1);
    } else {
      alert("각 3글자 이상 입력하세요");
    }
  };

  return (
    <div className="App">
      {isLoding ? (
        <LoadingIndicator />
      ) : (
        <>
          <h1>My Agora States</h1>
          <main>
            <section className="input">
              <input
                className="input-Id"
                value={Id}
                onChange={handleId}
                placeholder="ID"
              />
              <input
                className="input-Title"
                value={Title}
                onChange={handleTitle}
                placeholder="Title"
              />
              <textarea
                className="input-Story"
                value={Story}
                onChange={handleStory}
                placeholder="Story"
              />
              <div className="input-Button-Box">
                <button className="input-Button" onClick={addNoticeEvent}>
                  submit
                </button>
              </div>
            </section>
            <section className="noticeBox">
              <ul className="discussions">
                <DiscussionsRender NoticeList={NoticeList} />
              </ul>
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
