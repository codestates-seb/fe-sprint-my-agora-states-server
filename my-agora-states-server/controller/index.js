const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다. //
      return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    const { id } = req.params;
    let data = discussionsData.filter(item => item.id === Number(id));
    
    if(data.length !== 0) {
      return res.status(200).json(data[0]);
    } else {
    return res.status(404).end
    }
  }
};

module.exports = {
  discussionsController,
};
