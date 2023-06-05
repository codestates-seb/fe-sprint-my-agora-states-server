const PAGE_COUNT = 5;

const calculatePageValue = (currentPage, totalPage) => {
  const pageGroup = Math.ceil(currentPage / PAGE_COUNT);

  let lastPage = pageGroup * PAGE_COUNT;
  if (lastPage > totalPage) lastPage = totalPage;

  let firstPage =
    lastPage - (PAGE_COUNT - 1) < 1 ? 1 : lastPage - (PAGE_COUNT - 1);
  if (totalPage < pageGroup * PAGE_COUNT)
    firstPage = pageGroup * PAGE_COUNT - (PAGE_COUNT - 1);

  const pageCount = lastPage - firstPage + 1;

  return { firstPage, lastPage, pageCount };
};

export default calculatePageValue;
