const InputForm = () => {
  return (
    <div className="form-modal">
      <dialog id="dialog">
        <section className="form__container">
          <form action="" method="get" className="form">
            <div className="form__input--wrapper">
              <h3>글쓰기</h3>
              <div className="form__input--name">
                <label htmlFor="name">작성자</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="이름을 입력하세요"
                  required=""
                />
              </div>
              <div className="form__input--title">
                <label htmlFor="title">제목</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="제목을 입력하세요"
                  required=""
                />
              </div>
              <div className="form__textbox">
                <div
                  contentEditable="true"
                  id="story"
                  name="story"
                  required=""
                />
              </div>
              <div className="form__submit">
                <input
                  className="form__button"
                  type="submit"
                  defaultValue="등록"
                  id="questionSubmit"
                />
                <button className="form__button" id="btn-close">
                  닫기
                </button>
              </div>
            </div>
          </form>
        </section>
      </dialog>
    </div>
  );
};
