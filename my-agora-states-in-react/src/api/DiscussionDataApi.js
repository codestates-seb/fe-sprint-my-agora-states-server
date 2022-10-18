export function getDiscussionData() {
	let url = `http://localhost:4000/discussions`;
	return fetch(url).then((resp) => resp.json());
}
