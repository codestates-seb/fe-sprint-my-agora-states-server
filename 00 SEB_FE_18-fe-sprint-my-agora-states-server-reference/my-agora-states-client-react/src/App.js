import { Form, Discussions } from "./components";
import { useEffect, useState } from "react";

function App() {
  const domain = "http://localhost:3001";
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    getDiscussion();
  }, []);

  const getDiscussion = () => {
    return fetch(domain + "/discussions")
      .then((res) => res.json())
      .then((data) => {
        setDiscussions(data);
      });
  };

  const addDiscussion = ({ title, author, bodyText }) => {
    const newDiscussionData = {
      title: title,
      author: author,
      bodyHTML: bodyText,
    };
    fetch(domain + "/discussions/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDiscussionData),
    }).then((res) => {
      if (res.status === 201) {
        getDiscussion();
      }
    });
  };

  const deleteDiscussion = (id) => {
    fetch(domain + `/discussions/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 202 || res.status === 204) {
        getDiscussion();
      }
    });
  };

  return (
    <>
      <h1>My Agora States!</h1>
      <Form addDiscussion={addDiscussion}></Form>
      <Discussions
        discussions={discussions}
        deleteDiscussion={deleteDiscussion}
      ></Discussions>
    </>
  );
}

export default App;
