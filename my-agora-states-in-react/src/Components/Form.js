import React from "react";
import { useState } from "react";
import "../App.css";

const Form = ({ disList, setDisList }) => {
  const [text, setText] = useState({
    id: 45,
    createdAt: new Date().toISOString(),
    url: "https://github.com/codestates-seb/agora-states-fe/discussions",
    answer: null,
    avatarUrl:
      "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
  });
  let [author, setAuthor] = useState("");
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
    setText({ ...text, author });
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
    setText({ ...text, title });
  };

  const handleContent = (e) => {
    setContent(e.target.value);
    setText({ ...text, content });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    text.id++;
    setDisList([text, ...disList]);
  };

  return (
    <section className="form__container">
      <form action="" method="get" className="form">
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <label htmlFor="name">Enter your name: </label>
            <input
              type="text"
              name="name"
              id="user-name"
              value={author}
              onChange={handleAuthor}
              required
            />
          </div>
          <div className="form__input--title">
            <label htmlFor="name">Enter your title: </label>
            <input
              type="text"
              name="name"
              id="title-name"
              value={title}
              onChange={handleTitle}
              required
            />
          </div>
          <div className="form__textbox">
            <label htmlFor="story">Your question: </label>
            <textarea
              id="story"
              name="story"
              placeholder="질문을 작성하세요"
              value={content}
              onChange={handleContent}
              required
            ></textarea>
          </div>
        </div>
        <div className="form__submit">
          <input
            type="submit"
            value="submit"
            id="submit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </section>
  );
};

export default Form;
