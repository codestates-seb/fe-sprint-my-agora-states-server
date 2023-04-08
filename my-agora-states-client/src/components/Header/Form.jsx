import React from "react";
import { addDiscussion } from "../../api/DiscussionsData";

const Form = ({ page, limit, updateDiscussion, updatePage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);

    const author = e.target[0].value;
    const title = e.target[1].value;
    const bodyHtml = e.target[2].value;

    addDiscussion({ author, title, bodyHtml, page, limit }).then((data) => {
      updateDiscussion(data);
      updatePage(0);
    });

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
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
