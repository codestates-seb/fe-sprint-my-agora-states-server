const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
	findAll: (req, res) => {
		// TODO: 모든 discussions 목록을 응답합니다.

		res.send(agoraStatesDiscussions);
	},

	findById: (req, res) => {
		// TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
		console.log(id);
		const filteredDis = agoraStatesDiscussions.filter((el) => el.id === id);
		res.send(filteredDis);
	},
};

module.exports = {
	discussionsController,
};
