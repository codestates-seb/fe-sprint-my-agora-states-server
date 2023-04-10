import { useEffect, useState } from 'react';

import './App.css';
import NoItem from './components/NoItem/NoItem';
import DiscussionItem from './components/DiscussionItem/DiscussionItem';
import DiscussionForm from './components/DiscussionForm/DiscussionForm';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';
import MainBanner from './components/MainBanner/MainBanner';

function App() {
  const [datas, setDatas] = useState([]);
  const [discussionForm, setDiscussionForm] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    if (discussionForm.title !== undefined) {
      fetch('http://localhost:4000/discussions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discussionForm),
      }).then((_) => {
        setSubmitted(true);
      });
    }
  }, [discussionForm]);

  const openClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />
      <hr />

      <main>
        <MainBanner openClickHandler={openClickHandler} />

        {isOpen ? (
          <DiscussionForm setIsOpen={setIsOpen} setDiscussionForm={setDiscussionForm} />
        ) : undefined}

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

        <SideBar />
      </main>
    </>
  );
}

export default App;
