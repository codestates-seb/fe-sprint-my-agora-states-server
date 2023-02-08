const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {

    const { uuid } = req.params;
    if (uuid) {
      const uuidFiltered = discussionsData.find((el) => // 하나만 찾을 때는 find로. 찾은 요소를 리턴
        el.id === Number(uuid)
      )
      if(!uuidFiltered) return res.status(404).send();
      return res.status(200).send(uuidFiltered);
    }
  }
};

module.exports = {
  discussionsController,
};
