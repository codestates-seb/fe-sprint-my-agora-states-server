const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.

    const { id } = req.params;
    const data = discussionsData.find((el) => {
      return el.id === parseInt(id);
    });
    if (data !== undefined) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'Not Found' });
    }
  },
};
module.exports = {
  discussionsController,
};
