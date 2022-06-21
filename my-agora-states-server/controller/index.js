const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    let a = discussionsData;
    return res.status(200).json(a);
    // TODO: 모든 discussions 목록을 응답합니다.

    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    let a = discussionsData.filter((e) => {
      return Number(req.params.id) === e.id
    })
    if(a.length !== 0){
      return res.status(200).json(...a)
    }else{
      return res.status(404).send("올바르지 않은 아이디 값 입니다!")
    }
    // TODO: path parameter id를 가진 discussion을 응답합니다.
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
