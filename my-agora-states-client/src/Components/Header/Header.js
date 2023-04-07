const Header = () => {
  return (
    <header id="header">
      <div className="header__wrapper">
        <div className="header__container">
          <img src="../../assets/imgs/logo.png" />
          <div className="header__user">
            <h2 className="header__user--id">라이언 하르트</h2>
            <img src="../../assets/imgs/ryan.jpg" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
