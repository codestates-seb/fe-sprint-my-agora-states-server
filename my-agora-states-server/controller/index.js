const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    let result = [];

    if (req.params.id) {
      result = discussionsData.filter((el) => el.id == req.params.id);
    }

    if (result.length === 0) {
      res.status(404).send("Not matching discussions with this id");
    }

    res.status(200).json(result[0]);
  },
};

module.exports = {
  discussionsController,
};
