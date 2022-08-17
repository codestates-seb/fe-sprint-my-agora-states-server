const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let filteredData = discussionsData.filter(
      (data) => Number(req.params.id) === data.id
    );
    return filteredData.length
      ? res.status(200).json(filteredData[0])
      : res.status(404).send("error");
  },
};

module.exports = {
  discussionsController,
};
