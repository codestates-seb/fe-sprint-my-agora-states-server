const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    //idx가 조건을 만족 못한다면 -1
    const idx = discussionsData.findIndex((data) => data.id === +id);

    if (idx >= 0) {
      res.status(200).json(discussionsData[idx]);
    } else {
      res.status(404).json("Not Found!");
    }
  },
};

module.exports = {
  discussionsController,
};
