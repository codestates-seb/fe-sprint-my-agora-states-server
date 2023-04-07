const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const discussion = discussionsData.find(discussion => discussion.id === id);
  // const discussion = discussionsData.find(discussion => discussion.id === String(id)); <- 문자열 타입의 id와 숫자 타입의 id가 비교될 경우 일치하지 않을때
    if (discussion) {
      res.json(discussion);
    } else {
      res.status(404).send('Not found');
    }
  }
};

module.exports = {
  discussionsController,
};
