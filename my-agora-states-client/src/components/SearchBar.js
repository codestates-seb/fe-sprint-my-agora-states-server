import { useRef } from 'react';

import '../styles/SearchBar.css';

export default function SearchBar({
  categories,
  setFilterCategory,
  filterText,
  setFilterText,
}) {
  const id = useRef(`input-${Math.random()}`);

  const handleChange = (event) => {
    setFilterText(event.target.value);
  };

  return (
    <div className="searchBar">
      <ul className="categories">
        {categories.map((category) => (
          <li key={category} className="category">
            <button
              className="button btnLightBlue btnPush"
              type="button"
              onClick={() => setFilterCategory({ category })}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <label htmlFor={id.current}></label>
        <input
          id={id.current}
          type="text"
          placeholder="검색어를 입력하세요"
          value={filterText}
          onChange={handleChange}
        />
        <button type="button">새로 만들기</button>
      </div>
    </div>
  );
}
