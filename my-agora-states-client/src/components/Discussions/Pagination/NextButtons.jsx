import styled from 'styled-components';
import { moveButtonMixin } from 'styles/mixin.js';

function NextButtons({ setCurrentPage, totalPage }) {
  const handleClickNext = (e) => {
    const nextValue =
      +e.target.parentElement.previousElementSibling.firstElementChild
        .textContent + 1;
    setCurrentPage(nextValue);
  };

  const handleClickLast = () => setCurrentPage(totalPage);

  return (
    <>
      <li>
        <NextButton type="button" onClick={handleClickNext}>
          &gt;
        </NextButton>
      </li>
      <li>
        <LastButton type="button" onClick={handleClickLast}>
          &gt;&gt;
        </LastButton>
      </li>
    </>
  );
}

const NextButton = styled.button`
  ${moveButtonMixin};
  margin-left: 0.5rem;
  ${({ theme }) => theme.prevNextButton};
`;

const LastButton = styled.button`
  ${moveButtonMixin};
  margin-left: -0.25rem;
  ${({ theme }) => theme.firstLastButton};
`;

export default NextButtons;
