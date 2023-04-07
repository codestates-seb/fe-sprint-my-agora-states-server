import { useState } from 'react';

import useFetchAgoraStatesData from '../hooks/useFetchAgoraStatesData';

import filterAgoraStatesData from '../utils/filterAgoraStatesData';

import SearchBar from './SearchBar';
import QuestionList from './QuestionList';

import '../styles/Main.css';

export default function Main() {
  const { agoraStatesData } = useFetchAgoraStatesData();

  const categories = ['모든 질문', '답변완료', '미답변'];

  const [filterCategory, setFilterCategory] = useState('모든 질문');

  const [filterText, setFilterText] = useState(''); // -> 검색했을 때 필터링 텍스트
  console.log(filterText);

  const filterData = filterAgoraStatesData(agoraStatesData, filterCategory);
  console.log(filterData);

  return (
    <div className="main">
      <SearchBar
        categories={categories}
        setFilterCategory={setFilterCategory}
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <QuestionList agoraStatesData={filterData} />
    </div>
  );
}
