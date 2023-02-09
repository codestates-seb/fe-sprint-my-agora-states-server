const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(agoraStatesDiscussions)
    
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    let filtered = [] 
    
    if(req.params.id){
      filtered = discussionsData.filter((el)=> {
        return el.id === Number(req.params.id)
      })
    }

    if(filtered.length > 0){
      res.send(filtered[0])
    } else {
      res.status(404).send("일치하는 데이터 없는데요?")
    }
    }
  
};

module.exports = {
  discussionsController,
};
