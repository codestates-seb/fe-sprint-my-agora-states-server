import React, { useState } from "react";
import { postDiscussion } from "../../api/discussions";

import "./NewDiscussion.scss";
import shortid from "shortid";

const NewDiscussion = () => {
  const id = shortid.generate();

  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");

  const createDiscussion = async () => {
    const data = await postDiscussion({
      id: id,
      createdAt: new Date().toLocaleString(),
      title: title,
      url: null,
      author: username,
      answer: null,
      avatarUrl: `https://github.com/${id}.png`,
    });

    if (data === "No Data") {
      alert("모두 기입해주시길 바랍니다.");
    } else {
      alert("새로운 디스커션 등록 완료 :)");
    }
  };

  return (
    <div id="NewDiscussion">
      <div className="form__container">
        <div className="form__input--wrapper">
          <div className="username input">
            <div className="username_section">
              <div className="text">Enter your name:</div>
              <input
                type="text"
                placeholder="이름을 입력해주세요."
                className="name_input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="title input">
            <div className="title_section">
              <div className="text">Enter your title:</div>
              <input
                type="text"
                placeholder="질문을 입력해주세요."
                className="title_input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="question input">
            <div className="question_section">
              <div className="text">Your question:</div>
              <textarea
                type="text"
                placeholder="내용을 입력해주세요."
                className="question_input"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="submit">
          <button className="submit_button" onClick={() => createDiscussion()}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewDiscussion;
