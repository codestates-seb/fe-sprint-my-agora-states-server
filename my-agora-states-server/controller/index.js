const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {

    const filterData = discussionsData.filter((discussion) => discussion.id === Number(req.params.id))
    if(filterData.length === 0){
      res.status(404).send('Not Found');
    }
    res.send(...filterData);
  }

};

module.exports = {
  discussionsController,
};
