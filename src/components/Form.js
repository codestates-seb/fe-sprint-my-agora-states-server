import { useState } from "react";
import { writeContent } from "../api";

const Form = () => {
  const [data, setData] = useState({
    id: 46,
    createdAt: new Date(Date.now()).toISOString(),
    updatedAt: new Date(Date.now()).toISOString(),
    title: "",
    author: "",
    bodyHTML: "",
    avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4",
  });
  const write = writeContent;

  const handleClick = (e) => {
    e.preventDefault();
    write(data);
  };

  return (
    <section class="form__container">
      <form action="" method="get" class="form">
        <div class="form__input--wrapper">
          <div class="form__input--name">
            <label for="name">Enter your name: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={data.author}
              onChange={(e) => setData({ ...data, author: e.target.value })}
              required
            />
          </div>
          <div class="form__input--title">
            <label for="title">Enter your title: </label>
            <input
              type="text"
              name="title"
              id="title"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              required
            />
          </div>
          <div class="form__textbox">
            <label for="story">Your question: </label>
            <textarea
              id="story"
              name="story"
              placeholder="질문을 작성하세요"
              value={data.bodyHTML}
              onChange={(e) => setData({ ...data, bodyHTML: e.target.value })}
              required
            />
          </div>
        </div>
        <div class="form__submit">
          <input type="submit" value="submit" onClick={handleClick} />
        </div>
      </form>
    </section>
  );
};

export default Form;
