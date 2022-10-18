import React, { useState } from "react";
import Form from "./Form";

const Landing = () => {
  const [hideForm, setHideForm] = useState("hide");
  const handleBtnClick = () => {
    if (hideForm === "hide") {
      setHideForm("");
    } else {
      setHideForm("hide");
    }
  };

  return (
    <>
      <aside className="blank landing"></aside>
      <section className="landing">
        <h1>My Agora States</h1>
        <p>코드스테이츠의 커뮤니티에 자유롭게 질문하고, 답변을 확인해보세요!</p>
        <button className="form__button btn-l" onClick={handleBtnClick}>
          질문하기
        </button>
        <section className={"form__container" + " " + hideForm}>
          <Form />
        </section>
      </section>
      <aside className="blank landing"></aside>
    </>
  );
};

export default Landing;
