import React, { useState, useEffect } from "react";

function DiscussionList({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const pageLinks = [];
  for (let i = 1; i <= totalPages; i++) {
    pageLinks.push(
      <button key={i} onClick={() => handlePageChange(i)}>
        {i}
      </button>
    );
  }

  return (
    <div>
      {/* Render currentItems */}
      {currentItems.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
      {/* Render pagination controls */}
      {pageLinks}
    </div>
  );
}

export default DiscussionList;
