import { useState, useEffect } from "react";
import useInput from "../hook/useInpute";
import getServer from "../api/getServer";

const Modal = ({ setModal, setAgora }) => {
  const name = useInput("");
  const title = useInput("");
  const question = useInput("");
  const onChangeTitle = (e) => {
    title.setValue(e.target.value);
  };
  const onChangeName = (e) => {
    name.setValue(e.target.value);
  };
  const onChangeQuestion = (e) => {
    question.setValue(e.target.value);
  };

  const onClick = () => setModal(false);

  const handlePost = (e) => {
    e.preventDefault();
    const newData = getServer("http://localhost:4000/discussions", "post", {
      name: name.value,
      title: title.value,
      question: question.value,
    });
    newData.then((data) => {
      console.log(data);
      setAgora((prev) => [data, ...prev]);
      title.setValue("");
      question.setValue("");
      name.setValue("");
      setModal(false);
    });
  };

  return (
    <div class="background">
      <div class="popup-wrap" id="popup">
        <div class="popup-head">
          <span class="head-title">질문 작성</span>
          <i class="fa-solid fa-x" onClick={onClick}></i>
        </div>
        <div class="popup-body">
          <form class="submit_question" method="POST" onSubmit={handlePost}>
            <input
              type="text"
              placeholder="Title"
              required
              class="title"
              value={title.value}
              onChange={onChangeTitle}
            />
            <input
              type="text"
              placeholder="Name"
              required
              class="name"
              value={name.value}
              onChange={onChangeName}
            />
            <textarea
              name="question"
              id="question"
              placeholder="질문을 작성해주세요"
              rows="5"
              required
              value={question.value}
              onChange={onChangeQuestion}
            ></textarea>
            <div class="popup-foot">
              <button class="btn_submit">제출</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Modal;
