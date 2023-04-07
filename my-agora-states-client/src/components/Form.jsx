import React from 'react';
import useInput from '../hooks/useInput';

function Form({ onCreate }) {
  const [name, nameInputHandler, setName] = useInput();
  const [title, titleInputHandler, setTitle] = useInput();
  const [question, questionInputHandler, setQuestion] = useInput();

  const createDiscussion = (e) => {
    e.preventDefault();

    const newDiscussion = {
      id: Math.random(),
      avatarUrl: 'https://t1.kakaocdn.net/together_image/common/avatar/avatar.png',
      author: name,
      title,
      createdAt: new Date().toISOString(),
      answer: null,
      bodyHTML: question,
      url: null,
    };

    setName('');
    setTitle('');
    setQuestion('');

    onCreate(newDiscussion);
  };

  return (
    <form action='submit' className='form' onSubmit={createDiscussion}>
      <div className='form__input--wrapper'>
        <input
          id='name'
          value={name}
          onChange={nameInputHandler}
          placeholder='Name'
          autoComplete='off'
          required
        />
        <input id='title' value={title} onChange={titleInputHandler} placeholder='Title' required />
        <textarea
          id='story'
          value={question}
          onChange={questionInputHandler}
          placeholder='Type your question here'
          required
        ></textarea>
        <button id='submit' type='submit'>
          질문 등록
        </button>
      </div>
    </form>
  );
}

export default Form;
