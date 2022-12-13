import React from "react";
import "../App.css";

import Discussion from "./Discussion";

const Discussions = ({ disList }) => {
  return (
    <section className="discussion__wrapper">
      <ul className="discussions__container">
        {disList.map(
          ({ id, createdAt, title, url, author, answer, avatarUrl }) => {
            return (
              <Discussion
                key={id}
                createdAt={createdAt}
                title={title}
                url={url}
                author={author}
                answer={answer}
                avatarUrl={avatarUrl}
              />
            );
          }
        )}
      </ul>
    </section>
  );
};

export default Discussions;
