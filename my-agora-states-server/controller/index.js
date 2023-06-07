const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.json(discussionsData)  // query 없으면 전체 데이터
  },

  findById: (req, res) => {
    const { id } = req.params; 
    const data = discussionsData.find(discussion => discussion.id === Number(id));
    if(data) {
      return res.status(200).json(data)
    } else {
      return res.status(404).send('Not found');
    }
  }
 
};

module.exports = {
  discussionsController,
};
