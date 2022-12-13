const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData)
  },

  findById: (req, res) => {
    console.log(req.param)
    let filteredData = discussionsData.filter()
    res.send('TODO:')
  }

};

module.exports = {
  discussionsController,
};
