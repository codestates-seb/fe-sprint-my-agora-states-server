const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
	findAll: (req, res) => {
		// TODO: 모든 discussions 목록을 응답합니다.

		res.status(200).send(agoraStatesDiscussions);
	},

	findById: (req, res) => {
		// TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
		const { id } = req.params;
		const filteredDis = agoraStatesDiscussions.filter((el) => el.id === +id);
		if (!filteredDis.length) {
			res.status(404).send('No Discussions');
		} else {
			res.status(200).send(filteredDis);
		}
	},
};

module.exports = {
	discussionsController,
};
