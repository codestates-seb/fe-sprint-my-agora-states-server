const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.send(discussionsData);
  },

  findById: (req, res) => {
    const id = req.params.id;
    const filterid = discussionsData.filter(data => data.id === Number(id));
    if(filterid.length === 0) return res.status(404).send('Not Found!');
    res.send(...filterid);
  }

};

module.exports = {
  discussionsController,
};
