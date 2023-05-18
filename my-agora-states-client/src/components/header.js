const Header = () => {
  return (
    <header>
      <h1>My Agora States</h1>
      <div className="header__search">
        <input className="input-search" type="text" placeholder="글 id" />
        <button className="btn-search">검색</button>
      </div>
      <div className="header__avatar">
        <div className="avatar-block">
          <input
            type="button"
            className="btn"
            id="btn-open-form"
            defaultValue="글쓰기"
          />
          <img id="myAvatar" src="" alt="no" />
        </div>
        <div className="avatar-select-menu hide">
          <ul className="avatar-select-menu__list">
            <li className="avatar-select-menu__preset" />
            <li className="avatar-select-menu__load">
              <div className="setting-buttons">
                <input
                  type="button"
                  className="btn-clear-avatar btn-setting"
                  defaultValue="아바타 초기화"
                />
                <input
                  type="button"
                  className="btn-clear-local btn-setting"
                  defaultValue="로컬 저장소 초기화"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
