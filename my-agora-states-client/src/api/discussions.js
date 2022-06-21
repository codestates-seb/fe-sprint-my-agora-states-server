import { LIMIT, BASE_URL } from "../constant";

export async function findAll(page, limit = LIMIT) {
  if (page == null) {
    const response = await fetch(`${BASE_URL}/discussions`);
    return await response.json();
  }

  const response = await fetch(`${BASE_URL}/discussions?page=${page}&limit=${limit}`);

  return await response.json();
}

export async function postDiscussion(body) {
  const response = await fetch(`${BASE_URL}/discussions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await response.json();
}
