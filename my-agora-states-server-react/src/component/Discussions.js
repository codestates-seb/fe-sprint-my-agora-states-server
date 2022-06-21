// import React from "react";
import Discussion from "./Discussion";

const Discussions = ({ data, deleteDiscussion }) => {
  return (
    <section className="discussion__wrapper">
      <ul className="discussions__container">
        {data.map((list) => (
          <Discussion
            key={list.id}
            list={list}
            deleteDiscussion={deleteDiscussion}
          />
        ))}
      </ul>
    </section>
  );
};

export default Discussions;
