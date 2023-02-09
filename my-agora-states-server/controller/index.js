const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let fillterd = discussionsData.filter(el => Number(id) === el.id);
    if (fillterd) {
      return res.status(200).json(fillterd);
    } else {
      return res.status(404).json("err");
    }
  }

};

module.exports = {
  discussionsController,
};
