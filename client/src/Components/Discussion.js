import React from "react";
import '../Stylesheets/Discussion.scss';

export default function Discussion({ content }) {

  return (
    <li className="discussion-wrapper">
        <div className="card discussion me-0 p-0">
          <div className="discussion-avatar-container px-2">
            <img alt="avatar" src={content.avatarUrl} className="discussion-avatar"></img>
          </div>

          <div className="card-body discussion-content p-0 bg-dark">
            <h2 className=" card-title discussion-title-container px-3">
              <a alt='link' href={content.url} className="discussion-title text-white">{content.title}</a>
              <div className="discussion-information text-muted">{content.createdAt}</div>
            </h2>
          </div>

          <div className="discussion-checker"></div>
        </div>
    </li>
  );
}
