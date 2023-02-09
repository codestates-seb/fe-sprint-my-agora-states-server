const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).send(discussionsData)
  },

  findById: (req, res) => {
    const { id } = req.params // 구조분해할당
    let list = discussionsData.filter((item) => { // 걸러내고
      return item.id === Number(id)
    })
    if(list.length !== 0){ // 걸러낸 길이가 0이 아니면
      return res.status(200).send(list[0]) // 객체가 담긴 배열로 들어오니까 [{...}] 
    } else { //아니면=길이가 0이면
      return res.status(404).send('Not found') //404
    }
  }

};

module.exports = {
  discussionsController,
};
