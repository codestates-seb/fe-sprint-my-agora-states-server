const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
   return res.status(200).send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const paramsId = req.params.id;
    const filtering = discussionsData.filter(el => el.id === Number(paramsId))
    // console.log(filtering)
    if(filtering){
      return res.status(200).json(...filtering)
    }else{
      return res.status(404).json(...filtering)
    }


  }

};

module.exports = {
  discussionsController,
};
