import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import { QuestionPage } from './Pages/QuestionPage/QuestionPage';
import { Header } from './Components/Header/Header';
import { Discussions } from './Components/Discussions/Discussions';
import { DiscussionPage } from './Pages/DiscussionPage/DiscussionPage';
import { NavagationButton } from './Components/NavigationButton/NavigationButton';

function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <Routes>
          <Route path="question" element={<QuestionPage />} />
          <Route path="/discussion/:id" element={<DiscussionPage />} />
          <Route path="/" element={<Discussions />} />
        </Routes>
        <NavagationButton />
      </Router>
    </div>
  );
}

export default App;
