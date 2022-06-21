import React from "react";

const Discussion = ({ list, deleteDiscussion }) => {
  console.log("list", list);
  const { id, url, author, avatarUrl, title, createdAt, answer } = list;
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
          {author} / {createdAt}
        </div>
      </div>
      <div className="discussion__answered">
        <p className="check">☒</p>
        <p onClick={() => deleteDiscussion(id)} className="delete">
          🗑
        </p>
      </div>
    </li>
  );
};

export default Discussion;
