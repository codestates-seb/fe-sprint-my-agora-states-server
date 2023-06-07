import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DiscussionDetail.css";

const DiscussionDetail = () => {
  const { id } = useParams();
  const [discussion, setDiscussion] = useState(null);

  useEffect(() => {
    const fetchDiscussion = async () => {
      try {
        const response = await fetch(`http://localhost:4000/discussions/${id}`);
        const data = await response.json();
        setDiscussion(data);
      } catch (error) {
        console.error("Error fetching discussion:", error);
      }
    };

    fetchDiscussion();
  }, [id]);

  if (!discussion) {
    return <div>Loading...</div>;
  }

  const { title, author, avatarUrl } = discussion;

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <img src={avatarUrl} alt={`avatar of ${author}`} />
        <span>Author: {author}</span>
      </div>
      {/* 디스커션에 대한 상세 정보를 표시합니다. */}
    </div>
  );
};

export default DiscussionDetail;
