import { useState, useEffect } from 'react';
import { Discussion } from "../Discussion/Discussion";
import './Discussions.css';

export const Discussions = () => {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/discussions')
    .then(response => response.json())
    .then(data => setDiscussions(data));
  }, []);

  return (
    <div className='discussions-container'>
      <div className='discussions_header'>
        <div className='discussions_avatar'>아바타</div>
        <div className='discussions_title'>제목</div>
        <div className='discussions_author'>작성자</div>
        <div className='discussions_date'>작성일</div>
        <div className='discussions_answer'>답변</div>
      </div>
      {
        discussions.map(discussion => (
          <Discussion
            key={discussion.id}
            id={discussion.id}
            avatar={discussion.avatarUrl}
            title={discussion.title}
            author={discussion.author}
            createdAt={discussion.createdAt}
            answer={discussion.answer} />
        ))
      }
    </div>
  );
};
