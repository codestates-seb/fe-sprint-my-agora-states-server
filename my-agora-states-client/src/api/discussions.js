export async function findAll(page = 1) {
  const response = await fetch(`http://localhost:3002/discussions?page=${page}`);
  return await response.json();
}

export async function getDiscussion(id) {
  const response = await fetch(`http://localhost:3002/discussions/${id}`);
  return await response.json();
}

export async function postDiscussion(body) {
  const response = await fetch(`http://localhost:3002/discussions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await response.json();
}
