const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    // let list = discussionsData;
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    // 오브젝트의 id 라는 key를 반복해서 req.params.id와 동일한 데이터가 있으면
    // 해당 값을 리턴한다.
    // 없으면 404를 리턴한다.
    let list = discussionsData.filter((item)=> item.id === Number(req.params.id))
    return list.length ? res.status(200).json(...list) : res.status(404).end();
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
