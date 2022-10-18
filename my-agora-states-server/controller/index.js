const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    if(id){
      // filter 메소드를 쓰고 싶으시면 반환값이 배열이니까 객체로 바꿔서 보내줘야 함.
      // 1명이 작성한 여러 트윗을 찾아야 하는 경우 -> filter(O), find(X)
      let filteredData = discussionsData.find(discussion => discussion.id===Number(id)); 
      filteredData ? res.status(200).send(filteredData) : res.status(404).send('Not Found!'); 
    }
    res.status(404).send('Required params');
  }

};

module.exports = {
  discussionsController,
};
