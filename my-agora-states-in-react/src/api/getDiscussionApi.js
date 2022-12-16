import fetch from "node-fetch";

export function getDiscussion(filterBy = {}) {
  return fetch("http://localhost:4000/discussions")
    .then((resp) => resp.json())
    .then((result) => {
      return result;
    });
}
