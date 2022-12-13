const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    let { id } = req.params
    id = Number(id)
    let data = discussionsData.filter(el => {
      return el.id === id
    })
    if(data.length === 0){
    res.status(404).send()
    } else{    
    res.status(200).send(data[0])
    }
  }

};

module.exports = {
  discussionsController,
};
