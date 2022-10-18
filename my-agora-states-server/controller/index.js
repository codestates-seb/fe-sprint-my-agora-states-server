const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  //[GET] /discussions
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData);
  },

  //[GET] /discussions/:id
  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const filterdById = discussionsData.find((dis) => {
      return dis.id === Number(id);
    });
    if (filterdById) res.status(200).json(filterdById);
    else res.status(404).send("Not Found");
  },
};

module.exports = {
  discussionsController,
};
