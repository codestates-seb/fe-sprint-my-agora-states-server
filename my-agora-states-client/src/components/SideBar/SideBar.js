import React from 'react';

import './SideBar.css';

const SideBar = () => {
  return (
    <aside className="side-bar__container">
      <div className="filter--container">
        <h5>Filter</h5>
        <div className="option--wrapper">
          <input type="checkbox" name="filter" id="option-solved" checked />
          <label for="option-solved">답변 완료</label>
        </div>
        <div className="option--wrapper">
          <input type="checkbox" name="filter" id="option-unsolved" checked />
          <label for="option-unsolved">답변 대기중</label>
        </div>
        <div className="option--wrapper">
          <input type="checkbox" name="filter" id="option-notice" checked />
          <label for="option-notice">공지</label>
        </div>
      </div>
      <div className="sort--container">
        <h5>Sort</h5>
        <div className="option--wrapper">
          <input type="radio" name="sort" id="option-recent" checked />
          <label for="option-recent">최근 등록 순</label>
        </div>
        <div className="option--wrapper">
          <input type="radio" name="sort" id="option-old" />
          <label for="option-old">오래된 등록 순</label>
        </div>
        <div className="option--wrapper">
          <input type="radio" name="sort" id="option-dictionary" />
          <label for="option-dictionary">제목 가나다 순</label>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
