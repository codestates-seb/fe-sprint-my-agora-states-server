const { isTemplateElement } = require('@babel/types');
const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // 모든 discussion 목록 조회
    const data = [...discussionsData]; // 원본 유지하면서 복사
    return res.status(200).json(data);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // discussion 하나를 조회
    const { id } = req.params;
    const one_discussion = discussionsData.find((item) => {
      return item.id === Number(id);
    });
    if (one_discussion) {
      return res.status(200).json(one_discussion);
    } else {
      return res.status(404).send('Not found');
    }
  },
};

module.exports = {
  discussionsController,
};
