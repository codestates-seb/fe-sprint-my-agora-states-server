const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    if (Object.keys(req.query).length === 0) {
      return res.status(200).json(discussionsData);
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let data = discussionsData.filter(discussion => {
      return discussion.id === Number(id);
    })
    if (data.length === 0) {
      return res.status(404).json(`${id} is not found`);
    } else {
      return res.status(200).json(data[0]);
    }
  }

};

module.exports = {
  discussionsController,
};
