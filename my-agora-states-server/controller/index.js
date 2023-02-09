const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    // filter 대신 find로 조건에 맞는 요소를 찾아야 하는 이유?
    const data = discussionsData.find((el)=>{
      return el.id === Number(id);
    })
    if(data){
      return res.status(200).json(data)
    } else {
      return res.status(404).json('Not Found')
    }
  }

};

module.exports = {
  discussionsController,
};
