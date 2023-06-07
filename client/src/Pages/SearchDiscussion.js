import React, { useState } from "react";
import DatePickerComponent from "../Components/DatePickerComponent";
import KeywordSearchComponent from "../Components/KeywordSearchComponent";
import "./SearchDiscussion.css";

const SearchDiscussion = ({ discussions }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (keyword) => {
    console.log("키워드:", keyword); // 입력된 키워드 확인

    const filteredResults = discussions.filter((discussion) => {
      const titleMatchesKeyword = discussion.title
        .toLowerCase()
        .includes(keyword.toLowerCase());

      // 키워드 검색 결과와 선택된 날짜를 모두 고려하여 검색 결과 필터링
      if (selectedDate) {
        const discussionDate = new Date(discussion.date).setHours(0, 0, 0, 0);
        const selectedDateValue = selectedDate.setHours(0, 0, 0, 0);
        return titleMatchesKeyword && discussionDate === selectedDateValue;
      } else {
        return titleMatchesKeyword;
      }
    });

    console.log("검색 결과:", filteredResults); // 검색 결과 확인

    setSearchResults(filteredResults);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <KeywordSearchComponent
        discussions={discussions}
        onSearch={handleSearch}
      />
      <div>
        <DatePickerComponent
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
        />
      </div>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default SearchDiscussion;
