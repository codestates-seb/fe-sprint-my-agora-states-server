import React from 'react';

import './MainBanner.css';

const MainBanner = ({ openClickHandler }) => {
  return (
    <section className="main__container">
      <div className="main__info--wrapper">
        <h1>
          My
          <br />
          Agora States
        </h1>
        <p>
          누구든지 자유롭게 질문하고 답하며,
          <br />
          함께 성장하는 공간
        </p>
        <button id="asking" onClick={openClickHandler}>
          질문하기
        </button>
      </div>
      <div className="main__image--wrapper">
        <img src={require('../../img/agora-main.jpg')} alt="main" />
      </div>
    </section>
  );
};

export default MainBanner;
