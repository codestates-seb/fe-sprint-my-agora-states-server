import { useEffect, useState } from 'react';
import Form from './component/Form';
import Discussions from './component/Discussions';
import Pages from './component/Pages';
import { getDiscussions } from '../api/discussionsApi';
import './App.css';

function App() {
  // states
  const [discussionList, setDiscussionList] = useState([]);
  const [listChange, setListChange] = useState('');

  // useEffect
  useEffect(() => {
    getDiscussions().then((result) => {
      return setDiscussionList(result);
    });
  }, [listChange]);

  // 목록 업데이트 시켜주는 함수 실행
  const submit = (obj) => {
    fetch('http://localhost:4000/discussions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    }).then((res) => {
      return setListChange(res);
    });
  };

  return (
    <main>
      <h1>🌜Agora States🌛</h1>
      <Form onSubmit={submit} />
      <section className='discussion__wrapper'>
        <ul className='discussions__container'>
          <Discussions list={discussionList} />
        </ul>
      </section>
      <Pages />
    </main>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo' />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className='App-link'
//           href='https://reactjs.org'
//           target='_blank'
//           rel='noopener noreferrer'
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
