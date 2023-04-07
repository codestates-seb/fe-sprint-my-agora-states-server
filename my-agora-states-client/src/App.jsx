import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Discussions from './components/Discussions/Discussions';
import { getDiscussions, getDiscussions10 } from './api/DiscussionsData';

function App() {
  const [discussions, setDiscussions] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const limit = 10;

  useEffect(() => {
    getDiscussions().then((data) => setTotal(Math.ceil(data.length / limit)));
    getDiscussions10(page, limit).then((data) => setDiscussions(data));
    return;
  }, [page]);

  const handlePrev = () => {
    const current = page - 1 < 0 ? 0 : page - 1;

    setPage(current);
  };
  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <>
      {/* header */}
      <Header updateDiscussion={setDiscussions} />
      {/* contents */}
      <Discussions
        discussions={discussions}
        updateDiscussion={setDiscussions}
      />
      {/* pagination */}
      <div>
        <button onClick={handlePrev}>{'<'}</button>
        {`${page + 1}/ ${total}`}
        <button onClick={handleNext}>{'>'}</button>
      </div>
    </>
  );
}

export default App;
