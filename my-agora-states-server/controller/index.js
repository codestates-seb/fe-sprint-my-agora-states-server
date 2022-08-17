const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const filtered = discussionsData.filter((el) => el.id === Number(id));

    if (filtered.length) res.status(200).json(...filtered);
    else res.status(404).json('this id does not exist');
  },
};

module.exports = {
  discussionsController,
};
