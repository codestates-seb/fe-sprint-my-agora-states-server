import logo from "./img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Agorastates-logo" />
      <a href="#">My Page</a>
      <a href="#">Ur Class</a>
      <a href="#">Code States</a>
    </header>
  );
};

export default Header;
