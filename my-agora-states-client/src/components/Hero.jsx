import React, { useState } from 'react';
import Form from './Form';
import astronaut from '../assets/astronaut.png';
import { apis } from '../api';

function Hero({ setDiscussions }) {
  const [isVisible, setIsVisible] = useState(false);
  const create = async (data) => {
    await apis.createDiscussion(data);
    setDiscussions((prev) => [data, ...prev]);
    setIsVisible(false);
  };

  return (
    <section className='hero'>
      <div className='hero-left'>
        <div className='welcome'>
          <h2>아고라 스테이츠에 오신 것을 환영합니다!</h2>
          <p>자유롭게 질문하고 답변을 받아보세요.</p>
        </div>
        <div className='form__submit'>
          <section className='form__container'>
            <button id='write' onClick={() => setIsVisible((view) => !view)}>
              {isVisible ? '작성 취소하기' : '질문 작성하기'}
            </button>
            {isVisible && <Form onCreate={create} />}
          </section>
        </div>
      </div>
      <img src={astronaut} />
    </section>
  );
}

export default Hero;
