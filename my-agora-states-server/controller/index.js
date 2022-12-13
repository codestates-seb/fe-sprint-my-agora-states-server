const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params; // req.params.id === id
    // const id = req.params.id --> 얘랑은 틀린말임
    let list = discussionsData;

    if(id){
      list = list.filter((e) => e.id === Number(id))
      if(list.length > 0){
        return res.status(200).json(list[0])
      }else{
        return res.status(404).send()
      }
    
      // list = list.filter((e) => e.id !== req.params.id)
    }
    
  }

};

module.exports = {
  discussionsController,
};
