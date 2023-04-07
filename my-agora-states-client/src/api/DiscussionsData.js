const baseURL = 'http://localhost:4000';

export const getDiscussions = () => {
  return fetch(`${baseURL}/discussions`).then((res) => res.json());
};

export const getDiscussions10 = () => {
  return fetch(`${baseURL}/discussions?page=0&limit=10`).then((res) =>
    res.json()
  );
};
