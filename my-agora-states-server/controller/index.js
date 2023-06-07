const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const path = require('path');

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const discussionId = parseInt(req.params.id);
    const discussion = discussionsData.find((d) => d.id === discussionId);
    if (discussion) {
      res.status(200).send(discussion);
      const imagePath = path.join(__dirname, '..', 'repository', 'error-1349562.svg');
      res.sendFile(imagePath);
    } else {
      res.status(404).send("Not Found");
    }
  }
};

module.exports = {
  discussionsController,
};
