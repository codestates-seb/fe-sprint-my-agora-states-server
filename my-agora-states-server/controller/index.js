const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {

    discussionsData.forEach((discussion) => {
      const id = parseInt(req.params.id, 10);
      if(discussion.id === id){
        res.status(200).json(discussion);
      }
    })
    
    res.status(404).send('bad request');

  },

  // client에서 post 했을 때
  postContent: (req, res) => {

    //req.body에 필요한 정보 추가 (id, 생성/업데이트 시간)
    req.body.id = discussionsData.length+5;
    req.body.createdAt = new Date;
    req.body.updatedAt = new Date;
    //기존 데이터에 req 데이터 추가
    discussionsData.unshift(req.body);
    //변경된 전체 데이터 response
    res.status(200).json(discussionsData);

  }
};

module.exports = {
  discussionsController,
};
