import React from 'react';
import styles from './Header.module.css';
import Form from './Form';

const Header = ({ updateDiscussion }) => {
  return (
    <header className={styles.hd}>
      <h2>대충 만드는 나만의 아고라 스테이츠!</h2>
      <Form updateDiscussion={updateDiscussion} />
    </header>
  );
};

export default Header;
