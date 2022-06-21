const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;


const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    let datas 
    let num = Number(req.params.id)
    
    datas = discussionsData.filter( li => li.id === num) // 7.해당 id를 가진 discussion을 응답합니다.
    console.log(datas)

    if(datas.length === 0) return res.status(404).json('Not Found!') // 5. 해당 id가 존재하지 않는경우, 상태 코드 404를 응답합니다.
    res.status(200).json(...datas) // 6.응답의 body 속성으로 id, title, url, author, bodyHTML, avatarUrl가 있어야 합니다. 이문제 스프레드로  배열 벗겨주면 됨
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
  },
};

module.exports = {
  discussionsController,
};
