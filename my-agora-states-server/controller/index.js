const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

      return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    const {id}=req.params
    let filtering = discussionsData.filter((item) => {
      return Number(id)===Number(item.id)
    });
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    if(filtering.length===0){  

      return res.status(404).send('error'); 
    }
    
   return res.json(filtering[0]);
    
  }
  }



module.exports = {
  discussionsController,
};
