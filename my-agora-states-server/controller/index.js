const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    const allDiscussions = discussionsData;
    // TODO: 모든 discussions 목록을 응답합니다.
    res.json(allDiscussions);
  },

  findById: (req, res) => {
    const id = req.params.id;
    const discussion = discussionsData.find((item) => item.id === id);
    
    if(discussion) {
      res.json(discussion);
    } else {
      res.status(404).send('Discussion not found');
    }
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
  }
};

module.exports = {
  discussionsController,
};
