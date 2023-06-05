import styled from 'styled-components';
import FilterButton from './FilterButton.jsx';
import FILTER_BUTTON_INFO from 'utils/contants/filterButtonInfo.js';

function Filters({ setCurrentFilter }) {
  return (
    <ButtonWrapper>
      {FILTER_BUTTON_INFO.map((info) => (
        <FilterButton
          info={info}
          key={info.data}
          setCurrentFilter={setCurrentFilter}
        />
      ))}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 0.75rem;
  margin-bottom: 1.25rem;
`;

export default Filters;
