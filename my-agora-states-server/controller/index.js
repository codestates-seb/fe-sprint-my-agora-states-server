const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    console.log(typeof id);
    const filter = discussionsData.filter((el) => el.id === Number(id));

    filter.length > 0
      ? res.status(200).json(...filter)
      : res.status(404).send("404 err");
  },
};

module.exports = {
  discussionsController,
};
