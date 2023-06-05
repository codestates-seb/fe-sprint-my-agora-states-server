const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(
      discussionsData.map((discussion) => {
        return discussion;
      })
    );
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    let discussions = discussionsData.map((discussion) => {
      return discussion;
    });

    let discussion = [];
    discussion = discussions.filter((discussion) => {
      // id를 number타입으로!
      return discussion.id === +id;
    });

    if (discussion.length === 0) {
      res.send(404);
    }
    res.send(discussion[0]);
  },
};

module.exports = {
  discussionsController,
};
