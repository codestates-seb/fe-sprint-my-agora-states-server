import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Filters from './Filters/Filters.jsx';
import Content from './Content.jsx';
import Pagination from './Pagination/Pagination.jsx';
import filterDiscussions from '../../utils/functions/filterDiscussions.js';
import sliceDiscussions from '../../utils/functions/sliceDiscussions.js';

function Discussions({ isSuccess }) {
  const [discussions, setDiscussions] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFilter, setCurrentFilter] = useState('all');

  useEffect(() => {
    async function fetchDiscussions() {
      try {
        const { data } = await axios.get('http://localhost:4000/discussions');

        const filtered = filterDiscussions(data, currentFilter);

        setDiscussions(filtered);
        setCurrentPage(1);
        setTotalPage(Math.ceil(filtered.length / 10));
      } catch (e) {
        console.error(e);
      }
    }

    fetchDiscussions();
  }, [currentFilter, isSuccess]);

  return (
    <DiscussionsWrapper>
      <Filters setCurrentFilter={setCurrentFilter} />
      <Content discussions={sliceDiscussions(discussions, currentPage)} />
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </DiscussionsWrapper>
  );
}

const DiscussionsWrapper = styled.div`
  width: 33.75rem;
  margin: 0 auto;
`;

export default Discussions;
