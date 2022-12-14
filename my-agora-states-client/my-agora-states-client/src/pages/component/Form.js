import { useEffect, useState } from 'react';

function Form({ onSubmit }) {
  // 입력값
  const [textName, setTextName] = useState('');
  const [textTitle, setTextTitle] = useState('');
  const [textQuestion, setTextQuestion] = useState('');

  const handleNameChange = (e) => {
    setTextName(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTextTitle(e.target.value);
  };
  const handleQuestionChange = (e) => {
    setTextQuestion(e.target.value);
  };

  // 버튼 누르면 상태 변경 함수 실행
  const handleSubmitClick = () => {
    onSubmit({
      createdAt: new Date(),
      title: textTitle,
      url: 'https://github.com/codestates-seb/agora-states-fe/discussions/45',
      author: textName,
      answer: null,
      bodyHTML: textQuestion,
      avatarUrl:
        'https://item.kakaocdn.net/do/da00ff39e703c5948ac951fed6ec9f127154249a3890514a43687a85e6b6cc82',
    });
  };

  return (
    <section className='form__container'>
      {/* <form action='' method='get' className='form'> */}
      <div className='form__input--wrapper'>
        <div className='form__input--name'>
          <label htmlFor='name'>Enter your name </label>
          <input
            type='text'
            name='name'
            id='name'
            value={textName}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className='form__input--title'>
          <label htmlFor='title'>Enter your title </label>
          <input
            type='text'
            name='title'
            id='title'
            value={textTitle}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className='form__textbox'>
          <label htmlFor='story'>Your question </label>
          <textarea
            id='story'
            name='story'
            placeholder='질문을 작성하세요'
            value={textQuestion}
            onChange={handleQuestionChange}
            required
          ></textarea>
        </div>
      </div>
      <div className='form__submit'>
        <input type='submit' value='submit' onClick={handleSubmitClick} />
      </div>
      {/* </form> */}
    </section>
  );
}

export default Form;
