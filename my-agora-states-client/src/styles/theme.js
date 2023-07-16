import { css } from 'styled-components';

const light = {
  body: css`
    background: linear-gradient(180deg, #e9efff 0%, #efebff 100%);
  `,
  pageTitle: css`
    background-image: linear-gradient(
      288.24deg,
      #728cf0 14.12%,
      #9176ff 82.73%
    );
  `,
  formContainer: css`
    background: #9ab6fb;
    background: linear-gradient(99.66deg, #9ab6fb 11.33%, #af9df7 90.25%);
    box-shadow: 0px 0.25rem 0.5rem rgba(90, 72, 129, 0.5);
  `,
  submitInput: css`
    background: linear-gradient(288.24deg, #728cf0 14.12%, #9176ff 82.73%);
    box-shadow: 0px 0.25rem 0.5rem rgba(90, 72, 129, 0.5);
  `,
  filter: {
    all: css`
      background: #9ab6fb;
      background: linear-gradient(99.66deg, #9ab6fb 11.33%, #af9df7 90.25%);
      box-shadow: 0px 0.25rem 0.25rem rgba(124, 98, 180, 0.2);
    `,
    unchecked: css`
      background: #ffa3b3;
      background: linear-gradient(99.66deg, #ffa3b3 11.33%, #fabf8f 90.25%);
      box-shadow: 0px 0.25rem 0.25rem rgba(161, 96, 53, 0.2);
    `,
    checked: css`
      background: #98dba1;
      background: linear-gradient(99.66deg, #98dba1 11.33%, #97cae2 90.25%);
      box-shadow: 0px 0.25rem 0.25rem rgba(83, 126, 83, 0.2);
    `,
  },
  discussionContainer: css`
    background: linear-gradient(288.24deg, #cad5ff 14.12%, #e0d8ff 82.73%);
    box-shadow: 0px 0.25rem 0.5rem rgba(128, 112, 161, 0.3);
  `,
  discussionLink: css`
    color: rgb(58, 58, 58);
  `,
  discussionInfo: css`
    color: rgb(78, 78, 78);
  `,
  pageButton: css`
    color: rgb(39, 39, 39);
  `,
  prevNextButton: css`
    color: #607df1;
  `,
  firstLastButton: css`
    color: #8a6dff;
  `,
  colorModeButton: css`
    left: 0.3125rem;
  `,
  alert: css`
    background: linear-gradient(288.24deg, #4f72ff 14.12%, #7451ff 82.73%);
    box-shadow: 0px 0.25rem 0.5rem rgba(128, 112, 161, 0.5);
  `,
};

const dark = {
  body: css`
    background: linear-gradient(180deg, #170e33 0%, #0c1836 100%);
  `,
  pageTitle: css`
    background-image: linear-gradient(
      288.24deg,
      #99adff 14.12%,
      #a791ff 82.73%
    );
  `,
  formContainer: css`
    background: #5f7cc7;
    background: linear-gradient(99.66deg, #5f7cc7 11.33%, #7362b9 90.25%);
    box-shadow: 0px 0.25rem 0.5rem rgba(157, 132, 211, 0.5);
  `,
  submitInput: css`
    background: linear-gradient(288.24deg, #7d90d8 14.12%, #9c8cdf 82.73%);
    box-shadow: 0px 0.25rem 0.5rem rgba(174, 143, 240, 0.3);
  `,
  filter: {
    all: css`
      background: #5f7cc7;
      background: linear-gradient(99.66deg, #5f7cc7 11.33%, #7362b9 90.25%);
      box-shadow: 0px 0.25rem 0.5rem rgba(173, 134, 252, 0.3);
    `,
    unchecked: css`
      background: #ffa3b3;
      background: linear-gradient(99.66deg, #d66e7f 11.33%, #e79b5d 90.25%);
      box-shadow: 0px 0.25rem 0.25rem rgba(255, 210, 179, 0.3);
    `,
    checked: css`
      background: #98dba1;
      background: linear-gradient(99.66deg, #5eb86a 11.33%, #609fbd 90.25%);
      box-shadow: 0px 0.25rem 0.25rem rgba(153, 241, 153, 0.3);
    `,
  },
  discussionContainer: css`
    background: linear-gradient(288.24deg, #4b5fb1 14.12%, #634cbe 82.73%);
    box-shadow: 0px 0.25rem 0.5rem rgba(173, 134, 252, 0.3);
  `,
  discussionLink: css`
    color: rgb(241, 241, 241);
  `,
  discussionInfo: css`
    color: rgb(212, 212, 212);
  `,
  pageButton: css`
    color: #f3f3f3;
  `,
  prevNextButton: css`
    color: #9eaff1;
  `,
  firstLastButton: css`
    color: #ae9cf5;
  `,
  colorModeButton: css`
    left: 2.5625rem;
  `,
  alert: css`
    background: linear-gradient(288.24deg, #738ef8 14.12%, #9075fc 82.73%);
    box-shadow: 0px 0.25rem 0.5rem rgba(198, 180, 235, 0.3);
  `,
};

export { light, dark };
