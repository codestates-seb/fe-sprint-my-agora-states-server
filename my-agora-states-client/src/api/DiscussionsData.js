const baseURL = "http://localhost:4000";

export const getDiscussions = () => {
  return fetch(`${baseURL}/discussions`).then((res) => res.json());
};

export const getDiscussions10 = (page, limit) => {
  return fetch(`${baseURL}/discussions?page=${page}&limit=${limit}`).then(
    (res) => res.json()
  );
};

// Add Discussion
export const addDiscussion = ({ author, title, bodyHtml, page, limit }) => {
  return fetch(`${baseURL}/discussions/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ author, title, bodyHtml }),
  }).then((res) => {
    if (res.status === 201) {
      // return getDiscussions();
      return getDiscussions10(page, limit);
    }
  });
};

// Delete Discussion
export const deleteDiscussion = (id) => {
  return fetch(`${baseURL}/discussions/${id}`, {
    method: "DELETE",
  }).then((res) => {
    if (res.status === 200 || res.status === 204) {
      return getDiscussions();
    }
  });
};
