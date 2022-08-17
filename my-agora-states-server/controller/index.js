const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    let data= discussionsData;
    if(req.query !==undefined){
      return res.status(200).json(data);
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    let data=discussionsData.filter((el)=>{ return el.id===Number(req.params.id)})
    if(data.length>0){
      return res.status(200).json(...data)
    }else{
      return res.status(404).send('에러')
    }
  }

};

module.exports = {
  discussionsController,
};
