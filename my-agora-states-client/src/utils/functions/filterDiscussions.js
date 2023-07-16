const filterDiscussions = (discussions, currentFilter) => {
  if (currentFilter === 'all') return discussions;
  if (currentFilter === 'unchecked')
    return discussions.filter(({ answer }) => !answer);
  if (currentFilter === 'checked')
    return discussions.filter(({ answer }) => answer);
};

export default filterDiscussions;
