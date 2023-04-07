import React from "react";
import Parser from "html-react-parser";

const Discussion = ({ discussion }) => {
  return (
    <li className="discussion" id={discussion.id}>
      <div className="discussion__profile">
        <img src={discussion.avatarUrl} alt="img" />
      </div>
      <div className="discussion__content">
        <div className="discussion__userInfo">
          <div className="discussion__userInfo--wrapper">
            <span className="discussion__author">{discussion.author}</span>
            <span className="discussion__createdAt">
              {discussion.createdAt}
            </span>
          </div>
        </div>
        <div className="discussion__title">{discussion.title}</div>
        <details>
          <summary>내용 보기</summary>
          <div className="discussion__content">
            {Parser(discussion.bodyHTML)}
          </div>
        </details>
      </div>
    </li>
  );
};

export default Discussion;
