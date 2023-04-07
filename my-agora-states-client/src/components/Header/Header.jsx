import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.hd}>
      <h2>대충 만드는 나만의 아고라 스테이츠!</h2>
      <form>
        <div>
          <label htmlFor="name">이름</label>
          <input type="text" id="name" required></input>
        </div>
        <div>
          <label htmlFor="title">제목</label>
          <input type="text" id="title" required></input>
        </div>
        <div>
          <label htmlFor="story">내용</label>
          <textarea id="story" placeholder="story" required></textarea>
        </div>
        <div>
          <button type="submit">작성하기</button>
        </div>
      </form>
    </header>
  );
};

export default Header;
