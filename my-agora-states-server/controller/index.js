const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    const filteredById = discussionsData.filter((discussion)=>{
      return (discussion.id === Number(id));
    });
    console.log(filteredById);
    if(filteredById.length){
      res.status(200).send(filteredById[0]);
    }else{
      res.status(404).send('데이터가 존재하지 않습니다');
    }
  }

};

module.exports = {
  discussionsController,
};
