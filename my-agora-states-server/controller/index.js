const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions; //레포지토리에서 불러온 데이터들

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData) // 레포지에서 불러온 데이터 다보여주기
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params; // 요청 아이디
    let list = discussionsData.filter(item => { return Number(id) === item.id }); // 요청 id와 일치하는 id를 찾아 필터링한 새로운 배열을 list에 할당
    if(list.length === 0){
      res.status(404).json('error') // id와 일치하는 데이터가 없으면 에러(404)
    } else{
      res.status(200).json(list[0]) // 일치하면 그 리스트 json으로 응답보내기
    }
  }

};

module.exports = {
  discussionsController,
};
