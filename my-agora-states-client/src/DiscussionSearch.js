import { useState } from "react";

function DiscussionSearch({ data, setList }) {
  const [searchAuthor, setSearchAuthor] = useState("");

  const handleSearchChange = (e) => {
    setSearchAuthor(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchAuthor === "") {
      setList(data);
    } else {
      const filteredList = data.filter((item) =>
        item.author.includes(searchAuthor)
      );
      setList(filteredList);
    }
    setSearchAuthor("");
  };

  return (
    <div>
      <input
        type="text"
        value={searchAuthor}
        onChange={handleSearchChange}
        placeholder="작성자 검색"
      />
      <button onClick={handleSearchClick}>검색</button>
    </div>
  );
}

export default DiscussionSearch;
