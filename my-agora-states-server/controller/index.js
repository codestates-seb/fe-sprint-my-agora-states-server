const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    console.log(req.params.id);
    const result = discussionsData.find(
      (item) => item.id === Number(req.params.id)
    );
    console.log(result);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send();
    }
  },
};

module.exports = {
  discussionsController,
};
