import React, { useEffect, useState } from "react";
import "./List.scss";

const List = () => {
  const [Discussions, setDiscussions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/discussions")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setDiscussions(json);
      });
  }, []);

  return (
    <>
      <div className="listContainer">
        <h2>Check The Answer</h2>
        <div className="discussions">
          {Discussions.map((discus, id) => {
            return (
              <div className={id % 2 === 0 ? "discussion left" : "discussion right"} key={id}>
                <div className="img">
                  <img src={discus.avatarUrl} />
                  <p className="user">{discus.author}</p>
                </div>
                <div className="contentBox">
                  <p className="content">{discus.title}</p>
                  <a href={discus.url ? discus.url : ""} target="_blank">
                    질문 자세히 보기
                  </a>
                  <p className="date">{new Date(discus.createdAt).toLocaleDateString("ko-kr")}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default List;
