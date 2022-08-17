const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { uuid } = req.params;
    let list = discussionsData.filter(el => Number(el.id) === Number(uuid));
    (list.length !== 0) ? res.status(200).send(...list) : res.status(404).json('not-found');
  }

};

module.exports = {
  discussionsController,
};
