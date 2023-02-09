const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let list = discussionsData.filter(function (el) {
      return el.id === Number(id) //넘버의 이유
    });
    list.length ? res.status(200).json(list[0]) : res.status(404).json('일치하는 정보 없음'); 
                //일치하지 않으면 데이터가 없어서 길이가 0, 0은 falsy한값 404 응답
  },            //id는 고유하고 하나여서 첫번째 요소를 200과 함께 응답

};

module.exports = {
  discussionsController,
};
