const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    const {id} = req.params;
    const filteredById = discussionsData.filter(el => el.id == id)

    if (filteredById.length >= 1) {
      return res.status(200).json(...filteredById);
    } else {
      return res.status(404).send('Nothing found :(');
    }
  }

};

module.exports = {
  discussionsController,
};