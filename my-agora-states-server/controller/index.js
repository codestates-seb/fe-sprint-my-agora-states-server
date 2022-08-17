const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    let data = discussionsData
    return res.status(200).json(data);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    if(req.params.id) {
      let data = {}
      discussionsData.forEach(el => {
        if(Number(el.id) === Number(req.params.id)) {
           data = el
           return
        }
      })
      if(Object.keys(data).length === 0) {
        return res.status(404).json(data);
      }
      return res.status(200).json(data);
    }
  }

};

module.exports = {
  discussionsController,
};
