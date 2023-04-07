const AddDiscussion = function({handler}) {

    const onModal = function(){
      handler(true)
    }
    return (
      <section className="enter_discussion">
        <p>모르는 문제는 <span id="s">확실하게</span></p>
        <h1>아고라 스테이츠</h1>
        <button id="question_btn" onClick={onModal}>질문하기</button>
      </section>
    )
  }

  export default AddDiscussion