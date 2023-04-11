import './App.css';
import { useState, useEffect } from "react";
import Form from './components/Form';
import Discussions from './components/Discussions';

const App = (props) => {
  const domain = "http://localhost:4000"
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

  const addDiscussion = ({author, title, bodyText}) => {
    const newDiscussionData = {
      author: author,
      title: title,
      bodyHTML : bodyText,
    };
    fetch(domain + "/discussions/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDiscussionData),
    }).then((res) => {
      if(res.status === 201){
        getDiscussion();
      }
    });
  };

  const deleteDisucssion = (id) => {
    fetch(domain + `/discussions/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if(res.status === 202 || res.status === 204){
        getDiscussion();
      }
    });

  };
  return (
   <>
    <h1>My Agora States!</h1>
    <main>
      <Form addDiscussion={addDiscussion}></Form>
      <Discussions
        discussions={discussions}
        deleteDisucssion={deleteDisucssion}>
      </Discussions>
    </main>
   </>
  );
}

export default App;
