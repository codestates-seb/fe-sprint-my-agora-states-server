import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Discussions from './components/Discussions/Discussions';

function App() {
  return (
    <>
      {/* header */}
      <Header />
      {/* contents */}
      <Discussions />
    </>
  );
}

export default App;
