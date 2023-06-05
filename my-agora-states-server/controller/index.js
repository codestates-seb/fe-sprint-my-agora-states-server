const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.json(discussionsData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    console.log(id);
    const data = discussionsData.filter((elem) => {
      return elem.id.toString() === id;
    });
    if (data.length === 0) {
      return res.status(404).send("ERROR");
    } else {
      return res.status(200).json(data[0]);
    }
  },
};

module.exports = {
  discussionsController,
};
