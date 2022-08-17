const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

console.log("controller");
const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    console.log("/discussions/findAll");
    res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    console.log("/discussions/findById");
    const { id } = req.params;
    const result = discussionsData.filter((ele) => {
      return ele.id === Number(id);
    });

    if (result.length === 0) {
      res.status(404).json(result);
    } else {
      res.json(result[0]);
    }
  },
};

module.exports = {
  discussionsController,
};
