import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Discussion from "../Components/Discussion";

const Discussions = () => {
  const [discussions, setDiscussions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [discussionsPerPage] = useState(12);

  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const response = await fetch("http://localhost:4000/discussions/");
        const data = await response.json();
        setDiscussions(data);
      } catch (error) {
        console.error("Error fetching discussions:", error);
      }
    };

    fetchDiscussions();
  }, [discussions]);

  // 현재 페이지에 해당하는 디스커션들을 가져오는 함수
  const getCurrentDiscussions = () => {
    const indexOfLastDiscussion = currentPage * discussionsPerPage;
    const indexOfFirstDiscussion = indexOfLastDiscussion - discussionsPerPage;
    return discussions.slice(indexOfFirstDiscussion, indexOfLastDiscussion);
  };

  // 페이지 번호를 클릭했을 때 페이지 변경
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 페이지 번호 목록 생성
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(discussions.length / discussionsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    return (
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => handleClick(number)}>{number}</button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <ul className="discussions__container">
        {getCurrentDiscussions().map((discussion) => (
          <Link to={`/discussions/${discussion.id}`} key={discussion.id}>
            <Discussion discussion={discussion} />
          </Link>
        ))}
      </ul>
      {renderPageNumbers()}
    </div>
  );
};

export default Discussions;
