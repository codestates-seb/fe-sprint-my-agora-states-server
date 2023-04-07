const { agoraStatesDiscussions } = require("../repository/discussions");
let discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id}=req.params;
    let list=discussionsData;
    if (req.params) {
      
    
    list = list.filter((items)=>{
     return items.id===Number(id);
    })
    if(list.length===0){
      return res.status(404).send('존재하지 않는 id입니다');
     }
    }
    

    return res.status(200).send(list[0]);
  }

};

module.exports = {
  discussionsController,
};
