const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const discussion = discussionsData.find(discussion => discussion.id===Number(id))
    if (discussion) {
      return res.status('200').json(discussion);
    } else {
      return res.status('404').send('NOT FOUND');
    }
  }
};

module.exports = {
  discussionsController,
};
