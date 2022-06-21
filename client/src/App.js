import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main linkPath={'/'} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
