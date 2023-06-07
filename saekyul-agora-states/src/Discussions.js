import React, { useEffect, useState } from "react";

function Discussions() {
  const [discussions, setDiscussions] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/discussions");
      const data = await response.json();

      // 데이터 변환
      const transformedDiscussions = data.map((discussion) => ({
        createdAt: discussion.createdAt,
        title: discussion.title,
        url: discussion.url,
        answer: {
          id: discussion.answer ? discussion.answer.id : null,
          createdAt: discussion.answer ? discussion.answer.createdAt : null,
          bodyHTML: discussion.answer ? discussion.answer.bodyHTML : null,
          avatarUrl: discussion.answer ? discussion.answer.avatarUrl : null,
        },
      }));

      setDiscussions(transformedDiscussions);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {discussions.map((discussion) => (
        <div key={discussion.createdAt}>
          <h2>{discussion.title}</h2>
          <p>작성일: {discussion.createdAt}</p>
          <a href={discussion.url}>원문 보러 가기</a>
          {discussion.answer && (
            <div>
              <h3>답변</h3>
              <p>작성자: {discussion.answer.author}</p>
              <p>작성일: {discussion.answer.createdAt}</p>
              <img src={discussion.answer.avatarUrl} alt="작성자 아바타" />
              {discussion.answer.bodyHTML && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: discussion.answer.bodyHTML,
                  }}
                ></div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Discussions;
