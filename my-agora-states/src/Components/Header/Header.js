import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to='/'><h1>MY AGORA STATES</h1></Link>
      </div>
      <div>
        <Link to='/question'>질문하기</Link>
      </div>
    </div>
  );
};
