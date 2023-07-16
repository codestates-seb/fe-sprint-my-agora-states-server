import styled from 'styled-components';

function FilterButton({ info, setCurrentFilter }) {
  const handleClick = (e) => {
    const targetFilter = e.target.dataset.filter;

    setCurrentFilter(targetFilter);
  };

  const { data, text } = info;

  return (
    <Button data-filter={data} styletype={data} onClick={handleClick}>
      {text}
    </Button>
  );
}

const Button = styled.li`
  font-size: 1rem;
  font-weight: 600;
  padding: 0.625rem 1rem;
  border-radius: 1.3rem;
  color: #ffffff;
  transition: transform 0.2s;
  cursor: pointer;
  ${({ styletype, theme }) => theme.filter[styletype]};

  :hover {
    transform: scale(1.08);
  }
`;

export default FilterButton;
