import React from 'react';
import styles from './AgoraStatesItem.module.css';

const AgoraStatesItem = ({item}) => {
    return (
        <section className={styles.item}>
            <a href={item.url}>
                <h3>{item.title}</h3>
            </a>
            <div>{item.author}</div>
            <div>{item.createdAt}</div>
            <hr></hr>
        </section>
    );
};

export default AgoraStatesItem;