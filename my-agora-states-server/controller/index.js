const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    const data = discussionsData;
    console.log("findAll", data);
    res.status(200).json(data);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const data = discussionsData.find(
      (discussion) => discussion.id === parseInt(id, 10)
    );
    if (!data) {
      res.status(404).send("Bad Request");
      return;
    }
    res.status(200).json(data);
  },
};

module.exports = {
  discussionsController,
};
