import React, { useState } from 'react';

import './DiscussionForm.css';

const DiscussionForm = ({ setIsOpen, setDiscussionForm }) => {
  const [inputs, setInputs] = useState({
    author: '',
    email: '',
    title: '',
    story: '',
    avatarUrl: '../../img/user.png',
  });

  const { author, email, title, bodyHTML } = inputs;

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    setDiscussionForm(inputs);
    setIsOpen(false);
    setInputs({ author: '', email: '', title: '', bodyHTML: '', avatarUrl: '../../img/user.png' });
  };

  return (
    <section className="form__container show">
      <h1>질문하기</h1>
      <form method="" action="" className="form">
        <div className="form__input--wrapper">
          <div className="form__personal-input--wrapper">
            <input
              id="author"
              name="author"
              type="text"
              placeholder="이름을 입력해 주세요."
              value={author}
              onChange={onChange}
            />
            <input
              id="email"
              name="email"
              type="text"
              placeholder="이메일을 입력해 주세요."
              value={email}
              onChange={onChange}
            />
          </div>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="질문 제목을 입력해 주세요."
            value={title}
            onChange={onChange}
          />
          <textarea
            id="bodyHTML"
            name="bodyHTML"
            type="text"
            placeholder="질문 내용을 입력해 주세요."
            value={bodyHTML}
            onChange={onChange}
          ></textarea>
        </div>
        <div className="form__submit">
          <input id="submit-button" type="submit" value="질문 등록하기" onClick={submit} />
        </div>
      </form>
    </section>
  );
};

export default DiscussionForm;
