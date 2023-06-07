import React, { useEffect, useState } from "react";
import { getDiscussion } from "../../api/discussions";

import "./Discussions.scss";

const Discussions = () => {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getDiscussion();
      const formattedDiscussions = res.map((discussion) => ({
        id: discussion.id,
        createdAt: discussion.createdAt,
        url: discussion.url,
        author: discussion.author,
        answer: discussion.bodyHTML,
        avatar: discussion.avatarUrl,
      }));
      setDiscussions(formattedDiscussions);
      console.log(res);
    })();
  }, []);

  return (
    <div id="Discussions">
      {discussions.map((cur, idx) => (
        <div className="discussions" key={`${cur.id}${idx}`}>
          <div className="discussion_avatar--wrapper">
            <img
              src={cur.avatar}
              alt={`avatar of ${cur.author}`}
              className="discussion_avatar--img"
            />
          </div>
          <div className="discussion_contents">
            <div className="discussion_title">
              <h2>
                <a href={cur.url}>{cur.title}</a>
              </h2>
            </div>
          </div>
          <div className="discussion_infomation">
            <div className="info">{`${cur.author} / ${cur.createdAt}`}</div>
          </div>
          <div className="discussion_answer">{cur.answer}</div>
        </div>
      ))}
    </div>
    // <div>app</div>
  );
};

export default Discussions;
