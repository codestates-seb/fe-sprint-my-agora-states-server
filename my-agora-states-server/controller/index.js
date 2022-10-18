const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    const id = req.params.id;
    const findIdx = discussionsData.findIndex((el) => el.id === Number(id));

    if(findIdx !== -1) {
      return res.status(200).json(discussionsData[findIdx]);
    }

    return res.status(404).send('Not Found!');
  }

};

module.exports = {
  discussionsController,
};
