// import fetch from 'node-fetch';

export async function getDiscussions() {
  let fetchUrl = await fetch('http://localhost:4000/discussions');
  let discussions = await fetchUrl.json();
  return discussions;
}
