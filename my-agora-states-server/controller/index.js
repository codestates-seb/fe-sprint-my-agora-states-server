const { json } = require("stream/consumers");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    //res.send('TODO:')
    if(req){
      return res.json(discussionsData);
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    //res.send('TODO:')
    const {id} = req.params; //특정 아이디 조회는 params
    const result = discussionsData.find((data)=>{//find
      return Number(id) === data.id;
    })

    if(result){ //성공했을때 
      return res.status(200).json(result);
    }else{ //실패
      return res.status(404).json('error');
    }
  }

};

module.exports = {
  discussionsController,
};
