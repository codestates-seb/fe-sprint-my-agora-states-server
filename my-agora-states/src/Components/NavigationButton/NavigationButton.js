import { useNavigate } from 'react-router-dom';
import "./NavigationButton.css";

export const NavagationButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button className='navigation-button' onClick={() => navigate(-1)}>뒤로가기</button>
      <button className='navigation-button' onClick={() => navigate(1)}>앞으로가기</button>
    </div>
  );
};
