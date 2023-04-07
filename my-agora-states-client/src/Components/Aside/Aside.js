import React, { useState } from 'react';
import axios from 'axios';

const Aside = ({ handleCreateDiscussion }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onCreatePost = async () => {
    const data = {
      createdAt: new Date().toISOString(),
      updatedAt: '',
      title: title,
      url: 'https://github.com/eyo-25',
      author,
      answer: null,
      bodyHTML: `<p>${content}</p>`,
      avatarUrl:
        'https://file.megastudy.net/FileServer/file_att/event/2018/0330_pass/size_original/20180403202640.jpeg',
    };

    try {
      const response = await axios.post(
        'http://localhost:4000/discussions',
        data
      );
      handleCreateDiscussion(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <aside id="form">
      <form action="" method="get" className="form">
        <div className="form__header">
          <h2 className="form__header_text">질문하기</h2>
          <img src="./info_icon.png" />
        </div>
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <h4 className="form__input--nameTitle">QUESTIONER</h4>
            <input
              type="text"
              name="name"
              id="name"
              value={author}
              onChange={handleChangeAuthor}
              required
            />
          </div>
          <div className="form__input--title">
            <h4>QUESTION TITLE</h4>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={handleChangeTitle}
              required
            />
          </div>
          <div className="form__textbox">
            <h4 className="form__story--title">QUESTION CONTENT</h4>
            <textarea
              id="story"
              name="story"
              placeholder="내용을 작성하세요"
              value={content}
              onChange={handleChangeContent}
              required
            ></textarea>
          </div>
        </div>
        <div className="form__submit--wrapper">
          <button type="button" id="submitBtn" onClick={onCreatePost}>
            POST
          </button>
        </div>
      </form>
    </aside>
  );
};

export default Aside;
