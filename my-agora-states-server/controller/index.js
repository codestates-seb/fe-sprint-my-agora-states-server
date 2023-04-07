const {
  agoraStatesDiscussions: discuss,
} = require('../repository/discussions');

const discussionsController = {
  findAll: (req, res) => {
    return res.status(200).json(discuss);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const findId = discuss.filter((content) => content.id === Number(id));
    return findId.length
      ? res.status(200).json(findId[0])
      : res.status(404).json();
  },
};

module.exports = {
  discussionsController,
};
