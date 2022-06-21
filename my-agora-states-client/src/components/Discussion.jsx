import React, { useEffect, useState } from "react";
import { findAll } from "../api/discussions";
import { useSearchParams } from "react-router-dom";

export default function Discussion() {
  const [discussions, setDiscussions] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      const page = searchParams.get("page") || 1;
      const { data, limit, count } = await findAll(page);
      setDiscussions(data);
      setPagination(Math.ceil(count / limit));
    })();
  }, [searchParams]);
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
                <p className='discussion__question__date'>{`${discussion.author} / 
                  ${new Date(`${discussion.createdAt}`).toLocaleString()}`}</p>
              </div>
            </div>
            <div className='discussion__answered'>
              <p>{discussion.answer == null ? "❎" : "✅"}</p>
            </div>
          </li>
        ))}
      </ul>
      {new Array(pagination).fill(0).map((el, index) => {
        return (
          <button
            onClick={(e) => {
              setSearchParams({ page: index + 1 });
            }}
            key={index}
          >
            {index + 1}
          </button>
        );
      })}
    </section>
  );
}

// 1. 버튼 그리기
//
// 2. findall 함수에 page 쿼리, limit 쿼리 추가하기
// 3. 숫자 버튼 누르면 누른 숫자의 쿼리 page로 라우터 적용하기
