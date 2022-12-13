const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {

    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {

   const {id}= req.params
   const a = discussionsData.find((b) => b.id === Number(id));
   
   if(a){
    return res.status(200).json(a);
   }else{
    return res.status(404).end();
   }
  }
};

module.exports = {
  discussionsController,
};
