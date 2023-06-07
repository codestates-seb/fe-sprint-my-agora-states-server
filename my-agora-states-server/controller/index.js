const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    const { author } = req.query;
    if (author) {
      res.json(discussionsData.filter((item) => item.author === author));
    } else {
      res.json(discussionsData);
    }
    res.send();
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    const target = discussionsData.find((item) => item.id === Number(id));
    if (!target) {
      res.status(404).send("Not Found");
    } else {
      res.json(target);
    }
  },
};

module.exports = {
  discussionsController,
};

// findById: (req, res) => {
//   // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
//   const agoraId = discussionsData.filter(
//     (agoraId) => agoraId.id === Number(req.params.id)
//   );
//   res.send(agoraId);
// },
