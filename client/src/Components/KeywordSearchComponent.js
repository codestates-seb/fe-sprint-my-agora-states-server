import React, { useState } from "react";
import "./KeywordSearchComponent.css";


const KeywordSearchComponent = ({ discussions, onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="키워드로 검색합니다"
        value={keyword}
        onChange={handleKeywordChange}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default KeywordSearchComponent;
