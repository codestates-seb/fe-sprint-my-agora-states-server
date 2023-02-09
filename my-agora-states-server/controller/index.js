const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const okCode = 200;
const notFoundCode = 404;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(okCode).json(agoraStatesDiscussions);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    let { id } = req.params;
    id = Number(id);

    const result = agoraStatesDiscussions.find(
      (discussion) => discussion.id === id
    );

    if (result) {
      return res.status(okCode).json(result);
    } else {
      return res.status(notFoundCode).end();
    }
  },
};

module.exports = {
  discussionsController,
};
