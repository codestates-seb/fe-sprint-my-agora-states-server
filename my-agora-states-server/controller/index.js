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
    let list = discussionsData;
    let Idx = discussionsData.findIndex((el) => el.id === Number(id));
    if (Idx === -1) {
      return res.status(404).send("not found");
    } else {
      list = list.filter((el) => el.id === Number(id));
      return res.status(200).json(...list);
    }
  },
};

module.exports = {
  discussionsController,
};
