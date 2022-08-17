const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    let found = discussionsData.find((ele) => ele.id === Number(id));
    if (found) return res.status(200).send(found);
    else return res.status(404).send("404 Not Found");
  }
};

module.exports = {
  discussionsController,
};
