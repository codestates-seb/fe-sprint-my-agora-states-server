import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DiscussionPage.css";

export const DiscussionPage = (props) => {
  const [discussion, setDiscussion] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const url = 'http://localhost:4000/discussions/';
    fetch(url + id)
    .then(response => response.json())
    .then(data => setDiscussion(data));
  });

  function content() {
    return {__html: discussion.bodyHTML};
  }

  function answer() {
    return {__html: discussion.answer.bodyHTML};
  }

  return (
    <div className="discussion-page">
      <div className="discussion-page_author-container">
        <div className="discussion-page_label">작성자</div>
        <div className="discussion-page_content">{discussion.author}</div>
      </div>
      <div className="discussion-page_title-container">
        <div className="discussion-page_label">제목</div>
        <div className="discussion-page_content">{discussion.title}</div>
      </div>
      <div className="discussion-page_content-container">
        <div className="discussion-page_label">질문</div>
        <div className="discussion-page_content" dangerouslySetInnerHTML={content()} />;
      </div>
      <hr />
      {
        discussion.answer ? 
        <div className="discussion-page">
          <div>
            <div className="discussion-page_label">작성자</div>
            <div>{discussion.answer.author}</div>
          </div>
          <div className="discussion-page_content-container">
            <div className="discussion-page_label">답변</div>
            <div className="discussion-page_content" dangerouslySetInnerHTML={answer()} />;
          </div>
          <hr />
        </div>
      : null
      }

    </div>
  );
};
