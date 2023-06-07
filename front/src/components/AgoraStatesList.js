import React from 'react';
import AgoraStatesItem from '../components/AgoraStatesItem';
import styles from './AgoraStatesList.module.css'

const AgoraStatesList = ({agorastatesDatas}) => {
    return (
        <div className={styles.list}>
            {
                agorastatesDatas!==undefined
                ? agorastatesDatas.map((e,idx)=>{
                    return <AgoraStatesItem key={idx} item={e}/>
                })
                :null
            }
        </div>
    );
};

export default AgoraStatesList;