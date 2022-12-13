import {useState} from "react";

const Form = () => {

    const [username, setUsername] = useState("");
    const [userTitle, setUserTitle] = useState("");
    const [msg, setMsg] = useState("");

    const handleChangeName = (event) => {
        setUsername(event.target.value);
    }

    const handleChangeTitle = (event) => {
        setUserTitle(event.target.value);
    }

    const handleChangeMsg = (event) => {
        setMsg(event.target.value);
    }

const handleClickSubmit = (event) => {
    //submit
}

    return (
        <section class="form__container">
      <form action="" method="get" class="form" name="textbox">
        <div class="form__input--wrapper">
          <div class="form__input--name">
            <label for="name">이름을 입력해 주세요: </label>
            <input type="text" name="name" id="name" value={username} onChange={handleChangeName} required/>
          </div>
          <div class="form__input--title">
            <label for="name">제목을 입력해 주세요: </label>
            <input type="text" name="title" id="title" value={userTitle} onChange={handleChangeTitle} required/>
          </div>
          <div class="form__textbox">
            <label for="story">질문 내용: </label>
            <textarea id="story" name="story" placeholder="질문을 작성하세요" value={msg} onChange={handleChangeMsg} required></textarea>
          </div>
        </div>
        <div class="form__submit">
          <button onClick={handleClickSubmit}>Submit</button>
        </div>
      </form>
    </section>
    ); 

};

export default Form;