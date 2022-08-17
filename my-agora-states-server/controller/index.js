const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;


const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params
    const isMatch = function(discussion){return discussion.id === Number(id)}
    let matchDisc = discussionsData.filter(isMatch)[0]
    if(matchDisc)return res.status(200).json(matchDisc)
    else res.status(404).send()
  },

  addDiscussion: (req,res) =>{
    //클라이언트에서 받은 add요청 합치기
    discussionsData.unshift(req.body)
    res.status(200).json(req.body)
  }

};

module.exports = {
  discussionsController,
};
