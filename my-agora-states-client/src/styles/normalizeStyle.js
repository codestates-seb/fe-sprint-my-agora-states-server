import { createGlobalStyle } from 'styled-components';

const NormalizeStyle = createGlobalStyle/*css*/ `
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  textarea {
    width: 0;
  }

  input,
  button {
    border: none;
  }

  button {
    background: transparent;
  }
`;

export default NormalizeStyle;
