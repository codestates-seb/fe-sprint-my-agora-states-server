const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    let filterId = discussionsData;
    if(req.params) {
      // 동일한 id 값만 추출
      const idOk = filterId.find(data => data.id === Number(req.params.id));
      if(idOk) {
        return res.status(200).json(idOk);
      }
      return res.status(404).json('없는 ID')
    }
  }

};

module.exports = {
  discussionsController,
};
