import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeProvider.jsx';

function ColorMode() {
  const { theme, onChangeTheme } = useContext(ThemeContext);

  return (
    <ButtonWrapper onClick={onChangeTheme}>
      <SwitchButton type="button" colorTheme={theme} />
      <IconWrapper>
        <Icon>
          <i className="far fa-sun fa-lg"></i>
        </Icon>
        <Icon>
          <i className="far fa-moon fa-lg"></i>
        </Icon>
      </IconWrapper>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  width: 4.5rem;
  height: 2.25rem;
  cursor: pointer;
`;

const SwitchButton = styled.button`
  position: absolute;
  top: 0.3125rem;
  width: 1.625rem;
  height: 1.625rem;
  background-color: #fff;
  border-radius: 100%;
  transition: left calc(var(--transition-duration) * 1s);
  ${({ theme }) => theme.colorModeButton};
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 2.25rem;
  background: linear-gradient(288.24deg, #738ef8 14.12%, #9075fc 82.73%);
  border-radius: 1.5625rem;
  box-shadow: 0.125rem 0.125rem 0.3125rem 0 rgba(50, 50, 50, 0.4);
`;

const Icon = styled.div`
  width: 1.4rem;
  height: 1.375rem;
  text-align: center;
  color: #fff;
`;

export default ColorMode;
