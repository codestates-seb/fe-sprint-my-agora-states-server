const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    return res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    const {id} = req.params;
    const ans = discussionsData.filter(item => item.id == parseInt(id));
    if(ans.length == 0){
      return res.status(404).send({message:`fail to take ${id} `})
    } else {
      return res.status(200).send(ans[0]);
    }
  }

};

module.exports = {
  discussionsController,
};
