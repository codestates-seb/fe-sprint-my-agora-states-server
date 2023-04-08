import React from "react";
import styles from "./Header.module.css";
import Form from "./Form";

const Header = ({ page, limit, updateDiscussion, updatePage }) => {
  return (
    <header className={styles.hd}>
      <h2>대충 만드는 나만의 아고라 스테이츠!</h2>
      <Form
        page={page}
        limit={limit}
        updateDiscussion={updateDiscussion}
        updatePage={updatePage}
      />
    </header>
  );
};

export default Header;
