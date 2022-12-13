const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const params = req.params;
    const { id } = params;
    const data = discussionsData.find(
      (discussion) => parseInt(discussion.id, 10) === parseInt(id, 10)
    );

    // 데이터가 없는 경우
    if (!data) {
      res.status(404).send('Bad Request');
      return;
    }
    res.json(data);
  },
};

module.exports = {
  discussionsController,
};
