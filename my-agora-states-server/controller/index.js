const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    res.json(discussionsData);
  },

  findById: (req, res) => {
    const targetId = +req.params.id;

    const exDiscussion = discussionsData.find(
      (discussion) => discussion.id === targetId
    );

    if (!exDiscussion) return res.status(404).json("일치하는 질문이 없습니다.");

    return res.json(exDiscussion);
  },

  create: (req, res) => {
    const { discussion } = req.body;

    discussionsData.unshift(discussion);

    res.json({
      message: "질문 생성 완료!",
      createdDiscussion: discussion,
    });
  },
};

module.exports = {
  discussionsController,
};
