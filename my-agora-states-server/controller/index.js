const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
    res.send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    //res.send('TODO:')
    const { id } = req.params;
    let idDiscussionsData = discussionsData.filter(el=>el.id===Number(id))
  if(idDiscussionsData.length!==0){
      res.status(200).send(idDiscussionsData[0])
    }else{
      res.status(404).send('no data')
    }
  }

};

module.exports = {
  discussionsController,
};


