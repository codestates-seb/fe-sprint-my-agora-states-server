const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다. //
      return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {

  }

};

module.exports = {
  discussionsController,
};
