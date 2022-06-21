import React from "react";

export default function Form() {
  return (
    <section className='form__container'>
      <form action='' method='post' className='form'>
        <div className='form__input--wrapper'>
          <div className='form__input--name'>
            <label htmlFor='name'>이름을 입력해주세요</label>
            <input type='text' name='name' id='name' required />
          </div>
          <div className='form__input--title'>
            <label htmlFor='title'>제목을 입력해주세요</label>
            <input type='text' name='title' id='title' required />
          </div>
          <div className='form__textbox'>
            <label htmlFor='story'>질문을 입력해주세요</label>
            <textarea id='story' name='story' placeholder='질문을 작성하세요' required />
          </div>
        </div>
        <div className='form__submit'>
          <button type='submit' className='submit-button'>
            제출
          </button>
        </div>
      </form>
    </section>
  );
}
