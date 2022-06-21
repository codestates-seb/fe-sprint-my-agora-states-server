const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const { id } = req.params;
    const data = discussionsData.filter(item => Number(id) === item.id);
    
    if(data.length === 0){ // 요청에 해당하는 id가 discussionsData에 존재하지 않으면
      return res.status(404).end(); // .json('Incorrect request') 오류 메시지를 보내던지 .end()를 하던지 종결을 시켜주어야 함. 근데 전자로 하면 테케 통과 안됨.
    }
    return res.json(...data).status(200);
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
