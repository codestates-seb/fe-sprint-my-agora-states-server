import "./index.css";
import Form from "./component/Form";
import Discussions from "./component/Discussions";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const domain = "http://localhost:3001";

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    let url = domain + `/discussions`;
    let response = await fetch(url);
    let data = await response.json();
    setData(data);
  };

  const addDiscussion = async ({ title, author, bodyText }) => {
    const newDiscussion = {
      id: "unique id",
      createdAt: new Date().toISOString(),
      title: title,
      url: "https://github.com/codestates-seb/agora-states-fe/discussions",
      author: author,
      answer: null,
      bodyHTML: bodyText,
      avatarUrl:
        "https://w.namu.la/s/f6240787d1fe934702fb178ec37e8682113ff63683df754f994e2d857cd812b071c8677af6fe39dc9711b8e733b40b1a3d9d67c97c60a14f0863939d3f88c4b52b49b99080dbbfce975ec908ecc2b0c37a153099a6c810b703eddce739cca43d8d709c4f4002482fc32b8ce4160c6fcc",
    };
    fetch(domain + "/discussions/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDiscussion),
    }).then((res) => {
      if (res.status === 201) {
        getApi();
      }
    });
  };

  const deleteDiscussion = (id) => {
    fetch(domain + `/discussions/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 202 || 204) {
        getApi();
      }
    });
  };

  return (
    <div>
      <main>
        <div className="main-style">
          <h1>My Agora States</h1>
          <Form addDiscussion={addDiscussion} />
          <Discussions
            data={data}
            key={data.id}
            deleteDiscussion={deleteDiscussion}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
