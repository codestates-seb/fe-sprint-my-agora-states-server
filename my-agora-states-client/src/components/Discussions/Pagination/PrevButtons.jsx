import styled from 'styled-components';
import { moveButtonMixin } from 'styles/mixin.js';

function PrevButtons({ setCurrentPage }) {
  const handleClickFirst = () => setCurrentPage(1);
  const handleClickPrev = (e) => {
    const prevValue =
      +e.target.parentElement.nextElementSibling.firstElementChild.textContent -
      1;
    setCurrentPage(prevValue);
  };

  return (
    <>
      <li>
        <FirstButton type="button" onClick={handleClickFirst}>
          &lt;&lt;
        </FirstButton>
      </li>
      <li>
        <PrevButton type="button" onClick={handleClickPrev}>
          &lt;
        </PrevButton>
      </li>
    </>
  );
}

const FirstButton = styled.button`
  ${moveButtonMixin};
  margin-right: -0.25rem;
  ${({ theme }) => theme.firstLastButton};
`;

const PrevButton = styled.button`
  ${moveButtonMixin};
  margin-right: 0.5rem;
  ${({ theme }) => theme.prevNextButton};
`;

export default PrevButtons;
