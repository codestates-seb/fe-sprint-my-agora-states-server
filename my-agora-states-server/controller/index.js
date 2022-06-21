const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    res.status(200).json(agoraStatesDiscussions);
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    // if (req.params.id) {
    //   const data = agoraStatesDiscussions.filter(discussion => discussion.id === req.params.id)
    //   return res.status(200).json(data)
    // }
    //   return res.status(400).json('Incorrect request');

    // if (!req.params.id)인 경우, 400
    // agoraStatesDiscussions에 있는 id와 req.parmas.id가 같은지 확인 (filter(discussion => ...))
    // discussion.length === 0 인 경우, 404
    // 같으면 202
    if (!req.params.id) return res.status(400).send("Error");
    const data = agoraStatesDiscussions.filter(
      (discussion) => discussion.id === +req.params.id
    );
    if (data.length === 0) return res.status(404).send("Not found");
    res.status(200).json(data[0]);
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
