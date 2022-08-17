const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    if (req.params.id) {
      const result = discussionsData.filter((el) => req.params.id === String(el.id));
      if (result.length === 0) res.status(404).send('Not Found!').json(discussionsData);
      if (result.length > 0) res.status(200).json(...result);
    }
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
