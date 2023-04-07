import React, { useState } from 'react';

import './DiscussionForm.css';

const DiscussionForm = ({ setDiscussionForm }) => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    title: '',
    story: '',
    avatarUrl: '../../img/user.png',
  });

  const { name, email, title, story } = inputs;

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    setDiscussionForm(inputs);
    setInputs({ name: '', email: '', title: '', story: '', avatarUrl: '../../img/user.png' });
  };

  return (
    <section className="form__container show">
      <h1>질문하기</h1>
      <form method="" action="" className="form">
        <div className="form__input--wrapper">
          <div className="form__personal-input--wrapper">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="이름을 입력해 주세요."
              value={name}
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
            id="story"
            name="story"
            type="text"
            placeholder="질문 내용을 입력해 주세요."
            value={story}
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
