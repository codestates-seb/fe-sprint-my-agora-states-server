import styled from 'styled-components';
import PrevButtons from './PrevButtons.jsx';
import PageButton from './PageButton.jsx';
import NextButtons from './NextButtons.jsx';
import { calculatePageValue } from '../../../utils/functions/calculatePageValue.js';

function Pagination({ currentPage, totalPage, setCurrentPage }) {
  const { firstPage, lastPage, pageCount } = calculatePageValue(
    currentPage,
    totalPage
  );

  return (
    <ButtonWrapper>
      {firstPage - 1 > 0 && <PrevButtons setCurrentPage={setCurrentPage} />}
      {Array.from({ length: pageCount }).map((_, index) => {
        const pageNumber = firstPage + index;

        return (
          <PageButton
            pageNumber={pageNumber}
            key={pageNumber}
            setCurrentPage={setCurrentPage}
          />
        );
      })}
      {totalPage > lastPage && (
        <NextButtons totalPage={totalPage} setCurrentPage={setCurrentPage} />
      )}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin: 2.5rem 0 2.5rem;
`;

export default Pagination;
