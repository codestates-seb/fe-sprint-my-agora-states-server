import React from "react";

const Form = ({ addDiscussion }) => {
  const submit = (e) => {
    console.log(e.target[0]);
    console.log(e.target[1]);
    console.log(e.target[2]);
    e.preventDefault();
    const author = e.target[0].value;
    const title = e.target[1].value;
    const bodyText = e.target[2].value;
    addDiscussion({ author, title, bodyText });
  };
  return (
    <section className="form__container">
      <form action="" method="get" className="form" onSubmit={submit}>
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <label htmlFor="name">Enter your name: </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="form__input--title">
            <label htmlFor="name">Enter your title: </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="form__text">
            <label htmlFor="story">Your question: </label>
            <textarea
              id="story"
              name="story"
              placeholder="질문을 작성하세요"
              required
            ></textarea>
          </div>
        </div>
        <span className="form__submit">
          <input type="submit" value="submit" className="submit" />
        </span>
      </form>
    </section>
  );
};

export default Form;
