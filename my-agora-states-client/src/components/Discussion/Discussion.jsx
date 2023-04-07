import React from 'react';
import styles from './Discussion.module.css';
import Avartar from './Avartar';
import Content from './Content';
import { FaTrashAlt } from 'react-icons/fa';
import { deleteDiscussion } from '../../api/DiscussionsData';

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

  const handleDelete = () => {
    deleteDiscussion(id).then((data) => props.updateDiscussion(data));
  };

  return (
    <li key={id} className={styles.discussion}>
      {/* avartar */}
      <Avartar avatarUrl={avatarUrl} />
      {/* content */}
      <Content url={url} title={title} author={author} createdAt={createdAt} />
      {/* answer */}
      <div className={styles.answer}>{answer ? '답변완료' : '미답변'}</div>
      <button onClick={handleDelete} className={styles.delete}>
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default Discussion;
