const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const filteredDiscussions = discussionsData.filter(
      (discussion) => discussion.id === parseInt(id, 0)
    );

    filteredDiscussions.length > 0
      ? res.status(200).send({ ...filteredDiscussions[0] })
      : res.status(404).send(filteredDiscussions);
  },
};

module.exports = {
  discussionsController,
};
