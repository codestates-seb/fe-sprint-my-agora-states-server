import { useEffect, useState } from 'react';
import Form from './component/Form';
import Discussions from './component/Discussions';
import Pages from './component/Pages';
import { getDiscussions } from '../api/discussionsApi';
import './App.css';

function App() {
  // states
  const [discussionList, setDiscussionList] = useState([]);
  // useEffect
  useEffect(() => {
    getDiscussions().then((result) => {
      return setDiscussionList(result);
    });
  }, []);

  return (
    <main>
      <h1>🌜Agora States🌛</h1>
      <Form />
      <section class='discussion__wrapper'>
        <ul classname='discussions__container'>
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
