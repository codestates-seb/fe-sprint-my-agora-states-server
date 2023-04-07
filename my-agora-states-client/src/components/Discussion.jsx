import React from 'react';
import { dateConverter } from '../functions';

function Discussion({ discussion, onDelete }) {
  const { id, author, title, url, avatarUrl, createdAt, bodyHTML } = discussion;
  return (
    <li className='discussion__container'>
      <div className='discussion__content'>
        <div className='discussion__title'>
          <h2>
            <a href={url}>{title}</a>
          </h2>
          {/* <span className={`discussion__answered ${answer ? 'done' : ''}`}>
            {answer ? '✅ 답변 완료' : '🆘 진행중'}
          </span> */}
          <div className='edit-section'>
            <span onClick={() => onDelete(id)}>🗑️</span>
          </div>
        </div>
        <div className='discussion__avatar--wrapper'>
          <img className='discussion__avatar--image' src={avatarUrl} alt={`avatar of ${author}`} />
          <div className='discussion__information'>
            <span>{author}</span>
            <span>{dateConverter(createdAt)}</span>
          </div>
        </div>
        {id < 0 && <div className='discussion__detail'>{bodyHTML}</div>}
      </div>
    </li>
  );
}

export default Discussion;
