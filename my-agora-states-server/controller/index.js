const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합

    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    const filterId = discussionsData.filter((discussions) => {
      if (Number(discussions.id) === Number(id)) {
        return true;
      }
    });
    if (filterId.length !== 0) {
      res.status(200).json(filterId[0]);
    } else {
      res.status(404).send("일치하는 ID가 없습니다");
    }
  },
};

module.exports = {
  discussionsController,
};
