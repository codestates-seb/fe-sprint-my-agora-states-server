const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const p = req.params.id;
    let i = discussionsData.filter((item) => item.id === Number(p));

    if (i.length !== 0) {
      return res.status(200).json(i[0]);
    } else {
      return res.status(404).json(i);
    }
  },
};

module.exports = {
  discussionsController,
};
