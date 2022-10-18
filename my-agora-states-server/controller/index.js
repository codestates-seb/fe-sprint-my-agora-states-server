const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    const result = discussionsData.slice();
    return res.status(200).json(result);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const result = discussionsData.find((el) => el.id === Number(id));

    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(404).json("what the hell");
    }
  },
};

module.exports = {
  discussionsController,
};
