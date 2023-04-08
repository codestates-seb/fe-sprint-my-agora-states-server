import React from 'react';
import Discussion from '../Discussion/Discussion';
import styles from './Discussions.module.css';

const Discussions = ({ discussions, updateDiscussion }) => {
  return (
    <div className={styles.wrapper}>
      <ul>
        {discussions.map((ele) =>
          ele ? (
            <Discussion
              key={ele.id}
              ele={ele}
              updateDiscussion={updateDiscussion}
            />
          ) : null
        )}
      </ul>
    </div>
  );
};

export default Discussions;
