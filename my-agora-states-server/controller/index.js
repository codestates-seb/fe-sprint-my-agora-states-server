const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(agoraStatesDiscussions);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let filteredData = [];

    filteredData = agoraStatesDiscussions.filter((ele) => {
      return ele.id === Number(id);
    });

    if (filteredData.length !== 0) {
      res.status(200).send(...filteredData);
    } else {
      res.status(404).send("x");
    }
  },
};

module.exports = {
  discussionsController,
};
