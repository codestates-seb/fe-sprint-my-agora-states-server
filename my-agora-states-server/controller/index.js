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
    const r = discussionsData.filter(i => i.id === parseInt(id, 10));
    if (r.length > 0) {
      const discussion = r[0];
      return res.status(200).json(discussion);
    } else {
      return res.status(404).send('errer');
    }
  }
};

module.exports = {
  discussionsController,
};
