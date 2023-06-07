const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    let list = discussionsData.filter((x)=>{return x.id === Number(req.params["id"])});
    let resData;
    let newList = list.map((x)=>{resData = x;});
    if(list.length === 0){
      res.status(404).send("Blank");
    }else{
      console.log();
      res.status(200).send(resData);
    }

  }

};

module.exports = {
  discussionsController,
};
