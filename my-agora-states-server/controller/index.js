const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData)

  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params

    let idx = []
    let list = []
    

    discussionsData.filter((el) => {
      return idx.push(el.id)
    })
    
    if(idx.includes(Number(id))){
      discussionsData.filter((discussion) => {
        if(discussion.id === Number(id)){
          list.push(discussion)
          res.status(200).json(list[0])
        } 
      })
    } else {
      res.status(404).send('WRONG ID')
    }
  }

};

module.exports = {
  discussionsController,
};
