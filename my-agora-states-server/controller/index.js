const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const filterId = discussionsData.find((e) => {
      return e.id === Number(id);
    });
    if (filterId) {
      return res.status(200).json(filterId);
    } else {
      return res.status(404).json("404");
    }
  },
};

module.exports = {
  discussionsController,
};
