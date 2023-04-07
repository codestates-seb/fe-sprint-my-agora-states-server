import React from 'react';
import styles from './Avartar.module.css';

const Avartar = ({ avatarUrl }) => {
  return (
    <div className="wrapper">
      <img className={styles.avartar} src={avatarUrl} alt="aratar" />
    </div>
  );
};

export default Avartar;
