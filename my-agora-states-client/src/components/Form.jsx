import React, { useState } from "react";
import { postDiscussion } from "../api/discussions";

export default function Form() {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleNameChange(event) {
    setUsername(event.target.value);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleSubmit(event) {
    event.preventDefault();
    postDiscussion({
      author: username,
      title: title,
      bodyHTML: content,
      createdAt: new Date(),
      updatedAt: new Date(),
      avatarUrl: "https://avatars.githubusercontent.com/u/76990149?v=4",
    });
    window.location.replace("/");
  }

  return (
    <section className='form__container'>
      <form className='form'>
        <div className='form__input--wrapper'>
          <div className='form__input--name'>
            <label htmlFor='name'>이름을 입력해주세요</label>
            <input type='text' name='name' id='name' required onChange={handleNameChange} />
          </div>
          <div className='form__input--title'>
            <label htmlFor='title'>제목을 입력해주세요</label>
            <input type='text' name='title' id='title' required onChange={handleTitleChange} />
          </div>
          <div className='form__textbox'>
            <label htmlFor='story'>질문을 입력해주세요</label>
            <textarea id='story' name='story' placeholder='질문을 작성하세요' required onChange={handleContentChange} />
          </div>
        </div>
        <div className='form__submit'>
          <button type='submit' className='submit-button' onClick={handleSubmit}>
            제출
          </button>
        </div>
      </form>
    </section>
  );
}
