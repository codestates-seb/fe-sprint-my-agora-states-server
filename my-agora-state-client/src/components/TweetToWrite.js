import React, { useState } from 'react';
import './TweetToWrite.css';

function TweetToWrite( { addDiscussion} ) {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [bodyText, setBodyText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (author !== '' && title !== '' && bodyText !=='') {
      let confirmAnswer = window.confirm("디스커션을 추가하시겠습니까?");
      if (confirmAnswer === true) {
        addDiscussion({ author, title, bodyText })
        setAuthor('')
        setTitle('')
        setBodyText('')
      } else {
        alert("제출을 취소하셨습니다.");
      }
    } else {
      window.alert("필수사항을 모두 입력해주세요.");
    };
  }

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value)
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  };

  const handleChangeBodyText = (event) => {
    setBodyText(event.target.value)
  };

    return (
        <section className="form__container">
        <form action="" method="get" className="form">
          <div className="form__input--wrapper">
            <div className="form-group">
            <div className="form__input--name">
              <label htmlFor="name">Enter your name: </label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="이름을 입력하세요." 
                size="37" 
                required
                onChange={handleChangeAuthor}
                value={author}
                />
            </div>
            <div className="form__input--title">
              <label htmlFor="title">Enter your title: </label>
              <input 
                type="text" 
                name="name" 
                id="title" 
                placeholder="제목을 작성하세요." 
                size="37" 
                required
                onChange={handleChangeTitle}
                value={title}
                />
            </div>
            <div className="form__textbox">
              <label htmlFor="story">Your question: </label>
              <textarea 
                id="story" 
                name="story" 
                placeholder="질문을 작성하세요." 
                rows="5" 
                cols="37"  
                required
                onChange={handleChangeBodyText}
                value={bodyText
                }>
                </textarea>
            </div>
            </div>
          </div>
          <div className="form__submit">
            <input 
                id="submit" 
                type="submit" 
                value="submit"
                onClick={handleSubmit}
            /> 
          </div>
        </form>
      </section>
    )
}

export default TweetToWrite;