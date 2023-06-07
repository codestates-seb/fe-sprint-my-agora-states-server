const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id: discussionId } = req.params;
    let data = discussionsData.filter(
      (discussion) => discussion.id === +discussionId
    );

    if (!data.length) {
      return res.status(404).send("data가 존재하지 않습니다..");
    } else {
      let body = { ...data[0] };
      return res.status(200).json(body);
    }
  },
};

module.exports = {
  discussionsController,
};
