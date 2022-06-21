import React, { useEffect, useState } from "react";
import { getDiscussions } from "../api/discussions";

export default function Discussion() {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    (async () => {
      setDiscussions(await getDiscussions());
    })();
  }, []);
  return (
    <section className='discussion__wrapper'>
      <ul className='discussions__container'>
        {discussions.map((discussion, index) => (
          <li className='discussion__container' key={index}>
            <div className='discussion__avatar--wrapper'>
              <img className='discussion__avatar--image' src={discussion.avatarUrl} alt='avatar of kimploo' />
            </div>
            <div className='discussion__content'>
              <h2 className='discussion__title'>
                <a href={discussion.title}>{discussion.title}</a>
              </h2>
              <div className='discussion__information'>
                <p className='discussion__question__date'>{`${discussion.author} / ${discussion.createdAt}`}</p>
              </div>
            </div>
            <div className='discussion__answered'>
              <p>{discussion.answer == null ? "❎" : "✅"}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
