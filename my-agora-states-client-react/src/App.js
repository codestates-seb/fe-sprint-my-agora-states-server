import './App.css';
import { useState, useEffect } from "react";
import Form from './components/Form';
import Discussions from './components/Discussions';


const App = (props) => {
  const domain = "http://localhost:4000"
  const [discussions, setDiscussions] = useState([]);
  const [noticeDiscussions, setNoticeDiscussions] = useState([]);
  const [otherDiscussions, setOtherDiscussions] = useState([]);
  
  useEffect(() => {
    getDiscussion();
  }, []);
  
  const getDiscussion = () => {
    return fetch(domain + "/discussions")
      .then((res) => res.json())
      .then((data) => {
        setDiscussions(data);
        setNoticeDiscussions(data.filter(e => e.author === 'kimploo'));
        setOtherDiscussions(data.filter(e => e.author !== 'kimploo'));
      });
  };
  
  console.log(discussions , discussions.length);
  
  const addDiscussion = ({author, title, bodyText}) => {
    const newDiscussionData = {
      id: discussions[0].id+1,
      createdAt :  new Date().toISOString(),
      author: author,
      title: title,
      bodyHTML : bodyText,
      anaswer : null,
      url : "",
      avatarUrl: `https://picsum.photos/seed/${discussions[0].id+1}/200/200`,
      // avatarUrl : `https://random.imagecdn.app/v1/image?width=500&height=500&format=json`,
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
        setDiscussions([newDiscussionData, ...discussions])
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
    <main className="main">
      
      <Form addDiscussion={addDiscussion}>
      </Form>
      <Discussions
        discussions={discussions}
        deleteDisucssion={deleteDisucssion}
        noticeDiscussions={noticeDiscussions}
        otherDiscussions={otherDiscussions}>
      </Discussions>
    </main>
   </>
  );
}

export default App;
