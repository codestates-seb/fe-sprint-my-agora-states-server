const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const params = req.params.id;
    const list = discussionsData.filter((data)=>data.id===Number(params))
    console.log(list)
    if(list.length !== 0){
      return res.status(200).json(list[0]);
    } else {
      return res.status(404).json('n')    
    }
  }
  };


module.exports = {
  discussionsController,
};
