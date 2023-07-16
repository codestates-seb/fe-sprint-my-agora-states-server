import { css } from 'styled-components';

export const inputMixin = css`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;

  ::placeholder {
    font-size: 0.75rem;
    color: rgb(165, 165, 165);
  }
`;

export const moveButtonMixin = css`
  width: 2rem;
  height: 2rem;
  margin-top: -0.125rem;
  font-size: 0.75rem;
  cursor: pointer;
`;
