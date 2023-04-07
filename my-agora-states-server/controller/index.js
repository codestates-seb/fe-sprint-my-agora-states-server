const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const data = discussionsData.find((d) => d.id === Number(id));
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(404).send("Not found");
    }

  }

}

module.exports = {
  discussionsController,
};
