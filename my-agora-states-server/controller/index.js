const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
	findAll: (req, res) => {
		// TODO: 모든 discussions 목록을 응답합니다.
		res.send(discussionsData); //??? 이게 맞나 여기 TODO:
	},

	findById: (req, res) => {
		// TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
		// res.send("TODO:");

		// discussions.js id가져오려면 params사용하면 된다.
		// api/posts/:id라는 라우터경로가 있을때, id는 req.params.id로 불러올 수 있다.
		// req객체에 parameter라는 프로미터가 있고, 그 프로퍼티의 id라는 프로퍼티로 접근해 요청을 보낼 수 있는 것
		const { id } = req.params;

		// find 새로운 변수 선언 >> 데이터가 있는 discussionsData안에서 같은 id를 find로 찾기
		const data = discussionsData.find((a) => a.id === Number(id));

		// 성공 상태코드 200, 모든 목록을 담은 repository 폴더 안의 discussions 목록을 담은 discussionsData를 그대로 return한다.
		if (data) return res.status(200).json(data);
		else return res.status(404).json("Not found");
		// 실패 상태코드 404

		// 이것도 통과된다
		// const data = discussionsData.filter((a) => a.id === Number(id));

		// if (data.length === 0) {
		// 	return res.status(404).json("Not found");
		// } else {
		// 	return res.status(200).json(data[0]);
		// }
	},
};

module.exports = {
	discussionsController,
};
