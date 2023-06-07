import React from "react";
import { Link } from "react-router-dom";
import "./Discussion.css";

const Discussion = ({ discussion }) => {
  const { id, url, title, avatarUrl, author, createdAt, answer } = discussion;

  return (
    <Link to={`/discussions/${id}`} className="discussion__link">
      <li className="discussion__container">
        <div className="discussion__content">
          <div className="discussion__avatar--wrapper">
            {avatarUrl && <img src={avatarUrl} alt={`avatar of ${author}`} />}
          </div>
          <h3>{title}</h3>
          <div>
            {author
              ? `${author} / ${new Date(createdAt).toLocaleTimeString()}`
              : "Unknown Author"}
          </div>
        </div>
        <div className="discussion__answered">
          <p>{answer ? "🔘" : "⚪️"}</p>
        </div>
      </li>
    </Link>
  );
};

export default Discussion;
