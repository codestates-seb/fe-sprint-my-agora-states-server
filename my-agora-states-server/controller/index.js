const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    const discussion = discussionsData.filter(
      (el) => el.id === Number.parseInt(id)
    )[0];

    !discussion
      ? res.status(404).send("우린 여기까지인가 봐.")
      : res.status(200).send(discussion);
    // send도 return처럼 함수 곧장 종료하는 듯?
  },
};

module.exports = {
  discussionsController,
};
