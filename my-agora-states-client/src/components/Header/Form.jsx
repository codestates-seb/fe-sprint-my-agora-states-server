import React from 'react';
import { addDiscussion } from '../../api/DiscussionsData';

const Form = ({ updateDiscussion }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);

    const author = e.target[0].value;
    const title = e.target[0].value;
    const bodyHtml = e.target[0].value;

    addDiscussion({ author, title, bodyHtml }).then((data) =>
      updateDiscussion(data)
    );
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">이름</label>
          <input type="text" id="name" required></input>
        </div>
        <div>
          <label htmlFor="title">제목</label>
          <input type="text" id="title" required></input>
        </div>
        <div>
          <label htmlFor="story">내용</label>
          <textarea id="story" placeholder="story" required></textarea>
        </div>
        <div>
          <button type="submit">작성하기</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
