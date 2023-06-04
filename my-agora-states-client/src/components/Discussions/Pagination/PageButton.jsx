import styled from 'styled-components';

function PageButton({ pageNumber, setCurrentPage }) {
  const handleClick = (e) => setCurrentPage(+e.target.textContent);

  return (
    <li>
      <Button type="button" data-move="toPage" onClick={handleClick}>
        {pageNumber}
      </Button>
    </li>
  );
}

const Button = styled.button`
  padding: 0.375rem 0.6875rem;
  font-size: 1rem;
  font-weight: 300;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  ${({ theme }) => theme.pageButton};

  :hover {
    background-image: linear-gradient(
      288.24deg,
      #728cf0 14.12%,
      #9176ff 82.73%
    );
    color: #ffffff;
  }
`;

export default PageButton;
