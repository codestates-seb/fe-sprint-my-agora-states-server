import { useEffect, useState } from 'react';

import './App.css';
import NoItem from './components/NoItem/NoItem';
import DiscussionItem from './components/DiscussionItem/DiscussionItem';
import DiscussionForm from './components/DiscussionForm/DiscussionForm';

function App() {
  const [datas, setDatas] = useState([]);
  const [discussionForm, setDiscussionForm] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/discussions', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setSubmitted(false);
      });
  }, [submitted]);

  useEffect(() => {
    if (Object.keys(discussionForm).length !== 0) {
      fetch('http://localhost:4000/discussions', {
        method: 'POST',
        body: discussionForm,
      }).then((_) => {
        setSubmitted(true);
      });
    }
  }, [discussionForm]);

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

        <DiscussionForm setDiscussionForm={setDiscussionForm} />

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
