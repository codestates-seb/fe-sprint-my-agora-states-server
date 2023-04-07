const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // 요청으로 들어온 id와 일치하는 discussion을 찾습니다.
    const { id } = req.params;

    const discussion = discussionsData.find((el) => el.id === Number(id));

    if (!discussion) {
      return res.status(404).json({ error: 'Discussion not found' });
    }

    return res.status(200).json(discussion);
  },
};

module.exports = {
  discussionsController,
};
