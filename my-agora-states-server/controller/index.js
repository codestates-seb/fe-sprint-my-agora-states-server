const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    const data = discussionsData.find(
      (discussion) => discussion.id === Number(req.params.id)
    );
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(404).json("Not found");
    }
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
  },
};

module.exports = {
  discussionsController,
};
