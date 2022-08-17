const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
    res.status(200).json(discussionsData);

  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    
    // res.send('TODO:')
    const { id } = req.params;
    const discussion = discussionsData.find((discussion) => discussion.id === Number(id));
    if (discussion){
      res.status(200).json(discussion);
    } else {
      res.status(404).send("Not Found")
    }

  }

};

module.exports = {
  discussionsController,
};
