const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const discussionIddArr = discussionsData.map((discussion) => discussion.id);
    // console.log(discussionIddArr);
    if (id in discussionIddArr) {
      const discussionRequestData = discussionsData.find(
        (discussion) => discussion.id === Number(id)
      );
      return res.status(200).send(discussionRequestData);
    } else {
      return res.status(404).send("Not found");
    }
  },
};

module.exports = {
  discussionsController,
};
