const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
      return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    const { id } = req.params
    const data = discussionsData.filter((item) => item.id === Number(id))

    if (data.length !== 0) {
      return res.status(200).json(data[0])
    } else {
      return res.status(404).end()
    }
  }
};

module.exports = {
  discussionsController,
};
