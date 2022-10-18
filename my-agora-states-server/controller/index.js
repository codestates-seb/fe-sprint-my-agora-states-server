const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    const data = discussionsData.slice();
    return res.status(200).json(data);
  },
  findById: (req, res) => {
    const { id } = req.params;
    const list = discussionsData.find((item) => item.id === Number(id) )
    if(list) {
      return res.status(200).json(list);
    }
    else{
      return res.status(404).json('Incorrect request');
    }
  }
}

module.exports = {
  discussionsController,
};
