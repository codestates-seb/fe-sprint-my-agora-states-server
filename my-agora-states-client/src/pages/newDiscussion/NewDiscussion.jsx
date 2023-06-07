import React, { useState } from "react";
import { postDiscussion } from "../../api/discussions";
import shortid from "shortid";
import "./NewDiscussion.scss";

const NewDiscussion = () => {
  const id = shortid.generate();

  const [discussion, setDiscussion] = useState([]);
  const [username, setUsername] = useState("dokite");
  const [title, setTitle] = useState("");
  const [post, setPost] = useState({
    id: id,
    createdAt: new Date().toLocaleString(),
    title,
    answer: null,
    author: username,
    answer: null,
    avatarUrl:
      "https://avatars.githubusercontent.com/u/97888923?s=64&u=12b18768cdeebcf358b70051283a3ef57be6a20f&v=4",
  });

  const postNewDiscussion = async () => {
    const discussion = await postDiscussion(post);
    setDiscussion([...discussion, post]);
  };

  return (
    <div id="NewDiscussion">
      <div className="newDiscussion">
        <div className="newDiscussion_wrapper">
          <div className="username_input">
            <input
              type="text"
              placeholder="이름을 입력해주세요."
              className="name_input"
            />
          </div>
          <div className="title_input">
            <input
              type="text"
              placeholder="질문을 입력해주세요."
              className="title_input"
            />
          </div>
          <div className="question_input">
            <input
              type="text"
              placeholder="내용을 입력해주세요."
              className="question_input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDiscussion;
