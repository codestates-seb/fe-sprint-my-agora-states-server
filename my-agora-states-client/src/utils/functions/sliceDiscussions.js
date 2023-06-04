const sliceDiscussions = (discussions, currentPage) =>
  discussions.slice((currentPage - 1) * 10, currentPage * 10);

export default sliceDiscussions;
