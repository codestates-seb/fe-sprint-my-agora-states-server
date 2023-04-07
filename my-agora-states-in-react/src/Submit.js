import {useState, useCallback} from 'react'

function getDate (){
  let today =  new Date();
  let year = today.getFullYear();
  let month = ('0' + (today.getMonth() + 1)).slice(-2);
  let day = ('0' + today.getDate()).slice(-2);
  let dateString = year + '-' + month  + '-' + day;
  return dateString;
}

const Submit = ()=>{
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const onChangeTitle = useCallback((e)=>{
    setTitle(e.target.value);
  }, []);

  const onChangeText = useCallback((e)=>{
    setText(e.target.value);
  }, [])

  const onSubmit = ()=>{
    const newdata = {
      author : 'nyang-punch',
      avatarUrl : "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
      createdAt : getDate(),
      url : "",
      title,
      text
    }

    fetch('http://localhost:4000/discussions/', {
      method : 'POST',
      headers: {
        "Content-Type": "application/json",
    },
      body : JSON.stringify(newdata),
    })

  }

  return(
    <section className="form__container">
    <form action="" method="get" className="form" onSubmit={onSubmit}>
      <div className="form__input--wrapper">
        <div className="form__input--title">
          <input
            type="text"
            name="title"
            id="title"
            required
            placeholder="제목을 입력해주세요"
            onChange={onChangeTitle}
          />
        </div>
        <div className="form__textbox">
          <textarea
            id="story"
            name="story"
            placeholder="질문을 작성해주세요"
            onChange={onChangeText}
            required
          ></textarea>
        </div>
      </div>
      <div className="form__submit">
        <input type="submit" value="등록" className="submit" />
      </div>
    </form>
  </section>
  )
}

export default Submit;