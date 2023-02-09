const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const user = discussionsData.find((u) => u.id === Number(id));
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "There is no content with the id" });
    }
  },
};

module.exports = {
  discussionsController,
};
