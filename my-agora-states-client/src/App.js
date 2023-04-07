import { useEffect, useState } from 'react';

import './App.css';
import DiscussionItem from './components/DiscussionItem/DiscussionItem';
import NoItem from './components/NoItem/NoItem';

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/discussions', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <>
      <header className="header">
        <div className="header__logo--container">
          <img
            className="header__logo--image"
            src={require('./img/codestates-logo.png')}
            alt="codestates logo"
          />
        </div>
        <div className="header__nav">
          <div className="nav__urclass">
            <a href="https://urclass.codestates.com/">유어클래스</a>
          </div>
          <div className="nav__help">
            <a href="https://help-urclass-codestates.zendesk.com/hc/ko">헬프 센터</a>
          </div>
        </div>
        <div className="header__guest--info">
          <span>guest</span>
          <img src={require('./img/user.png')} alt="default avatar" />
        </div>
      </header>

      <hr />

      <main>
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
            <button id="asking">질문하기</button>
          </div>
          <div className="main__image--wrapper">
            <img src={require('./img/agora-main.jpg')} alt="main" />
          </div>
        </section>

        <section className="form__container show">
          <h1>질문하기</h1>
          <form method="get" action="" className="form">
            <div className="form__input--wrapper">
              <div className="form__personal-input--wrapper">
                <input id="name" type="text" placeholder="이름을 입력해 주세요." />
                <input id="email" type="text" placeholder="이메일을 입력해 주세요." />
              </div>
              <input id="title" type="text" placeholder="질문 제목을 입력해 주세요." />
              <textarea id="story" type="text" placeholder="질문 내용을 입력해 주세요."></textarea>
            </div>
            <div className="form__submit">
              <input id="submit-button" type="submit" value="질문 등록하기" />
            </div>
          </form>
        </section>

        <section className="discussion__wrapper">
          <h1>질문 모아보기</h1>
          {datas.length ? (
            <ul className="discussions__container">{datas.map((data) => DiscussionItem(data))}</ul>
          ) : (
            <NoItem />
          )}

          <div className="pagination--container">
            <div className="pagination__button--wrapper">
              <span className="page-button" id="button-prev">
                &#5176;{' '}
              </span>
              <span id="page-number--wrapper"> </span>
              <span className="page-button" id="button-next">
                &#5171;
              </span>
            </div>
          </div>
        </section>

        <aside className="side-bar__container">
          <div className="filter--container">
            <h5>Filter</h5>
            <div className="option--wrapper">
              <input type="checkbox" name="filter" id="option-solved" checked />
              <label for="option-solved">답변 완료</label>
            </div>
            <div className="option--wrapper">
              <input type="checkbox" name="filter" id="option-unsolved" checked />
              <label for="option-unsolved">답변 대기중</label>
            </div>
            <div className="option--wrapper">
              <input type="checkbox" name="filter" id="option-notice" checked />
              <label for="option-notice">공지</label>
            </div>
          </div>
          <div className="sort--container">
            <h5>Sort</h5>
            <div className="option--wrapper">
              <input type="radio" name="sort" id="option-recent" checked />
              <label for="option-recent">최근 등록 순</label>
            </div>
            <div className="option--wrapper">
              <input type="radio" name="sort" id="option-old" />
              <label for="option-old">오래된 등록 순</label>
            </div>
            <div className="option--wrapper">
              <input type="radio" name="sort" id="option-dictionary" />
              <label for="option-dictionary">제목 가나다 순</label>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
}

export default App;
