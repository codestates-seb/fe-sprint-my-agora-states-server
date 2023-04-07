const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    if (Object.keys(req.query).length === 0) {
      return res.status(200).send(discussionsData);
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let discussion = discussionsData.find((item) => item.id === id);
    if (discussion) {
      return res.status(200).send(discussion);
    }
    return res.status(404).send("Not Found");
  },
};

module.exports = {
  discussionsController,
};
