const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    if (id) {
      const filteredDiscussionsData = discussionsData.filter((data) => data.id === Number(id));
      if (filteredDiscussionsData.length === 0) {
        res.status(404).send("해당 id가 존재하지 않습니다.");
      } else {
        res.status(200).json(filteredDiscussionsData[0]);
      }
    }
  },
};

module.exports = {
  discussionsController,
};
