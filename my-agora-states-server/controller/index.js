const { json } = require("express");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData)
    // return res.json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params
    let filter = discussionsData.find((x)=> x.id === Number(id)) //이거 왜 if문 안으로 보내고 if(id)로 하면 안되는지 다시 생각해보기
    if(filter){
      return res.status(200).json(filter)
    }else{
      return res.status(404).send('Error')
    }

    }

};

module.exports = {
  discussionsController,
};
