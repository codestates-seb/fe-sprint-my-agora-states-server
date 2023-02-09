const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    if (discussionsData) {
      return res
        .status(200)
        .json(discussionsData)
        .send("모든 discussions 목록");
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    if (id) {
      const idFilter = discussionsData.filter((data) => {
        return data.id === Number(id);
      });
      if (idFilter.length !== 0)
        return res.status(200).json(idFilter[0]).send("id와 일치하는 목록");
      else return res.status(404).send("Not Found!");
    }
  },
};

module.exports = {
  discussionsController,
};
