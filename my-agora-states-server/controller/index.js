const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    console.log(id);
    const requestedDiscussion = discussionsData.filter(
      (item) => item.id === +id
    );
    if (requestedDiscussion.length === 0) {
      return res.status(404).send("discussion이 존재하지 않습니다.");
    }
    console.log(requestedDiscussion);
    res.status(200).json(requestedDiscussion[0]);
  },
};

module.exports = {
  discussionsController,
};
