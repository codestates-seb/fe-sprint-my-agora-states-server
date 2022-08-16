const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
  }

};

module.exports = {
  discussionsController,
};
