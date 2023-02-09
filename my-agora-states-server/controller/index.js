const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    const{id}=req.params
    let list = discussionsData.filter(el => { return el.id === Number(id) });
    list.length ? res.status(200).json(list[0]) : res.status(404).json(list);
  }

};

module.exports = {
  discussionsController,
};
