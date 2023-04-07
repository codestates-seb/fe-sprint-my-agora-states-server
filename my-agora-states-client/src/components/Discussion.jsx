import React, { useState } from 'react';
import { dateConverter } from '../functions';
import useInput from '../hooks/useInput';

function Discussion({ discussion, onDelete, onUpdate }) {
  const [editMode, setEditMode] = useState(false);
  const { id, author, title, url, avatarUrl, createdAt, bodyHTML } = discussion;

  const [newTitle, newTitleHandler] = useInput(title);
  const [newAuthor, newAuthorHandler] = useInput(author);

  const update = () => {
    const data = {
      ...discussion,
      title: newTitle,
      author: newAuthor,
    };
    onUpdate(id, data);
    setEditMode(false);
  };

  return (
    <li className='discussion__container'>
      <div className='discussion__content'>
        <div className='discussion__title'>
          <h2>
            {editMode ? (
              <input value={newTitle} onChange={newTitleHandler} />
            ) : (
              <a href={url}>{title}</a>
            )}
          </h2>
          {/* <span className={`discussion__answered ${answer ? 'done' : ''}`}>
            {answer ? '✅ 답변 완료' : '🆘 진행중'}
          </span> */}
          <div className='edit-section'>
            {editMode ? (
              <span onClick={update}>✅</span>
            ) : (
              <span onClick={() => setEditMode(true)}>✍️</span>
            )}
            <span onClick={() => onDelete(id)}>🗑️</span>
          </div>
        </div>
        <div className='discussion__avatar--wrapper'>
          <img className='discussion__avatar--image' src={avatarUrl} alt={`avatar of ${author}`} />
          <div className='discussion__information'>
            {editMode ? (
              <input value={newAuthor} onChange={newAuthorHandler} />
            ) : (
              <span>{author}</span>
            )}
            <span>{dateConverter(createdAt)}</span>
          </div>
        </div>
        {id < 0 && <div className='discussion__detail'>{bodyHTML}</div>}
      </div>
    </li>
  );
}

export default Discussion;
