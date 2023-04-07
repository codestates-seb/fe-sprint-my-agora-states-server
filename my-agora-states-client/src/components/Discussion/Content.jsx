import React from 'react';
import styles from './Content.module.css';

const Content = ({ url, title, author, createdAt }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        <a href={url}>{title}</a>
      </h2>
      <div className={styles.info}>{`${author} / ${createdAt}`}</div>
    </div>
  );
};

export default Content;
