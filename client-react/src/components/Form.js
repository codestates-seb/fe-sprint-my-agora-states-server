import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.title.value);
    console.log(e.target.story.value);
  };

  return (
    <form action="" method="get" className="form" onSubmit={handleSubmit}>
      <div className="form__input--wrapper">
        <div className="form__input--name">
          <label htmlFor="name">Name </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="form__input--title">
          <label htmlFor="title">Title </label>
          <input type="text" name="title" id="title" required />
        </div>
        <div className="form__textbox">
          <label htmlFor="story">Content </label>
          <textarea id="story" name="story" placeholder="" required></textarea>
        </div>
      </div>
      <div className="form__submit">
        <input className="btn-s" type="submit" value="submit" />
      </div>
    </form>
  );
};

export default Form;
