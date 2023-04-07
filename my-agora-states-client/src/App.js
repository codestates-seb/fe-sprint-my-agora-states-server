import { BrowserRouter } from 'react-router-dom';

import AgoraStatesHeader from './components/AgoraStatesHeader';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <>
        <AgoraStatesHeader />
        <Main />
        <Footer />
      </>
    </BrowserRouter>
  );
}
