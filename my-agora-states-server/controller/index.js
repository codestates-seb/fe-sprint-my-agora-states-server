const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(agoraStatesDiscussions)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const list = discussionsData.filter(el=>{
      return el.id === Number(id);
    });
    
    if(list.length !== 0) {res.status(200).json(list[0]);}
    else {res.status(404).send("NOT FOUND!")}
  
    }
};

module.exports = {
  discussionsController,
};
