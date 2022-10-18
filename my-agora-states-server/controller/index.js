const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const filteredDiscussion = discussionsData.find((discussion) => discussion.id === Number(id));

    if (filteredDiscussion) {
      res.status(200).json(filteredDiscussion);
    } else {
      res.status(404).send('Not Found');
    }
  }

};

module.exports = {
  discussionsController,
};
