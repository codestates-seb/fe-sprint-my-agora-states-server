const { agoraStatesDiscussions } = require("../repository/discussions");

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.json(agoraStatesDiscussions);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const result = agoraStatesDiscussions.filter(el => el.id === Number(id));

    if(result.length !== 0) res.json(result[0]);
    else res.status(404).send('empty');
  }
};

module.exports = {
  discussionsController,
};
