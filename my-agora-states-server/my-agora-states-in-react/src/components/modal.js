const Modal = function ({ handler, discussionHandler}) {
  const offModal = function () {
    handler(false)
  }
  const enterDiscussion = function (event) {
    let question_name = document.querySelector('#name')
    let question_title = document.querySelector('#title')
    let question_story = document.querySelector('#story')


    //제출을 눌러도 새로고침이 되지 않게 함
    event.preventDefault();

    //새로운 오브젝트 생성
    let question_obj = {}
    question_obj.avatarUrl = 'https://avatars.githubusercontent.com/u/117385050?s=400&v=4'
    question_obj.title = question_title.value
    question_obj.author = question_name.value
    question_obj.createdAt = new Date().toLocaleString()
    question_obj.bodyHTML = question_story.value
    question_obj.answer = 'no answer'
    discussionHandler(question_obj)
    handler(false)
  }

  return (
    <div id='modal' className="modal_overlay">
      <form action="" method="get" className="form">
        <div className="modal_close" onClick={offModal}>
          X<br />
        </div>
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <label htmlFor="name">이름</label><br />
            <input type="text" name="name" id="name" required />
          </div>
          <div className="form__input--title">
            <label htmlFor="title">제목 </label><br />
            <input type="text" name="title" id="title" required />
          </div>
          <div className="form__textbox">
            <label htmlFor="story">내용 </label><br />
            <textarea id="story" name="story" placeholder="질문을 작성하세요" required></textarea>
          </div>
        </div>
        <div className="form__submit">
          <input type="submit" value="등록하기" id="submit_button" onClick={enterDiscussion}/>
        </div>
      </form>
    </div>
  )
}

export default Modal