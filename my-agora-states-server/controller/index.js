const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.json(agoraStatesDiscussions);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    const 검색한데이터
       = agoraStatesDiscussions.filter((e)=>{
        return e.id===Number(id)
      });
    if(검색한데이터.length===0){
      res.status(404).send('Not Found!');
    }else {
      res.status(200).json(검색한데이터[0]);
    }
  }
};

module.exports = {
  discussionsController,
};
