const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const fs = require("fs");

const discussionsController = {
  findAll: (req, res) => {
    res.status(200).json(agoraStatesDiscussions);
  },

  findById: (req, res) => {
    const { id } = req.params;
    let filtered = agoraStatesDiscussions.find((x) => x.id == Number(id));
    if (filtered === undefined) {
      return res.status(404).send(filtered);
    }
    return res.status(200).json(filtered);
  },
};

module.exports = {
  discussionsController,
};
