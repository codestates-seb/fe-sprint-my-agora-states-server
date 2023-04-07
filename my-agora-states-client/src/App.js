import logo from './codestates-logo.png';
import './App.css';
import { useState, useEffect } from 'react';
import Discussions from './components/discussions';
import Modal from './components/modal';
import AddDiscussion from './components/adddiscussion';

const Header = function () {
  return (
    <header>
      <div className="img_container">
        <a href="https://www.codestates.com/"><img src={logo} id="codestates_logo" /></a>
      </div>
      <div className="menu_container">
        <a href="https://urclass.codestates.com/">유어클래스</a>
        <a href="https://urclass.codestates.com/mypage/">마이페이지</a>
      </div>
    </header>
  )
}


function App() {
  const [isModalOn, setModal] = useState(false)
  const [discussionData, setData] = useState([])

  const modalHandler = function (modalState) {
    setModal(modalState)
  }
  useEffect(() => {
    fetch("http://localhost:4000/discussions/")
      .then(response => response.json())
      .then(json => {
        setData(json)
      })
  }, [])

  const addDiscussion = function (newDiscussion) {
    setData([newDiscussion, ...discussionData])
  }

  return (
    <main>
      <Header />
      <AddDiscussion handler={modalHandler} />
      {(isModalOn) ? <Modal handler={modalHandler} discussionHandler={addDiscussion}/> : null}
      <Discussions discussion={discussionData}/>
    </main>
  )
}

export default App;
