import React, { useState } from "react";
import "./AddDiscussion.css";

const AddDiscussion = ({ onAddDiscussion }) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [textbox, setTextbox] = useState("");

  const getRandomImageURL = () => {
    const names = [
      "Abby",
      "Cuddles",
      "George",
      "Jasper",
      "Maggie",
      "Mimi",
      "Oscar",
      "Samantha",
      "Snowball",
    ];
    const randomName = names[Math.floor(Math.random() * names.length)];
    return `https://api.dicebear.com/6.x/adventurer/svg?seed=${randomName}&flip=true`;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const newDiscussion = {
      title: title,
      url: "https://github.com/codestates-seb/agora-states-fe/discussions",
      author: author,
      bodyHTML: textbox,
      avatarUrl: getRandomImageURL(),
    };

    try {
      const response = await fetch("http://localhost:4000/discussions/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDiscussion),
      });

      if (response.ok) {
        onAddDiscussion(); // 디스커션 추가 후에 목록 다시 가져오기
        setAuthor("");
        setTitle("");
        setTextbox("");
      } else {
        console.error("Failed to add discussion:", response.status);
      }
    } catch (error) {
      console.error("Error adding discussion:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "author") {
      setAuthor(value);
    } else if (name === "title") {
      setTitle(value);
    } else if (name === "textbox") {
      setTextbox(value);
    }
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="form__input--name">
        <input
          type="text"
          name="author"
          value={author}
          onChange={handleInputChange}
          placeholder="your name here"
        />
      </div>
      <div className="form__input--title">
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleInputChange}
          placeholder="Title"
        />
      </div>
      <div className="form__textbox">
        <textarea
          name="textbox"
          value={textbox}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
      <h1>Question is more important than answer.</h1>
    </form>
  );
};

export default AddDiscussion;
