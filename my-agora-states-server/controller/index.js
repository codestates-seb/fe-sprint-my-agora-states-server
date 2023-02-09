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
    const discussion = discussionsData.filter((item) => {
      return item.id === Number(id); // 에러 처리 --> id를 받아올 때 숫자 형태가 아니라 변환 필요
    });
    if (discussion.length === 0) {
      res.status(404).json({ Error: 'No Discussion Found' });
    } else {
      res.status(200).json(discussion[0]);
    }
  },
};

module.exports = {
  discussionsController,
};
