import React from 'react';
import styles from './Discussion.module.css';
import Avartar from './Avartar';
import Content from './Content';
/**
 *
 * @param {id} string
 * @param {createdAt} string
 * @param {title} string
 * @param {url} string
 * @param {author} string
 * @param {avatarUrl} string
 * @param {answer} object
 * @return ReactElement
 */

const Discussion = (props) => {
  const { id, createdAt, title, url, author, avatarUrl, answer } = props.ele;
  return (
    <li key={id} className={styles.discussion}>
      {/* avartar */}
      <Avartar avatarUrl={avatarUrl} />
      {/* content */}
      <Content url={url} title={title} author={author} createdAt={createdAt} />
      {/* answer */}
      <div>{answer ? '답변완료' : '미답변'}</div>
    </li>
  );
};

export default Discussion;
