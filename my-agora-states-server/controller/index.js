const {agoraStatesDiscussions} = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  // [GET] /
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  // [GET] /:id
  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    const discussion = discussionsData.find(data => data.id == id);
    if (!discussion) res.status(404).send('일치하는 결과가 없습니다.');
    res.status(200).json(discussion);
  },
};

module.exports = {
  discussionsController,
};
