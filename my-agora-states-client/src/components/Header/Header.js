import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo--container">
        <img
          className="header__logo--image"
          src={require('../../img/codestates-logo.png')}
          alt="codestates logo"
        />
      </div>
      <div className="header__nav">
        <div className="nav__urclass">
          <a href="https://urclass.codestates.com/">유어클래스</a>
        </div>
        <div className="nav__help">
          <a href="https://help-urclass-codestates.zendesk.com/hc/ko">헬프 센터</a>
        </div>
      </div>
      <div className="header__guest--info">
        <span>guest</span>
        <img src={require('../../img/user.png')} alt="default avatar" />
      </div>
    </header>
  );
};

export default Header;
