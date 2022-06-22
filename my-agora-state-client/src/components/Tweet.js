import React from 'react';
import './Tweet.css';


function Tweet({ discussion, deleteDiscussion }) {

  const { id, url, author, avatarUrl, title, createdAt, answer } = discussion;

  const handleDelete = (event) => {
    event.preventDefault();
    console.log(id)
    deleteDiscussion(id)
  }

  const handleEdit = (event) => {
    event.preventDefault();
  }

  return (
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img
          className="discussion__avatar--image"
          src={avatarUrl}
          alt={`avatar of ${author}`}
        />
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href={url}>{title}</a>
        </h2>
        <div className="discussion__information">
        {`${author} / ${new Date(createdAt).toLocaleString('ko-KR').slice(-11)}`}</div>
        <div className='discussion__buttons'>
          <button className='discussion__buttons--edit' onClick={handleEdit}>수정</button>
          <button className='discussion__buttons--delete' onClick={handleDelete}>삭제</button>
        </div>
      </div>
      <div className="discussion__answered">
        <p id={id} onClick={deleteDiscussion}>{answer ? "☑" : "☒"}</p>
      </div>
    </li>
  );
}

export default Tweet;