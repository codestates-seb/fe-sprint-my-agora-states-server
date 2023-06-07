const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let filteredById = discussionsData.filter((data)=>{
      return data.id === Number(id)
    }) // 요청 온 id 와 동일한 id를 가진 객체들을 모아놓은 배열

    if(filteredById.length === 0){
      res.status(404).send(
        `${id} is not found`
      )
    }
    else{
      res.status(200).send(
        filteredById[0] // 객체를 보내달라고 했으므로, [0] 인덱스 입력
      )
    }
  }
};

module.exports = {
  discussionsController,
};
