const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const copyData = discussionsData.filter(x=>x.id===parseInt(id));

    if(copyData.length===0){
      res.status(404).send({})
    } else{
      res.send(copyData[0]);
    }
  }

};

module.exports = {
  discussionsController,
};
