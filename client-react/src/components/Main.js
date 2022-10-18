import React from "react";
import { useState } from "react";

import Discussions from "./Discussions";
import Landing from "./Landing";

const Main = () => {
  const [discussionsData, setDiscussionsData] = useState([]);

  return (
    <main>
      <Landing />
      <aside className="blank"></aside>
      <div className="discussions-num">{`Discussions(${discussionsData.length})`}</div>
      <aside className="blank"></aside>
      <aside className="blank"></aside>
      <section className="discussion__wrapper">
        <ul className="discussions__container">
          <Discussions
            discussionsData={discussionsData}
            setDiscussionsData={setDiscussionsData}
          />
        </ul>
      </section>
      <aside className="blank"></aside>
    </main>
  );
};

export default Main;
