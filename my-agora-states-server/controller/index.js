const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    let result = {}
    for (el of discussionsData) {
      if(el.id === Number(req.params.id)) {
        result = el;
        res.status(200).json(result);
      }
    }
    res.status(404).json("해당 discussion이 존재하지 않습니다.")
  }

};

module.exports = {
  discussionsController,
};
