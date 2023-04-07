const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const filteredDiscussion = discussionsData.find(
      (dis) => dis.id === parseInt(id)
    );
    if (filteredDiscussion) return res.status(200).json(filteredDiscussion);
    else return res.status(404).json("404");
  },
};

module.exports = {
  discussionsController,
};
