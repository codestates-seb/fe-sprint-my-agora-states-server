const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    const id = parseInt(req.params.id);
    const discussion = discussionsData.find(
      (discussion) => discussion.id === id
    );

    if (!discussion) {
      return res.status(404).json({ error: "404 NOT FOUND!" });
    }

    res.status(200).json(discussion);
  },
};

module.exports = {
  discussionsController,
};
