import React from 'react';

import './DiscussionItem.css';

const DiscussionItem = ({ createdAt, title, url, author, answer, bodyHTML, avatarUrl }) => {
  let answered = '';
  let answeredClass = '';

  if (answer === null) {
    if (title.includes('notice')) {
      answered = '공지';
      answeredClass = 'notice';
    } else {
      answered = '답변 대기중';
      answeredClass = 'unsolved';
    }
  } else {
    answered = '답변 완료';
    answeredClass = 'solved';
  }

  return (
    <li className="discussion__container">
      <div className="discussion__information">
        <div className="discussion__avatar--wrapper">
          <img
            className="discussion__avatar--image"
            src={avatarUrl ? avatarUrl : require('../../img/user.png')}
            alt="avatar"
          />
        </div>
        <div className="discussion__author">{author}</div>
        <div className="discussion__created-time">{parseCreatedTime(createdAt)}</div>
      </div>
      <div className="discussion__content">
        <div className="discussion__content-information">
          <h2 className="discussion__title">
            <a href={url}>{title}</a>
          </h2>
          <div className={'discussion__answered '.concat(answeredClass)}>
            <p>{answered}</p>
          </div>
        </div>
      </div>
      <hr />
    </li>
  );
};

const parseCreatedTime = (time) => {
  return new Date(time).toLocaleString('ko-KR');
};

export default DiscussionItem;
