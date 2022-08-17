const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const filteredDiscussion = discussionsData.filter(
      (discussion) => discussion.id === Number(req.params.id)
    );

    if (filteredDiscussion[0]) {
      res.send(filteredDiscussion[0]);
    } else {
      res
        .status(404)
        .json("해당 id와 일치하는 discussion이 존재하지 않습니다.");
    }

    return res.json(filteredDiscussion[0]);
  },
};

module.exports = {
  discussionsController,
};
