const { agoraStatesDiscussions } = require("../repository/discussions");
const { all } = require("../router/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
   return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    if (req.params){
      // console.log(req.params) = { id: ':id' }
          let findId = discussionsData.filter((el)=>{if (el.id === Number(req.params.id)){
             return el
          }})
          if (findId.length === 0){
            return res.status(404).send('NOT FOUND')
          } else {
            return res.status(200).json(...findId)
            }
    } else {
       return res.status(404).json('NOT FOUND')
    }

    // if (findId.length===0){
    //   return res.status(404).json('bad')
    // } else {
    //   return res.status(200).json(findId)
    // }
  }
};

module.exports = {
  discussionsController,
};
