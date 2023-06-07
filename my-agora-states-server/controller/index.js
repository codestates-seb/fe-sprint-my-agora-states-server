const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // 모든 discussions 목록을 응답합니다.
    res.send(discussionsData);
  },

  findById: (req, res) => {
    const id = req.params.id;
    const discussion = discussionsData.find(item => item.id === parseInt(id));
  
    if (discussion) {
      res.send(discussion);
    } else {
      res.status(404).send("Discussion not found");
    }
  }
}  

module.exports = {
  discussionsController,
};
