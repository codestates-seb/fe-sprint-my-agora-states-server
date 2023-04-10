import React from 'react';

import './NoItem.css';

const NoItem = () => {
  return (
    <div className="nothing-image--wrapper">
      <img src={require('../../img/nothing.jpg')} alt="nothing" />
      <p>조건에 해당하는 항목이 없어요!</p>
    </div>
  );
};

export default NoItem;
