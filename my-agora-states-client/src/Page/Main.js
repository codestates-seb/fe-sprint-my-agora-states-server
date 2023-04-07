import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header/Header';
import Contents from '../Components/Contents/Contents';
import Aside from '../Components/Aside/Aside';

const Main = () => {
  const [discussions, setDiscussions] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:4000/discussions')
      .then((res) => setDiscussions(res.data));
  }, []);

  const handleCreateDiscussion = (newDiscussion) => {
    setDiscussions([newDiscussion, ...discussions]);
  };

  const handleDeleteDiscussion = (postId) => {
    const discussionIndex = discussions.findIndex(
      (discussion) => discussion.id === postId
    );
    if (discussionIndex !== -1) {
      const discussionsCopy = [...discussions];
      discussionsCopy.splice(discussionIndex, 1);
      setDiscussions(discussionsCopy);
    }
  };

  return (
    <div id="body__container">
      <Header />
      <main>
        <div className="main__container">
          <Contents
            discussions={discussions}
            handleDeleteDiscussion={handleDeleteDiscussion}
          />
          <Aside handleCreateDiscussion={handleCreateDiscussion} />
        </div>
      </main>
    </div>
  );
};

export default Main;
