import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle/*css*/ `
  :root {
    --transition-duration: 0.2;
  }

  * {
    font-family: 'Pretendard', 'san-serif';
    box-sizing: border-box;
  }

  body {
    position: relative;
    padding: 0;
    margin: 0;
    ${({ theme }) => theme.body};
  }

  form {
    display: flex;
    flex-flow: column wrap;
    gap: 1.4rem;
  }
  
  label {
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 300;
  }

  .hide {
    opacity: 0;
  }

  .far {
    font-size: 1rem;
    margin-top: 0.1375rem;
  }

  .moveAndHide {
    bottom: 5rem;
  }

  .srOnly {
    overflow: hidden;
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
  }

  @media (min-width: 481px) and (max-width: 640px) {
    html {
      font-size: 12px;
    }
  }
  
  @media (min-width: 401px) and (max-width: 480px) {
    html {
      font-size: 10px;
    }
  }
  
  @media (max-width: 400px) {
    html {
      font-size: 8px;
    }
  }
`;
