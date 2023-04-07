const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(agoraStatesDiscussions);
  },

  findById: (req, res) => {
		// TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
		let filteredDiscussion = [];
		console.log(req.params.id);
		if (req.params.id) {
			filteredDiscussion = discussionsData.filter((el) => {
				return el.id === Number(req.params.id);
			});
			if (filteredDiscussion.length > 0) res.send(filteredDiscussion[0]);
			else res.status(404).send("일치하는 데이터가 없습니다.");
		}
	},
};

module.exports = {
	discussionsController,
};
