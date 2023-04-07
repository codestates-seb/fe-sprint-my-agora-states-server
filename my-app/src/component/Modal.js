const Modal = ({ setModal }) => {
  const onClick = () => setModal(false);
  return (
    <div class="background">
      <div class="popup-wrap" id="popup">
        <div class="popup-head">
          <span class="head-title">질문 작성</span>
          <i class="fa-solid fa-x" onClick={onClick}></i>
        </div>
        <div class="popup-body">
          <form class="submit_question">
            <input type="text" placeholder="Title" required class="title" />
            <input type="text" placeholder="Name" required class="name" />
            <textarea
              name="question"
              id="question"
              placeholder="질문을 작성해주세요"
              rows="5"
              required
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
